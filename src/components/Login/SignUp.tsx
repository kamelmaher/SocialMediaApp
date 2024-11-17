import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../Store/Store";
import { User } from "../../types/User";
import { signUp } from "../../Store/UserSlice";
import { useNavigate } from "react-router";
const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const users = useAppSelector(state => state.User.users)
    const schema = z.object({
        fname: z.string().min(3, "First Name is required"),
        lname: z.string().min(3, "Last Name is required"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(4, "Too Short Password"),
        age: z.string({ required_error: "Date is required" }).transform((value) => new Date(value))
            .refine((date) => !isNaN(date.getTime()), "Invalid date format")
            .refine(
                (date) => date <= new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
                "You must be at least 18 years old"
            ),
        gender: z.string().nonempty("Male is required"),
    });
    type FormValues = z.infer<typeof schema>;
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormValues) => {
        let emailFound = false
        users.map(e => {
            if (e.email == data.email) {
                setError("email", { type: "manual", message: "Email already exists" });
                emailFound = true
            }
        })
        if (!emailFound) {

            const birthYear = data.age.getFullYear();
            const today = new Date()
            const age = today.getFullYear() - birthYear
            const newUser: User = {
                id: Math.floor(Math.random() * 1000) + 1,
                fname: data.fname,
                lname: data.lname,
                email: data.email,
                password: data.password,
                gender: data.gender,
                age: age,
                img: ""
            }
            dispatch(signUp(newUser))
            navigate("/auth/login")
        }
    };
    return (
        <>
            <div className="mb-2 text-center">
                <h3 >Create a new account</h3>
                <p>It's quick and easy.</p>
            </div>
            <hr />
            <form className="sign-up mt-3" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" placeholder="First Name" className="form-control"{...register("fname")} />
                    {errors.fname && <p className="text-danger">{errors.fname.message}</p>}
                </div>
                <div>
                    <input type="text" placeholder="Last Name" className="form-control" {...register("lname")} />
                    {errors.lname && <p className="text-danger">{errors.lname.message}</p>}
                </div>
                <div>
                    <input type="date" placeholder="Date Of Birth" className="form-control" {...register("age")} />
                    {errors.age && <p className="text-danger">{errors.age.message}</p>}
                </div>
                <div>
                    <select className="form-select" {...register("gender")}>
                        <option disabled>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">FeMale</option>
                    </select>
                    {errors.gender && <p className="text-danger">{errors.gender.message}</p>}
                </div>
                <div>
                    <input type="email" placeholder="Email" className="form-control" {...register("email")} />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                <div>
                    <input type="password" placeholder="Password" className="form-control" {...register("password")} />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}

                </div>
                <div className="text-center">
                    <button className="btn btn-success mb-2">Sign Up</button>
                    <a href="" className="d-block">Already have account?</a>
                </div>
            </form>
        </>
    )
}

export default SignUp
