import { Award, Users, Heart, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About PhysioDR
          </h1>
          <p className="text-xl text-gray-700">
            Dedicated to Your Recovery and Well-being
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-8">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              PhysioDR was founded in 2009 with a simple mission: to provide world-class physiotherapy care to our community. What started as a small clinic with one therapist has grown into a comprehensive rehabilitation center serving thousands of patients each year.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Over the years, we have expanded our services, invested in state-of-the-art equipment, and built a team of highly skilled physiotherapists who are passionate about helping patients recover and improve their quality of life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, PhysioDR is recognized as a leading physiotherapy clinic in the region, known for our evidence-based treatments, compassionate care, and excellent patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional physiotherapy care that helps patients recover from injuries, manage pain, and achieve optimal physical health through personalized treatment plans and evidence-based practices.
              </p>
            </div>
            <div className="card">
              <div className="bg-secondary-100 rounded-full p-4 w-16 h-16 mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and preferred physiotherapy clinic in the region, known for our commitment to patient care, continuous innovation, and outstanding treatment outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-lg">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <p className="text-lg">Patients Treated</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">8</div>
              <p className="text-lg">Expert Doctors</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <p className="text-lg">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Patient-Centered Care</h3>
              <p className="text-gray-600">Every treatment plan is tailored to the individual needs and goals of each patient.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-10 h-10 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in clinical practice and patient outcomes.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-gray-600">We treat every patient with empathy, respect, and genuine care for their well-being.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
