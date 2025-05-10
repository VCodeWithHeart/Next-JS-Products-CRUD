import { NextResponse, NextRequest } from "next/server";
import { products } from "../../products";

export const GET = async (request) => {
  return NextResponse.json(products);
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    console.log("body", body);
    const newProduct = { id: products.length + 1, ...body };
    products.push(newProduct);
    return NextResponse.json(
      { message: "Data received successfully", data: body },
      {
        status: 201,
        statusText: "SUCCESSFULL CREATED",
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);

    return NextResponse.json(
      { error: "failed to process" },
      {
        status: 500,
        statusText: "UNSUCCESSFULL",
      }
    );
  }
};

export const DELETE = async (request) => {
  const req = new URL(request.url);
  const idParam = req.searchParams.get("id");
  const id = parseInt(idParam, 10);

  if (isNaN(id)) {
    return NextResponse.json(
      { error: "Missing or invalid ID" },
      { status: 400 }
    );
  }

  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: `Product with ID ${id} not found` },
      { status: 404 }
    );
  }

  products.splice(index, 1);

  return NextResponse.json({ message: `Deleted product with ID ${id}` });
};

export const PUT = async (request) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const data = await request.json();

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  // Here you would normally update your database or product
  return NextResponse.json({ message: `Updated product with ID ${id}`, data });
};
