class ResponseModel:
    @staticmethod
    def get_response_model(is_success, error, error_code, type, result):
        return {
            'is_success': is_success,
            'error': error,
            'error_code': error_code,
            'type': type,
            'content': result
        }
