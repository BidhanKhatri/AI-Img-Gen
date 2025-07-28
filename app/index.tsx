import { Colors } from "@/utils/colors";
import { Stack } from "expo-router";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";

const index = () => {
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
      </View>
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
    padding:10,
    alignItems: "flex-end",
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 20
  },
});

export default index;
