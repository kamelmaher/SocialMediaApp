import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from './Layout/Layout.tsx'
import "./App.css"
import "./glopals.css"
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
        </Route>
    )
)
createRoot(document.getElementById('root')!).render(
        <RouterProvider router={router}/>
)
