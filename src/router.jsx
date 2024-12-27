
import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/mainPage/MainPage";
import { WelcomePage } from "@pages/loginPage/WelcomePage";
import { SignUpPage } from "@pages/signUpPage/SignUpPage";
import { SignUpLayout } from "@layout/SignUpLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <WelcomePage /> },
      { path: "main", element: <MainPage /> },
    ],
  },
  {
    path: "/signup",
    element: <SignUpLayout />,
    children: [
      { path: "", element: <SignUpPage />},
    ]
  },
]);
