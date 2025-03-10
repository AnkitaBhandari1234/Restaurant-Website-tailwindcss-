import Home from "./pages/Home";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Page from "./pages/Page";
import Layout from "./hoc/Layout";


function App() {
  return (
<div>
<Routes>
  <Route element={<Layout />}>
  <Route path="/" element={<Home></Home>}/>
  <Route path="/about" element={<About></About>}/>
  <Route path="/menu" element={<Menu></Menu>}/>
  <Route path="/gallery" element={<Gallery></Gallery>}/>
  <Route path="/blog" element={<Blog></Blog>}/>
  <Route path="/contact" element={<Contact></Contact>}/>
  <Route path="/page" element={<Page></Page>}/>
  </Route>
</Routes>
</div>
  );
}

export default App;
