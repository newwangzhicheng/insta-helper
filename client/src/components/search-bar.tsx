import { VStack, Input, Button, Text, HStack } from 'native-base'
import i18n from '../locale'
import * as Clipboard from 'expo-clipboard'
import React, { useState } from 'react'
import UrlResolver from '../utils/UrlResolver'
import { Alert, LayoutChangeEvent } from 'react-native'
import HttpRequest from '../Request/HttpRequest'
import ResourcesResponse from '../Request/ResourcesResponse.interface'
import CarouselMain from './carousel-main'

export default function SearchBar(props: any) {
  const [inputValue, changeInputText] = useState('')
  const [result, setResult] = useState<ResourcesResponse>()
  const [width, setWidth] = useState(0)
  const [loading, setLoading] = useState(false)
  const onLayout = (e: LayoutChangeEvent) => {
    setWidth(e.nativeEvent.layout.width)
  }
  const copyToClipboard = async () => {
    const value = await Clipboard.getStringAsync()
    changeInputText(value)
  }
  const download = async () => {
    try {
      setLoading(true)
      const urlResolver = new UrlResolver(inputValue)
      const result = await HttpRequest.getResourcesByShortcode({
        type: urlResolver.getType(),
        shortcode: urlResolver.getShortcodeOrProfile()
      })
      setResult(result)
      // setResult({
      //   isSuccess: true,
      //   error: '',
      //   errorCode: 200,
      //   type: 'p',
      //   content: {
      //     totalNodes: 1,
      //     author: 'dfsg',
      //     caption: 'dgsdf',
      //     nodes: [
      //       {
      //         isVideo: false,
      //         url: 'https://scontent-nrt1-2.cdninstagram.com/v/t51.2885-15/419303055_3686805141551466_2283925907381620134_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent-nrt1-2.cdninstagram.com&_nc_cat=106&_nc_ohc=olM3m8KGv2QAX_TO0y5&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=MzI3ODkwNzI5OTQyMjc1NDg4OQ%3D%3D.2-ccb7-5&oh=00_AfARpRS6iDMzK0oTcZRC1RLqstGcuvkgn6sBvkuAWWH3zw&oe=65AA384F&_nc_sid=469e9a',
      //         videoUrl: null
      //       }
      //     ]
      //   }
      // })
      setLoading(false)
      changeInputText('')
    } catch (error) {
      setLoading(false)
      Alert.alert(i18n.t('Invalid url'), '', [{ text: i18n.t('OK') }])
      console.log(error)
    }
  }
  return (
    <VStack
      w="100%"
      space={4}
      alignSelf="center"
      {...props}
      onLayout={onLayout}
    >
      <Text>{i18n.t('SearchTip')}</Text>
      <HStack justifyContent="space-between" space={2}>
        <Input
          w="80%"
          placeholder=""
          value={inputValue}
          onChangeText={changeInputText}
        />
        <Button onPress={copyToClipboard}>{i18n.t('Paste')}</Button>
      </HStack>
      <Button onPress={download} isLoading={loading}>
        {i18n.t('Download')}
      </Button>
      {!loading && result && result.isSuccess && (
        <CarouselMain post={result.content} width={width} />
      )}
      {loading && <Text>loading...</Text>}
    </VStack>
  )
}
