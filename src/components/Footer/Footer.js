import './Footer.css';
import { FaFacebook, FaBloggerB, FaPatreon } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

function Footer()
{
return(

    <div className="footer-container">
        <div className="inside-footer-container">
<div>
<h1>Store Information</h1>
<hr/>
<div>
<p>Hooy's Vision produce a diverse range of high quality resin miniatures, specialising in fantasy and science fiction figures for painters and collectors..</p>
<p>Based in the Gdańsk we are an independent miniatures company </p>
</div>
</div>

<div>

  <div>
  <h1>SHIPPING</h1>
  <hr/>
  <p>FREE WORLDWIDE SHIPPING on all orders over 400 PLN</p>
</div>
</div>

<div>
<h1>Follow Us</h1>
<hr/>
<div>
<p>Follow us on Social media to preview our all projects</p>



</div>
</div>

</div>

<div className="home-footer">
            <div className="author">
            <p>Hooy's Vision  | Website by <a className="mail" href="mailto:krystianholubowicz@gmail.com">krystianholubowicz@gmail.com</a></p>


</div>
<div className="home-social">
<a href="https://www.facebook.com/Hooysvision/" target="_blank" rel="noreferrer"><FaFacebook  className="fb"/></a>
<a href="https://www.instagram.com/hooysvision/" target="_blank" rel="noreferrer"><AiOutlineInstagram className="insta"/></a>
<a href="https://www.patreon.com/Hooysvision" target="_blank" rel="noreferrer"><FaPatreon className="patreon"/></a>
<a href="http://hooysvision.blogspot.com/search/label/tutorial" target="_blank" rel="noreferrer"><FaBloggerB className="blog"/></a>
</div>
        </div>
    </div>
)
    
}


export default Footer;