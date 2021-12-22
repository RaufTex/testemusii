import { Home } from './src/screens/Home/index';
import { Movie } from './src/screens/Movie/index';
import Routes from './src/routes';
import {
  useFonts,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name='Home' component={Home} /> */}
      <Stack.Screen name='Movie' component={Movie} />
    </Stack.Navigator>
  );
}
export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style='light' />
      {/* <MyStack /> */}
      <Routes />
    </>
  );
}
