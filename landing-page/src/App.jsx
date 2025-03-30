import CarrosselApp from './components/CarrosselApp.jsx'
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import CarrosselTime from './components/CarrosselTime.jsx';

function App() {
  return (
    <div style={{ margin: 0 }}>
      <Header />
      <Banner />
      <CarrosselApp />
      <CarrosselTime />
      <Footer />
    </div>
  );
}

export default App;
