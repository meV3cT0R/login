import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import AppProvider from './utils/GlobalContextProvider';
import NewLogin from './pages/NewLogin';
import CheckAuth from './utils/CheckAuth';
import NotFound from './pages/NotFound';
import CheckUser from './utils/CheckUser';
import Welcome from './pages/Welcome';


function App() {
  return (
    <AppProvider> {/* Provides global states to all the components */}
      {/* Route Configuration*/}
      <RouterProvider  
          router={createBrowserRouter([
            {
              path :"",
              element : <CheckUser><NewLogin/></CheckUser>
            },
            {
              path :"login",
              element : <CheckUser><NewLogin/></CheckUser>
            },
            {
              path :"alt-login",
              element : <CheckUser><Login/></CheckUser>

            },
            {
              path :"welcome",
              element : <CheckAuth> <Welcome/></CheckAuth>
            },
            {
              path: "*",
              element: <NotFound/>
            }
          ])}
          /> 
      </AppProvider>
  )
}

export default App
