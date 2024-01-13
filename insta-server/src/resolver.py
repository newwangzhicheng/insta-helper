import json

import humps
import instaloader

from exception import JSONDecodeException, ResolveException, JSONEncodeException, ReLoginRequiredException
from instaloader import ConnectionException
from actions.post import PostController
from model.request import RequestModel
from logger import print_logger as logger
from actions.authentication import Authentication
from model.response import ResponseModel


class Resolver(object):
    def __init__(self, data):
        self.is_success = None
        self.error_code = 0
        self.result = None
        try:
            self.data = json.loads(data)
            self.insta = instaloader.Instaloader(
                # iphone_support=False,
                max_connection_attempts=1)
            self.authentication = Authentication(self.insta)
        except:
            logger.error('json decode error')
            self.error_code = JSONDecodeException.get_code()
            self.error = JSONDecodeException.get_message()

    def resolve(self):
        try:
            # authenticate
            self.__authenticate()

            # get resolver
            resolver = self.__get_resolver()
            content = RequestModel.get_content(self.data)
            self.result = resolver(self.insta, content)

            self.is_success = True
            self.error = ''
        except ConnectionException:
            logger.error(f'connection error, {ConnectionException}, re-login required')
            self.__set_error(ReLoginRequiredException)
        except:
            logger.error('resolve error')
            self.__set_error(ResolveException)
            self.is_success = False

    def response_to_bytes(self):
        response_model = ResponseModel.get_response_model(is_success=self.is_success,
                                                          error=self.error,
                                                          error_code=self.error_code,
                                                          type=RequestModel.get_resource_type(self.data),
                                                          result=self.result)
        try:
            return json.dumps(humps.camelize(response_model)).encode()
        except:
            logger.error('json encode error')
            self.__set_error(JSONEncodeException)

    def __authenticate(self):
        self.is_use_login = RequestModel.is_use_login(self.data)
        # if not self.is_use_login:
        #     try:
        #         self.authentication.password_login(RequestModel.get_username(self.data),
        #                                            RequestModel.get_password(self.data))
        #     except Exception as e:
        #         logger(f'login error, {e}')
        # else:
        if not self.is_use_login:
            try:
                self.authentication.load_session(RequestModel.get_username(self.data),
                                                 RequestModel.get_session(self.data))
            except:
                logger.error('json decode error')
                self.__set_error(JSONDecodeException)

    def __get_resolver(self):
        resource_type = RequestModel.get_resource_type(self.data)
        action_type = RequestModel.get_action_type(self.data)

        if resource_type == 'post':
            return PostController.get_action(action_type)
        if resource_type == 'password':
            return Authentication.get_action(action_type)

        assert Exception()

    def __set_error(self, E):
        self.error_code = E.get_code()
        self.error = E.get_message()
