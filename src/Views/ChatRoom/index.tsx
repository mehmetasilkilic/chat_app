import { useEffect, useRef, useState } from "react";
import { View, FlatList } from "react-native";
import { ref, onValue } from "firebase/database";

import { db } from "../../../firebaseConfig";

import TopBar from "../../Components/TopBar";

import ChatMessage from "./Components/ChatMessage";
import SendMessage from "./Components/SendMessage";

type MessageType = {
  email: string;
  message: string;
  createdAt: Date;
};

const ChatRoom = () => {
  const flatListRef = useRef<FlatList | null>(null);

  const [messages, setMessages] = useState<MessageType[]>([]);

  const goToTheEnd = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  useEffect(() => {
    const query = ref(db, "messages");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      const newMessages: MessageType[] = [];
      if (snapshot.exists()) {
        Object.values(data as MessageType[]).map((newMessage) => {
          newMessages.push(newMessage);
        });
      }

      setMessages(newMessages);
      setTimeout(() => {
        goToTheEnd();
      }, 50);
    });
  }, []);

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
