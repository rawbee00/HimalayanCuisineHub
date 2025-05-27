export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="yadri-font text-5xl md:text-7xl font-bold text-primary-custom mb-2 tracking-wide">
            Himalayan
          </h1>
          <h2 className="yadri-font text-2xl md:text-3xl font-semibold text-primary-custom mb-3">
            Curry & Tandoor House
          </h2>
          <p className="text-lg md:text-xl text-primary-custom font-medium tracking-wider">
            Nepali - Indian Cuisine
          </p>
        </div>
      </div>
    </header>
  );
}
