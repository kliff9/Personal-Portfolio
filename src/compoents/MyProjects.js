


function MyProjects() {



    return (
        <>
          <section className="My_Projects">
    <h1 className="My_Projects text-7xl text-white font-bold text-center p-5" data-aos='slide-up' > My Projects: </h1>
    <div id="work">
 

    <div class="work__card">
      <img src="img/bag.webp" alt="poster" class="imagee"/>
      <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 ' >
      <h1 className='text-5xl font-semibold text-yellow-600	'>E-commerce </h1>
      <a href="https://kliff-e-com.herokuapp.com/" className='border-2 rounded border-white p-3.5 hover:bg-green-500 px-5 mt-5 text-white'> View </a>
  </div>
    </div>

    <div class="work__card">
      <img src="img/Bot.jpg" alt="poster" class="imagee"/>
      <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 ' >
      <h1 className='text-5xl font-semibold text-yellow-600	'>Automated UniSwap Bot</h1>
     <a href="https://github.com/kliff9/UniSwap-Trading-Bot" className='border-2 rounded border-white p-3.5 hover:bg-green-500 px-5 mt-5 text-white'> View </a> 
  </div>
    </div> 

    <div class="work__card">
      <img src="img/eevee.webp" alt="poster" class="imagee"/>
      <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 ' >
      <h1 className='text-5xl font-semibold text-yellow-600	'>Pokemon Deck Builder </h1>
      <a href="https://pkmntcg0.herokuapp.com/" className='border-2 rounded border-white p-3.5 hover:bg-green-500 px-5 mt-5 text-white'> View </a>
  </div>
    </div>
    </div> 

    <a href="https://github.com/kliff9" className="text-4xl font-semibold text-center md:text-xl ml50 More_Projects_content--link">Click Here for More Projects...</a>

 
  </section>
        
        </>
    )
}

export default MyProjects