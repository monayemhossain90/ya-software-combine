

import React, { useRef } from "react";
import '../../styles/contact.css';
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import contactImg from "../../images/contact.png"

const templateId = "template_rcng1ea";
const serviceId = "service_6j050se";
const publicKey = "Dc9wlyhjqTtSMbqA4";

const Contact = () => {
  const form = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        toast.success("Submit Successfully");
        e.target.reset();
      },
      () => {
        toast.error("Somthing Is Worng");
      }
    );
  };
  return (
    <section className="contact-section container" id="contact">
      <h2 className='highlight'>Contact us</h2>
      <div className="contact-wapper">
        <div>
          <form ref={form} >
            <div className="input-group">
              <div >
                <label htmlFor="name">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  
                  required
                />
              </div>
              <div >
                <label htmlFor="email" >
                  Your email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  
                  required
                />
              </div>
              <div >
                <label htmlFor="number" >
                  Your phone number
                </label>
                <input
                  id="number"
                  name="number"
                  type="text"
                  placeholder="Number"
                  
                  required
                />
              </div>
              <div >
                <label htmlFor="service" >
                  Service Required
                </label>
                <select
                  name="service"
                  id="service"
                  
                  required
                >
                  <option value="">Service</option>
                  <option value="Big Data">Big Data</option>
                  <option value="Tech Consulting">Tech Consulting</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Artificial Intelligent">
                    Artificial Intelligent
                  </option>
                  <option value="Quality Assurance">Quality Assurance</option>
                  <option value="Software Development">
                    Software Development
                  </option>
                  <option value="Technology Evaluations">
                    Technology Evaluations
                  </option>
                  <option value="Quality Assurance">Quality Assurance</option>
                  <option value="Advance Science">Advance Science</option>
                </select>
              </div>
              </div>
              <div>
                <textarea
                  name="messages"
                 
                  placeholder="Let us know what you need"
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit" className="form-btn" onSubmit={handleFormSubmit}>
                  Submit
                </button>
              </div>
          </form>
        </div>
        <div className="contactImg">
         <img src={contactImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
