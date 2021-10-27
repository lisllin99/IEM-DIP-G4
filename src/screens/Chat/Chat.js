import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StreamChat } from 'stream-chat';
import { Channel, Chat, MessageInput, MessageList, OverlayProvider as ChatOverlayProvider } from 'stream-chat-react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibXVkZHktcmFpbi0wIn0.v823ZhHOpn4h2ek6gDhmchvEY5y91G-AN5Cb4zdrPfE';

const user = { id: 'muddy-rain-0' };

const chatClient = StreamChat.getInstance('cnaxjddymxg2');
const connectUserPromise = chatClient.connectUser(user, userToken);

const channel = chatClient.channel('messaging', 'channel_id');

const ChannelScreen = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <ChatOverlayProvider bottomInset={bottom} topInset={0}>
      <SafeAreaView>
        <Chat client={chatClient}>
          {/* Setting keyboardVerticalOffset as 0, since we don't have any header yet */}
          <Channel channel={channel} keyboardVerticalOffset={0}>
            <View style={StyleSheet.absoluteFill}>
              <MessageList />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    </ChatOverlayProvider>
  );
};

export default function App() {
  const [ready, setReady] = useState();

  useEffect(() => {
    const initChat = async () => {
      await connectUserPromise;
      await channel.watch();
      setReady(true);
    };

    initChat();
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ChannelScreen channel={channel} />
    </SafeAreaProvider>
  );
}

