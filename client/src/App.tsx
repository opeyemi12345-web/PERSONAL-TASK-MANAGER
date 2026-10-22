import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import MyTasks from "./pages/MyTasks";
import NewTasks from "./pages/NewTasks";
import EditTasks from "./pages/EditTasks";
import NotFound from "./pages/NotFound";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/tasks" element={<MyTasks />} />
        <Route path="/new" element={<NewTasks />} />
        <Route path="/edit" element={<EditTasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
