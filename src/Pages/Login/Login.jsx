import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContest } from '../../Auth/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContest);
    const {googleSignIn} =useContext(AuthContest);

    const formRef = useRef(null);
    const [error, setError] = useState('');
    const location = useLocation();
    const frm = location.state?.frm?.pathname || '/';
    let navigate = useNavigate();

    const handleLogin = (event) =>{
        event.preventDefault();
        setError('')
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email,password);
        if (password.length < 6) {
            setError('Set minimum 6 character password');
            return;
        }
        formRef.current.reset();
        if (email, password) {
            signIn(email, password)
                .then(result => {
                    const ourUser = result.user;
                    console.log(ourUser);
                    navigate(frm, { replace: true });
                    setError('');
                })
                .catch(err => {
                    console.log(err.message);
                    setError(err.message);
                });
        }
    };

       // Google
       const handleGoogle=()=>{
        googleSignIn()
        .then(res=>{
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err.message);
        });
    };


    return (
        // <form onSubmit={handleLogin} ref={formRef} >
        //     <div className="hero min-h-screen bg-base-200">
        //         <div className="hero-content flex-col lg:flex">
        //             <div className="text-center lg:text-left">
        //                 <h1 className="text-5xl font-bold">Login now!</h1>
        //             </div>
        //             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    
        //                 <div className="card-body">
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Email</span>
        //                         </label>
        //                         <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
        //                     </div>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Password</span>
        //                         </label>
        //                         <input type="password" placeholder="Enter Your Password" className="input input-bordered" required/>
        //                         <div className='mt-3'>
        //                                 <Link to="/register" className='text-indigo-800  mt-3'>Don't Have Account? Please Register</Link>
        //                             </div>
        //                     </div>

        //                     <div className="form-control mt-6">
        //                         {/* Google */}
        //                     <div className="flex flex-col w-full border-opacity-50">
        //                             <div className="divider">OR</div>
        //                             <div className=' text-center'>
        //                                 <button onClick={handleGoogle} className="btn btn-circle mb-2 bg-orange-600"> G </button>
        //                             </div>
        //                         </div>

        //                         <button className="btn btn-primary">Login</button>
        //                         <p className='text-red-700'>{error}</p>
        //                     </div>
        //                 </div>
                        
        //             </div>
        //         </div>
        //     </div>
        // </form>
        <form onSubmit={handleLogin} ref={formRef}>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-cyan-800">Login now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                            <label className="label">


                                <div>
                                    <Link to="/register" className='text-indigo-800'>Don't Have Account? Please Register</Link>
                                </div>
                            </label>
                        </div>

                        

                        {/* Button */}
                        <div className="form-control mt-6">

                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                                <div className=' text-center'>
                                    <button onClick={handleGoogle} className="btn btn-circle mb-2 bg-orange-600"> G </button>
                                </div>
                            </div>

                            <button className="btn btn-primary">Login</button>
                            <p className='text-red-700'>{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </form>
    );
};

export default Login;