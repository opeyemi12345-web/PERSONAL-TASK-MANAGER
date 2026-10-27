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
        <Route path="/edit/:id" element={<EditTasks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// client -> HTTP request -> server -> database -> Task.find() ->
// server(json) -> GET /api/tasks -> client

// 1. The user clicks something in the **client**.
// 2. The client sends an **HTTP request** to the **server** (e.g.
// "give me all tasks").
// 3. The server asks **MongoDB** for the data.
// 4. The server sends the data back as **JSON**.
// 5. The client shows it on the page.
