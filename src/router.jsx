import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/mainPage/MainPage";
import { WelcomePage } from "@pages/loginPage/WelcomePage";
import { LoginPage } from "@pages/loginPage/LoginPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <WelcomePage /> },
      { path: "main", element: <MainPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);
