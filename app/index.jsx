import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className=" w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover a new world with{' '}
              <Text className="text-secondary-200">EchoAI</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[126px] h-[15px] absolute -bottom-4 right-12 "
              resizeMode="contain"
              style={{
                tintColor: '#a33333',
              }}
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-9 text-center">
            Where creativty meets innovation: embark on a journey of limitless
            exploration with EchoAI
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
