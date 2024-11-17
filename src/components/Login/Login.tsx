import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAppDispatch, useAppSelector } from "../../Store/Store";
import { logIn } from "../../Store/UserSlice";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const [userNotFound, setUserNotFound] = useState(false)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const users = useAppSelector(state => state.User.users)
    const schema = z.object({
        email: z.string({ message: "please enter invalid email" }),
        password: z.string().min(4, "Too Short Password"),
    });
    type FormValues = z.infer<typeof schema>;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data: FormValues) => {
        let userFound = false
        users.map(user => {
            if (user.email == data.email && user.password == data.password) {
                dispatch(logIn(user))
                userFound = true
                navigate("/")
            }
        })
        if (!userFound) {
            setUserNotFound(true)
        }
    }
    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            {
                userNotFound && <p className="text-danger">Email or Password is wrong</p>
            }
            <div className="mb-3">
                <input type="email" className="form-control p-2" placeholder="Email Address or Phone Number" {...register("email")} />
                {errors.email?.message && <p className="text-danger">{errors.email.message}</p>}
            </div>
            <div className="mb-3">
                <input type="password" className="form-control p-2" placeholder="Password" {...register("password")} />
                {errors.password?.message && <p className="text-danger">{errors.password.message}</p>}
            </div>
            <div className="text-center">
                <button className="btn btn-primary w-100 pt-2 pb-2 fs-5 mb-3">Login</button>
                <a href="#" className="mb-4 d-block">Forgetten Password?</a>
            </div>
            <hr />
            <button className="btn btn-success w-100 pt-2 pb-2 fs-5 mt-4">Create Account</button>
        </form>
    )
}

export default Login
