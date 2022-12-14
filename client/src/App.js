
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { Routes, Route } from "react-router-dom";
import Resume from './pages/resume/Resume';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Routes>
                {/* <Route path="/"> */}
                  <Route index element={<Home type="random"/>} />
                  <Route path="about" element={<About />} />
                  <Route path="resume" element={<Resume/>}/>
                  <Route path="services" element={<Services/>} />
                  <Route path="portfolio" element={<Portfolio/>} />

                  {/* <Route path="trends" element={<Home type="trends"/>} />
                  <Route path="subscriptions" element={<Home type="sub"/>} />
                  <Route path="search" element={<Search/>} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route> */}
                {/* </Route> */}
              
              </Routes>
    </div>
  );
}

export default App;
