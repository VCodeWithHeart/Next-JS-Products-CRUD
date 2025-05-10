"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

const ProductsPage = ({ data }) => {
  const [editId, setEditId] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState();
  const queryClient = useQueryClient();

  const handleDelete = async (id) => {
    const response = await fetch(
      `http://localhost:3000/api/products?id=${id}`,
      {
        method: "DELETE",
      }
    );
    return response.json();
  };

  const deleteProduct = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const handleUpdate = async (id) => {
    const response = await fetch(
      `http://localhost:3000/api/products?id=${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    );

    setUpdatedProduct({});
    setEditId(null);

    return response.json();
  };

  const editProduct = useMutation({
    mutationFn: handleUpdate,
    onSuccess: (data, id) => {
      queryClient.setQueryData(["products"], (products) => {
        console.log("data", data);
        return products.map((curProd) => {
          return curProd.id === parseInt(id) ? { ...updatedProduct } : curProd;
        });
      });
      // queryClient.invalidateQueries(["products"]);
    },
  });

  return (
    <div className="h-[100%] my-3 mx-4 w-[80%]">
      <h1 className="text-center text-4xl uppercase font-bold bg-gradient-to-r from-white to-black bg-clip-text text-transparent">
        Our Products
      </h1>

      <div className="w-[95%] mx-auto">
        {data?.map(({ id, title, price, description, category }) => (
          <div key={id} className="border-1 rounded text-white my-3 px-3 py-2">
            {editId === id ? (
              <>
                <input
                  type="text"
                  value={updatedProduct.title || ""}
                  onChange={(e) =>
                    setUpdatedProduct((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  className="text-white border-1 border-zinc-50 px-2 py-1 rounded my-1 w-full"
                  placeholder="Title"
                />
                <textarea
                  value={updatedProduct.description || ""}
                  onChange={(e) =>
                    setUpdatedProduct((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="text-white border-1 border-zinc-50 px-2 py-1 rounded my-1 w-full"
                  placeholder="Description"
                />
                <input
                  type="number"
                  value={updatedProduct.price || ""}
                  onChange={(e) =>
                    setUpdatedProduct((prev) => ({
                      ...prev,
                      price: parseFloat(e.target.value),
                    }))
                  }
                  className="text-white border-1 border-zinc-50 px-2 py-1 rounded my-1 w-full"
                  placeholder="Price"
                />
                <input
                  type="text"
                  value={updatedProduct.category || ""}
                  onChange={(e) =>
                    setUpdatedProduct((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                  className="text-white border-1 border-zinc-50 px-2 py-1 rounded my-1 w-full"
                  placeholder="Price"
                />
                <div className="flex gap-3">
                  <button
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                    onClick={() => editProduct.mutate(id)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600"
                    onClick={() => setEditId(null)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-xl">{title}</p>
                <p>{description}</p>
                <p className="bg-cyan-600 px-2 py-0.5 rounded-md capitalize w-fit mt-1.5 mb-1 tracking-wide">
                  {category}
                </p>
                <p className="font-bold text-xl">₹{price}</p>

                <div className="flex gap-3.5">
                  <button
                    className="bg-red-500 text-white rounded py-1 px-2 my-3 cursor-pointer hover:bg-red-600 
            uppercase tracking-wide"
                    onClick={() => deleteProduct.mutate(id)}
                  >
                    Delete
                  </button>

                  <button
                    className="bg-green-500 text-white rounded py-1 px-2 my-3 cursor-pointer hover:bg-green-600 
            uppercase tracking-wide"
                    onClick={() => {
                      setEditId(id);
                      setUpdatedProduct((prev) => ({
                        ...prev,
                        id,
                        title,
                        description,
                        price,
                        category,
                      }));
                    }}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
