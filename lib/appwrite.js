import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

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
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) {
      throw new Error();
    }
    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        username: username,
        email: email,
        avatar: avatarUrl,
        accountId: newAccount.$id,
      }
    );

    return newUser;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    if (!session) {
      throw new Error();
    }
    return session;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
