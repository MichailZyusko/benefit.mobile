import React from 'react';
import { Dimensions } from 'react-native';
import { Intro1, Intro2, Intro3 } from '../../../assets/images';
import Swiper from '../../components/Swiper';
import Frame from './components/Frame';
import styles from './styles';

function Intro() {
  return (
    <Swiper
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
  );
}

export default Intro;
