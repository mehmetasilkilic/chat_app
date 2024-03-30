import { useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";

const SignIn = () => {
  const [text, onChangeText] = useState<string>("");

  const handleSignIn = () => {};

  return (
    <View className="px-8 justify-evenly h-full w-full bg-gray-800">
      <View className="items-center">
        <Text className="text-3xl font-bold text-gray-200">Chat APP</Text>
      </View>
      <View>
        <TextInput
          autoCapitalize="none"
          placeholder="Please type your e-mail..."
          placeholderTextColor="gray"
          className="border border-gray-300 bg-gray-700 text-white text-lg leading-5 px-3 h-12 rounded-3xl focus:outline-none focus:border-green-700"
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity
          className="sign-in bg-green-700 mt-8 px-4 h-12 rounded-3xl cursor-pointer items-center justify-center"
          onPress={handleSignIn}
        >
          <Text className="text-2xl font-bold text-white">Sign In</Text>
        </TouchableOpacity>
      </View>
      <View className="items-center">
        <Text className="text-green-800">
          Chat App Inc. | All Rights Reserved
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
