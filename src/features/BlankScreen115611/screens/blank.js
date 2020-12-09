import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <View style={styles.View_11}>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
      <View>
        <View>
          <Text>Sample text content</Text>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
          <View style={styles.View_108}>
            <View>
              <Text>Sample text content</Text>
            </View>
            <View>
              <Text>Sample text content</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>Sample text content</Text>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Button_3: {},
  Button_5: {},
  Button_7: {},
  View_11: { flexDirection: "row" },
  View_12: {},
  Button_16: {},
  View_13: {},
  Button_19: {},
  View_23: {},
  View_24: {},
  Text_80: {},
  Button_29: {},
  View_108: { flexDirection: "row" },
  View_109: {},
  Text_113: {},
  View_110: {},
  Text_122: {},
  View_25: {},
  Text_65: {},
  Button_32: {}
})
