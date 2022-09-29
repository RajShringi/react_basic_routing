import React from "react";
import books from "../data/books";
class Books extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    let filterBooks = books.filter((book) =>
      book.title.toLocaleLowerCase().includes(this.state.searchTerm)
    );
    return (
      <div className="basis-[80%] p-4 text-zinc-700">
        <input
          placeholder="Search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          className="block w-full outline-none max-w-sm border p-2 shadow-inner mb-4"
        />

        <div className="grid grid-cols-4 gap-2">
          {filterBooks.map((book) => {
            const { image, title, author, isbn, website } = book;
            return (
              <div key={isbn} className="p-4 bg-gray-50 text-center rounded-xl">
                <div>
                  <img
                    className="w-full h-[200px] object-contain"
                    src={image}
                    alt={title}
                  />
                </div>
                <h2 className="text-lg my-4">{title}</h2>
                <p className="text-sm mb-4">Author: {author}</p>
                <a
                  className="p-2 text-sm bg-teal-600 text-white rounded-lg inline-block"
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Books;
