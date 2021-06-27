import React from "react";


const MenuItems = (props) => {
  const { title, items } = props.items;
  return (
    <div style={{}}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div
        style={{
          display: "flex",
          overflow: "auto",
          overflowY: "hidden",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          marginTop: "10px"
        }}
      >
        {items.map((item) => (
          <div
            style={{
              // display: "flex",
              height: "150px",
              boxShadow: ".1rem .1rem .5rem .1rem rgba(0,0,0, .1)",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: ".5rem"
            }}
          >
            <div
              style={{
                height: "100%",
                width: "110px",
                backgroundImage: `url('${item.imageUrl}')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            ></div>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
