import ScreenContainer from "../components/screen-container";
import {Button, Input, ScrollView, Text, useToast, VStack} from "native-base";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import {StyleSheet} from "react-native";
import {useDispatch} from "react-redux";
import {useState} from "react";
import store from "../store/store";
import {update} from "../store/serverSlice";

export default function ServerScreen() {
  const [value, setValue] = useState(store.getState().server)
  const bottomTabBarHeight = useBottomTabBarHeight()
  const styles = StyleSheet.create({
    scrollView: {
      paddingBottom: bottomTabBarHeight
    }
  })

  const dispatch = useDispatch()
  const toast  = useToast()
  const updateServer = () => {
    dispatch(update(value))
    toast.show({
      title: 'Updated Successfully',
      placement: 'top'
    })
  }
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={{
        paddingBottom: 80,
        paddingTop: 80
      }} padding={6} style={styles.scrollView}>
        <VStack space={4}>
          <Text>Server</Text>
          <Input value={value} onChangeText={(e) => setValue(e)}></Input>
          <Button onPress={updateServer}>Update</Button>
        </VStack>
      </ScrollView>
    </ScreenContainer>
  )
}