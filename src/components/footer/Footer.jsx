import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Termos de uso</li>
          <li className="menuItem">Política de Privacidade</li>
          <li className="menuItem">Sobre</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">Perguntas frequentes</li>
        </ul>
        <div className="infoText">
          Bem-vindo ao nosso universo cinematográfico e televisivo! Aqui, você
          vai mergulhar em uma jornada emocionante através das telas. Explore
          uma vasta coleção de filmes aclamados, desde clássicos atemporais até
          os mais recentes sucessos de bilheteria. Além disso, nossa seleção de
          séries vai cativar você, com tramas envolventes que vão mantê-lo
          grudado na tela episódio após episódio. Navegue por gêneros variados,
          desde ação eletrizante, romance apaixonante, suspense arrepiante até
          animações emocionantes - temos algo para todos os gostos. Nosso site é
          o destino perfeito para cinéfilos e amantes de séries, onde você pode
          descobrir novas histórias, reviver momentos inesquecíveis e explorar
          narrativas que vão despertar todas as emoções. Com uma interface
          intuitiva, nossa plataforma facilita a busca pelo entretenimento que
          você deseja. Além disso, fornecemos informações detalhadas sobre cada
          título, incluindo sinopses cativantes, elenco estelar e avaliações que
          o ajudarão a escolher o próximo filme ou série a assistir. Prepare a
          pipoca, acomode-se confortavelmente e comece a explorar a magia do
          cinema e da televisão. Sua próxima grande aventura está apenas a um
          clique de distância!
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a
              href="https://www.instagram.com/patricio_sfilho/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://github.com/antonioPatricioSZ"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </span>

          <span className="icon">
            <a
              href="https://www.linkedin.com/in/antoniopatr%C3%ADcio/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
