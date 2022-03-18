import React from "react"

 
 
 function Services() {


 return (
 <>
  {/* <!--*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Services Section *-*-*-*-*-*-*-*-*-*-*-*-*-*-*--> */}

 <section className="serviceColor">
    {/* <!-- Service 1 --> */}
    <h1 className=" text-7xl text-white font-bold text-center p-5" data-aos='slide-up' > My Services: </h1>    
    <div id="services">
    <div class="service services__service-1">
      <i class="fas fa-quidditch"></i>
      <h3 class="services--title services__service-1--title">UI/UX Design</h3>
      <p class="services--para services__service-1--para">
      Providing an all-in-one UI/UX solution for designing websites, 
      mobile apps, that can create visually-stimulating experiences
      </p>
    </div>

    {/* <!-- Service 2 --> */}
    <div class="service services__service-2">
      <i class="fas fa-tasks"></i>
      <h3 class="services--title services__service-2--title">
      Front-End 
       {/* Development */}
      </h3>
      <p class="services--para services__service-2--para">
      Providing an efficient and sustainable workflow using agile methodology, 
       to improve quality of frontend code.
      </p>
    </div>

    {/* <!-- Service 3 --> */}
    <div class="service services__service-3">
      <i class="fas fa-mobile-alt"></i>
      <h3 class="services--title services__service-3--title">
        
        Graphic Design
      </h3>
      <p class="services--para services__service-3--para">
       
      Planning and projecting ideas and experiences with visual and textual content.
      </p>
    </div>

    {/* <!-- Service 4 --> */}
    <div class="service services__service-4">
      <i class="fas fa-paint-roller"></i>
      <h3 class="services--title services__service-4--title">
      Back-end 
      </h3>
      <p class="services--para services__service-4--para">
      Managing the interchange of data between the server and the users. focusing on development of all server-side logic, 
      maintenance of the central database, and ensuring high performance and stability
      </p>
    </div>

    {/* <!-- Service 5 --> */}
    <div class="service services__service-5">
      <i class="far fa-edit"></i>
      <h3 class="services--title services__service-5--title">
        Blockchain development
      </h3>
      <p class="services--para services__service-5--para">      
      Offering blockchain/decentralized powered solutions to build innovative products that augment digital currency (Ethereum, Bitcoin, etc) 
      for economic transactions per your each transaction needs. 
      </p>
      </div>
    </div>

  </section>
  </>

   )
 }
 export default Services