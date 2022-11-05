import axios from 'axios';
import ProductDto from '../../components/ProductCard/dto';

const URL = 'https://api.infoprice.by/InfoPrice.Goods';
// const itemsPerPage = 44;

export const getProductsByCategory = async ({
  page = 0,
  search = '',
  storeIds = [],
  categoryId = '',
}) => {
  try {
    console.log(categoryId);

    const { data, status } = await axios.post(URL, {
      Packet: {
        Data: {
          Page: (page + 1).toString(),
          Search: search,
          ContractorId: storeIds.join(','),
          CompareСontractorId: 72631,
          CatalogType: 1,
          GoodsGroupId: categoryId,
        },
      },
    });

    if (status !== 200) {
      throw new Error('Something went wrong');
    }

    if (data.Table[0].GoodsOffer) {
      const products = data.Table[0].GoodsOffer.map(
        (item: any) => new ProductDto(item),
      );

      return products;
    }
  } catch (error) {
    console.error(error);
  }
};
