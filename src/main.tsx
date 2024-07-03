import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import pages
import App from './pages/App';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// import css
import './styles/index.scss';

// 라우터 설정
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home/>},
      {path: 'signin', element: <SignIn/>},
      {path: 'signup', element: <SignUp/>}
    ],
  },
];

// 라우터 생성 및 쿼리클라이언트 생성
const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);