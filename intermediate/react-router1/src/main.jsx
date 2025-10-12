import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./controllers/Home/Home";
import About from "./controllers/About/About";
import Contact from "./controllers/Contact/Contact";
import User from './controllers/User/User'
import Github from "./controllers/Github/Github";
// ✅ Correct Router Definition
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />           
      <Route path="about" element={<About />} />   
      <Route path="contact" element={<Contact />} /> 
      <Route path="user/:userid" element={<User/>} /> 
      <Route path="github" element ={<Github/>}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
