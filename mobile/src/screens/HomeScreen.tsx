import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';
import {Product} from '../types';
import ProductCard from '../components/ProductCard';

const URL = 'https://benefit-app.herokuapp.com/api/v1/products';

export default function HomeScreen() {
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    (async () => {
      try {
        const {data, status} = await axios.get(URL);

        if (status !== 200) {
          throw new Error('Failed to fetch products');
        }

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  });

  // @ts-ignore
  return (
    <FlatList
      numColumns={2}
      style={{margin: 5}}
      // columnWrapperStyle={{flex: 1, justifyContent: 'space-evenly'}}
      data={products}
      renderItem={({item}) => <ProductCard product={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
}
//
// const styles = StyleSheet.create({
//   text: {
//     color: '#000000',
//   },
//   img: {
//     width: 100,
//     height: 100,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
