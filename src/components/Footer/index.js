import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  StyledDevelopedBy,
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
      <StyledRightsReserved>
        © 2023 Direitos Reservados | <span>Pump Crazy Cookies</span>
      </StyledRightsReserved>
      <StyledDevelopedBy>
        Developed by{" "}
        <a
          href="https://edtech1985.com.br/"
          target="_blank"
          rel="noreferrer"
          alt="Desenvolvedor Web edtech1985"
        >
          <span>edtech1985</span>
        </a>
      </StyledDevelopedBy>
    </StyledFooter>
  );
}

export default Footer;
