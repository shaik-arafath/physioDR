"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700">
            Get in Touch with PhysioDR
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="card text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">+91 98765 43211</p>
            </div>
            <div className="card text-center">
              <div className="bg-secondary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@physiodr.com</p>
              <p className="text-gray-600">appointments@physiodr.com</p>
            </div>
            <div className="card text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-gray-600">123 Health Street</p>
              <p className="text-gray-600">Medical District</p>
              <p className="text-gray-600">City - 123456</p>
            </div>
            <div className="card text-center">
              <div className="bg-secondary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="font-bold mb-2">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9AM - 8PM</p>
              <p className="text-gray-600">Sat: 9AM - 6PM</p>
              <p className="text-gray-600">Sun: 10AM - 2PM</p>
            </div>
          </div>

          {/* Map */}
          <div className="card mb-12">
            <h2 className="text-2xl font-bold mb-4">Find Us on Google Maps</h2>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Google Map Embed Placeholder</p>
            </div>
          </div>

          {/* Directions */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Parking Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Free parking available on premises</li>
                <li>• Dedicated disabled parking spots</li>
                <li>• Street parking available nearby</li>
                <li>• Valet parking available on request</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Directions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• By Metro: Get off at Medical District Station, Exit 2</li>
                <li>• By Bus: Bus numbers 15, 23, 42 stop nearby</li>
                <li>• By Car: GPS coordinates available on our website</li>
                <li>• Wheelchair accessible entrance on ground floor</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="card text-center">
                <h2 className="text-2xl font-bold text-secondary-600 mb-4">Message Sent!</h2>
                <p className="text-gray-700 mb-6">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    <Send className="inline-block w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
