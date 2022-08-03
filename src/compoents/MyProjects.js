


function MyProjects() {



    return (
        <>
          <section className="My_Projects">
    <h1 className="My_Projects text-7xl text-white font-bold text-center p-5" data-aos='slide-up' > My Projects: </h1>
    <div id="work">
 

    <div class="work__card">
      <img src="img/shop.jpg" alt="poster" class="imagee"/>
      <div className='absolute inset-8 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 shape' >
      <h1 className='text-6xl font-semibold text-yellow-600	'>E-commerce </h1>
      <a href="https://kliff-e-com.herokuapp.com/" className='text-3xl border-2 rounded border-white p-3.5 hover:bg-green-500 px-5 mt-5 text-white h-24 w-36   flex justify-center items-center	'> View </a>
  </div>
    </div>

    <div class="work__card">
      <img src="img/Bot.jpg" alt="poster" class="imagee"/>
      <div className='absolute inset-8 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 ' >
      <h1 className='text-6xl font-semibold text-yellow-600	'>Automated UniSwap Bot</h1>
     <a href="https://github.com/kliff9/UniSwap-Trading-Bot" className='text-3xl border-2 rounded border-white p-3.5 hover:bg-green-500 px-5 mt-5 text-white h-24 w-36   flex justify-center items-center	'> View </a> 
  </div>
    </div> 

    <div class="work__card">
      <img src="img/movies.jpg" alt="poster" class="imagee"/>
      <div className='absolute inset-8 flex items-center justify-center flex-col bg-black opacity-0 hover:opacity-80 ' >
      <h1 className='text-6xl font-semibold text-yellow-600	'> Movies App </h1>
      <a href="https://rpmovies.netlify.app/" className='text-3xl border-2 rounded border-white p-3.5 hover:bg-green-500 px-5 mt-5 text-white h-24 w-36   flex justify-center items-center	'> View </a>
  </div>
    </div>
    </div> 

    <a href="https://github.com/kliff9" className="text-4xl font-semibold text-center md:text-xl ml50 More_Projects_content--link">Click Here for More Projects...</a>

 
  </section>
        
        </>
    )
}

export default MyProjects