import json
import sys
sys.path.append('../actions')
from logger import print_logger as logger
from exception import JSONDecodeException


class Authentication:
    def __init__(self, insta):
        self.insta = insta

    def get_action(action_type):
        if action_type == "login":
            return Authentication.login

        assert Exception()


    @staticmethod
    def login(insta, content):
        username = content['username']
        password = content['password']
        try:
            insta.login(username, password)
            session_str = {
                'session': json.dumps(insta.save_session())
            }
            return session_str
        except Exception as e:
            # InvalidArgumentException,
            # BadCredentialsException,
            # ConnectionException,
            # TwoFactorAuthRequiredException
            logger.info(f'login error, {e}')
            raise e


    def load_session(self, username, session_str):
        try:
            session = self.insta.context.save_session()
            session_dict = {}
            for s in session_str.split(';'):
                [name, value] = s.split('=')
                session_dict[name] = value
            session.update(session_dict)
            self.insta.load_session(username, session)
        except:
            logger.info(f'load session error, {JSONDecodeException.get_message()}')
            raise JSONDecodeException

