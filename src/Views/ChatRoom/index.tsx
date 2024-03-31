import { useEffect, useRef, useState } from "react";
import { View, FlatList, Alert } from "react-native";
import {
  ref,
  onValue,
  query,
  orderByChild,
  limitToLast,
} from "firebase/database";

import { db } from "../../../firebaseConfig";

import TopBar from "../../Components/TopBar";

import ChatMessage from "./Components/ChatMessage";
import SendMessage from "./Components/SendMessage";

import { MessageType } from "../../Models/MessageType";

const ChatRoom = () => {
  const flatListRef = useRef<FlatList | null>(null);
  const isFirstRender = useRef(true);

  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    try {
      const dataRef = ref(db, "messages");
      const queryD = query(dataRef, orderByChild("createdAt"), limitToLast(1));
      return onValue(queryD, (snapshot) => {
        if (snapshot) {
          const data = Object.values(snapshot.val() as MessageType[])[0];
          if (!isFirstRender.current) {
            setMessages((prevMessages) => [...prevMessages, data]);
          } else {
            isFirstRender.current = false;
          }
        }
      });
    } catch {
      Alert.alert(
        "There was an error while fetching the data",
        "Please reopen the app"
      );
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      goToTheEnd();
    }, 50);
  }, []);

  const goToTheEnd = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <View className="flex h-full">
      <TopBar />
      <FlatList
        ref={flatListRef}
        className="flex-1"
        data={messages}
        renderItem={({ item }) => <ChatMessage data={item} />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-end",
        }}
      />
      <SendMessage />
    </View>
  );
};

export default ChatRoom;
