import Carousel, {Pagination} from 'react-native-snap-carousel'
import {Image, View, Text, Button} from 'native-base'
import { Post, PostNode } from '../Request/ResourcesResponse.interface'
import { ResizeMode, Video } from 'expo-av'
import {useState} from "react";
import SaveAssetsToAlbum from "./SaveAssetsToAlbum";

export default function CarouselMain(params: { post: Post; width: number }) {
  const nodes = params.post.nodes
  const width = params.width
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const postNodeItem = ({ item, index }: { item: PostNode; index: number }) => {
    const node = item
    if (node.isVideo) {
      return (
        <View>
          <Video
            source={{ uri: node.videoUrl as string }}
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            isMuted
            useNativeControls
            shouldPlay
            style={{
              width: width,
              height: 500
            }}
          />
        </View>
      )
    }
    return (
      <View>
        <Image
          source={{ uri: node.url }}
          resizeMode="contain"
          alt="image"
          width={width}
          height={500}
          backgroundColor={'rgba(0,0,0,0)'}
        />
      </View>
    )
  }
  return (
    <View>
      <Carousel
        data={nodes}
        renderItem={postNodeItem}
        sliderWidth={width}
        itemWidth={width}
        layoutCardOffset={20}
        onSnapToItem={(index) => {setActiveSlideIndex(index)}}
      />
      <Pagination dotsLength={nodes.length}
                  activeDotIndex={activeSlideIndex}
      />
      <SaveAssetsToAlbum nodes={nodes}></SaveAssetsToAlbum>
    </View>

  )
}
