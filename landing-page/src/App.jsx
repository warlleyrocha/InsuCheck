import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function App() {
  const smoother = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(gsap.ScrollTrigger, gsap.ScrollSmoother);

      smoother.current = gsap.ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5, // quanto tempo leva para chegar até a parte do scroll
        effects: true, // procura por data-speed e data-lag atributos nos elementos
        smoothTouch: 0.1, // scroll mais suave em aparelhos menores
      });

    return () => {
      // stop
      if (smoother.current) {
        smoother.current.kill();
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Header />
        <Banner />
      </div>
    </div>
  );
}

export default App;
