import BooksList from "@/components/booksList/BooksList";
import React from "react";
import { builder } from "@builder.io/sdk";

export type BookType = {
  price: number;
  author: string;
  description: string;
  title: string;
};
const Page = async () => {
  const response = await builder.getAll("books", {
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
    options: { enrich: true }
  });

  const books =  response.map((item) => item.data);
  
  return <BooksList books={books as BookType[]} />;
};

export default Page;
