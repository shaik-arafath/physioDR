import Link from "next/link";
import { Calendar, GraduationCap, Stethoscope } from "lucide-react";

export default function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. L.V. Siva Reddy",
      qualification: "BPTh/BPT",
      experience: "19 years",
      specialty: "Physiotherapist",
      description: "19 years of experience in physiotherapy. Specializes in musculoskeletal disorders, sports injuries, cervical spondylosis, sciatica pain, and post-surgical rehabilitation. Awarded Vidhya Ratna Award (2015) and Best Physiotherapist in Kukatpally and Nizampet (2014).",
      image: "/doctor-siva.jpg",
      education: "Dr. NTR University of Health Sciences Andhra Pradesh, 2007",
      membership: "Indian Association of Physiotherapist",
      rating: "97% (62 patients)"
    },
    {
      id: 2,
      name: "Dr. Shaik Anwar",
      qualification: "BPTh, MPTh",
      experience: "12 years",
      specialty: "Neurological Physiotherapy",
      description: "Expert in stroke rehabilitation, paralysis care, and neurological conditions.",
      image: "/doctor-img-20240803.jpg"
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
                {doctor.image.startsWith('/') ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="text-6xl text-center mb-4">{doctor.image}</div>
                )}
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
                  {doctor.rating && (
                    <div className="flex items-center text-green-600 font-semibold">
                      <span>⭐ {doctor.rating}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-700 mb-6">{doctor.description}</p>
                {doctor.education && (
                  <div className="border-t pt-4 mb-4">
                    <p className="text-sm text-gray-600">
                      <strong>Education:</strong> {doctor.education}
                    </p>
                  </div>
                )}
                {doctor.membership && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-600">
                      <strong>Member:</strong> {doctor.membership}
                    </p>
                  </div>
                )}
                <Link
                  href="/book-appointment"
                  className="btn-primary w-full text-center block"
                >
                  <Calendar className="inline-block w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Patient Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "I had severe cervical spondylitis. All vertebrae at my neck portion were compressed. Neurosurgeon suggested surgery. Then I met Dr. Siva Reddy garu, he gave assurance like do not worry you will recover within 20 sittings. Now I completed my 20 sittings. I am full happy because I am free from my pain."
              </p>
              <p className="text-primary-600 font-semibold">- Alekhya</p>
              <p className="text-sm text-gray-500">Cervical Spondylosis Treatment</p>
            </div>
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "I visited this clinic for PCL injury treatment. Doctor explained me very patiently about my problem and regarding the treatment. I am very much thankful to Dr. Siva Reddy for giving such a good advice and treatment. Within 2-3 weeks I was able to walk normally."
              </p>
              <p className="text-primary-600 font-semibold">- Dinesh</p>
              <p className="text-sm text-gray-500">PCL Injury Treatment</p>
            </div>
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "I joined the physiotherapy course for my knee joint pain. When I came here I was suffering a lot. After one week I was able to find a lot of difference. After three weeks of the treatment I got relieved of my pain in the knee. I am completely satisfied with the treatment given here."
              </p>
              <p className="text-primary-600 font-semibold">- Anuradha KP</p>
              <p className="text-sm text-gray-500">Knee Joint Pain Treatment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
