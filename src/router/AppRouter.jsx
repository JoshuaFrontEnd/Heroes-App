import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MarvelPage, DCPage, SearchPage, HeroPage } from "../heroes";
import { LoginPage } from "../auth/";
import { HeroesApp } from "../HeroesApp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroesApp />,
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
    element: <LoginPage />,
  }
])

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}
