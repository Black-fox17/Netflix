import './style.css'
import { netflix,tv,netkid,background,mobile} from '../utils';
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <main>
            <head>
                <title>Netflix</title>
                {/* <link rel="stylesheet" href="assets/style.css"> */}
                {/* <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script> */}
            </head>
            <body className="bg-black text-gray-100">
                <nav className="flex justify-between items-center py-3 px-4 fixed w-full z-50">
                    <div className="w-6/12">
                        <img src= {netflix} alt="logo" className="w-5/12 md:w-2/12"/>
                    </div>

                    <div>
                        <Link
                            to= "/login"
                            className='bg-primary_red py-1 px-3 text-white md:text-lg rounded-md'>
                            Sign In
                        </Link>
                    </div>
                </nav>
                <header 
                className="min-h-screen bg-black bg-opacity-75 showcase border-gray-600 border-b-8 flex justify-center items-center bg-no-repeat"  
                style={{ backgroundImage: `url(${background})` }}
                >
                    <div className="z-10 h-full py-32 md:py-0 text-gray-100 text-center flex items-center flex-col">
                        <h1 className="font-semibold text-4xl md:text-5xl w-10/12 md:w-3/4 text-center">
                            Unlimited movies, TV shows, and more.
                        </h1>
                        <h3 className="text-xl md:text-xl py-5">
                            Watch anywhere. Cancel anytime.
                        </h3>
                        <h4 className="text-sm md:text-lg pb-3">
                            Ready to watch? Enter your email to create or restart your membership.
                        </h4>

                        <div className="w-full flex justify-center">
                            <div className="flex justify-center items-center w-11/12 md:w-10/12">
                                <input type="email" name="" id="" placeholder="Email address" className="md:py-5 py-4 px-2 placeholder-gray-500 rounded-tl-sm rounded-bl-sm outline-none  text-gray-900 bg-gray-50 block w-8/12 md:w-3/4"/>
                                <button className="bg-primary_red font-medium md:font-normal md:w-1/4 flex justify-center items-center py-4 px-1 md:px-0 rounded-br-sm rounded-tr-sm md:text-2xl">
                                    <span>
                                        Get Started
                                    </span>
                                    <ion-icon 
                                        name="chevron-forward-outline" 
                                        style={{ color: 'blue', fontSize: '24px' }}
                                        ></ion-icon>

                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <section className='flex flex-col md:flex-row items-center border-gray-900 border-b-8' style={{minHeight: "70vh"}}>
                    <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10 ">
                        <h2 className="md:text-5xl text-4xl font-semibold mb-4">
                            Enjoy on your TV.
                        </h2>
                        <h5 className="md:text-xl text-lg">
                            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                        </h5>
                    </div>
                    <div className='md:w-1/2 flex justify-center items-center'>
                        <img src={tv} className="w-8/12" alt=""/>
                    </div>
                </section>

                <section className='flex flex-col md:flex-row items-center border-gray-900 border-b-8' style={{minHeight:"70vh"}}>
                    <div className='md:w-1/2 flex justify-center items-center order-2'>
                        <img src={mobile} className="w-8/12" alt=""/>
                    </div>

                    <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10">
                        <h2 className="md:text-5xl text-4xl font-semibold mb-4">
                            Download your shows to watch offline.
                        </h2>
                        <h5 className="md:text-xl text-lg">
                            Save your favorites easily and always have something to watch.
                        </h5>
                    </div>
                    
                </section>

                <section className='flex flex-col md:flex-row items-center border-gray-900 border-b-8' style={{minHeight:"70vh"}}>
                    <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10">
                        <h2 className="md:text-5xl text-4xl font-semibold mb-4">
                            Create profiles for kids.
                        </h2>
                        <h5 className="md:text-xl text-lg">
                            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                        </h5>
                    </div>
                    <div className='md:w-1/2 flex justify-center items-center'>
                        <img src={netkid} className="w-8/12" alt=""/>
                    </div>
                </section>
                <footer className=" px-5 py-10 ">
                    <ul className="flex justify-between items-center">
                        
                        <li>&copy; All Right Reserved | 2022</li>
                        <li> Netflix Clone</li>
                        <li>Hehe</li>
                    </ul>
                </footer>
            </body>
        </main>
    )
}
export default Home;