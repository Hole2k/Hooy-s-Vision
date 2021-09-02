import React, {Component} from 'react';
import './Login.css';
import {LoginItems} from './LoginItems';


class Login extends Component{
    render()
    {
        return(
            <div className="login-container">
              <div className="login-form">
<form>
    <h2>Login</h2>
    <label for="user">Username or email adress</label>
    <input type="text" id="user" name="user"/>

    <label for="password">Password</label>
    <input type="text" id="password" name="password"/>
    <p><a href="/remind">Remind password</a></p>
    <input type="checkbox" />Remember me 
  <span class="checkmark"></span>
    <input type="submit" value="Login"/>
</form>
              </div>

              <div className="login-logo">
              <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-1/c0.0.200.200a/p200x200/162084888_129465085848916_8985094392612612406_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=c6021c&_nc_ohc=PXsO4vaEYIIAX9dRITw&_nc_ht=scontent-waw1-1.xx&oh=a487526334a06b57614f573668211df3&oe=614A841C" alt="logo"/>

              </div>
            </div>
        )
    }
}

export default Login;