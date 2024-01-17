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
      <h2 className='mb-5'>Projects</h2>
      <Card title={"Internship"} image={blackhole} description={"Helped build a design system consisting of accessible, adaptable, user-friendly UI components and full pages for Cricket developers to use throughout the Cricket website using HTML, CSS, Bootstrap, and JavaScript"}/>
      <Card title={"Film Site"} image={bottomimage} description={"Worked within a Scrum to build a full stack application mimicking a cinema site to order movie tickets using React and Flask with a focus on the frontend side "}/>
      <Card title={"Ride Share Application"} image={header} description={"Worked with a partner using agile methodology to create an android application letting users create and accept ride requests and offers using Android Studio, and Google Firebase"}/>

    </div>
  );
}

export default App;
