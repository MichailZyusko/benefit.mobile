import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';

const StoreTextColor: Record<string, string> = {
  Green: '#FFFFFF',
};

const StoreBackgroundColor: Record<string, string> = {
  Green: '#50A953CC',
};

type Props = {
  storeName: string;
};

export default function StoreLogo({storeName}: Props) {
  return (
    <StoreContainer storeName={storeName}>
      <StoreName storeName={storeName}>{storeName}</StoreName>
    </StoreContainer>
  );
}

const StoreContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({storeName}: Props) => StoreBackgroundColor[storeName]};
  //shadow-offset: {
  //  width: '0px',
  //  height: '2px',
  //};
  //shadow-color: rgb(97, 151, 99);
  //shadow-opacity: 0.6;
  //box-shadow: 0px 2px 10px rgba(97, 151, 99, 0.6);
  margin-top: 5px;
  padding: 2px 10px;
  border-radius: 5px;
`;

const StoreName = styled.Text`
  font-family: 'Roboto-Medium';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${({storeName}: Props) => StoreTextColor[storeName]};
`;
