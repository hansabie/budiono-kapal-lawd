import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold">Culture Sphere</p>
            <p>&copy; {new Date().getFullYear()}</p>
          </div>
          <div>
            <p className="text-lg font-bold">Contact Us</p>
            <p>Email: culturesphere@mail.com</p>
            <p>Phone: +623456789018</p>
          </div>
          <div>
            <p className="text-lg font-bold">Follow Us</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
