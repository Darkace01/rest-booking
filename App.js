import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/navigations/navigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <StatusBar style='auto' />
      <AppNavigation />
    </Provider>
  );
}
