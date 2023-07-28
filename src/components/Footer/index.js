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
          >
            <FaInstagram />
          </a>
        </StyledIconItem>

        <StyledIconItem>
          <a
            href="https://api.whatsapp.com/message/FZ6EZZKFV4PTI1?autoload=1&app_absent=0"
            target="_blank"
            rel="noreferrer"
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
          href="https://www.linkedin.com/in/edtech1985/"
          target="_blank"
          rel="noreferrer"
        >
          <span>edtech1985</span>
        </a>
      </StyledDevelopedBy>
    </StyledFooter>
  );
}

export default Footer;
