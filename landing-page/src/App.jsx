import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import CarrosselApp from './components/CarrosselApp.jsx'
import Footer from './components/Footer.jsx'
import CarrosselTime from './components/CarrosselTime.jsx'
import Intro from './components/Intro.jsx'

function App() {
  return (
    <div style={{ margin: 0 }}>
      <Header />
      <div id="sobre">
        <Banner />
      </div>
      <div id="funcionalidades" style={{ paddingTop: 120 }}>
        <CarrosselApp />
      </div>
      <div id="equipe">
        <CarrosselTime />
      </div>
      <Intro />
      <Footer />
    </div>
  )
}
export default App
