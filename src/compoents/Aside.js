

  import { Link } from "react-router-dom";

function Aside() {


return(
    <div id="side-nav">
    <div class="side-nav__content">
  <div class="side-nav__content--logo">
    <img src="img/kliff_city8.jpg" alt="logo"  />
  </div>
  <ul class="side-nav__content--social">
          <a href="https://twitter.com/SilverKliff"><i class="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/cliffton-thelusca-581aa8225/"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/kliff9"><i class="fab fa-github"></i></a>
          <a href="mailto:c.thelusca@hotmail.com"><i class="fa fa-envelope-o"></i></a>


  </ul>
</div>
</div>
    )
}

export default Aside