import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

//get all documents from collection "fooditems"

export const useFoodItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "foodItems"), (snapshot) => {
      const foodItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setItems(foodItems);
    });

    return () => unsub();
  }, []);

  return items;
};
