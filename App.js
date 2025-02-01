import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/browse/home';
import Search from './screens/browse/search';
import UserProfile from './screens/browse/userProfile';
import Login from './screens/auth/login';
import BottomNavBar from './components/ui/navBar';
import useAppContext from './context';
import AskQuestionScreen from './screens/community/askQuestion';

const Stack = createStackNavigator();

function MainLayout({navigation}) {
  const {user} = useAppContext();

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!user ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="Profile" component={UserProfile} />
              <Stack.Screen name="AskQuestion" component={AskQuestionScreen} />
            </>
          )}
        </Stack.Navigator>
      </View>

      {/* Persistent Bottom Navbar */}
      {user ? <BottomNavBar navigation={navigation} /> : null}
    </View>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const {user} = useAppContext();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500); // Simulate loading process
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <MainLayout />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginBottom: 60, // Reserve space for the bottom navbar
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
