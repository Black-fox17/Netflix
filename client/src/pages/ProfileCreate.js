import './style.css'
const ProfileCreate = () =>{
    return (
        <main>
            <head>
                <title>Netflix - Profile</title>
                <link rel="stylesheet" href="assets/style.css"/>
            </head>
            <body>
                <nav className="flex justify-between items-center py-3 px-4 fixed w-full z-50">
                    <div className="w-6/12">
                        <img src="assets/netflix.png" alt="logo" className="w-5/12 md:w-2/12"/>
                    </div>

                    
                </nav>
                <section className='bg-primary_black min-h-screen py-20 md:py-32 flex-col flex items-center' style="background-image: url('assets/background_netflix.jpg');">
                    <div className="flex flex-wrap justify-center  w-10/12  md:w-6/12">
                        <form className="w-full md:w-8/12 bg-gray-900 p-5 rounded-lg">
                            <h1 className="text-4xl text-center text-gray-100 font-medium">
                                Create A Profile
                            </h1>
                            <div className="my-4"> 
                                <label className='text-lg text-gray-200 font-medium mb-3'>
                                    Profile Name
                                </label>
                                <input required className="p-2 bg-gray-500 rounded-sm text-gray-200 outline-none block w-full" type="text" name="profile_name" id="id_email" placeholder="Profile name"/>
                            </div>
                            <div className="my-4"> 
                                <label className='text-lg text-gray-200 font-medium mb-3'>
                                    Maturity Level
                                </label>
                                <select className="p-2 bg-gray-500 rounded-sm text-gray-200 outline-none block w-full"  name="profile_name" id="id_email" >
                                    <option value="All">All</option>
                                    <option value="Kids">Kids</option>
                                
                                </select>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="px-4 py-2 rounded-md outline-none bg-primary_red text-gray-100">Create Profile</button>
                            </div>
                        </form> 
                    </div>
                    
                </section>
            </body>
        </main>
    )
}
export default ProfileCreate;