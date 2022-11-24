import React, { useCallback, useEffect, useRef } from 'react';
import { Dimensions, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Intro1, Intro2, Intro3 } from '../../../assets/images';
import Swiper, { SwiperRef } from '../../components/Swiper';
import { setCompletedIntro } from '../../redux/reducers/preferences';
import Frame from './components/Frame';
import styles from './styles';

function Intro() {
  const swiperRef = useRef<SwiperRef>(null);
  const dispatch = useDispatch();
  const onSkip = useCallback(() => {
    dispatch(setCompletedIntro(true));
  }, []);

  useEffect(() => {
    setInterval(() => {
      swiperRef.current?.scrollToPage(Math.round(Math.random() * 3));
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginTop: 42,
          marginBottom: 71,
          marginHorizontal: 24,
          flexDirection: 'row-reverse',
        }}
      >
        <TouchableOpacity activeOpacity={0.7} onPress={onSkip}>
          <Text>Пропустить</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Swiper
          ref={swiperRef}
          dashContainer={styles.dashes}
          containerSize={Dimensions.get('window').width}
        >
          <Frame
            title="Добро пожаловать!"
            description="Наше приложение поможет вам получать максимальную выгоду от покупок продовльственных товаров и мы поможем вам в этом разобраться"
            image={Intro1}
          />
          <Frame
            title="Находите ваши любимые товары!"
            description="А мы подскажем вам, где выгоднее всего будет его приобрести. Также вы можете узнать цены в других ближайших к вам магазинах."
            image={Intro2}
          />
          <Frame
            title="Сканируйте штрих-код товара!"
            description="И мы сразу покажем вам цены и описание данного товара"
            image={Intro3}
          />
        </Swiper>
      </View>
    </View>
  );
}

export default Intro;
