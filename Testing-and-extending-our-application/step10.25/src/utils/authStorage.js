import AsyncStorage from '@react-native-async-storage/async-storage';


const TOKEN_KEY = 'authToken';


const AuthStorage = {
async setAccessToken(token) {
await AsyncStorage.setItem(TOKEN_KEY, token);
},
async getAccessToken() {
return AsyncStorage.getItem(TOKEN_KEY);
},
async removeAccessToken() {
await AsyncStorage.removeItem(TOKEN_KEY);
}
};


export default AuthStorage;