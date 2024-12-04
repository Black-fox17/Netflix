import './style.css'
import { background,netflix} from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Signin = () =>{
    const [press,setPress] = useState(false);
    return(
        <main>
            <head>
                <title>Netflix Login</title>
                <link rel="stylesheet" href="assets/style.css"/>
                <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
            </head>
            <body>
                <nav className="flex justify-between items-center py-3 px-4 fixed w-full z-50">
                    <div className="w-6/12">
                        <img src={netflix} alt="logo" className="w-5/12 md:w-2/12"/>
                    </div>

                    <div>
                        <button className='bg-primary_red py-1 px-3 text-white md:text-lg rounded-md'>
                            Sign In 
                        </button>
                    </div>
                </nav>
                <header className="min-h-screen w-full bg-black bg-opacity-75 showcase border-gray-600 border-b-8 flex justify-center py-20 bg-no-repeat" 
                 style={{ backgroundImage: `url(${background})` }}>
                    <div className="z-10 h-full py-32 md:py-0 text-gray-100 w-6/12  flex items-center flex-col">
                        <form className="bg-black bg-opacity-70 py-8 px-4 w-8/12 rounded-md" >
                            <h1 className="text-4xl font-semibold text-center ">
                                Log In
                            </h1>
                            <div className=" text-center my-4">
                                <p className="text-primary_red ">
                                    Wrong credentials
                                </p>
                            
                            </div>
                            <div> 
                                <label className='text-lg font-medium mb-3'>
                                    Email
                                </label>
                                <input className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full" type="email" name="email" id="id_email" placeholder="Your Email"/>
                            </div>
                            <div className='my-3'> 
                                <label className='text-lg font-medium mb-3'>
                                    Password
                                </label>
                                <input className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full" type="password" name="password" id="id_password" placeholder="Password"/>
                            </div>
                            <div className="flex justify-center items-center">
                                <button 
                                 onClick={() => setPress(true)}>
                                    <Link 
                                    to = "/ProfileList"
                                    className="py-2 px-4 bg-primary_red text-gray-100 font-medium text-lg rounded-md">
                                        Log In
                                    </Link>
                                </button>
                            </div>

                            <div className="text-center my-4">
                                <p>
                                    Do not have account
                                    <Link
                                     to = "/Signup"
                                     className='text-blue-600'>
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </header>
            </body>
        </main>
    )
}
export default Signin;