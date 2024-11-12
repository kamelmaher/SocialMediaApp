import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from './Layout/Layout.tsx'
import "./App.css"
import "./glopals.css"
import User from './components/UserPage/User.tsx'
import List from './components/List/List.tsx'
import Home from './components/HomePage/Home.tsx'
import { Store } from './Store/Store.ts'
import { Provider } from 'react-redux'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/list/:id' element={<List></List>}></Route>
                <Route path='/user/1' element={<User />}></Route>
            </Route>
        </Route>
    )
)
createRoot(document.getElementById('root')!).render(
    <Provider store={Store}>
        <RouterProvider router={router} />
    </Provider>
)
