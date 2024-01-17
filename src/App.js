import Banner from './components/banner/Banner.js';
import Card from './components/cards/Card.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import blackhole from './images/blackhole.jpeg'
import bottomimage from './images/bottom.png'
import header from './images/headerimage.png'



function App() {
  return (
    <div className='container'>
      <Banner/>
      <h2>Projects</h2>
      <Card title={"Internship"} image={blackhole} description={"Helped build a design system consisting of accessible, adaptable, user-friendly UI components and full pages for Cricket developers to use throughout the Cricket website using HTML, CSS, Bootstrap, and JavaScript"}/>
      <Card title={"Film Site"} image={bottomimage} description={"Helped build a design system consisting of accessible, adaptable, user-friendly UI components and full pages for Cricket developers to use throughout the Cricket website using HTML, CSS, Bootstrap, and JavaScript"}/>
      <Card title={"Ride Share Application"} image={header} description={"Helped build a design system consisting of accessible, adaptable, user-friendly UI components and full pages for Cricket developers to use throughout the Cricket website using HTML, CSS, Bootstrap, and JavaScript"}/>

    </div>
  );
}

export default App;
