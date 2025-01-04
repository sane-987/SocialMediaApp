/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ContextProvider} from './context';

function AppWithProvider() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}

AppRegistry.registerComponent(appName, () => {
  return AppWithProvider;
});
