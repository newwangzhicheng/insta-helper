import logging


def get_print_logger():
    logging.basicConfig(
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        level=logging.DEBUG
    )
    return logging.getLogger(__name__)


print_logger = get_print_logger()
