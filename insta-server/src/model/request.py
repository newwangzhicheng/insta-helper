class RequestModel:
    @staticmethod
    def is_use_login(data):
        return data['login']['isUseLogin']

    @staticmethod
    def get_username(data):
        return data['login']['username']

    @staticmethod
    def get_password(data):
        return data['login']['password']

    @staticmethod
    def get_session(data):
        return data['login']['session']

    @staticmethod
    def get_resource_type(data):
        return data['type']['resource']

    @staticmethod
    def get_action_type(data):
        return data['type']['action']

    @staticmethod
    def get_content(data):
        return data['content']

    @staticmethod
    def get_shortcode(data):
        return data['content']['shortcode']