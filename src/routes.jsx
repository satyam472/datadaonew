import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "./layouts";
import DashLayout from "./layouts"
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import AddCourse from "./pages/addCourse";
import DetailsCourse from "./pages/detailsCourse"
import MyCourse from "./pages/myCourse"
import AddModule from "./pages/module"



// TODO PERFORMANCE - PAGE  - to know the purpose of this
const HomePage = () => <Home />
const DashboardPage = () => <Dashboard />
const AddCoursePage = () => <AddCourse />
const DetailsCoursePage = () => <DetailsCourse />
const MyCoursePage = () => <MyCourse />
const AddModulePage = () => <AddModule />


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
      {
        path:"addmodule",
        element: <AddModulePage />
      }
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
  {
    path:"mycourse",
    element: <MyCoursePage />
  }
]);


