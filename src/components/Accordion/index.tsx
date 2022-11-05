import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Category_L3} from '../../constants/categories';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
// import {useHomeScreenDispatch} from '../../redux/hooks';
// import {setCategoryId} from '../../screens/home/slicer';

type AccordionProps = {
  title: string;
  data: Category_L3[];
};

export const Accordion = ({title, data}: AccordionProps) => {
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigation();
  // const dispatch = useHomeScreenDispatch();

  const pressHandler = ({categoryId, name}: Category_L3) => {
    // @ts-ignore
    navigation.navigate('Поиск категория', {
      title: name,
      categoryId,
    });

    console.log(categoryId, name);

    // dispatch(setCategoryId(categoryId));
  };

  return (
    <TouchableOpacity
      style={styles(expanded).container}
      onPress={() => setExpanded(!expanded)}>
      <Text style={styles(expanded).title}>{title}</Text>
      {expanded && (
        <View>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles(expanded).categoryTextContainer}>
              <Text
                style={styles(expanded).categoryText}
                onPress={() => pressHandler(item)}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};
