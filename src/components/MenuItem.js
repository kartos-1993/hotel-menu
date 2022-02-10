import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: center;
  margin: 0 auto;

  h3 {
    font-size: 1.5rem;
  }
`;

const CardsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CardItem = styled.div`
  width: 25%;
  padding: 5px;

  @media (max-width: 528px) {
    width: 50%;
  }
`;

const CardInner = styled.div`
  background: #fff;
  border-radius: 5px;
`;
const CardTop = styled.div`
  width: 100%;

  border-radius: 5px;
  /* min-height: 200px; */

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-top: 10px;
  }

  figure {
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const CardBottom = styled.div`
  margin-top: 10px;
  h1 {
    font-size: 1.2rem;
  }
`;

const PriceTitle = styled.div`
  padding: 5px 2px;
  width: 80%;
  display: flex;
  justify-content: ${(props) =>
    props.pricetitle ? "space-between" : "center"};
  margin: 0 auto;
  font-size: 0.8rem;
`;

const Price = styled.div`
  font-size: 1rem;
`;

const MenuItems = (props) => {
  const { title, items } = props.items;
  return (
    <Wrapper>
      <h3>{title}</h3>
      <CardsWrap>
        {items.map((item) => (
          <CardItem key={item.name}>
            <CardInner>
              <CardTop>
                <figure>
                  <img src={item.imageUrl} alt={item.name}></img>
                </figure>
              </CardTop>
              <CardBottom>
                <h1>{item.name}</h1>
                {item.price.map((item) => (
                  <PriceTitle key={item.name} pricetitle={item.title}>
                    <div>{item.title}</div>
                    <Price>Rs. {item.price}</Price>
                  </PriceTitle>
                ))}
              </CardBottom>
            </CardInner>
          </CardItem>
        ))}
      </CardsWrap>
    </Wrapper>
  );
};

export default MenuItems;
