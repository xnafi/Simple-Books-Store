import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import Home from './Home'
import About from './About'
import Books from './Books'
import BookDetails from './BookDetails'


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      }, {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'books',
        element: <Books />,
        loader: async () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'book/:id',
        element: <BookDetails />,
        loader: async ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
    ]
  },

]);