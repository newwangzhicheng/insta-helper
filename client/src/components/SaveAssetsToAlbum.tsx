import {Button} from "native-base";
import i18n from "../locale";
import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'
import {useState} from "react";
import {nanoid} from "nanoid";
import {PostNode} from "../Request/ResourcesResponse.interface";


export default function SaveAssetsToAlbum({nodes}: {nodes: PostNode[]}) {
  const [loading, setLoading] = useState(false)
  const onSave = async () => {
    try {
      setLoading(true)
      const {status} = await MediaLibrary.requestPermissionsAsync()
      if(status === 'granted') {
        console.log(nodes)
        for (const node of nodes) {
          const fileName = nanoid() + node.isVideo ? '.mp4' : '.jpg'
          const uri = (node.isVideo ? node.videoUrl : node.url) as string
          const localUri = await FileSystem.downloadAsync(uri, FileSystem.documentDirectory + fileName)
          const asset = await MediaLibrary.createAssetAsync(localUri.uri)
          await MediaLibrary.addAssetsToAlbumAsync([asset], 'insta')
        }
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(true)
    }
  }
  return (
    <Button isLoading={loading} onPress={onSave}>{i18n.t('Save to Album')}</Button>
  )
}