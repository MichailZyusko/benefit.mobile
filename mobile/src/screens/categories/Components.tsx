import React, {useCallback, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {categories, Category} from '../../constants/categories';
import {Accordion} from '../../components/Accordion';
import {FlatList, StyleSheet, View} from 'react-native';

export const SubCategoryScreen = ({route}) => {
  const navigation = useNavigation();

  const {title, id} = route.params;
  const category = categories.find(c => c.id === id);

  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation, title]);

  const renderItem = useCallback(
    ({item}: {item: Category}) => (
      <Accordion title={item.name} data={item.subcategories} />
    ),
    [],
  );

  return (
    <View style={styles.screenContainer}>
      <FlatList data={category?.subcategories || []} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    padding: 8,
  },
});
