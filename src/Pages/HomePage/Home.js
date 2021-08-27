import React, {Component} from 'react';
import './Home.css';
import { FaFacebook, FaBloggerB, FaPatreon } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import Navbar from '../../components/Navbar/Navbar';


class Home extends Component
{
render()
{
    return(
        
        <div className="home-container">

        <div className="home-logo-container">
        <div className="home-logo">
<img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-1/c0.0.200.200a/p200x200/162084888_129465085848916_8985094392612612406_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=c6021c&_nc_ohc=PXsO4vaEYIIAX9dRITw&_nc_ht=scontent-waw1-1.xx&oh=a487526334a06b57614f573668211df3&oe=614A841C"/>
        </div>

        <div className="home-name">
        <h1>Hooy's Vision</h1>
        </div>
        </div>


        <div className="home-button">         
            <button type="button">SHOP NOW</button>
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
}

export default Home;