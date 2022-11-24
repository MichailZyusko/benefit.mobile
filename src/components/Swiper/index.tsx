import React, { ReactNode, useImperativeHandle, useMemo, useRef } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import styles, { DOT, DOT_MARGIN } from './styles';

type Props = {
  children: ReactNode[];
  containerSize: number;
  dashContainer?: StyleProp<ViewStyle>;
};

export type SwiperRef = {
  scrollToPage: (page: number) => void;
};

function Swiper({ containerSize, children, dashContainer }: Props, ref) {
  const position = useSharedValue(0);
  const scrollRef = useRef<Reanimated.ScrollView>(null);
  const childStyle = useMemo(() => ({ width: containerSize }), [containerSize]);
  const dashStyle = useMemo(
    () => [styles.dashContainer, dashContainer],
    [dashContainer]
  );

  useImperativeHandle(
    ref,
    () => ({
      scrollToPage: (page: number) => {
        scrollRef.current?.scrollTo?.({ x: page * containerSize });
      },
    }),
    []
  );

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
      backgroundColor: '#CF93FF',
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
        ref={scrollRef}
        bounces={false}
        decelerationRate="fast"
        overScrollMode="never"
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
      <View style={dashStyle}>
        {children.map((_, index) => (
          <View key={index} style={styles.dot} />
        ))}
        <Reanimated.View style={activeStyle} />
      </View>
    </>
  );
}

export default React.forwardRef<SwiperRef, Props>(Swiper);
