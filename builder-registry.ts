"use client";
import { builder, Builder } from "@builder.io/react";
import Book from "./components/book/Book";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Book, {
  name: "Book",
  inputs: [
    {
      name: "author",
      type: "string",
      required: true,
    },
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});
