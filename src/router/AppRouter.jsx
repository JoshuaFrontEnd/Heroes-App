import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MarvelPage, DCPage, SearchPage, HeroPage } from "../heroes";
import { LoginPage } from "../auth/";
import { HeroesApp } from "../HeroesApp";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute> <HeroesApp /> </PrivateRoute>,
    children: [
        {
            path: 'marvel',
            element: <MarvelPage />,
        },
        {
            path: 'dc',
            element: <DCPage />,
        },
        {
          path: 'search',
          element: <SearchPage />,
        },
        {
          path: 'hero/:id',
          element: <HeroPage />,
        },
        {
          path: '/',
          element: <Navigate to={'dc'} />
        }
    ],
  },
  // Acá estoy llamando solamente al login, por eso no se muestra el 'Navbar'
  {
    path: 'login',
    element: <PublicRoute> <LoginPage /> </PublicRoute>,
  }
])

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}
