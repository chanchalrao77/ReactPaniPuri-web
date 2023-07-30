import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className='.footer'>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Krishna Panipuri</h1>
                <p className="footer-text">
                  Lorem ipsum Here are thriteen health benefits of apples Lorem
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >chanchalrao7.cr@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" > chanchal rao</Link>
                  </li>
                  <li>
                    <Link to="#" >+352 444 44 44</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/chanchalrao77" > Github</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/chanchalrao77" > Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="www.linkedin.com/in/chanchal-rao-996b2325b"> Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>
      </div>
    </footer>
  );
}
export default Footer;
