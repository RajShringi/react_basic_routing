import { Link } from "react-router-dom";
import articles from "../data/articles";
function Articles() {
  return (
    <div className="basis-[80%] p-4 text-zinc-700">
      {articles.map((article) => {
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
export default Articles;
