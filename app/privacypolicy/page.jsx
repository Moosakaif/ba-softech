"use client"

import React from 'react'
import Header from '../Components/Navbar'
import { font } from '../Components/fonts/font'
import ParticlesCX from '../Components/Particles'
import emailjs from "emailjs-com"
import { useState } from 'react'
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../Components/Footer'

const page = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        const { name, email, phone, message } = formData;
    
        if (!name || !email || !phone || !message) {
          alert("All fields are required!");
          setIsSubmitting(false);
          return;
        }
    
        emailjs
          .send(
            'service_w77h8cp', 
            'template_i2jz2t3',
            {
              from_name: name,
              to_email: 'contact@basoftech.com',
              from_email: email,
              phone,
              message,
            },
            'k3B55Mf9wXRT4wOU2'
          )
          .then(() => {
            alert("Your message was sent successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
            setIsSubmitting(false);
          })
          .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send the message. Please try again later.");
            setIsSubmitting(false);
          });
      };
    

  return (
    <div>
        <Header/>
       
    <section className={`${font.className} relative bg-black min-h-[18rem] p-12 overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ParticlesCX className="absolute inset-0 w-full h-full" />
        </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-white max-w-2xl">
            <h2 data-aos="fade-down" className="font-oswald text-lg md:text-xl mb-4 text-cards uppercase font-medium tracking-wider">
              B.A Softech - Crafting Excellence, Providing Growth
            </h2>
            <h1 data-aos="fade-up" className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
    </section>
    <div className={`${font.className} flex flex-col bg-black items-center justify-center md:items-start p-4`}>
          <h1
            data-aos="fade-right"
            className="text-3xl text-cards md:text-3xl text-left md:max-w-4xl font-bold p-4"
          >
            Your Privacy, Our Commitment
          </h1>
          <p className="text-white leading-relaxed p-4">
                B.A Softech Marketing LLC takes your privacy seriously. We are dedicated to protecting your personal data and using it responsibly. Our Consumer Data Policy ensures transparency and fosters trust, so you can engage with our services confidently.
                </p>
                <h2 className="text-4xl font-oswald text-cards p-4">
                Data Collection
                </h2>
                <p className="text-white leading-relaxed px-4">
                We collect only the information necessary to deliver our services, such as your name, contact details, and project-related information.
                </p>
                <h2 className="text-4xl font-oswald text-cards p-4">
                Data Usage
                </h2>
                <p className="text-white leading-relaxed px-4">
                Your data is used exclusively to provide services, communicate updates, and enhance your experience. We do not share your information without your consent.
                </p>
                <h2 className="text-4xl font-oswald text-cards p-4">
                Data Security
                </h2>
                <p className="text-white leading-relaxed px-4">
                Our systems are protected with industry-standard security measures. Regular audits ensure your information is safeguarded against unauthorized access.
                </p>
                <h2 className="text-4xl font-oswald text-cards  p-4">
                Your Rights
                </h2>
                <p className="text-white leading-relaxed px-4">
                You have the right to access, update, or request deletion of your data. Contact us to exercise your rights or address any concerns.
                </p>
                <h2 className="text-4xl font-oswald text-cards  p-4">
                Transparency
                </h2>
                <p className="text-white leading-relaxed px-4">
                We believe in open communication. Updates to this policy will be shared promptly, and we encourage you to review them periodically.
                </p>
                <h2 className="text-5xl font-oswald text-cards mb-6 p-4">
                    Privacy Policy: Collection Of Numbers And Use
                </h2>
                <h2 className="text-4xl font-oswald text-cards mb-6 px-4">
                1. Collection of Phone Numbers
                </h2>
                <p className="text-white leading-relaxed px-4">
                We collect phone numbers solely for the purposes of contact. This information is provided voluntarily by you with explicit consent at the time of collection.
                </p>
                <h2 className="text-4xl font-oswald text-cards p-4">
                2. Consent
                </h2>
                <p className="text-white leading-relaxed px-4">
                By providing your phone number, you consent to its use strictly for the purposes stated above. Consent is obtained through the Contact Form, and you may withdraw consent at any time by contacting us at <span className='text-cards'>contact@basoftech.com</span>.
                </p>
                <h2 className="text-4xl font-oswald text-cards  p-4">
                3. Third-Party Sharing
                </h2>
                <p className="text-white leading-relaxed px-4">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties
                </p>
                
                <h2 className="text-4xl font-oswald text-cards  p-4">
                4. Data Security
                </h2>
                <p className="text-white leading-relaxed px-4">
                Phone numbers are stored using industry-standard encryption and access controls. We retain this information only for as long as necessary to fulfill the stated purpose or as required by law.
                </p>
                <h2 className="text-4xl font-oswald text-cards p-4">
                5. Your Rights
                </h2>
                <p className="text-white leading-relaxed px-4">
                You may request access to, correction of, or deletion of your phone number from our systems by contacting <span className='text-cards'>contact@basoftech.com</span>.
                </p>
                <h2 className="text-4xl font-oswald text-cards  p-4">
                Example For Direct Use
                </h2>
                <p className="text-white leading-relaxed px-4">
                "We collect phone numbers solely to contact. Your phone number and consent will never be shared with third-party providers, advertisers, or external organizations unless explicitly required by law or to fulfill services you’ve requested (e.g., SMS delivery). All data is secured and retained only for as long as necessary. You may withdraw consent or request deletion at any time by contacting contact@basoftech.com."
                </p>
                <h2 className="text-5xl font-oswald text-cards mb-6 p-4">
                    How We Contact You
                </h2>
                <p className="text-white leading-relaxed px-4">
                We contact potential and current customers through:
                </p>
                 <h2 className="text-5xl font-oswald text-cards mb-6 p-4">
                    Phone Calls
                </h2>
                <p className="text-white leading-relaxed px-4">
               "We initiate contact with potential and existing customers through direct phone calls.
These calls allow us to introduce our services, explain how we can help, and answer any initial questions.
Our team ensures the conversation is informative and respectful of your time.
Calls are made only during appropriate hours and by authorized representatives.
The goal is to create a clear and open channel of communication with you."
                </p>
                <h2 className="text-5xl font-oswald text-cards mb-6 p-4">
                    Messages
                </h2>
                <p className="text-white leading-relaxed px-4">
               "If we’re unable to reach you by phone, we may follow up with an SMS or WhatsApp message.
These messages provide a short introduction to our services and invite you to respond if interested.
They’re designed to be brief, clear, and non-intrusive.
You are free to reply at your convenience or ignore them if you're not interested.
We ensure our messages are professional and sent only when necessary.

"
                </p>
                 <h2 className="text-5xl font-oswald text-cards mb-6 p-4">
                    Consent
                </h2>
                 <p className="text-white leading-relaxed px-4">
               "We never provide or initiate any services without your explicit consent.
Consent may be given through a voice call, message reply, or written agreement.
This approach ensures transparency and builds trust with our customers.
You always have the right to accept or decline our offerings.
We strictly follow this policy to respect your decisions and maintain ethical practices."
                </p>
                <h2 className="text-5xl font-oswald text-cards mb-6 p-4">
                    Payment Policy
                </h2>
                <p className="text-white leading-relaxed px-4">
               "Before project commencement, we request an advance payment of 40% to 50% of the total project cost."<br></br>

"The remaining balance is due upon completion and delivery of the project."<br></br>

"All payments are processed securely, and receipts are issued for every transaction.


"
                </p>
                
                



        </div>
        <Footer/>
    </div>
  )
}

export default page