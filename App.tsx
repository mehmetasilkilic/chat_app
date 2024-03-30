import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import Layout from "./Layout";

import { UserProvider } from "./src/Context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <SafeAreaView className="flex bg-gray-800">
        <StatusBar style="light" />
        <Layout />
      </SafeAreaView>
    </UserProvider>
  );
}
