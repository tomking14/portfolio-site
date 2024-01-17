import Banner from './components/banner/Banner.js';
import Card from './components/cards/Card.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <div className='container'>
      <Banner/>
      <h2 className='mb-5'>Projects</h2>
      <Card />
     
    </div>
  );
}

export default App;
