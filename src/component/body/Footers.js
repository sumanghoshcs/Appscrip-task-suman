import React from "react";
import "./Footer.css"; // Import your CSS for styling
import { InstagramLogo, LinkedinLogo } from "phosphor-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe">
          <h2 style={{ marginTop: "-20px" }}>BE THE FIRST TO KNOW</h2>
          <p style={{ marginTop: "20px" }}>
            Sign up for updates from mettà muse.
          </p>
          <form style={{ marginTop: "30px", gap: "20px" }}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className="contact">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <p>
            <img
              src="https://img.icons8.com/?size=100&id=aRiu1GGi6Aoe&format=png&color=000000"
              alt="flag"
              height={15}
              width={20}
            />{" "}
            USD
          </p>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-column">
          <h3>mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <InstagramLogo size={32} />
            <LinkedinLogo size={32} />
          </div>
          <h3>mettā muse ACCEPTS</h3>
          <div className="payment-icons">
            <img
              src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-pay-vector-PNG.png"
              height={15}
              width={20}
              alt="GPay"
            />
            <img
              src="https://img.lovepik.com/png/20231020/mastercard-logo-icon-texture-beauty-holiday_271370_wh1200.png"
              alt="Visa"
              height={15}
              width={20}
            />
            <img
              src="https://img.icons8.com/?size=100&id=13611&format=png&color=000000"
              alt="PayPal"
              height={15}
              width={20}
            />
            <img
              src="https://img.icons8.com/?size=100&id=61469&format=png&color=FFFFFF"
              alt="ApplePay"
              height={15}
              width={20}
            />
            <img
              src="https://img.icons8.com/?size=100&id=11081&format=png&color=228BE6"
              alt="Amex"
              height={15}
              width={20}
            />

            {/* <img src="path/to/mastercard/icon.png" alt="Mastercard" /> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 suman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
