import './style.css'
import { background,netflix } from '../utils';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
const Signup = () =>{
    const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: ""});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log(value)
    };

    const handlesignup = async (e) =>{
        e.preventDefault();
        if (!isFormValid()) {
            setError({
                passwordMismatch: formData.password !== formData.confirmPassword
            });
            return;
        }
        try {

            const response = await axios.post('http://localhost:8000/api/signup', formData);
            if(response.data.result === "no"){
                navigate('/login');
            }else{
                setError({ emailExists: true });
            }
            console.log('Data added successfully', response.data);
        } catch (error) {
            console.error('Error signing up:', error);
            alert('An error occurred while signing up. Please try again later.');
        }
    }
    const [error, setError] = useState({
        emailExists: false,
        passwordMismatch: false
    });
    const isFormValid = () => {
        return (
            formData.email && 
            formData.password && 
            formData.password === formData.confirmPassword && 
            formData.password.length >= 7
        );
    };
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );
    return(
        <div>
            <main>
                <div>
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
                    <header className="min-h-screen w-full bg-black bg-opacity-75 showcase relative border-gray-600 border-b-8 flex justify-center py-20 bg-no-repeat"  
                    style={{ backgroundImage: `url(${background})` }}>
                        <div className="z-10 min-h-full py-32 md:py-0 text-gray-100 w-6/12  flex items-center flex-col">
                            <form className="bg-black bg-opacity-70 min-h-full py-8 px-4 w-8/12 rounded-md" onSubmit={handlesignup}>
                                <h1 className="text-4xl font-semibold text-center ">
                                    Sign Up
                                </h1>
                                {error.emailExists &&(
                                    <div className=" text-center my-4">
                                            <p className="text-primary_red ">
                                                Email exists please change email
                                            </p>
                                    </div>
                                )
                                }
                                {error.passwordMismatch &&(
                                        <div className=" text-center my-4">
                                            {/* <p className="text-primary_red ">
                                                Email is not valid
                                            </p>
                                            */}
                                            <p className="text-primary_red ">
                                                Password does not match
                                            </p>
                                    </div>
                                )}
                                <div> 
                                    <label className='text-lg font-medium mb-3'>
                                        Email
                                    </label>
                                    <input className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full" 
                                    type="email"
                                    name="email" 
                                    id="id_email"
                                    placeholder="Your Email"
                                    autoComplete='new-email'
                                    value = {formData.email}
                                    onChange={handleChange}/>
                                </div>
                                <div className='my-3'> 
                                    <label className='text-lg font-medium mb-3'>
                                        Password
                                    </label>
                                    <input className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full" 
                                    type="password" 
                                    name="password" 
                                    id="id_password" 
                                    placeholder="Password"
                                    autoComplete='new-password'
                                    value = {formData.password}
                                    onChange={handleChange}/>
                                </div>
                                <div className='my-3'> 
                                    <label className='text-lg font-medium mb-3'>
                                        Confirm Password
                                    </label>
                                    <input className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full" 
                                    type="password" 
                                    name="confirmPassword" 
                                    id="id_password2" 
                                    placeholder="Password"
                                    autoComplete='new-password'
                                    value = {formData.confirmPassword}
                                    onChange={handleChange}/>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="py-2 px-4 bg-primary_red text-gray-100 font-medium text-lg rounded-md">
                                        Sign Up
                                    </button>
                                </div>

                                <div className="text-center mt-4">
                                    <p>
                                        Have account already? 
                                        <Link
                                        to = "/login"
                                        className='text-blue-600'>
                                            Log in
                                        </Link>
                                    </p>
                                </div>
                                <div >
                                        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                                </div>
                            </form>
                        </div>
                    </header>
                </div>
            </main>
        </div>
    )
}
export default Signup;