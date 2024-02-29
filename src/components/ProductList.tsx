import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProduct] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching Products in", category);
    setProduct(["Clothing", "HouseHolds"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
