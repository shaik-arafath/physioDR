"use client";

import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    problem: "",
    service: "",
    doctor: "",
    date: "",
    time: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Back Pain Relief",
    "Neck Pain Treatment",
    "Knee Pain Therapy",
    "Sports Injury Rehab",
    "Post-Surgery Rehabilitation",
    "Stroke Rehabilitation",
    "Paralysis Care",
    "Pediatric Physiotherapy",
    "Women's Health Physiotherapy",
    "Elderly Care",
    "Shoulder Pain Treatment",
    "Neurological Rehabilitation"
  ];

  const doctors = [
    "Dr. Rajesh Kumar",
    "Dr. Priya Sharma",
    "Dr. Amit Patel",
    "Dr. Neha Gupta",
    "Dr. Vikram Singh",
    "Dr. Anjali Verma"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send data to the backend API
    console.log("Booking submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center card">
            <div className="bg-secondary-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-secondary-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
            <p className="text-lg text-gray-700 mb-6">
              Thank you for booking an appointment with PhysioDR. We have received your request and will send a confirmation to your email and phone shortly.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 text-left mb-6">
              <h3 className="font-bold mb-4">Booking Details:</h3>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Date:</strong> {formData.date}</p>
              <p><strong>Time:</strong> {formData.time}</p>
              <p><strong>Doctor:</strong> {formData.doctor}</p>
              <p><strong>Service:</strong> {formData.service}</p>
            </div>
            <p className="text-gray-600 mb-6">
              Please arrive 15 minutes before your appointment time. If you need to reschedule, please call us at least 24 hours in advance.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book an Appointment
          </h1>
          <p className="text-xl text-gray-700">
            Schedule Your Visit with Our Expert Physiotherapists
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="card">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Patient Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <User className="inline-block w-4 h-4 mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Phone className="inline-block w-4 h-4 mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Mail className="inline-block w-4 h-4 mr-1" />
                      Email *
                    </label>
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
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Age *</label>
                  <input
                    type="number"
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your age"
                    min="1"
                    max="120"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <MapPin className="inline-block w-4 h-4 mr-1" />
                    Describe Your Problem *
                  </label>
                  <textarea
                    name="problem"
                    required
                    value={formData.problem}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Please describe your condition or problem..."
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 pt-4">Appointment Details</h2>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Required *</label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Doctor *</label>
                  <select
                    name="doctor"
                    required
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a doctor</option>
                    {doctors.map((doctor) => (
                      <option key={doctor} value={doctor}>{doctor}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Calendar className="inline-block w-4 h-4 mr-1" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Clock className="inline-block w-4 h-4 mr-1" />
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Confirm Booking
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By booking, you agree to our terms and conditions. You will receive a confirmation via email and SMS.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
