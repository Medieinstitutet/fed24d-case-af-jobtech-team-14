import { createBrowserRouter } from 'react-router'
import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { Jobs } from './pages/Jobs'
import { JobDetails } from './pages/JobDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'annonser',
        element: <Jobs />,
      },
      {
        path: 'annons/:id',
        element: <JobDetails />,
      },
    ],
  },
])
