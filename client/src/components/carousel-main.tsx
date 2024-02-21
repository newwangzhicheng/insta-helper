import Carousel, {Pagination} from 'react-native-snap-carousel'
import {Flex, Image, View} from 'native-base'
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
    const height = 480
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
              height: height
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
          height={height}
          backgroundColor={'rgba(0,0,0,0)'}
        />
      </View>
    )
  }
  return (
    <View>
      <View shadow={9}>
        <View borderRadius='10' overflow='hidden'>
          <Carousel
            data={nodes}
            renderItem={postNodeItem}
            sliderWidth={width}
            itemWidth={width}
            layoutCardOffset={20}
            onSnapToItem={(index) => {setActiveSlideIndex(index)}}
          />
        </View>
      </View>
      <Pagination dotsLength={nodes.length}
                  activeDotIndex={activeSlideIndex}
      />
      <SaveAssetsToAlbum nodes={nodes} marginTop={6}></SaveAssetsToAlbum>
    </View>

  )
}
