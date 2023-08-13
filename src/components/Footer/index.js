import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  StyledDevelopedBy,
  StyledDiv,
  StyledFooter,
  StyledIconItem,
  StyledIconList,
  StyledRightsReserved,
} from "./Footer";

function Footer() {
  return (
    <StyledFooter>
      <StyledIconList>
        <StyledIconItem>
          <a
            href="https://www.instagram.com/pumpcrazycookies/"
            target="_blank"
            rel="noreferrer"
            alt="Instagram Pump Crazy Cookies"
          >
            <FaInstagram />
          </a>
        </StyledIconItem>

        <StyledIconItem>
          <a
            href="https://api.whatsapp.com/message/FZ6EZZKFV4PTI1?autoload=1&app_absent=0"
            target="_blank"
            rel="noreferrer"
            alt="WhatsApp Pump Crazy Cookies"
          >
            <FaWhatsapp />
          </a>
        </StyledIconItem>
      </StyledIconList>
      <StyledDiv>
        <StyledRightsReserved>
          Horário de Atendimento: Seg. a Sáb. das 10h às 18h
        </StyledRightsReserved>
        <StyledRightsReserved>
          © 2023 Direitos Reservados | <span>Pump Crazy Cookies</span>
        </StyledRightsReserved>
      </StyledDiv>
      <StyledDevelopedBy>
        Developed by{" "}
        <a
          href="https://www.edtech1985.com.br/"
          target="_blank"
          rel="noreferrer"
          alt="Desenvolvedor Web edtech1985"
          aria-label="Criação de Websites edtech1985"
        >
          <span>edtech1985</span>
        </a>
      </StyledDevelopedBy>
    </StyledFooter>
  );
}

export default Footer;
