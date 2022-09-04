import React, {useCallback, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {categories, Category_L2} from '../../../../constants/categories';
import {Accordion} from '../../../../components/Accordion';
import {FlatList, View} from 'react-native';
import {styles} from './styles';

type Props = {
  route: any;
};

export const SubCategoryScreen = ({route}: Props) => {
  const navigation = useNavigation();

  const {title, id} = route.params;
  const category = categories.find(c => c.id === id);

  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation, title]);

  const renderItem = useCallback(
    ({item}: {item: Category_L2}) => (
      <Accordion title={item.name} data={item.subcategories} />
    ),
    [],
  );

  const keyExtractor = useCallback(
    (item: Category_L2, index: number) => index.toString(),
    [],
  );

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={category?.subcategories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
