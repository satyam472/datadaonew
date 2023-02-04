import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "./layouts";
import DashLayout from "./layouts"
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import AddCourse from "./pages/addCourse";
import DetailsCourse from "./pages/detailsCourse"



// TODO PERFORMANCE - PAGE  - to know the purpose of this
const HomePage = () => <Home />
const DashboardPage = () => <Dashboard />
const AddCoursePage = () => <AddCourse />
const DetailsCoursePage = () => <DetailsCourse />


export const router = createBrowserRouter([
  //MAIN ROUTES

  {
    path: "/",
    // LAYOUT
    element: <MainLayout />,
    // sub routes

    //PAGES
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashLayout />,
    //PAGES
    children: [
      {
        element: <DashboardPage />,
        index: true,
      },
      {
        path:"add-course",
        element: <AddCoursePage />
      },
      {
        path:"course-details",
        element: <DetailsCoursePage />
      }
    ],
  },


]);


