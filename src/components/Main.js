import { BrowserRouter, Route } from "react-router-dom";
import Articles from "./Articles";
import Books from "./Books";
import Help from "./Help";
import People from "./People";
import Sidebar from "./Sidebar";
import Home from "./Home";
import SingleArticle from "./SingleArticle";
import Header from "./Header";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex justify-between">
        <Sidebar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route exact path="/articles">
          <Articles />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/articles/:slug" component={SingleArticle} />
      </div>
    </BrowserRouter>
  );
}
export default Main;
