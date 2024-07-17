import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// import pages
import App from './pages/App';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Buy from "./pages/Buy";

// import css
import './styles/index.scss';
import {AuthProvider} from './context/AuthContext';
import About from './pages/About';
import {APIProvider} from "@vis.gl/react-google-maps";

// 라우터 설정
const routes = [
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'signin', element: <SignIn/>},
      {path: 'signup', element: <SignUp/>},
      {path: 'about', element: <About/>},
      {path: 'buy', element: <Buy/>},
    ],
  },
];

// 라우터 생성 및 쿼리클라이언트 생성
const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
        </QueryClientProvider>
      </AuthProvider>
    </APIProvider>
  </React.StrictMode>
);
