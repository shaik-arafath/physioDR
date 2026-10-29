import Link from "next/link";
import { Calendar, Clock, Users, Award, Star, Phone } from "lucide-react";

export default function Home() {
  const services = [
    { name: "Back Pain Relief", icon: "🔙", description: "Specialized treatment for chronic and acute back pain" },
    { name: "Neck Pain Treatment", icon: "🦒", description: "Effective therapy for neck stiffness and pain" },
    { name: "Sports Injury Rehab", icon: "⚽", description: "Comprehensive recovery for athletes" },
    { name: "Post-Surgery Rehab", icon: "🏥", description: "Guided rehabilitation after surgery" },
    { name: "Stroke Rehabilitation", icon: "🧠", description: "Specialized care for stroke recovery" },
    { name: "Pediatric Physiotherapy", icon: "👶", description: "Gentle therapy for children" },
  ];

  const reviews = [
    { name: "Rahul Sharma", rating: 5, text: "Excellent care and professional staff. My back pain is completely gone!" },
    { name: "Priya Patel", rating: 5, text: "The doctors here are very knowledgeable and caring. Highly recommended." },
    { name: "Amit Kumar", rating: 5, text: "Best physiotherapy clinic in the area. Modern equipment and great results." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to PhysioDR
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Your Path to Pain-Free Living Through Expert Physiotherapy Care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment" className="btn-primary">
              <Calendar className="inline-block w-5 h-5 mr-2" />
              Book Appointment
            </Link>
            <a href="tel:+919876543210" className="btn-secondary">
              <Phone className="inline-block w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">About Our Clinic</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At PhysioDR, we are dedicated to helping patients recover from injuries, manage chronic pain, and improve their overall quality of life through evidence-based physiotherapy treatments. Our team of experienced physiotherapists uses modern equipment and personalized care plans to ensure the best outcomes for every patient.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Top Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-12 h-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">Our team has decades of combined experience in physiotherapy</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10,000+ Patients</h3>
              <p className="text-gray-600">Successfully treated thousands of patients with various conditions</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-12 h-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
              <p className="text-gray-600">State-of-the-art machines for effective treatment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Patient Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-gray-900">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timings */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Clinic Timings</h2>
          <div className="max-w-2xl mx-auto bg-white/10 rounded-xl p-6 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="font-semibold mb-2">Monday - Friday</p>
                <p>9:00 AM - 8:00 PM</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Saturday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Sunday</p>
                <p>10:00 AM - 2:00 PM</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Emergency</p>
                <p>24/7 Available</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a href="tel:+919876543210" className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="inline-block w-5 h-5 mr-2" />
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
