import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts from './pages/Posts';
import PostsApi from './pages/PostsApi';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/posts',
        element: <Posts />,
    },
    {
        path: '/posts-api',
        element: <PostsApi />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes} />);
