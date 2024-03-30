import { Text, TouchableOpacity, View } from "react-native";

interface TopBarProps {
  email: string;
}

const TopBar = ({ email }: TopBarProps) => {
  const handleSignOut = () => {};
  return (
    <View className="h-12 w-full flex-row items-center justify-between px-8 border-b border-gray-500">
      <View className="justify-center">
        <Text className="text-white text-lg font-bold">Chat APP</Text>
        <Text className="text-gray-300 text-xs">{email}</Text>
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
