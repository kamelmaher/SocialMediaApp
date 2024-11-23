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
import Login from './components/Login/Login.tsx'
import SignUp from './components/Login/SignUp.tsx'
import LoginPageContainer from './components/Login/LoginPageContainer.tsx'
import ViewPost from './components/Post/ViewPost.tsx'
import FriendsRequests from './components/UserPage/FriendsRequests.tsx'
import Loader from './Loader.tsx'
import ProtectedRoute from './ProtectedRoute.tsx'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route  element={<Loader />}>
            <Route path='auth/' element={<LoginPageContainer />}>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
            </Route>
            <Route path='/' element={<ProtectedRoute />}>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/list/:id' element={<List />}></Route>
                    <Route path='/post/:postId' element={<ViewPost />} />
                    <Route path='/requests' element={<FriendsRequests />} />
                </Route>
                <Route path='user/:userId' element={<User />}></Route>
            </Route>
        </Route>
    )
)
createRoot(document.getElementById('root')!).render(
    <Provider store={Store}>
        <RouterProvider router={router} />
    </Provider>
)
