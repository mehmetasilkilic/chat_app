import { Text, View } from "react-native";

import { useUserContext } from "../../../Context/UserContext";

interface ChatMessageProps {
  message: string;
  email: string;
  createdAt: string;
}

const ChatMessage = ({ data }: { data: ChatMessageProps }) => {
  const { user } = useUserContext();

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);

    const formattedDate = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()} ${date.getHours()}:${
      (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
    }`;
    return formattedDate;
  };

  //   const messageType = email === user.email ? "sent" : "received";
  const messageType = data.email === user ? "sent" : "received";

  return (
    <View
      className={`${messageType === "sent" ? "flex-row-reverse" : "flex-row"}`}
    >
      <View
        className={`px-4 py-2 mb-4 rounded-3xl ${
          messageType === "sent" ? "bg-green-300" : "bg-gray-300"
        }`}
      >
        {messageType === "received" ? (
          <Text className="text-gray-500 text-sm">{data.email}</Text>
        ) : (
          <></>
        )}
        <View className="items-end justify-between">
          <Text
            className={`${
              messageType === "received" ? "self-start" : ""
            } text-gray-900 text-lg`}
          >
            {data.message}
          </Text>
          <Text className="text-gray-500 text-xs">
            {formatDate(data.createdAt)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatMessage;
