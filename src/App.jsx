import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Detail from './components/pages/Detail/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/post/:postId",
    element: <Detail />
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
