import Footer from "./Components/Footer/Footer";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
 } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);



const App = () => <RouterProvider router={router} />

export default App;

// https://www.behance.net/gallery/206947811/Akshay-Patra-Foundation-NGO-Landing-Page-Redesign?tracking_source=search_projects|ngo+web+design&l=5