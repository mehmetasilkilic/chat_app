import { View } from "react-native";

import { useUserContext } from "./src/Context/UserContext";

import SignIn from "./src/Views/SignIn";
import ChatRoom from "./src/Views/ChatRoom";

const Layout = () => {
  const { user } = useUserContext();

  return <View>{user ? <ChatRoom /> : <SignIn />}</View>;
};

export default Layout;
