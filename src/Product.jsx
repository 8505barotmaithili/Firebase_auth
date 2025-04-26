import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getdata = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "white",
        height: "500px",
        overflowY: "scroll",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "black",
          marginBottom: "20px",
        }}
      >
        Product Page
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "black",
          padding: "20px",
          width: "80%",
          margin: "0 auto",
          borderRadius: "8px",
        }}
      >
        {products.map((ele) => (
          <div
            key={ele.id}
            style={{
              display: "flex",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              overflow: "hidden",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              src={ele.image}
              alt={ele.title}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                marginRight: "20px",
              }}
            />
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                {ele.title}
              </h2>
              <h3
                style={{
                  fontSize: "1.1rem",
                  color: "#777",
                  marginBottom: "5px",
                }}
              >
                {ele.category}
              </h3>
              <p
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#e74c3c",
                }}
              >
                {ele.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
