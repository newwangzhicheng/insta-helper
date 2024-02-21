import {Button, useToast} from "native-base";
import i18n from "../locale";
import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'
import {useState} from "react";
import {PostNode} from "../Request/ResourcesResponse.interface";

interface Props {
  nodes: PostNode[],
  [key: string]: any
}

export default function SaveAssetsToAlbum({nodes, ...props}: Props) {
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const onSave = async () => {
    try {
      setLoading(true)
      const {status} = await MediaLibrary.requestPermissionsAsync()
      if(status === 'granted') {
        for (const node of nodes) {
          const url = (node.isVideo ? node.videoUrl : node.url) as string
          const random = Math.floor(Math.random() * 10000).toString()
          const fileName =  random + (node.isVideo ? '.mp4' : '.jpg')
          const downloadResult = await FileSystem.downloadAsync(
            url,
            FileSystem.documentDirectory + fileName
          )
          if(downloadResult.status === 200) {
            await MediaLibrary.saveToLibraryAsync(downloadResult.uri)
          }
        }
      }
      toast.show({
        title: i18n.t('Saved Successfully'),
        placement: 'top'
      })
    } catch (e) {
      toast.show({
        title: i18n.t('Saved Failed'),
        placement: 'top'
      })
      console.log(e)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Button isLoading={loading} onPress={onSave} {...props}>{i18n.t('Save to Album')}</Button>
  )
}