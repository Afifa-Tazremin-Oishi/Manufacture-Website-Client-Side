import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from './../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import useToken from '../../../hooks/useToken';



const Login = () => {

    // sign in with email and password hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    // password reset email sent hook
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    // google sign in hook
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);


    // use react hook form
    const { register, getValues, formState: { errors }, handleSubmit } = useForm();


    // use token
    const [token] = useToken(user || gUser);


    // use navigate hook
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    // after getting token redirect user to the previous page
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])



    // loading handle
    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }


    // error message declare and error handle
    let errorMessage;

    if (error || gError) {
        errorMessage = <p className='text-red-600'>{error?.message || gError?.message}</p>
    }


    // form submit
    const onSubmit = data => {

        const email = data.email;
        const password = data.password;

        // sign in
        signInWithEmailAndPassword(email, password);

    };


    // reset password email sent button handler
    const resetPassword = async () => {
        const email = getValues("email");
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }



    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password?.message}</span>}
                            </label>
                        </div>
                        {errorMessage}
                        <input className='btn w-full max-w-xs' type="submit" value="Login " />
                    </form>

                    <p className='text-center'>New to Toolsify? <Link to="/signup" className='text-secondary'>Create New Account</Link></p>
                    <p className='text-center'>Forget Password? <Link to='' className='text-secondary' onClick={resetPassword}>Reset Password</Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue With Google</button>
                </div>
            </div>
        </div >
    );
};

export default Login;