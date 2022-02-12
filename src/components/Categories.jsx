import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";
import { productsList } from "./productsData";
function Categories(props) {
  const [products, setproducts] = useState([]);
  let params = useParams();

  useEffect(() => {
    let data = [];
    productsList.map((a) => {
      if (a.category === params.catname) data.push(a);
    });
    setproducts(data);
  }, [params.catname]);

  return (
    <div>
      <p>this is the cat page</p>
      <p>{params.catname}</p>
      <div className="row" style={{ padding: "100px" }}>
        <Products
          incQuantity={props.incQuantity}
          decQuantity={props.decQuantity}
          cartproducts={products}
        />
      </div>
    </div>
  );
}

export default Categories;
