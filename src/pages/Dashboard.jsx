import React from "react";
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useFoodItems} from "../api/getFoodItems";
import FoodItemList from "../components/FoodItemList";

// import styled from "styled-components"
import { Header, Container } from "semantic-ui-react";

function Dashboard(props) {
  const foodItems = useFoodItems();


  return (
    <Container>
      <Header
        as="h3"
        content="Menu"
        textAlign="center"
        style={{ margin: "1rem" }}
      />
      <FoodItemList foodItems={foodItems} />
    </Container>
  );
}

export default Dashboard;

// const DashboardMain = styled.div`
// display: flex;
// width: 100%;
// height: 100vh;
// justify-content: center;
// align-items: center;
// text-align: center;
// flex-direction: column;

// h2{
//     padding: 10px;
//     }
// img{
//     width: 100%;
//     object-fit:contain;
// }

// `

// items: [{
//             name: "coke",
//             imageUrl: "https://i.ibb.co/HKf3BRk/coke.webp",
//             price: [{
//                 title: '',
//                 price: 50
//             }]
//         },
//         {
//             name: "fanta",
//             imageUrl: "https://i.ibb.co/L1hn1Pv/fanta.webp",
//             price: [{
//                 title: '',
//                 price: 50
//             }]
//         }]
