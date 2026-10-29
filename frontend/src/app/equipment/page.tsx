export default function Equipment() {
  const equipment = [
    {
      name: "Ultrasound Therapy",
      description: "Uses high-frequency sound waves to treat deep tissue injuries, reduce inflammation, and accelerate healing.",
      benefits: "Reduces pain, improves circulation, speeds up tissue repair",
      icon: "🔊"
    },
    {
      name: "TENS (Transcutaneous Electrical Nerve Stimulation)",
      description: "Electrical therapy that helps manage pain through nerve stimulation.",
      benefits: "Pain relief, muscle relaxation, reduces need for medication",
      icon: "⚡"
    },
    {
      name: "IFT (Interferential Therapy)",
      description: "Deep penetrating electrical current therapy for pain management and muscle stimulation.",
      benefits: "Deep pain relief, reduces swelling, improves mobility",
      icon: "📡"
    },
    {
      name: "Laser Therapy",
      description: "Low-level laser therapy for tissue repair and pain reduction.",
      benefits: "Accelerates healing, reduces inflammation, pain-free treatment",
      icon: "🔦"
    },
    {
      name: "Traction Therapy",
      description: "Mechanical traction for spinal decompression and disc problems.",
      benefits: "Relieves spinal pressure, reduces disc pain, improves alignment",
      icon: "🔧"
    },
    {
      name: "Shockwave Therapy",
      description: "High-energy acoustic waves for chronic pain and tissue regeneration.",
      benefits: "Breaks down scar tissue, stimulates healing, effective for chronic conditions",
      icon: "💥"
    },
    {
      name: "Exercise Therapy Area",
      description: "Fully equipped gym with specialized equipment for rehabilitation exercises.",
      benefits: "Strength training, flexibility improvement, functional recovery",
      icon: "🏋️"
    },
    {
      name: "Parallel Bars",
      description: "Supportive bars for gait training and balance exercises.",
      benefits: "Improves walking ability, enhances balance, safe rehabilitation",
      icon: "🚶"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Equipment & Facilities
          </h1>
          <p className="text-xl text-gray-700">
            State-of-the-Art Technology for Your Recovery
          </p>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <div key={index} className="card">
                <div className="text-5xl text-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    <strong>Benefits:</strong> {item.benefits}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Private Treatment Rooms</h3>
              <p className="text-gray-700">
                Individual treatment rooms ensuring privacy and personalized care for each patient.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Modern Exercise Gym</h3>
              <p className="text-gray-700">
                Fully equipped rehabilitation gym with the latest exercise machines and equipment.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Hygienic Environment</h3>
              <p className="text-gray-700">
                Clean, sanitized, and comfortable environment following all hygiene protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
