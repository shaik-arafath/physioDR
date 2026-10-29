import Link from "next/link";
import { Calendar, GraduationCap, Stethoscope } from "lucide-react";

export default function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      qualification: "BPTh, MPTh",
      experience: "15 years",
      specialty: "Orthopedic Physiotherapy",
      description: "Specializes in musculoskeletal disorders, sports injuries, and post-surgical rehabilitation.",
      image: "👨‍⚕️"
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      qualification: "BPTh, MPTh",
      experience: "12 years",
      specialty: "Neurological Physiotherapy",
      description: "Expert in stroke rehabilitation, paralysis care, and neurological conditions.",
      image: "👩‍⚕️"
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      qualification: "BPTh, MPTh, PhD",
      experience: "18 years",
      specialty: "Sports Physiotherapy",
      description: "Former team physiotherapist for national sports teams. Specializes in athletic injuries.",
      image: "👨‍⚕️"
    },
    {
      id: 4,
      name: "Dr. Neha Gupta",
      qualification: "BPTh, MPTh",
      experience: "10 years",
      specialty: "Pediatric Physiotherapy",
      description: "Dedicated to helping children with developmental delays and physical disabilities.",
      image: "👩‍⚕️"
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      qualification: "BPTh, MPTh",
      experience: "8 years",
      specialty: "Cardiopulmonary Physiotherapy",
      description: "Expert in cardiac rehabilitation and respiratory physiotherapy.",
      image: "👨‍⚕️"
    },
    {
      id: 6,
      name: "Dr. Anjali Verma",
      qualification: "BPTh, MPTh",
      experience: "7 years",
      specialty: "Women's Health Physiotherapy",
      description: "Specializes in prenatal and postnatal care, pelvic floor rehabilitation.",
      image: "👩‍⚕️"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Expert Doctors
          </h1>
          <p className="text-xl text-gray-700">
            Meet Our Team of Experienced Physiotherapists
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="card">
                <div className="text-6xl text-center mb-4">{doctor.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span>{doctor.qualification}</span>
                  </div>
                  <div className="flex items-center">
                    <Stethoscope className="w-4 h-4 mr-2" />
                    <span>{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">Specialty:</span>
                    <span className="ml-2">{doctor.specialty}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{doctor.description}</p>
                <Link
                  href="/book-appointment"
                  className="btn-primary w-full text-center block"
                >
                  <Calendar className="inline-block w-5 h-5 mr-2" />
                  Book with {doctor.name.split(' ')[1]}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
