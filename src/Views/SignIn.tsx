import { useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";

import { useUserContext } from "../Context/UserContext";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const { updateUser } = useUserContext();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = () => {
    if (isValidEmail(email)) {
      updateUser(email);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <View className="px-8 justify-evenly h-full w-full bg-gray-800">
      <View className="items-center">
        <Text className="text-3xl font-bold text-gray-200">Chat APP</Text>
      </View>
      <View>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Please type your e-mail..."
          placeholderTextColor="gray"
          className="border border-gray-300 bg-gray-700 text-white text-lg leading-5 px-3 h-12 rounded-3xl focus:outline-none focus:border-green-700"
          onChangeText={setEmail}
          value={email}
        />
        {isError ? (
          <Text className="absolute bottom-14 text-red-400 px-3 pt-2">
            You have to type valid email
          </Text>
        ) : (
          <></>
        )}
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
