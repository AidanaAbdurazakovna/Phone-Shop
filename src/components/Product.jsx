import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const Product = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <StyledContainer>
      {products.map((product) => (
        <StyledSection key={product.id}>
          <img src={product.img} alt={product.name} />
          <div>
            <h3>{product.name}</h3>
            <h4>{product.price}$ </h4>
            <button disabled={product.isBought}>
               <Link to={`/phones/${product.id}`}> Подробнее</Link>
            </button>
          </div>
        </StyledSection>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  bottom: 0;
  margin: 50px;
  display: flex;
  justify-content: center;
  gap: 50px;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  border: 2px solid #333;
  padding: 20px;
  border-radius: 10px;

  & > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  & > div > button {
    width: 100%;
    background-color: #6e6e78;
    color: #121314;
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    border-radius: 6px;
    &:hover {
      background-color: #bbbbc1;
      color: #333;
      transition: all 0.3ms ease-in;
    }
    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }
`;
