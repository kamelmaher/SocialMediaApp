import { Outlet } from "react-router"
import "./auth.css"
import Account from "./Account"
import { useAppDispatch } from "../../Store/Store"
import { useEffect } from "react"
import { getUsers } from "../../Store/UserSlice"
const LoginPageContainer = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <div style={{ padding: "93px 40px 40px 40px" }}>
            <div className="auth-container row flex-wrap justify-content-center">
                <div className="col-md-6 text-center text-md-start">
                    <div>
                        <h2 className="heading">Facebook</h2>
                    </div>
                    <div className="mt-2 mb-3" style={{ fontWeight: "300" }}>
                        <h3>Recent Logins</h3>
                        <p style={{ fontSize: "14px" }}>Click your picture or add an account.</p>
                    </div>
                    <div className="accounts row gap-3 justify-content-md-start justify-content-center">
                        <Account isActive={true} />
                        <Account isActive={true} />
                        <Account isActive={false} />
                    </div>
                </div>
                <div className="col-md-6 mt-md-auto mb-auto mt-4">
                    <div className="card login m-auto">
                        <div className="card-body">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPageContainer
