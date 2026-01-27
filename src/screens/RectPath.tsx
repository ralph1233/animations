import React from 'react';
import { useEffect } from 'react';
import {
  SafeAreaView,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Canvas, Path } from '@shopify/react-native-skia';
import { withTiming, useSharedValue, Easing } from 'react-native-reanimated';

const svgWidth = 196;
const svgHeight = 191;
const path =
  'm 16,2 h 168 c 7.756,0 14,6.244 14,14 v 163 c 0,7.756 -6.244,14 -14,14 H 16 C 8.244,193 2,186.756 2,179 V 16 C 2,8.244 8.244,2 16,2 Z';

const RectPath = () => {
  const { width, height } = useWindowDimensions();
  const end = useSharedValue(0);

  useEffect(() => {
    end.value = withTiming(1, {
      duration: 30000,
      easing: Easing.linear,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => {
        if (!insets) {
          return null;
        }

        const { top, bottom } = insets;
        const safeAreaHeight = height - (top + bottom);

        return (
          <SafeAreaView style={styles.container}>
            <Canvas style={styles.canvas}>
              <Path
                path={path}
                color="red"
                transform={[
                  {
                    translateX: width / 2 - svgWidth / 2,
                  },
                  {
                    translateY: safeAreaHeight / 2 - svgHeight / 2,
                  },
                ]}
                style="stroke"
                strokeWidth={4}
              />
              <Path
                path={path}
                color="blue"
                transform={[
                  {
                    translateX: width / 2 - svgWidth / 2,
                  },
                  {
                    translateY: safeAreaHeight / 2 - svgHeight / 2,
                  },
                ]}
                start={0}
                end={end}
                style="stroke"
                strokeWidth={4}
              />
            </Canvas>
          </SafeAreaView>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default RectPath;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    flex: 1,
  },
});
