/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  SectionList
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Type here!"
          onChangeText={text =>
            this.setState({ text }, () => {
              console.log(this.state.text);
            })
          }
        />
        <Button
          onPress={() => {
            Alert.alert("value is");
          }}
          // width="100"
          style={{ color: "red", marginTop: 10, padding: 10 }}
          title="Sign In"
          // color="red"
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5FCFF"
          }}
        >
          <SectionList
            sections={[
              { title: "D", data: ["Devin"] },
              {
                title: "J",
                data: [
                  "Jackson",
                  "James",
                  "Jillian",
                  "Jimmy",
                  "Joel",
                  "John",
                  "Julie"
                ]
              }
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 22
  },
  signin: {
    margin: 20,
    padding: 20,
    color: "red"
  },
  inputStyle: {
    height: 40,
    width: 100,
    alignItems: "center",
    marginHorizontal: 0
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "red"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
