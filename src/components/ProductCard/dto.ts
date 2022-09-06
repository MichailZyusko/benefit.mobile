export default class ProductDto {
  private static id: number = 0;

  public id: number;
  public name: string;
  public price: number;
  public image: string;
  public storeId: string;
  public quantity: number;

  constructor(product: any) {
    const offers = [...product.Offers];
    const image = `https://img.infoprice.by/256/${product.GoodsId.toString().slice(
      -4,
    )}/${product.GoodsPhoto.split('.')[0]}/norm/${product.GoodsPhoto}`;
    const bestOffer = offers.sort((a: any, b: any) => a.Price - b.Price)[0];

    this.name = product.GoodsName;
    this.image = image;
    this.storeId = bestOffer.ContractorId;
    this.price = bestOffer.Price;
    this.quantity = 0;
    this.id = ProductDto.id++;
  }
}
