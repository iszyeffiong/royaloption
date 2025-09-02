import { Link } from 'react-router-dom';
import { Crown, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Logo */}
          <div 
            onClick={() => handleNavigation('/')} 
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <img 
              src="https://i.ibb.co/7dD7pXJS/logo.webp" 
              alt="" 
              className="h-8 w-auto group-hover:opacity-90 transition-premium"
            />
          </div>
              <span className="text-xl font-bold">Royal Options Inc.</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Founded on the principles of compassion, empowerment, and community, Royal Options Inc. has been a trusted provider of quality support services for individuals with intellectual and developmental disabilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-primary-foreground/80 hover:text-secondary transition-premium">
                About Us
              </Link>
              <Link to="/services" className="block text-primary-foreground/80 hover:text-secondary transition-premium">
                Services
              </Link>
              <Link to="/careers" className="block text-primary-foreground/80 hover:text-secondary transition-premium">
                Careers
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-secondary transition-premium">
                Contact
              </Link>
            </div>
          </div>

  

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+1 202-400-8404</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@royaloptionsinc.com</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span> <p>33 West Franklin Street, Suite 201,
                  </p>
                  <p>Hagerstown, MD 21740, United States
                  </p>
                  </span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-premium">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-premium">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Royal Options Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;