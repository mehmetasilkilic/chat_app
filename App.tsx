import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

import Layout from "./Layout";

import { UserProvider } from "./src/Context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <SafeAreaView
        style={styles.AndroidSafeArea}
        className="flex-1 bg-gray-800"
      >
        <ExpoStatusBar style="light" />
        <Layout />
      </SafeAreaView>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
  },
});
