import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './app/screens/Dashboard';
import HistoryData from './app/screens/HistoryData';
import {colorCode} from './app/style/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Provider} from 'react-redux';
import {Store, persistor} from './app/store';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import styles from './app/style/style';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colorCode.danger}
          />
          <Stack.Navigator mode="card">
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={({navigation}) => ({
                title: 'Dashboard',
                headerStyle: styles.headerStyle,
                headerTintColor: colorCode.white,
                headerBackTitle: null,
                headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('HistoryData')}>
                    <Icon
                      name="arrow-forward"
                      size={24}
                      color={colorCode.white}
                    />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="HistoryData"
              component={HistoryData}
              options={{
                title: 'Expense History',
                headerStyle: styles.headerStyle,
                headerTintColor: colorCode.white,
                headerBackTitle: null,
                headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
      <FlashMessage position="bottom" floating />
    </Provider>
  );
}

export default App;
