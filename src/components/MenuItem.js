import React from "react";
import styled from "styled-components"


const MenuItemParent = styled.div`
padding: 10px;

h3{
  text-align: center;  
  padding: 10px;

}

`
const MenuItemContainer = styled.div`
  
  /* overflow: auto;
  overflow-Y: hidden;
  overflow-X: auto; */
  /* white-space: nowrap; */
  /* scroll-behavior: smooth; */

 
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  



  
  
  

  
`

const IndividualItemContainer = styled.div`
  height: auto;
  flex: 0 0 150px;
  box-shadow: .1rem .1rem .5rem .1rem rgba(0,0,0, .1);
  margin: 10px;
  display: grid;
  /* flex-direction: column; */
  /* align-items: center; */
  padding: .7rem;
  border-radius: 10px;
  grid-template-rows:  150px 20px 20px;
  grid-template-columns: auto;
 
  grid-auto-rows: 20px;
  grid-auto-flow: row dense;
  justify-items: center;
`



const ItemImage = styled.div`
height: 100%;
width: 100%;
 img{
  height: 100%;
width: 100%;
object-fit: contain;
 }
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
            <ItemImage>
              <img src = {item.imageUrl} alt ={item.name}></img>
             </ItemImage>
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
