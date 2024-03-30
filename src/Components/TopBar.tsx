import { Text, TouchableOpacity, View, Alert } from "react-native";

import { useUserContext } from "../Context/UserContext";

const TopBar = () => {
  const { user, updateUser } = useUserContext();

  const handleSignOut = () => {
    Alert.alert(
      "Confirm Sign Out",
      "Are you sure you want to sign out?",
      [{ text: "Cancel" }, { text: "Sign Out", onPress: confirmSignOut }],
      { cancelable: false }
    );
  };

  const confirmSignOut = () => {
    updateUser("");
  };

  return (
    <View className="h-12 w-full flex-row items-center justify-between px-8 border-b border-gray-500">
      <View className="justify-center">
        <Text className="text-white text-lg font-bold">Chat APP</Text>
        <Text className="text-gray-300 text-xs">{user}</Text>
      </View>

      <TouchableOpacity
        className="bg-green-700 p-2 rounded-2xl"
        onPress={handleSignOut}
      >
        <Text className="text-white">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
