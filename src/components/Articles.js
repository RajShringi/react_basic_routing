import React from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles";
class Articles extends React.Component {
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
    let filterArticles = articles.filter((article) =>
      article.title.toLocaleLowerCase().includes(this.state.searchTerm)
    );
    console.log(filterArticles);
    return (
      <div className="basis-[80%] p-4 text-zinc-700">
        <input
          placeholder="Search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          className="block w-full outline-none max-w-sm border p-2 shadow-inner"
        />
        {filterArticles.map((article) => {
          const { title, author, slug } = article;
          return (
            <Link key={slug} to={`/articles/${slug}`}>
              <div className="my-4">
                <h2>{title}</h2>
                <p className="text-sm">{author}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
export default Articles;
