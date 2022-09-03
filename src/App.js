import './App.css';
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className='Header'>
      <Header />
      </div>
      <div className='Body'>
      <Body />
      </div>
      <div className='Footer'>
      <Footer />
      </div>
    </div>
  );
}

export default App;
