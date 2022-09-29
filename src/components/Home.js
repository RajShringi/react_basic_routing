import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="basis-[80%] p-4 text-zinc-700">
      <div>
        <h1>🎉 Welcome to Homepage!</h1>
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <Link to="/articles">Article Page</Link>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <Link to="/books">Books Page</Link>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <Link to="/people">People Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
