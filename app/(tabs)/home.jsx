import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data } = useAppwrite(getAllPosts);

  const onRefresh = async () => {
    setRefreshing(true);
    //TODO: Recall posts/videos if any new videos appear

    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View>
            <Text className="text-3xl text-white">{item.$id}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Miguel
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput placeholder="Search for a video topic" />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest videos
              </Text>
              <Trending posts={[{ $id: 1 }, { $id: 2 }, { $id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found!"
            subtitle="Be the first one to upload a video..."
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
