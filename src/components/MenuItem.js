import React from "react";
import styled from "styled-components"


const MenuItemParent = styled.div`
padding: 10px;
width:100%;
&:last-child{
  margin-bottom: 42px;
}
h3{
  text-align: center;  
  padding: 10px;
}
`
const MenuItemContainer = styled.div`  
  display: grid;
  grid-template-columns: repeat(2, 200px);
  justify-content: center;
  gap: 10px;
  
    `

const IndividualItemContainer = styled.div`
  height: auto;
  flex: 0 0 150px;
  box-shadow: .1rem .1rem .5rem .1rem rgba(0,0,0, .1);
  margin: 10px;
  display: grid;  
  border-radius: 5px;
  grid-template-rows:  150px 30px 20px;  
  justify-items: center;
  background: white;
  
`


const ItemImage = styled.div`
 
  img{
    height: 100%;
  width: 100%;
  object-fit: contain;
  border-top: 10px;
 }

 figure{
   height: 100%;
   width:100%;
   overflow: hidden;
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;
 }


`

const ItemName = styled.div`
display: flex;
align-items: center;
  font-size:.8rem;
  font-weight:600;
  text-transform: uppercase;
  padding:5px`



const MenuItems = (props) => {
  const { title, items } = props.items;
  return (
    <MenuItemParent>
      <h3>{title}</h3>
      <MenuItemContainer>
        {items.map((item) => (
          <IndividualItemContainer  key = {item.name}>
            <ItemImage>    
            <figure>       
              <img src = {item.imageUrl} alt ={item.name}></img>
              </figure> 
             </ItemImage>
            <ItemName>{item.name}</ItemName>
            {item.price.map(item =>(
              <div key = {item.title} style = {{padding: "5px",width:"70%", display:"flex",alignItems:"center" ,justifyContent: `${item.title ? "space-evenly": "center"}`,fontSize: ".8rem"}}>
              
             <div>{item.title}</div> 
              
              <div>Rs. {item.price}</div>
              
              </div>)
            )}      
          </IndividualItemContainer>
        ))}
      </MenuItemContainer>
    </MenuItemParent>
  );
};

export default MenuItems;
