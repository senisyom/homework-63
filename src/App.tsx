
import { Routes, Route } from "react-router-dom";
import AddNewPost from "./AddNewPost/AddNewPost";
import ToolBar from "./ToolBar/ToolBar";
import Home from "./Home/Home";
import ReadMore from './ReadMore/ReadMore'
import EditForm from "./EditForm/EditForm";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

const App = () => {
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/add" element={<AddNewPost />} />
        <Route path="/posts/:id/edit" element={<EditForm />} />
        <Route path="/posts/:id" element={<ReadMore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};
export default App;
