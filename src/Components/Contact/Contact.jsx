import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5745725a-5d57-4f75-9f52-af6218321706");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, question, and suggestion are
          important to us as we strive to provide exceptional service to our
          university community
        </p>
        <ul>
            <li> <img src={phone_icon} alt="" />Phone: 123-456-7890</li>
            <li> <img src={mail_icon} alt="" />Email: info@university.edu</li>
            <li><img src={location_icon} alt="" />
                Address: 123 University Street, University City, CA 12345
            </li>
            
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} >
            <label >Your name</label>
            <input type="text" placeholder="Enter your name" name='name' required/>
            <label >Phone number</label>
            <input type="tel" name='phone' placeholder="Enter your mobile number" required />
            <label >Write your message here</label>
            <textarea name="message" rows="6" placeholder="Write your message here" required></textarea>
            <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
