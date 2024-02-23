import React from "react";

function Footer() {
  return (
    <div>
      <footer
        style={{backgroundColor: "#1e4854", color: "aliceblue", fontSize: "1.3rem"}}
        className="footer-content text-light py-5"
      >
        <div className="container text-center">
          <p>&copy; 2024 Medical Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
