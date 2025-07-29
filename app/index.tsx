import { Colors } from "@/utils/colors";
import Icon from "@expo/vector-icons/FontAwesome5";
import { Stack } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Dropdown } from "react-native-element-dropdown";
// import testImage from "@/assets/images/test.jpg";

const width = Dimensions.get("window").width;

const index = () => {
  const [model, setModel] = useState<string>("");
  const [aspectRatio, setAspectRatio] = useState<string>("");
  const [loading, isLoading] = useState<boolean>(false);

  const modelData = [
    { label: "Item 1", value: "item 1" },
    { label: "Item 2", value: "item 2" },
    { label: "Item 3", value: "item 3" },
    { label: "Item 4", value: "item 4" },
  ];

  const aspectRatioData = [
    { label: "1/1", value: "1/1" },
    { label: "9/16", value: "9/16" },
    { label: "16/9", value: "16/9" },
  ];

  return (
    <>
      <Stack.Screen
        name="Home"
        options={{
          title: "AI Image Generator",
          headerStyle: { backgroundColor: Colors.background },

          headerTintColor: Colors.text,
        }}
      />

      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter a prompt here..."
            placeholderTextColor={Colors.placeholder}
            multiline={true}
            numberOfLines={3}
          />
          <TouchableOpacity style={styles.ideaBtn} activeOpacity={0.7}>
            <Icon name="dice" size={28} color={Colors.black} />
          </TouchableOpacity>
        </View>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={modelData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select Model"
          value={model}
          onChange={(item) => {
            setModel(item.value);
          }}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={aspectRatioData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select Aspect Ratio"
          value={aspectRatio}
          onChange={(item) => {
            setAspectRatio(item.value);
          }}
        />

        <TouchableOpacity style={styles.genButton}>
          <Text style={styles.genBtnText}> Generate </Text>
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/ai-img.jpg")}
            style={styles.image}
          />
        </View>
      </View>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  inputStyle: {
    borderStyle: "solid",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.accent,
    backgroundColor: Colors.dark,
    padding: 20,
    height: 160,
    borderRadius: 20,
    color: Colors.placeholder,
  },
  ideaBtn: {
    backgroundColor: Colors.accent,
    padding: 10,
    alignItems: "flex-end",
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  dropdown: {
    backgroundColor: Colors.dark,
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
    borderStyle: "solid",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.accent,
  },
  placeholderStyle: {
    color: Colors.placeholder,
  },
  selectedTextStyle: {
    color: Colors.text,
    textAlign: "left",
  },
  genButton: {
    backgroundColor: Colors.accent,
    marginTop: 20,
    padding: 16,
    borderRadius: 10,
  },
  genBtnText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    width: width - 40,
    height: 300,
    backgroundColor: Colors.dark,
    marginTop: 20,
    borderStyle: "solid",
    borderColor: Colors.accent,
    borderWidth: StyleSheet.hairlineWidth,
  },
  image: {
    flex: 1,
    width: "100%",
    objectFit: "contain",
  },
});

export default index;
