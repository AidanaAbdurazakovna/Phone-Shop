import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export const PhoneDetails = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState({});
  const { products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    const currentFind = products.find((element) => element.id === Number(id));

    setPosts(currentFind);
  }, [posts]);
  console.log(posts);

  return (
    <StyledDiv>
      <StyledSection>
        <img src={posts?.img} alt={posts?.name} />
        <h3>{posts?.name}</h3>
        <h5>
          <b>Информация</b>В 2005 году появился телефон Motorola ROKR E1, куда
          был встроен iTunes . Однако модель оказалась не очень успешной, и Стив
          Джобс задумался о создании собственного телефона, причем с сенсорным
          экраном. Так в 2007 году был представлен первый iPhone.
        </h5>
        <Link to={"/"}>Вернуться обратно</Link>
      </StyledSection>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
`;

const StyledSection = styled.section`
  width: 350px;
  height: 450px;

  flex-direction: column;
  border: 2px solid #333;
  padding: 20px;
  border-radius: 10px;

  object-fit: cover;
  & > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;
