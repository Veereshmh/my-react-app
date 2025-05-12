// import logo from './logo.svg';
import './App.css';
import Count from './components/Count';
import Counter from './components/Counter';
import CollapsibleFAQ from './components/CollapsibleFAQ';

function App() {
  return (
    <div className="w-full">  
    <div className='grid-cols-1 mb-20'>    
        <h1 className="text-3xl font-bold text-center mt-10">Hello From GitHub Pages </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 bg-orange-200'>
        <div class="bg-gray-200 p-4"><Count /></div>
        <div class="bg-gray-300 p-4"><Counter /></div>         
        </div>     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 bg-gray-300">
        <CollapsibleFAQ />
          </div> 
        
    </div>
  );
}

export default App;
