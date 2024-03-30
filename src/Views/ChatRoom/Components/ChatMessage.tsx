import { Text, View } from "react-native";

interface ChatMessageProps {
  message: string;
  email: string;
}

const ChatMessage = ({ message, email }: ChatMessageProps) => {
  //   const messageType = email === user.email ? "sent" : "received";
  const messageType = email ? "sent" : "received";

  return (
    <View
      className={`${messageType === "sent" ? "flex-row-reverse" : "flex-row"}`}
    >
      <View
        className={`bg-${
          messageType === "sent" ? "green-300" : "gray-300"
        } px-4 py-2 mb-4 rounded-3xl`}
      >
        {messageType === "received" ? (
          <Text className="text-gray-500 text-sm">{email}</Text>
        ) : (
          <></>
        )}
        <View className="items-end justify-between">
          <Text
            className={`${
              messageType === "received" ? "self-start" : ""
            } text-gray-800 text-lg`}
          >
            {message}
          </Text>
          <Text className="text-gray-500 text-xs">12:30</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatMessage;
