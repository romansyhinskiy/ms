import './App.css';
import Header from './components/header';
import IntroSection from './components/sections/intro';
import WhyUs from './components/sections/whyUs';
import ForWho from './components/sections/forWho';
import Result from './components/sections/result';
import Benefits from './components/sections/benefits';
import Program from './components/sections/program';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <WhyUs />
      <ForWho />
      <Result />
      <Benefits />
      <Program />
    </div>
  );
}

export default App;
