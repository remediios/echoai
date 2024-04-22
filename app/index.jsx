import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  const { isLoading, isLogged } = useGlobalContext();

  if (!isLoading && isLogged) {
    return <Redirect href="/home" />;
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}
      >
        <View className="w-full flex justify-center items-center h-[90vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[54px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
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
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light " />
    </SafeAreaView>
  );
}
