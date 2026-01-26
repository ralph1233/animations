import { StyleSheet, View, Text } from 'react-native';
import {
  Canvas,
  Path,
  Skia,
  DashPathEffect,
  vec,
} from '@shopify/react-native-skia';

const canvasWidth = 100;
const svgWidth = 80;
const svgHeight = 80;
const r = svgWidth / 2;
const circumference = 2 * Math.PI * r;
const path = Skia.Path.Make();
path.addRRect({
  rx: svgWidth,
  ry: svgHeight,
  rect: {
    width: svgWidth,
    height: svgHeight,
    x: (canvasWidth - svgWidth) / 2,
    y: (canvasWidth - svgHeight) / 2,
  },
});

const gray = '#808080';
const lightgreen = '#66ff33';

const User = ({
  name,
  storiesNb,
  storiesRead,
}: {
  name: string;
  storiesNb: number;
  storiesRead: number;
}) => {
  const off = storiesNb === 1 ? 0 : 8;
  const on = (circumference - storiesNb * off) / storiesNb;
  const storiedReadRatio = storiesRead / storiesNb;

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Path
          path={path}
          color={gray}
          style="stroke"
          strokeWidth={3}
          strokeCap="round"
          start={0}
          end={storiedReadRatio}
          origin={vec(canvasWidth / 2, canvasWidth / 2)}
          transform={[
            {
              rotate: Math.PI / 2,
            },
            {
              scaleY: -1,
            },
          ]}
        >
          <DashPathEffect intervals={[on, off]} phase={-off / 2} />
        </Path>
        <Path
          path={path}
          color={lightgreen}
          style="stroke"
          strokeWidth={3}
          strokeCap="round"
          start={storiedReadRatio}
          end={1}
          origin={vec(canvasWidth / 2, canvasWidth / 2)}
          transform={[
            {
              rotate: Math.PI / 2,
            },
            {
              scaleY: -1,
            },
          ]}
        >
          <DashPathEffect intervals={[on, off]} phase={-off / 2} />
        </Path>
      </Canvas>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12.5,
    paddingLeft: 13,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  canvas: {
    width: canvasWidth,
    aspectRatio: 1,
  },
});
