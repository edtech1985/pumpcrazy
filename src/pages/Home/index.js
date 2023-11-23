import React, { useEffect } from "react";
import {
  Mask,
  MaskDiv,
  StyledContainer,
  StyledContent,
  StyledH1,
  StyledP,
} from "./Home";
import Mask1 from "../../img/mask1.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <StyledContainer>
      <div className="animation" data-aos="fade-up">
        <StyledContent>
          <StyledH1>
            Bem-vindo à <br></br>
            <span>Pump Crazy Cookies</span>!
          </StyledH1>
          <StyledP>
            Somos uma marca apaixonada por <b>cookies gourmet premium</b>,
            feitos com os melhores ingredientes e com muito amor. Nossa missão é
            proporcionar uma experiência única de sabor, textura e recheios
            irresistíveis.
          </StyledP>

          <StyledP>
            Em cada mordida, você sentirá uma <b>explosão de sabores</b> que
            despertará todos os seus sentidos. Nossos cookies são preparados com
            uma combinação perfeita de ingredientes selecionados, cuidadosamente
            equilibrados para oferecer o máximo prazer em cada pedaço.
          </StyledP>

          <StyledP>
            Localizada em Canoas, estamos prontos para levar até você as
            melhores guloseimas. Com a nossa entrega rápida e eficiente, você
            poderá desfrutar dos nossos deliciosos cookies no conforto da sua
            casa, no trabalho ou onde preferir.
          </StyledP>

          <StyledP>
            Navegue pelo nosso cardápio e descubra uma{" "}
            <b>variedade de sabores incríveis</b>. Desde os clássicos, como
            chocolate ao leite e cookies com gotas de chocolate, até combinações
            surpreendentes, como red velvet e frutas do bosque. Temos opções
            para todos os gostos!
          </StyledP>

          <StyledP>
            Entre em contato conosco para consultar os sabores disponíveis e
            faça já o seu pedido. Prepare-se para se render à tentação dos
            nossos cookies gourmet premium, feitos especialmente para os amantes
            de doces.
          </StyledP>

          <StyledP>
            <span>
              <b>Pump Crazy Cookies</b>
            </span>{" "}
            - Explosão de sabor e recheio!!
          </StyledP>
        </StyledContent>
        <MaskDiv>
          <Mask src={Mask1} alt="Mask1" />
        </MaskDiv>
      </div>
    </StyledContainer>
  );
}

export default Home;
