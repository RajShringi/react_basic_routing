import { Link } from "react-router-dom";

function SingleArticle(props) {
  return (
    <div className="basis-[80%] p-4 text-zinc-700">
      <p className="text-sm my-4 ">
        <Link to="/articles">👈 Go back to articles</Link>
      </p>
      <h1>The slug of article is ${props.match.params.slug}</h1>
    </div>
  );
}
export default SingleArticle;
