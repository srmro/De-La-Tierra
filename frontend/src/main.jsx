import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Welcome from '../pages/Welcome.jsx';
import About from '../pages/About.jsx';
import StartingOnAGarden from '../pages/StartingOnAGarden.jsx';
import Newsfeed from '../pages/Newsfeed.jsx';
import Annuals from '../components/Annuals.jsx';
import Perennials from '../components/Perennials.jsx';
import Crops from '../components/Crops.jsx';
import LogIn from '../pages/LogIn.jsx';
import SignUp from '../pages/SignUp.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { path: '/about', element: <About /> },
  { path: '/starting-on-a-garden', element: <StartingOnAGarden /> },
  { path: '/newsfeed', element: <Newsfeed /> },
  { path: '/annuals', element: <Annuals /> },
  { path: '/perennials', element: <Perennials /> },
  { path: '/crops', element: <Crops /> },
  { path: '/login', element: <LogIn /> },
  { path: 'signup', element: <SignUp /> }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />

  </StrictMode>,
)
