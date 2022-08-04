// @ts-ignore
import styled from 'styled-components/native';
import React from 'react';
import {ImageHeart, ImagePlus} from '../../../assets/icons';

export namespace Plus {
  export const Component = () => {
    return (
      <Container>
        <Button>
          <Image source={ImagePlus} />
        </Button>
      </Container>
    );
  };

  export const Container = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 7px;
  `;

  export const Button = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #e3e3e3;
    border-radius: 5px;

    width: 24px;
    height: 24px;
  `;

  export const Image = styled.Image`
    width: 16px;
    height: 16px;
  `;
}

export namespace Heart {
  export const Component = () => {
    return (
      <Container>
        <Image source={ImageHeart} />
      </Container>
    );
  };

  export const Container = styled.TouchableOpacity`
    position: absolute;
    top: 3px;
    right: 3px;
    z-index: 1;

    padding: 7px;
  `;

  export const Image = styled.Image`
    width: 30px;
    height: 30px;
  `;
}

export const Card = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  width: 45%;
  height: 310px;
  margin: 4px;
  padding: 10px;

  background: #fff;
  //shadow-offset: {width: 0, height: 2};
  //shadow-color: rgba(160, 160, 160, 0.15);
  border-radius: 20px;
  border-color: #e0e0e0;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 60%;
  border-radius: 15px;
  object-fit: scale-down;
`;

export const Name = styled.Text`
  font-family: 'Roboto-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;

export const Price = styled.Text`
  font-family: 'Roboto-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;

export const PriceContainer = styled.View`
  position: absolute;
  bottom: 10px;
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
