/* eslint-disable @typescript-eslint/no-unused-vars */
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RectPath from './animations/RectPath';
import PathInterpolation from './animations/PathInterpolation';
import WhatsappStories from './animations/WhatsappStories';

const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        {/* <RectPath /> */}
        {/* <PathInterpolation /> */}
        <WhatsappStories />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
