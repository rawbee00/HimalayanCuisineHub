export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h4 className="yadri-font text-2xl font-bold mb-4">Himalayan</h4>
            <p className="mb-2">Curry & Tandoor House</p>
            <p className="text-gray-300">Authentic Nepali - Indian Cuisine</p>
          </div>
          <div className="text-center">
            <h5 className="font-semibold mb-4">Hours</h5>
            <p className="text-gray-300 mb-1">Monday - Thursday: 11am - 9pm</p>
            <p className="text-gray-300 mb-1">Friday - Saturday: 11am - 10pm</p>
            <p className="text-gray-300">Sunday: 12pm - 9pm</p>
          </div>
          <div className="text-center md:text-right">
            <h5 className="font-semibold mb-4">Contact</h5>
            <p className="text-gray-300 mb-1">(555) 123-4567</p>
            <p className="text-gray-300 mb-1">info@himalayancurry.com</p>
            <p className="text-gray-300">123 Mountain View Ave</p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400">&copy; 2024 Himalayan Curry & Tandoor House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
