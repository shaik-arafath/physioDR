import Link from "next/link";
import { Calendar, Clock, Users, Award, Star, Phone } from "lucide-react";

export default function Home() {
  const services = [
    { name: "Back Pain Relief", image: "/service-back.jpg", description: "Specialized treatment for chronic and acute back pain" },
    { name: "Neck Pain Treatment", image: "/service-neck1.jpg", description: "Effective therapy for neck stiffness and pain" },
    { name: "Sports Injury Rehab", image: "/service-sports.jpg", description: "Comprehensive recovery for athletes" },
    { name: "Post-Surgery Rehab", image: "/service-knee2.jpg", description: "Guided rehabilitation after surgery" },
    { name: "Stroke Rehabilitation", image: "/service-stroke.jpg", description: "Specialized care for stroke recovery" },
    { name: "Pediatric Physiotherapy", image: "/service-pediatric.jpg", description: "Gentle therapy for children" },
  ];

  const reviews = [
    { name: "Alekhya", rating: 5, text: "I had severe cervical spondylitis. Neurosurgeon suggested surgery. After 20 sittings with Dr. Siva Reddy, I am completely free from pain." },
    { name: "Dinesh", rating: 5, text: "I visited for PCL injury treatment. Doctor explained patiently about my problem. Within 2-3 weeks I was able to walk normally." },
    { name: "Anuradha KP", rating: 5, text: "I joined for knee joint pain. After one week I found a lot of difference. After three weeks of treatment, I got relieved of my pain." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-16 sm:py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Sai Ranyata Physiotherapy & Chiropractor Clinic
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto text-balance">
            Best Pain Management in Nizampet, Hyderabad
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/book-appointment" className="btn-primary w-full sm:w-auto">
              <Calendar className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Book Appointment
            </Link>
            <a href="tel:+919700719727" className="btn-secondary w-full sm:w-auto">
              <Phone className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
              At Sai Ranyata Physiotherapy & Chiropractor Clinic, we are dedicated to helping patients recover from injuries, manage chronic pain, and improve their overall quality of life through evidence-based physiotherapy treatments. Our team of experienced physiotherapists uses modern equipment and personalized care plans to ensure the best outcomes for every patient.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8 sm:mb-12">Our Top Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div key={index} className="card">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link href="/services" className="btn-primary w-full sm:w-auto inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8 sm:mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 sm:p-6 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">19+ Years Experience</h3>
              <p className="text-sm sm:text-base text-gray-600">Dr. L.V. Siva Reddy has 19 years of experience in physiotherapy</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-100 rounded-full p-4 sm:p-6 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">10,000+ Patients</h3>
              <p className="text-sm sm:text-base text-gray-600">Successfully treated thousands of patients with various conditions</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 sm:p-6 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Modern Equipment</h3>
              <p className="text-sm sm:text-base text-gray-600">State-of-the-art machines for effective treatment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8 sm:mb-12">Patient Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-gray-900">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timings */}
      <section className="py-12 sm:py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Clinic Timings</h2>
          <div className="max-w-2xl mx-auto bg-white/10 rounded-xl p-4 sm:p-6 backdrop-blur">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="font-semibold mb-2">Monday - Saturday</p>
                <p>10:00 AM - 9:00 PM</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Sunday</p>
                <p>10:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <a href="tel:+919700719727" className="inline-block bg-white text-primary-600 font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
              <Phone className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call: +91 97007 19727
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
