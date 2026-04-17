import { Toaster } from "react-hot-toast";
import BlogDetail from "./components/BlogDetail";
import AboutUs from "./pages/AboutUs";
import BlogAuthor from "./pages/BlogAuthor";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import CoreFocus from "./pages/CoreFocus";
import Faqs from "./pages/Faq";
import ForumForm from "./pages/ForumForm";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Members from "./pages/Members";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/coreFocus" element={<CoreFocus />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forumForm" element={<ForumForm />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/blogAuthor" element={<BlogAuthor />} />
          <Route path="/singleBlog/:id" element={<BlogDetail />} />
          <Route path="/members" element={<Members />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
