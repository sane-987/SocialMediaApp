import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import useFirebaseAuth from './hooks/useFirebaseAuth';
import Login from './screens/auth/login';
import Home from './screens/browse/home';
import Search from './screens/browse/search';

const Stack = createStackNavigator();

function App() {
  const [loading, setLoading] = useState(true);

  const {user} = useFirebaseAuth();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500); // Simulate loading process
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
        {!user ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false, title: 'Home'}}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{headerShown: false, title: 'Home'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
