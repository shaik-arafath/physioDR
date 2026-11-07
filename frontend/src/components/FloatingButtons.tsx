import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col space-y-3 z-50 safe-area-bottom">
      <a
        href="https://wa.me/919700719727"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a
        href="tel:+919700719727"
        className="bg-primary-600 hover:bg-primary-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Call"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
}
