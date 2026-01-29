import React, { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  StyleSheet,
  Dimensions,
  type NativeSyntheticEvent,
  type NativeScrollEvent,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  type SharedValue,
} from 'react-native-reanimated';

const colors: string[] = ['red', 'blue'];
const { width } = Dimensions.get('window');

const AnimatedView = ({
  color,
  index,
  indexToInterpolate,
  currentViewIndex,
}: {
  color: string;
  index: number;
  indexToInterpolate: SharedValue<number>;
  currentViewIndex: number;
}) => {
  const transformStyle = useAnimatedStyle(() => {
    const rotateInterpolation = interpolate(
      indexToInterpolate.value,
      [index - 1, index, index + 1],
      [90, 0, -90],
    );

    return {
      transform: [
        {
          rotate: `${rotateInterpolation}deg`,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        styles.listView,
        //   transformStyle,
        {
          backgroundColor: color,
          // transformOrigin,
        },
      ]}
    />
  );
};

const Test1 = () => {
  const indexToInterpolate = useSharedValue<number>(0);
  const [currentViewIndex, setCurrentViewIndex] = useState<number>(0);

  const onScroll = useAnimatedScrollHandler(e => {
    if (
      e.contentOffset.x < 0 ||
      e.contentOffset.x > e.contentSize.width - width
    ) {
      return;
    }

    console.log(e);

    indexToInterpolate.value = e.contentOffset.x / width;
  });

  const keyExtractor = (_item: string, index: number) => index.toString();
  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <AnimatedView
        color={item}
        index={index}
        indexToInterpolate={indexToInterpolate}
        currentViewIndex={currentViewIndex}
      />
    );
  };
  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setCurrentViewIndex(e.nativeEvent.contentOffset.x / width);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Animated.FlatList
          data={colors}
          renderItem={renderItem}
          pagingEnabled={true}
          horizontal={true}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          onMomentumScrollEnd={onMomentumScrollEnd}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Test1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
    width,
  },
});
