import {textTruncate} from '../../utils';

export default class ProductDto {
  public name: string;
  public price: number;
  public image: string;
  public storeId: string;

  constructor(product: any) {
    const offers = [...product.Offers];
    const image = `https://img.infoprice.by/256/${product.GoodsId.toString().slice(
      -4,
    )}/${product.GoodsPhoto.split('.')[0]}/norm/${product.GoodsPhoto}`;
    const name = textTruncate(product.GoodsName, 40);
    const bestOffer = offers.sort((a: any, b: any) => a.Price - b.Price)[0];

    this.name = name;
    this.image = image;
    this.storeId = bestOffer.ContractorId;
    this.price = bestOffer.Price;
  }
}
