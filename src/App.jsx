
import {Routes,Route} from "react-router-dom"
import Home from "./pages/home";
import Task1 from "./components/task1/task1";
import Task2 from "./components/task2/task2";
import Task4 from "./components/task4/task4";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/task1" element={<Task1/>} />
      <Route path="/task2" element={<Task2/>} />
      <Route path="/task4" element={<Task4/>} />


    </Routes>
  )
}