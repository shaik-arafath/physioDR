import { IndianRupee, CreditCard, CheckCircle } from "lucide-react";

export default function Fees() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fees & Pricing
          </h1>
          <p className="text-xl text-gray-700">
            Transparent Pricing for All Our Services
          </p>
        </div>
      </section>

      {/* Fee Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Consultation Fees</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-semibold text-lg">Initial Consultation</p>
                    <p className="text-gray-600 text-sm">Includes assessment and treatment plan</p>
                  </div>
                  <div className="text-xl font-bold text-primary-600">
                    <IndianRupee className="inline-block w-5 h-5" /> 500
                  </div>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-semibold text-lg">Follow-up Consultation</p>
                    <p className="text-gray-600 text-sm">Progress review and plan adjustment</p>
                  </div>
                  <div className="text-xl font-bold text-primary-600">
                    <IndianRupee className="inline-block w-5 h-5" /> 300
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Treatment Sessions</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-semibold text-lg">Single Session (45 mins)</p>
                    <p className="text-gray-600 text-sm">Standard physiotherapy session</p>
                  </div>
                  <div className="text-xl font-bold text-primary-600">
                    <IndianRupee className="inline-block w-5 h-5" /> 700
                  </div>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-semibold text-lg">Extended Session (60 mins)</p>
                    <p className="text-gray-600 text-sm">For complex conditions</p>
                  </div>
                  <div className="text-xl font-bold text-primary-600">
                    <IndianRupee className="inline-block w-5 h-5" /> 900
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Package Deals</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-semibold text-lg">5-Session Package</p>
                    <p className="text-gray-600 text-sm">Save 10% on regular price</p>
                  </div>
                  <div className="text-xl font-bold text-secondary-600">
                    <IndianRupee className="inline-block w-5 h-5" /> 3,150
                  </div>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-semibold text-lg">10-Session Package</p>
                    <p className="text-gray-600 text-sm">Save 15% on regular price</p>
                  </div>
                  <div className="text-xl font-bold text-secondary-600">
                    <IndianRupee className="inline-block w-5 h-5" /> 5,950
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-lg">20-Session Package</p>
                    <p className="text-gray-600 text-sm">Save 20% on regular price</p>
                  </div>
                  <div className="text-xl font-bold text-secondary-600">
                    <IndianRupee className="inline-block w-5 h-5" /> 11,200
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Payment Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-bold">Accepted Payment Methods</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2" />
                    Cash
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2" />
                    Credit/Debit Cards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2" />
                    UPI (GPay, PhonePe, Paytm)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-secondary-600 mr-2" />
                    Bank Transfer
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Insurance Information</h3>
                <p className="text-gray-700 mb-4">
                  We accept reimbursement from most major health insurance providers. Patients can pay upfront and claim reimbursement from their insurance company.
                </p>
                <p className="text-gray-700">
                  Please contact our reception for assistance with insurance documentation and claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-8">Important Notes</h2>
            <div className="card">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Prices are subject to change without prior notice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Package sessions must be used within 3 months from purchase date</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Cancellations must be made at least 24 hours in advance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Emergency consultations may have additional charges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Home visit services are available at additional cost</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
