import React, { useState } from "react";

const Footer = () => {

   const [newsLetterText, setNewsLetterText] = useState('');
   const submit = (e) => {
        e.preventDefault();
        setNewsLetterText('');
        alert("Thank you, your are now subscribed to our newsletter.")
   }
  return (
    <section className="footer">
      <div>
        <h3>About</h3>
        <ul>
            <li>The Company</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Affiliates</li>
            <li>Environment</li>
            <li>Manufacturing Ethics</li>
            <li>Technology</li>
            <li>Blog</li>
            <li>Our Partners</li>
        </ul>
      </div>
      <div>
        <h3>Retailer</h3>
        <ul>
            <li>Global Retailers</li>
            <li>Global Distributors</li>
        </ul>
      </div>
      <div>
        <h3>Help</h3>
        <ul>
            <li>Contact Us</li>
            <li>Ordering & Payment</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Size & Fit</li>
            <li>FAQ</li>
            <li>Product Care</li>
        </ul>
      </div>
      <div>
        <h3>Region</h3>
        <ul>
            <li>inov-8 UK</li>
            <li>inov-8 US</li>
            <li>inov-8 EU</li>
            <li>inov-8 AU</li>
            <li>inov-8 Global</li>
            <li>inov-8 JP</li>
        </ul>
      </div>
      <div>
        <h3>Social</h3>
        <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
        </ul>
      </div>
      <div>
        <h3>Join Our Newsletter</h3>
        <form onSubmit={(e) => submit(e)}>
            <input type="text" required value={newsLetterText} placeholder="Enter your email" onChange={(e) => setNewsLetterText(e.target.value)}/>
            <button type="submit" className="btn primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Footer;
