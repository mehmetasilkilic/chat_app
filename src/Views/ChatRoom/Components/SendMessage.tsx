import { useState } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
} from "react-native";
import { ref, child, push, update } from "firebase/database";

import { useUserContext } from "../../../Context/UserContext";

import { db } from "../../../../firebaseConfig";

import SendIcon from "../../../../assets/sendIcon.png";

import { MessageType } from "../../../Models/MessageType";

const SendMessage = () => {
  const [formValue, setFormValue] = useState("");

  const { user } = useUserContext();

  const sendMessage = async () => {
    if (formValue.trim() === "") return;

    try {
      const params = {
        email: user,
        message: formValue,
        createdAt: new Date(),
      };

      const newPostKey = push(child(ref(db), "messages")).key;
      const updates: { [key: string]: Partial<MessageType> } = {};
      updates["/messages/" + newPostKey] = params;
      setFormValue("");

      return update(ref(db), updates);
    } catch {
      Alert.alert("There was an error while sending the message");
    }
  };
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={60}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-row items-center justify-between w-full px-8 py-2 border-t border-gray-500"
    >
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
    </KeyboardAvoidingView>
  );
};

export default SendMessage;
