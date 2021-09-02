import React, {Component} from 'react';
import './Contact.css';



class Contact extends Component
{
    render()
    {
        return(
<div className="contact-container">
    <div className="contact-us">
    <form>
<h1>Contact us</h1>

<label for="name">Name</label>
<input type="text" id="name" name="name"/>
<label for="email">E-mail</label>
<input type="text" id="email" name="email"/>
<label for="country">Country</label>
<select id="country" name="country">
<option value="Choose"hidden>Choose</option>
        <option value="Poland">Poland</option>
        <option value="USA">USA</option>
        <option value="Russian">Russian</option>
      </select>

      <label for="country">Subject</label>
<select id="country" name="country">
<option value="australia" hidden>Choose</option>
        <option value="Problem with the website">Problem with the website</option>
        <option value="Payment problem">Payment problem </option>
        <option value="Other">Other</option>
      </select>

<label for="comment">Coment/Question</label>
<textarea type="text" id="comment" name="comment" placeholder="Write something.." />
<input type="submit" value="Submit"/>
</form>
    </div>

    <div className="contact-map">
    <iframe className="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297572.6045608055!2d18.409851193399042!3d54.36076295724931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd731c14d4fa6f%3A0x9bb9fbf163b7be8d!2zR2RhxYRzaw!5e0!3m2!1spl!2spl!4v1630567376237!5m2!1spl!2spl" ></iframe>    </div>

</div>
        )
    }
}

export default Contact;