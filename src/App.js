import './App.css';
import Header from './components/header';
import IntroSection from './components/sections/intro';
import WhyUs from './components/sections/whyUs';
import ForWho from './components/sections/forWho'

function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <WhyUs />
      <ForWho />
    </div>
  );
}

export default App;
