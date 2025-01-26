import Logo from "../Logo";


const Footer = () => {
    return (
      <footer className="bg-blue-950  text-yellow-300 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Brand / About Section */}
            <div>
              <h2 className="text-xl font-bold text-yellow-400">Ritik Ecomm</h2>
              <p className="mt-2 text-sm">
                Empowering   your choice of shopping.
              </p>
            </div>
  
            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold text-[#636363]">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="/about" className="hover:text-[#CFE2E4]">About Us</a></li>
                <li><a href="/services" className="hover:text-[#CFE2E4]">Services</a></li>
                <li><a href="/contact" className="hover:text-[#CFE2E4]">Contact</a></li>
                <li><a href="/privacy" className="hover:text-[#CFE2E4]">Privacy Policy</a></li>
              </ul>
            </div>
  
            {/* Social Media / Contact */}
            <div>
              <h3 className="text-lg font-semibold text-[#636363]">Follow Us</h3>
              <div className="mt-2 flex space-x-4">
                <a href="#" className="hover:text-[#CFE2E4]"><i className="fab fa-facebook"></i></a>
                <a href="#" className="hover:text-[#CFE2E4]"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-[#CFE2E4]"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="hover:text-[#CFE2E4]"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
  
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;
  