export default function Gallery() {
  const galleryItems = [
    { type: "photo", image: "/hosp2.jpeg", title: "Clinic Reception", description: "Modern and welcoming reception area" },
    { type: "photo", image: "/hosp3.jpeg", title: "Treatment Room", description: "Private and well-equipped treatment rooms" },
    { type: "photo", image: "/hosp4.jpeg", title: "Exercise Gym", description: "Fully equipped rehabilitation gym" },
    { type: "photo", image: "/hosp5.jpeg", title: "Therapy Session", description: "Advanced therapy treatment in progress" },
    { type: "photo", image: "/hosp6.jpeg", title: "Patient Care", description: "Dedicated patient care and attention" },
    { type: "photo", image: "/hosp2.jpg", title: "Clinic Interior", description: "Modern clinic interior design" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-700">
            Photos and Videos of Our Clinic and Patient Success Stories
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="card">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Patient Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Recovery from Sports Injury</h3>
              <p className="text-gray-700 mb-4">
                "After a knee injury during a football match, I thought my sports career was over. Thanks to the dedicated team at PhysioDR, I'm back on the field stronger than ever."
              </p>
              <p className="text-primary-600 font-semibold">- Rahul, 28</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Stroke Rehabilitation Journey</h3>
              <p className="text-gray-700 mb-4">
                "My father had a stroke and couldn't move his right side. The neurological rehabilitation program here helped him regain mobility and independence."
              </p>
              <p className="text-primary-600 font-semibold">- Priya's Family</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
