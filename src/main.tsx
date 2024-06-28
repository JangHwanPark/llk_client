import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';

import App from './components/pages/App';
import Home from './components/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },
];

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
