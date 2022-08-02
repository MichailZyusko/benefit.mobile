import styled from 'styled-components/native';

export const Card = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  //justify-content: center;
  align-items: center;

  width: 45%;
  height: 310px;
  margin: 5px;
  padding: 10px;

  background: #fff;
  //shadow-offset: {width: 0, height: 2};
  //shadow-color: rgba(160, 160, 160, 0.15);
  border-radius: 20px;
  border-color: #e0e0e0;
`;

export const ProductImage = styled.Image`
  width: 90%;
  height: 60%;
  border-radius: 15px;
  object-fit: contain;
`;

export const Heart = styled.Image`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  top: 13px;
  z-index: 1;
`;

export const Name = styled.Text`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;

export const Plus = styled.Image`
  background-color: #e3e3e3;
  border-radius: 5px;
  z-index: 1;
`;

export const Price = styled.Text`
  font-family: 'Roboto_Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 14px;
  color: #000000;
`;

export const PriceContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  //height: 30px;
`;

export const NameContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const ShopImage = styled.Image``;
