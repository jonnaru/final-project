import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import { cart } from "../../reducers/cart";

import { PrimaryButton } from "../../lib/PrimaryButton";

const Product = styled.div`
  padding: 40px;

  & h1 {
    font-size: 42px;
    text-transform: uppercase;
  }

  & h4 {
    font-weight: lighter;
  }
`;

const ProductPrice = styled.h4`
  color: #6b6b6b;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 32px;
`;

const OldProductPrice = styled.span`
  text-decoration: line-through;
`;

const SaleProductPrice = styled.span`
  color: red;
`;

const ProductInfo = styled.h4`
  font-size: 20px;
  margin: 0;
  line-height: 34px;
`;

const ProductDescription = styled.p`
  line-height: 30px;
  font-size: 18px;
`;

const ShippingText = styled.p`
  font-size: 12px;
  text-align: center;
  margin: 0;
  margin-bottom: 32px;
`;

const SampleItem = styled.p`
  font-size: 20px;
  font-style: italic;
  font-weight: lighter;
`;

const InfoTitle = styled.span`
  font-size: 16px;
  text-transform: uppercase;
  margin-right: 10px;
`;

export const ProductCard = ({ product }) => {
  const [buttonTitle, setButtonTitle] = useState("Add to cart");

  const productsInCart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const inStock = () => {
    const itemInCart = productsInCart.find(
      (itemInCart) => itemInCart.id === product.id
    );

    if (itemInCart) return product.inStock - itemInCart.cartQuantity;

    return product.inStock;
  };

  const handleOnClick = () => {
    dispatch(cart.actions.addItem({ product: product }));
    setButtonTitle("Adding");
    setTimeout(() => {
      setButtonTitle("Add to basket");
    }, 1000);
  };

  return (
    <Product>
      <h1>{product.title}</h1>
      {product.oldPrice ? (
        <ProductPrice>
          <OldProductPrice>{`${product.oldPrice} SEK`}</OldProductPrice>
          <SaleProductPrice>{` ${product.price} SEK`}</SaleProductPrice>
        </ProductPrice>
      ) : (
        <ProductPrice>{`${product.price} SEK`}</ProductPrice>
      )}

      <div style={{ marginBottom: "22px" }}>
        <ProductInfo>
          <InfoTitle>Glazing: </InfoTitle>
          {product.color}
        </ProductInfo>

        <ProductInfo>
          <InfoTitle>Measurements: </InfoTitle>
          {product.measurements}
        </ProductInfo>

        {inStock() > 0 && (
          <ProductInfo>
            <InfoTitle>In stock: </InfoTitle>
            {inStock()}
          </ProductInfo>
        )}
      </div>

      {product.sample && <SampleItem>This is a sample item</SampleItem>}

      <PrimaryButton
        disabled={inStock() < 1}
        title={inStock() < 1 ? "Out of stock" : buttonTitle}
        onClick={handleOnClick}
      />

      <ShippingText>Free shipping within Sweden over 600 SEK</ShippingText>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductDescription>{`Item Care: ${product.materialCare}`}</ProductDescription>
    </Product>
  );
};
