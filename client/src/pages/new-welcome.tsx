import styles from './NewWelcome.module.css';

interface NewWelcomeProps {
  onEnter: () => void;
}

export default function NewWelcome({ onEnter }: NewWelcomeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-yatra text-white leading-tight drop-shadow-lg">Himalayan</h1>
          <p className="text-2xl md:text-4xl font-bold text-white mt-2 drop-shadow-md">Curry & Tandoor House</p>
          <p className="text-xl md:text-2xl font-medium text-white mt-1 mb-8 drop-shadow-md">Nepali - Indian Cuisine</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto mb-8 shadow-lg">
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Welcome to Himalayan Curry & Tandoor House, where the rich flavors of the Himalayas come to life. 
            Experience authentic Nepali and Indian dishes crafted with traditional recipes and fresh ingredients.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Discover the bold, fresh flavors of Nepal—a hidden gem of the Himalayas—paired with the familiar comfort of Indian cuisine.
          </p>
        </div>
        
        <div className={styles.buttonContainer}>
          <button
            onClick={onEnter}
            className={styles.enterButton}
          >
            Get to Know Us
            <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
