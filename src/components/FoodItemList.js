import React from "react";
import { Table } from "semantic-ui-react";
import { generatePath, useHistory } from "react-router-dom";

const FoodItemList = ({ foodItems }) => {
  const history = useHistory();

  function handleClick(id) {
    id && history.push(generatePath("/foodItem/:id", { id }));
  }

  return (
    <Table unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Food Items</Table.HeaderCell>
          <Table.HeaderCell>Price </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {foodItems.map((item) => {
          return (
            <Table.Row
              style={{ cursor: "pointer" }}
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>Rs. {item.price}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default FoodItemList;
