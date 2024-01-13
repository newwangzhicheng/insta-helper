from instaloader import Post
import sys
sys.path.append('../actions')
from logger import print_logger as logger

class PostController:
    @staticmethod
    def get_action(action_type):
        if action_type == "shortcode":
            return PostController.get_post_by_shortcode

        assert Exception()
    @staticmethod
    def get_post_by_shortcode(insta, content):
        shortcode = content['shortcode']

        try:
            post = Post.from_shortcode(insta.context, shortcode)
            # get params from post
            total_nodes = post.mediacount

            if(total_nodes > 1):
                nodes = []
                nodes_iter = post.get_sidecar_nodes()
                for node in nodes_iter:
                    nodes.append({
                        'is_video': node.is_video,
                        'url': node.display_url,
                        'video_url': node.video_url
                    })
            else:
                nodes = [{
                    'is_video': post.is_video,
                    'url': post.url,
                    'video_url': post.video_url
                }]

            caption = post.caption
            author = post.profile

            return {
                'total_nodes': total_nodes,
                'caption': caption,
                'author': author,
                'nodes': nodes
            }
        except Exception as e:
            logger.error('load post from shotcode error: %s', e)
            raise e

