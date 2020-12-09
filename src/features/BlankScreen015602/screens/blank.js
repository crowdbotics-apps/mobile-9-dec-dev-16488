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
      <View style={styles.View_2}>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
      <View style={styles.View_12}>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_2: { flexDirection: "row" },
  View_3: {},
  Button_7: {},
  View_4: {},
  Button_11: {},
  View_12: { flexDirection: "row" },
  View_13: {},
  Button_17: {},
  View_14: {},
  Button_21: {}
})
