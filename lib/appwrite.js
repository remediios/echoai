import { Account, Client } from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.remedios.echoai',
  projectId: '66252331c79b00259312',
  databaseId: '66252483a6f86b2d6546',
  userCollectionId: '6625249693afc4a83c1a',
  videoCollectionId: '662524ad2f2d84c361ef',
  storageId: '6625259c633d222d5061',
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
