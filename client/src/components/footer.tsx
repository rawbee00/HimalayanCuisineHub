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
            <p className="text-gray-300 mb-1">Monday - Thursday: 1:00 PM - 10:00 PM</p>
            <p className="text-gray-300 mb-1">Friday - Saturday: 1:00 PM - 10:00 PM</p>
            <p className="text-gray-300">Sunday: 1:00 PM - 10:00 PM</p>
          </div>
          <div className="text-center md:text-right">
            <h5 className="font-semibold mb-4">Contact</h5>
            <p className="text-gray-300 mb-1">+34 641 11 45 11</p>
            <p className="text-gray-300 mb-1">hcth.nepal@gmail.com</p>
            <p className="text-gray-300">Av. Jose Antonio Tavio, 13, A</p>
            <p className="text-gray-300">38630 Costa del Silencio</p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400">&copy; 2024 Himalayan Curry & Tandoor House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
