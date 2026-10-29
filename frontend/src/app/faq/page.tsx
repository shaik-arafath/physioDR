export default function FAQ() {
  const faqs = [
    {
      question: "What should I expect on my first visit?",
      answer: "On your first visit, our physiotherapist will conduct a thorough assessment of your condition, including medical history review, physical examination, and discussion of your goals. Based on this evaluation, a personalized treatment plan will be created for you. The first session typically lasts 45-60 minutes."
    },
    {
      question: "How long does each treatment session last?",
      answer: "Standard treatment sessions are 45 minutes long. Extended sessions of 60 minutes are available for complex conditions or multiple treatment modalities. Your physiotherapist will recommend the appropriate session length based on your needs."
    },
    {
      question: "What should I wear to my appointment?",
      answer: "Wear comfortable, loose-fitting clothing that allows easy movement of the affected area. For lower body treatments, shorts or loose pants are recommended. For upper body treatments, a sleeveless or loose-fitting top is ideal. We also provide gowns if needed."
    },
    {
      question: "Do you accept insurance?",
      answer: "We accept reimbursement from most major health insurance providers. Patients pay upfront and can claim reimbursement from their insurance company. Our reception team can assist you with the necessary documentation for insurance claims."
    },
    {
      question: "How many sessions will I need?",
      answer: "The number of sessions varies depending on your condition, severity, and individual response to treatment. On average, patients require 6-12 sessions for significant improvement. Your physiotherapist will provide a more accurate estimate after your initial assessment."
    },
    {
      question: "Can I book appointments online?",
      answer: "Yes! You can easily book appointments through our website using the 'Book Appointment' page. Simply select your preferred service, doctor, date, and time slot. You'll receive a confirmation via email and SMS."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours notice for appointment cancellations or rescheduling. Late cancellations or no-shows may be charged a fee. This policy helps us accommodate other patients who need treatment."
    },
    {
      question: "Do you offer home visit services?",
      answer: "Yes, we offer home visit physiotherapy services for patients who cannot travel to the clinic due to mobility issues or other medical conditions. Home visits are available at an additional cost. Please contact us for more information."
    },
    {
      question: "Are your physiotherapists certified?",
      answer: "Yes, all our physiotherapists are fully qualified and certified with valid licenses. They have extensive training and experience in various specializations including orthopedic, neurological, and sports physiotherapy."
    },
    {
      question: "Do you treat children?",
      answer: "Yes, we have specialized pediatric physiotherapy services for children with developmental delays, cerebral palsy, and other conditions. Our pediatric physiotherapists are trained to provide gentle and effective treatment for children of all ages."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700">
            Find Answers to Common Questions About Our Services
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8">
            Our team is here to help. Contact us for more information.
          </p>
          <a
            href="tel:+919876543210"
            className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Call Us: +91 98765 43210
          </a>
        </div>
      </section>
    </div>
  );
}
