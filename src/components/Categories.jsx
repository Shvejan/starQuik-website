import React from "react";
import { useParams } from "react-router-dom";
function Categories() {
  let params = useParams();
  return (
    <div>
      <p>this is the cat page</p>
      <p>{params.catname}</p>
    </div>
  );
}

export default Categories;
