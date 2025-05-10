"use client";

import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import ProductsPage from "../productsPage/page";

const page = () => {
  const [product, setProduct] = useState({});
  const queryClient = useQueryClient();

  const inputFn = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log("product", product);
  };

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/api/products");
    return response.json();
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify(product),
    });

    return response.json();
  };

  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const addProduct = useMutation({
    mutationFn: handleAdd,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      setProduct(() => {});
    },
  });


  //   if(isLoading) {
  //     return <div>Loading...</div>
  //   }

  return (
    <div className="flex justify-between mt-10 w-[100%] px-8">
      <form className="flex flex-col w-3xs gap-2.5">
        <h3 className="text-center uppercase font-bold bg-gradient-to-r from-white to-black bg-clip-text text-transparent mx-4">
          Add Product
        </h3>
        <Input
          type="text"
          name="title"
          placeholder="Enter product title"
          onChange={(e) => inputFn(e)}
          value={product?.title || ""}
        />
        <Input
          type="text"
          name="description"
          placeholder="Enter product description"
          onChange={(e) => inputFn(e)}
          value={product?.description || ""}
        />
        <Input
          type="text"
          name="price"
          placeholder="Enter product price"
          onChange={(e) => inputFn(e)}
          value={product?.price || ""}
        />
        <Input
          type="text"
          name="category"
          placeholder="Enter product category"
          onChange={(e) => inputFn(e)}
          value={product?.category || ""}
        />

        <Button
          text="add product"
          clickFn={(e) => addProduct.mutate(e)}
          styles="w-[100%] cursor-pointer"
        />
      </form>

      <ProductsPage {...{ data }} />
    </div>
  );
};

export default page;
