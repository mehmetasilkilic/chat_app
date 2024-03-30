import { useState } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

import SendIcon from "../../../assets/sendIcon.png";

const SendMessage = () => {
  const [formValue, setFormValue] = useState("");

  const sendMessage = () => {
    if (formValue.trim() === "") return;

    setFormValue("");
  };
  return (
    <View className="flex-row items-center justify-between w-full px-8 py-2 border-t border-gray-500">
      <TextInput
        value={formValue}
        onChangeText={(text) => setFormValue(text)}
        placeholder="Say something..."
        placeholderTextColor="gray"
        className="w-5/6 border border-gray-300 bg-gray-700 text-white text-lg leading-5 px-3 h-12 rounded-3xl focus:outline-none focus:border-green-700"
      />
      <TouchableOpacity
        onPress={sendMessage}
        disabled={!formValue.trim()}
        className={`w-1/6 ${
          formValue.trim() ? "" : "opacity-60"
        } bg-green-700 rounded-3xl h-12 w-12 items-center justify-center`}
      >
        <Image className="h-8 w-8" source={SendIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SendMessage;
