import Book from "../book/Book";
import { BookType } from "@/app/books/page";

const BooksList = ({ books }: { books: BookType[] }) => {
  return (
    <div className="p-5">
      <h1 className="text-3xl text-indigo-500 italic text-center mb-10">
        Books List
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {books?.map(({title, author, price, description}: BookType) => (
          <div key={title}>
            <Book
              title={title}
              author={author}
              price={price}
              description={description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
