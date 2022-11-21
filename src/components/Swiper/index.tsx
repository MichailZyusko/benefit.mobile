import React, { ReactNode, useMemo } from 'react';
import { View } from 'react-native';
import Reanimated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import styles, { DOT, DOT_MARGIN } from './styles';

type Props = {
  children: ReactNode[];
  containerSize: number;
};

function Swiper({ containerSize, children }: Props) {
  const position = useSharedValue(0);
  const childStyle = useMemo(() => ({ width: containerSize }), [containerSize]);

  const handler = useAnimatedScrollHandler(
    {
      onScroll: (e) => {
        position.value = e.contentOffset.x;
      },
    },
    []
  );
  const active = useAnimatedStyle(
    () => ({
      position: 'absolute',
      backgroundColor: 'blue',
      marginLeft:
        (DOT + DOT_MARGIN) * Math.round(position.value / containerSize) +
        DOT_MARGIN,
    }),
    [containerSize]
  );
  const activeStyle = useMemo(() => [styles.dot, active], []);

  return (
    <>
      <Reanimated.ScrollView
        bounces={false}
        decelerationRate="fast"
        horizontal
        onScroll={handler}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum={true}
        scrollEventThrottle={16}
        snapToInterval={containerSize}
      >
        {children.map((element, index) => (
          <View style={childStyle} key={index}>
            {element}
          </View>
        ))}
      </Reanimated.ScrollView>
      <View style={styles.dashContainer}>
        {children.map((_, index) => (
          <View key={index} style={styles.dot} />
        ))}
        <Reanimated.View style={activeStyle} />
      </View>
    </>
  );
}

export default Swiper;
