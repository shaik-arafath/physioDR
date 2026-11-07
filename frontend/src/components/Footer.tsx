import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img src="/logo.jpg" alt="Sai Ranyata" className="h-16 w-auto mb-4" />
            <p className="text-gray-400 mb-4">
              Sai Ranyata Physiotherapy & Chiropractor Clinic - Best Pain Management in Nizampet, Hyderabad.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-primary-400" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-primary-400" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-primary-400" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-primary-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/doctors" className="text-gray-400 hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/book-appointment" className="text-gray-400 hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span>SHOP NO 1&2, CELLAR BUILDING, Opp. Hanuman Temple, Bus Stop, Nizampet, Hyderabad, Telangana 500090</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>+91 97007 19727</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>info@sairanyata.com</span>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Mon - Sat: 10:00 AM - 8:00 PM</li>
              <li>Sunday: Closed</li>
              <li className="text-secondary-400 font-semibold">Best Pain Management in Nizampet</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sai Ranyata Physiotherapy & Chiropractor Clinic. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
