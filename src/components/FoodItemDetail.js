import React, { useState, useEffect } from "react";
import { Container, Button, Form, Divider } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import {
  doc,
  getDocs,
  getDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

const FoodItemDetail = () => {
  const [foodDetail, setFoodDetail] = useState({
    title: "",
    price: "",
  });

  const { id } = useParams();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFoodDetail((prevState) =>
      ({ ...prevState, [name]: value })
    );
  }

  useEffect(() => {
    const docRef = doc(db, "foodItems", id);
    getDoc(docRef).then((doc) => {
      const { title, price } = doc.data();
      setFoodDetail({ title, price });
    });

    console.log("i am useeffect");
  }, []);

  const { title, price } = foodDetail;

  return (
    <Container>
      <Form>
        <Form.Group unstackable widths={2}>
          <Form.Input
            label="Title"
            name="title"
            value={title}
            placeholder=""
            onChange={handleChange}
          />

          <Form.Input
            label="Price"
            name="price"
            value={price}
            placeholder=""
            onChange={handleChange}
          />
        </Form.Group>
        <Divider horizontal></Divider>
        <Button type="submit" floated="right" color="orange">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default FoodItemDetail;

// onSnapshot(collection(db, "hard drinks"), (snapshot) => {
//   snapshot.docs.map((doc) => console.log(doc.data()));
// });
