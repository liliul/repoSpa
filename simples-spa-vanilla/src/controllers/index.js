import Home from "./home.controller";
import Posts from "./posts.controller";
import NotFound from "./404.controller";
import Products from "./products.controller";

const pages = {
  home: Home,
  posts: Posts,
  products: Products,
  notFound: NotFound,
};

export { pages };
