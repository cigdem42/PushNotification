import React, {useEffect} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
const App = () => {
  useEffect(() => {
    const initiliazeNotification = async () => {
      if (Platform.OS === 'ios') {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          const fcmToken = await messaging().getToken();
          console.log('FCM Token:', fcmToken);
        }
      } else {
        const fcmToken = await messaging().getToken();
        console.log('FCM Token:', fcmToken);
      }
    };
    initiliazeNotification();
  }, []);

  return (
    <View style={styles.conatiner}>
      <Text>Push Notifications</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
