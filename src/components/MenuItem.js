import React from "react";
import styled from "styled-components"



const MenuItemParent = styled.div`

h3{
  text-align: center;
  
padding: 10px;

}

`
const MenuItemContainer = styled.div`
  display: flex;
  overflow: auto;
  overflow-Y: hidden;
  overflow-X: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  scrollbar-width: none;
  margin: 10px 0;
`

const IndividualItemContainer = styled.div`
  height: auto;
  min-width: 170px;
  box-shadow: .1rem .1rem .5rem .1rem rgba(0,0,0, .1);
  margin: 10px;
  display: grid;
  /* flex-direction: column; */
  /* align-items: center; */
  padding: .7rem;
  border-radius: 10px;
  grid-template-rows:  180px 20px 20px;
  grid-auto-rows: 20px;
  grid-auto-flow: row dense;
  justify-items: center;
`



const ItemImage = styled.div`
height: 100%;
width: 100%;
background-image: url('${props =>props.imageUrl}');
background-size: contain;
background-position: center;
background-repeat: no-repeat;
clip-path: circle(45%)
`

const ItemName = styled.div`
font-size:.8rem;
font-weight:600;
`


const MenuItems = (props) => {
  const { title, items } = props.items;
  return (
    <MenuItemParent>
      <h3>{title}</h3>
      <MenuItemContainer>
        {items.map((item) => (
          <IndividualItemContainer  key = {item.name}>
            <ItemImage imageUrl = {item.imageUrl}/>
            <ItemName>{item.name}</ItemName>
            {item.price.map(item =>(
              <div key = {item.title} style = {{width: "100%", display:"flex", justifyContent: `${item.title ? "space-around": "center"}`,fontSize: ".8rem"}}>
              <div>
              {item.title}
              </div>
              <div >Rs. {item.price}</div>
              
              </div>)
            )}
      
          </IndividualItemContainer>
        ))}
      </MenuItemContainer>
    </MenuItemParent>
  );
};

export default MenuItems;
