import json
import os
import socket

from dotenv import load_dotenv
from logger import print_logger as logger
from resolver import Resolver

def main():
    load_dotenv('../.env')

    logger.info('Creating server...')
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((os.getenv('IP'), int(os.getenv('PORT'))))
    server.listen(5)
    logger.info('Server created at %s:%s' % (os.getenv('IP'), os.getenv('PORT')))

    while True:
        client, addr = server.accept()

        data = client.recv(1024)
        logger.info('Accepted request from %s:%s' % (addr[0], addr[1]))

        resolver = Resolver(data)
        resolver.resolve()
        client.send(resolver.response_to_bytes())


if __name__ == '__main__':
    main()