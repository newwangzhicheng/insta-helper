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
        {i18n.t('Resolve')}
      </Button>
      {!loading && result && result.isSuccess && (
        <CarouselMain post={result.content} width={width} />
      )}
      {loading && <Text textAlign="center">{i18n.t('Loading')}...</Text>}
    </VStack>
  )
}
