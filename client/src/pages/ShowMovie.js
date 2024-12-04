import './style.css'
const ShowMovie = ()=>{
    return (
        <main>
            <head>
                <title>Netflix - Movie</title>
                <link rel="stylesheet" href="assets/style.css"/>
                <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
                {/* <style>
                    .player::-webkit-progress-bar{
                        color: red;
                    }
                </style> */}
            </head>
            <body className='font-primary'>
                <nav className="flex justify-between items-center py-3 bg-gray-900  px-4 w-full z-50">
                    <div className="w-6/12">
                        <img src="assets/netflix.png" alt="logo" className="w-5/12 md:w-2/12"/>
                    </div>
                    

                    <div>
                        <button className='bg-primary_red py-1 px-3 text-white md:text-lg rounded-md'>
                            Log out
                        </button>
                    </div>
                    
                </nav>
                <main className='bg-primary_black h-full w-full '>
                    
                    <video src="assets/test.mp4" controls className="w-full h-screen player"></video>
                    
                </main>
            </body>
        </main>
    );
}
export default ShowMovie;