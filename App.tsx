import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";

import SignIn from "./src/Views/SignIn";
import ChatRoom from "./src/Views/ChatRoom";

export default function App() {
  const user = true;

  return (
    <SafeAreaView className="flex bg-gray-800">
      <StatusBar style="light" />
      <View>{user ? <ChatRoom /> : <SignIn />}</View>
    </SafeAreaView>
  );
}
