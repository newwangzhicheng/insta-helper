# 0  success

class ExceptionWithCode(Exception):
    code = None
    message = None

    def __init__(self, code, message):
        self.code = code
        self.message = message

    @classmethod
    def get_code(self):
        return self.code

    @classmethod
    def get_message(self):
        return self.message


class JSONEncodeException(ExceptionWithCode):
    def __init__(self):
        super().__init__(11, 'json encode exception')


class JSONDecodeException(ExceptionWithCode):
    def __init__(self):
        super().__init__(12, 'json decode exception')


class ResolveException(ExceptionWithCode):
    def __init__(self):
        super().__init__(21, 'resolve exception')


class InvalidArgumentException(ExceptionWithCode):
    def __init__(self):
        super().__init__(31, 'username does not exist')


class BadCredentialsException(ExceptionWithCode):
    def __init__(self):
        super().__init__(32, 'password is wrong')


class ConnectionException(ExceptionWithCode):
    def __init__(self):
        super().__init__(33, 'cannot connect to instagram')


class TwoFactorAuthRequiredException(ExceptionWithCode):
    def __init__(self):
        super().__init__(34, '2FA login required')

class ReLoginRequiredException(ExceptionWithCode):
    def __init__(self):
        super().__init__(35, 're-login required')


class FileNotFoundException(ExceptionWithCode):
    def __init__(self):
        super().__init__(34, 'file not found')
