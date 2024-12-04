import './style.css'
const MovieDetail = () =>{
    return (
        <main>
            <head>
                <title>Netflix - Detail Page</title>
                <link rel="stylesheet" href="assets/style.css"/>
                <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
            </head>
            <body className='font-primary'>
                <nav className="flex justify-between items-center py-3 px-4 fixed w-full z-50">
                    <div className="w-6/12">
                        <img src="assets/netflix.png" alt="logo" className="w-5/12 md:w-2/12"/>
                    </div>

                    <div>
                        <button className='bg-primary_red py-1 px-3 text-white md:text-lg rounded-md'>
                            Log out
                        </button>
                    </div>
                    
                </nav>
                <main className='bg-primary_black min-h-screen w-full'>
                    <section className="h-screen relative bg-no-repeat pb-8 pl-6 flex justify-end items-end bg-cover" style="background-image: url('assets/vikings.jpg');">
                        <div>
                            <h2 className="text-6xl font-semibold text-white my-4" style="font-weight: bolder;">
                                Vikings
                            </h2>
                            <p className=" w-11/12 md:w-5/12 font-medium text-white my-4">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus repellendus odit perspiciatis nostrum culpa exercitationem quis. Ab obcaecati odio minus. Dolorum sapiente eaque, repellendus ea fugiat amet fuga libero at!
                            </p>
                            <div className="flex my-4">

                                <button className="flex items-center bg-white py-2 px-5 rounded-md">
                                    <ion-icon name="play" className="text-2xl"></ion-icon>
                                    <span className="ml-3 font-medium">
                                        Play
                                    </span>
                                </button>
                
                                
                            </div>
                        </div>
                    </section> 
                    <section className='bg-primary_black  min-h-screen flex justify-center py-10'>
                        <div className="p-8 w-10/12 relative" >
                            <h2 className="text-gray-200 text-3xl font-medium">
                                Description
                            </h2>
                            <div className="flex justify-center  items-center min-w-full  movie_lis">
                                <p className="text-gray-100 text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut earum atque in, vero veniam sequi possimus optio ipsum laboriosam porro et explicabo soluta ea voluptatibus quam commodi, asperiores dignissimos! Quam!
                                    Tenetur ut dolores eveniet error, repellendus iusto in iure. Amet, dolor ea? Eos cupiditate voluptate maxime iusto quae, accusantium delectus cumque odio unde, alias accusamus molestiae ullam minus rerum repudiandae.
                                    Vitae sapiente error quam, corporis ex ab sed rem. Similique amet, vero ea blanditiis architecto error corrupti alias eius, inventore labore libero in nemo quos modi, sint voluptates voluptate ratione.
                                    Deleniti cupiditate quidem facilis nam eius natus deserunt ut quos ullam similique, iste dignissimos. Itaque, totam? Ad delectus numquam cumque! Dolorem quod voluptatibus dolor repellat porro ullam nemo voluptas quasi.
                                    Aspernatur laborum velit nemo enim natus quasi aperiam quis, non fuga voluptatum eius, omnis illo id corporis distinctio eligendi harum, magni veniam ipsam labore! A sed dolore dicta ea perferendis.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                </main>
                {/* <script>
                    const nav = document.querySelector('nav')

                    document.addEventListener("scroll",e=>{
                        
                        if(scrollY>200){
                            nav.classList.add('bg-gray-900')
                    
                        }else{
                            nav.classList.remove('bg-gray-900')
                            
                        }
                    })

                </script> */}
            </body>
        </main>
    )
}
export default MovieDetail;