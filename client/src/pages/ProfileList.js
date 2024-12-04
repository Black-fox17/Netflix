import './style.css'
import { netflix, background} from '../utils';
const ProfileList = () =>{
    return (
        <main>
            <head>
                <title>Netflix - Profile</title>
                <link rel="stylesheet" href="assets/style.css"/>
            </head>
            <body>
                <nav className="flex justify-between items-center py-3 px-4 fixed w-full z-50">
                    <div className="w-6/12">
                        <img src={netflix} alt="logo" className="w-5/12 md:w-2/12"/>
                    </div>

                    
                </nav>
                <section className='bg-primary_black min-h-screen py-20 md:py-0 flex-col flex justify-center items-center' 
                 style={{ backgroundImage: `url(${background})` }}>
                    <h2 className="text-center font-medium text-5xl my-4 text-gray-100">
                        Who's watching ?
                    </h2>

                    <div className="flex flex-wrap justify-center items-center w-10/12  md:w-6/12">
                        <div className="w-32 h-32 m-4  bg-blue-500 rounded-md cursor-pointer">

                        </div>

                        <div className="w-32 h-32 m-4  bg-blue-500 rounded-md cursor-pointer">

                        </div>

                        <div className="w-32 h-32 m-4  bg-blue-500 rounded-md cursor-pointer">

                        </div>

                        <div className="w-32 h-32 m-4  bg-blue-500 rounded-md cursor-pointer">

                        </div>
                        <div className="w-32 h-32 m-4  bg-blue-500 rounded-md cursor-pointer">

                        </div>
                        <div className="w-32 h-32 m-4  bg-blue-500 rounded-md cursor-pointer">

                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="px-4 py-2 rounded-md outline-none bg-gray-400 text-gray-100">
                            Add A New Profile
                        </button>
                    </div>
                </section>
            </body>
        </main>
    )
}
export default ProfileList;