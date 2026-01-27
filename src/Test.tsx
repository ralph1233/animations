import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

const { width } = Dimensions.get('window');

const randomFloorNb = () => Math.floor(Math.random() * 255);

const getRandomRgbColor = () =>
  `rgb(${randomFloorNb()},${randomFloorNb()},${randomFloorNb()})`;

const bgColors = [
  getRandomRgbColor(),
  getRandomRgbColor(),
  getRandomRgbColor(),
  getRandomRgbColor(),
];

const ProgressBar = ({
  currentIndex,
  setCurrentIndex,
  isCurrentIndex,
}: {
  currentIndex: number;
  setCurrentIndex: (currentIndex: number) => void;
  isCurrentIndex: boolean;
}) => {
  const totalPadding = 20;
  const totalGap = 10 * (bgColors.length - 1);
  const barWidth = (width - (totalPadding + totalGap)) / bgColors.length;
  const blueBarWidth = useSharedValue(0);

  const blueBarStyle = useAnimatedStyle(() => {
    return {
      ...styles.bar,
      backgroundColor: 'blue',
      width: blueBarWidth.value,
      position: 'absolute',
    };
  });

  useEffect(() => {
    if (isCurrentIndex) {
      blueBarWidth.value = withTiming(
        barWidth,
        {
          easing: Easing.linear,
          duration: 2500,
        },
        finished => {
          if (finished) {
            if (currentIndex === bgColors.length - 1) {
              return;
            }
            scheduleOnRN(setCurrentIndex, currentIndex + 1);
          }
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <View
      style={[
        styles.bar,
        {
          width: barWidth,
        },
      ]}
    >
      <Animated.View style={blueBarStyle} />
    </View>
  );
};

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressBarContainer}>
        {bgColors.map((_, index) => (
          <ProgressBar
            key={index}
            isCurrentIndex={index === currentIndex}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        ))}
      </View>
      <View
        style={[
          styles.displayView,
          {
            backgroundColor: bgColors[currentIndex],
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  progressBarContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    gap: 10,
    marginTop: 5,
  },
  bar: {
    backgroundColor: 'red',
    height: 10,
    borderRadius: 30,
    overflow: 'hidden',
  },
  displayView: {
    flex: 1,
  },
});
