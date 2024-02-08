import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AdminPage from './components/admin/AdminPage.jsx'
import MeetingList from './components/meetings/MeetingList.jsx'
import ServicesList from './components/services/ServiceList.jsx'
import HomePage from './components/HomePage.jsx'
import UserHome from './components/user/UserHome.jsx'
import EditBusinessData from './components/businessData/EditBusinessData.jsx'
import ErrorPage from './components/error/ErrorPage.jsx'
import './index.css'

const routesArray = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/admin',
    element: <AdminPage />,
    children: [
      {
        path: 'services',
        element: <ServicesList />
      },

      {
        path: 'appointment',
        element: <MeetingList />

      },
    ]
  },
  {
    path: '/user',
    element: <UserHome />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routesArray} />
  </React.StrictMode>,
)

