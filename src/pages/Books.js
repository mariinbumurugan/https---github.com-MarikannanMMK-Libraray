import React, { useEffect, useState } from "react";
import api from "../components/ApiInterceptor";
import DataTable from "react-data-table-component";
import Button from "../components/Button";

function Books() {
  const [bookList, setBookList] = useState([]);
  

  const fetchBookList = async () => {
    try {
      const response = await api.get("/book/allBooks");
      setBookList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookList();
  }, []);

  // const arrayDataItems = bookList.map((book) => (
  //   <li key={book.bookId}>
  //     <p>{book.title}</p>
  //     <span>{book.authorName}</span>
  //     <p>{book.publicationDate}</p>
  //     <p>{book.availableStock}</p>
  //   </li>
  // ));

  const columns = [
    {
      name: "Book ID",
      selector: (row) => row.bookId,
      sortable: true,
      width: "8rem",
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      width: "8rem",
    },
    {
      name: "Author name",
      selector: (row) => row.authorName,
      sortable: true,
      width: "8rem",
    },
    {
      name: "Publication Date",
      selector: (row) => row.publicationDate,
      sortable: true,
      width: "12rem",
    },
    {
      name: "ISBN Number",
      selector: (row) => row.isbn,
      sortable: true,
      width: "12rem",
    },
    {
      name: "Action",
      button: true,
      width: "15rem",
      cell: () => {
        return (
          <div className="flex gap-1">
            <Button name="Update"/>
            <Button name="Request" />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="container flex mx-auto mt-12">
        <div className="mx-auto w-70%">
          <DataTable columns={columns} data={bookList} pagination></DataTable>
        </div>
        <div className="mx-auto w-20%"></div>
      </div>
    </>
  );
}

export default Books;
