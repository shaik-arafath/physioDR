import { Clock, Users, IndianRupee } from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "Back Pain Relief",
      description: "Comprehensive treatment for chronic and acute back pain including disc problems, muscle strain, and posture-related issues.",
      for: "Adults with chronic back pain, office workers, post-surgery patients",
      sessions: "6-12 sessions",
      fee: "₹800 per session",
      icon: "🔙"
    },
    {
      name: "Neck Pain Treatment",
      description: "Specialized therapy for neck stiffness, cervical spondylosis, and tension headaches.",
      for: "Computer users, office workers, patients with cervical issues",
      sessions: "4-8 sessions",
      fee: "₹700 per session",
      icon: "🦒"
    },
    {
      name: "Knee Pain Therapy",
      description: "Treatment for arthritis, ligament injuries, and post-knee surgery rehabilitation.",
      for: "Elderly patients, athletes, post-surgery patients",
      sessions: "8-15 sessions",
      fee: "₹800 per session",
      icon: "🦵"
    },
    {
      name: "Sports Injury Rehab",
      description: "Advanced rehabilitation for athletes including sprains, strains, fractures, and overuse injuries.",
      for: "Athletes, sports enthusiasts, active individuals",
      sessions: "10-20 sessions",
      fee: "₹1000 per session",
      icon: "⚽"
    },
    {
      name: "Post-Surgery Rehabilitation",
      description: "Guided recovery after orthopedic surgeries including joint replacements and spinal surgeries.",
      for: "Post-surgery patients, joint replacement patients",
      sessions: "15-30 sessions",
      fee: "₹900 per session",
      icon: "🏥"
    },
    {
      name: "Stroke Rehabilitation",
      description: "Comprehensive neuro-rehabilitation for stroke survivors including mobility and functional training.",
      for: "Stroke patients, paralysis patients",
      sessions: "20-40 sessions",
      fee: "₹1000 per session",
      icon: "🧠"
    },
    {
      name: "Paralysis Care",
      description: "Specialized physiotherapy for paralysis patients including hemiplegia and paraplegia.",
      for: "Paralysis patients, spinal cord injury patients",
      sessions: "30-60 sessions",
      fee: "₹1000 per session",
      icon: "🏃"
    },
    {
      name: "Pediatric Physiotherapy",
      description: "Gentle and effective therapy for children with developmental delays, cerebral palsy, and other conditions.",
      for: "Children with developmental issues, cerebral palsy, delayed milestones",
      sessions: "10-30 sessions",
      fee: "₹600 per session",
      icon: "👶"
    },
    {
      name: "Women's Health Physiotherapy",
      description: "Specialized care for prenatal and postnatal conditions, pelvic floor rehabilitation, and women's health issues.",
      for: "Pregnant women, new mothers, women with pelvic issues",
      sessions: "6-12 sessions",
      fee: "₹800 per session",
      icon: "👩"
    },
    {
      name: "Elderly Care",
      description: "Geriatric physiotherapy focusing on mobility, balance, fall prevention, and maintaining independence.",
      for: "Senior citizens, elderly with mobility issues",
      sessions: "8-15 sessions",
      fee: "₹700 per session",
      icon: "👴"
    },
    {
      name: "Shoulder Pain Treatment",
      description: "Treatment for frozen shoulder, rotator cuff injuries, and shoulder impingement.",
      for: "Adults with shoulder pain, overhead workers",
      sessions: "6-12 sessions",
      fee: "₹750 per session",
      icon: "💪"
    },
    {
      name: "Neurological Rehabilitation",
      description: "Comprehensive therapy for Parkinson's disease, multiple sclerosis, and other neurological conditions.",
      for: "Patients with neurological disorders",
      sessions: "15-30 sessions",
      fee: "₹1000 per session",
      icon: "🧬"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-700">
            Comprehensive Physiotherapy Treatments for Every Condition
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="space-y-2 text-sm text-gray-600 border-t pt-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span><strong>For:</strong> {service.for}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span><strong>Sessions:</strong> {service.sessions}</span>
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="w-4 h-4 mr-2" />
                    <span><strong>Fee:</strong> {service.fee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
