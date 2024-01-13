import { VStack, Input, Button, Text, HStack } from 'native-base'
import i18n from '../locale'
import * as Clipboard from 'expo-clipboard'
import React, {useState} from "react";

export default function SearchBar(props: any) {
  const [inputValue, changeInputText] = useState('')
  const copyToClipboard = async () => {
    const value = await Clipboard.getStringAsync()
    changeInputText(value)
  }
  const download = async () => {

  }
  return (
    <VStack w="100%" space={4} alignSelf="center" {...props}>
      <Text>{i18n.t('SearchTip')}</Text>
      <HStack justifyContent="space-between" space={2}>
        <Input w="80%" placeholder="" value={inputValue} onChangeText={changeInputText}/>
        <Button onPress={copyToClipboard}>{i18n.t('Paste')}</Button>
      </HStack>
      <Button onPress={download}>{i18n.t('Download')}</Button>
    </VStack>
  )
}
