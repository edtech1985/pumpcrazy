import styled from "styled-components";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export const CardapioContainer = styled.section`
  width: 100vw;
  padding-top: 1rem;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;

  @media (max-width: 600px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px; /* Arredonda as bordas da tabela */
  overflow: hidden;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const StyledTHead = styled.thead`
  background-color: #f8f8f8;
  padding: 1rem;
  text-align: left;
`;

export const TableHeader = styled.th`
  background-color: rgba(240, 217, 202, 0.5);
  padding: 0.75rem;
  font-size: 1rem;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  background-color: rgba(240, 217, 202, 0.85);
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableCell = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 5px;
  width: 50%;
  background-color: white;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
  position: static;
  top: 0;

  @media (max-width: 600px) {
    margin: 0;
    width: 90%;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;

  flex: 1;
`;

export const SearchIcon = styled(FaSearch)`
  margin-left: 0.5rem;
  color: #999;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: var(--light-beige);
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 8px 16px 32px rgba(0, 0, 0, 0.5);
  width: 50vw;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  margin: 0 auto;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 70vw;
  }
`;

export const ModalTitle = styled.h2`
  color: var(--dark-brown);
`;

export const ModalText = styled.p`
  color: var(--dark-brown);
  margin-bottom: 0.5rem;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 10rem; /* Defina o valor que desejar */
  margin: 1rem;
  border-radius: 15px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  color: var(--dark-brown);
  border: none;
  position: absolute;
  font-size: 1rem;
  top: 10px;
  right: 10px;
  cursor: pointer;

  &:hover {
    color: red;
    font-weight: bold;
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  color: var(--dark-brown);
  cursor: pointer;
  padding-left: 1rem;

  &:hover {
    color: var(--green);
  }
`;
