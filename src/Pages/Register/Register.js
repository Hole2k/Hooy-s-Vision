import React, {Component} from 'react';
import './Register.css'
import {RegisterItem} from './RegisterItems'

class Register extends Component
{
    render()
    {
        return(
            <div className="register-container">
                <div className="register-form">
<form>
<h2>Register</h2>
<label for="name">First Name</label>
<br/>
<input className="name" type="text" id="name" name="name"/><br/>

<label for="lname">Last Name</label>
<br/>
<input className="lname" type="text" id="lname" name="lname"/><br/>

<label for="email">E-mail</label>
<input type="text" id="email" name="email"/>

<label for="Password">Password</label>
<input type="text" id="Password" name="Password"/>


<input type="submit" value="Login"/>



</form>
                </div>
<div className="register-logo">
<img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-1/c0.0.200.200a/p200x200/162084888_129465085848916_8985094392612612406_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=c6021c&_nc_ohc=PXsO4vaEYIIAX9dRITw&_nc_ht=scontent-waw1-1.xx&oh=a487526334a06b57614f573668211df3&oe=614A841C" alt="logo"/>

</div>
            </div>
        )
    }
}

export default Register;