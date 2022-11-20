import React, { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';

type Props = {
  children: ReactNode[];
  containerSize: number;
};

function Swiper(props: Props) {
  return (
    <>
      <ScrollView
        bounces={false}
        decelerationRate="fast"
        horizontal
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum={true}
        scrollEventThrottle={16}
        snapToInterval={props.containerSize}
      >
        {props.children.map((element, index) => (
          <View style={{ width: props.containerSize }} key={index}>
            {element}
          </View>
        ))}
      </ScrollView>
    </>
  );
}

export default Swiper;
