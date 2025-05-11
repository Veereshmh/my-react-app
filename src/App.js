// import logo from './logo.svg';
import './App.css';
import Count from './components/Count';
import Counter from './components/Counter'

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">      
        <h1 className="text-3xl font-bold text-center">Hello From GitHub Pages </h1>
        <div class="bg-gray-200 p-4"><Count /></div>
        <div class="bg-gray-300 p-4"><Counter /></div>
        <div class="bg-gray-400 p-4">Item 3</div>
        <div class="bg-gray-500 p-4">Item 4</div>
        <div>
          
        </div>      
        
    </div>
  );
}

export default App;
