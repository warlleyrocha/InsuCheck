import React, { useEffect, useRef, useState } from "react";
import "./CarrosselApp.css";
import CardCarrosselApp from "./CardCarrosselApp";
import RodapeCarrossel from "./RodapeCarrossel";

// Imagens
import grafico from "../assets/images/grafico.svg";
import alertas from "../assets/images/alertas.svg";
import coracao from "../assets/images/coracao.svg";
import historico from "../assets/images/historico.svg";
import telefone from "../assets/images/telefone.svg";

const CarrosselApp = () => {
  
  const itensOriginais = [
    { id: 1, title: "Monitore Sua Glicemia em Tempo Real", text: "Registre seus níveis de glicose de forma simples e acompanhe suas medições ao longo do tempo para um melhor controle do diabetes", img: grafico, idRodape: 0 },
    { id: 2, title: "Acompanhe Sua Pressão Arterial", text: "Insira e consulte seus registros de pressão arterial para entender melhor a relação entre diabetes e saúde cardiovascular.", img: coracao, idRodape: 1},
    { id: 3, title: "Histórico Completo Sempre à Mão", text: "Acesse rapidamente todas as suas medições anteriores para identificar padrões e tomar decisões mais informadas sobre seu tratamento.", img: historico, idRodape: 2 },
    { id: 4, title: "Alertas Inteligentes Sobre Sua Glicemia", text: "Receba alertas automáticos quando sua glicemia estiver fora dos padrões, ajudando você a agir rapidamente quando necessário.", img: alertas, idRodape: 3 },
    { id: 5, title: "Interface Simples e Intuitiva", text: "Um design pensado para facilitar seu dia a dia, permitindo registrar e consultar seus dados de forma rápida e sem complicações.", img: telefone, idRodape: 4 }
  ];

  const carrosselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(3); // Começa no terceiro item
  const scrollTimeout = useRef(null);
  const [activeRodape, setActiveRodape] = useState(itensOriginais[activeIndex]?.idRodape || 0);
  
  
  const [itens, setItens] = useState(() => {
    const ultimosItens = itensOriginais.slice(-2).map((item, idx) => ({
      ...item,
      id: -2 + idx
    }));

    const primeirosItens = itensOriginais.map((item, idx) => ({
      ...item,
      id: idx
    }));

    return [...ultimosItens, ...primeirosItens];
  });

  
  const handleScroll = () => {
    if (!carrosselRef.current) return;

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      const container = carrosselRef.current;
      const scrollPosition = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const cardWidth = 792;
      const currentIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(currentIndex);

      if (scrollPosition > maxScroll * 0.8) {
        setItens(itensAtuais => {
          const proximoItem = itensOriginais[itensAtuais.length % itensOriginais.length];
          return [
            ...itensAtuais,
            {
              ...proximoItem,
              id: itensAtuais.length
            }
          ];
        });
      }

      if (scrollPosition < cardWidth) {
        setItens(itensAtuais => {
          const primeiroItem = itensOriginais[(itensOriginais.length - 1) - (itensAtuais.length % itensOriginais.length)];
          return [
            {
              ...primeiroItem,
              id: itensAtuais[0].id - 1
            },
            ...itensAtuais
          ];
        });
      }
    }, 50);
  };

  useEffect(() => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollLeft = 792 * 2;
    }
  }, []);

  useEffect(() => {
    const container = carrosselRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (itens[activeIndex]) {
      setActiveRodape(itens[activeIndex].idRodape);
    }
  }, [activeIndex, itens]);

  const handleClick = (index) => {
    if (carrosselRef.current) {
      const cardWidth = 792;
      const scrollX = index * cardWidth;
      carrosselRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
      setActiveIndex(index);
      console.log(itens)
    }
  };

  return (
    <div style={{backgroundColor: "#FDFDFD",width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
    <div ref={carrosselRef} className="carrossel-container-app">
      {itens.map((item, index) => (
        <div
          key={item.id}
          className={`cardApp ${index === activeIndex ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          <CardCarrosselApp img={item.img} title={item.title} text={item.text} />
        </div>
      ))}
    </div>
    <RodapeCarrossel totalSteps={5} activeStep={activeRodape} />
    </div>
  );
};

export default CarrosselApp;
