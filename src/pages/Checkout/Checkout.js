import { FaTrash } from "react-icons/fa";
import styled from "styled-components";

import backgroundImage from "./backgroundImage";

export const CheckoutContainer = styled.div`
  width: 100vw;
  padding-top: 1rem;

  @media only screen and (max-width: 768px) {
    max-width: 100vw;
  }
`;

export const CheckouContent = styled.div`
  max-width: 90vw;
  justify-content: space-around;
  margin: 0 auto;
`;

export const StyledBackground = styled.div`
  background-image: url(${backgroundImage});
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.25;
  z-index: -10;
`;

export const DivCitySelector = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 2rem;
  line-height: 2rem;

  select {
    padding: 0.5rem;
    margin-left: 1rem;
    border-radius: 15px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const CheckoutTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 15px;
  margin-top: 20px;
  background-color: rgba(240, 217, 202, 0.85);

  @media only screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;

export const CheckoutTableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const CheckoutTableRow = styled.tr`
  border-bottom: 3px solid #ddd;
`;

export const CheckoutTableData = styled.td`
  padding: 0.5rem;
  text-align: left;

  @media only screen and (max-width: 768px) {
    padding: 0.25rem;
    font-size: 12px;
    width: 10px;
    max-width: 10px;
  }
`;

export const CheckoutTableDataActions = styled(CheckoutTableData)`
  width: 5vw;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 0.5rem;
    width: 5px;
  }
`;

export const TrashIcon = styled(FaTrash)`
  cursor: pointer;
  color: darkred;
  font-size: 1.25rem;
  padding: 0;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0;
  }
`;

export const CheckoutTableDataQt = styled.td`
  padding: 0.5rem;
  text-align: right;

  @media only screen and (max-width: 768px) {
    padding: 0.25rem;
    font-size: 12px;
    width: 10px;
    max-width: 10px;
  }
`;

export const CheckoutTableDataName = styled(CheckoutTableData)`
  width: 20vw;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    width: 10px;
    max-width: 10px;
  }
`;

export const CheckoutTableDataPrice = styled(CheckoutTableData)`
  width: 10vw;
  text-align: right;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    width: 10px;
    max-width: 10px;
  }
`;

export const CheckoutTableDataQuantity = styled(CheckoutTableData)`
  width: 10vw;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    width: 10px;
    max-width: 10px;
  }
`;

export const CheckoutSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0.75rem;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    margin: 0 1rem;
    padding-bottom: 2rem;
  }
`;

export const CheckoutSummaryText = styled.p`
  font-size: 1.25rem;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CheckoutSummaryValue = styled.p`
  font-size: 1.25rem;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CheckoutButton = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 15px;
  color: white;
  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background-color: #3e8e41;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 0.5rem 1rem;
  }
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-bottom: 20px;
`;

export const QuantityButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 10vw;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const MinusButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 4px;
  margin-right: 15px;
  width: 30px;
  max-width: 30px;
  &:hover {
    background-color: red;
    color: white;
  }

  @media only screen and (max-width: 768px) {
    padding: 5px;
    font-size: 14px;
    margin: 0 1px;
    width: 20px;
  }
`;

export const PlusButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 4px;
  margin-left: 15px;
  width: 30px;
  max-width: 30px;
  &:hover {
    background-color: green;
    color: white;
  }

  @media only screen and (max-width: 768px) {
    padding: 5px;
    font-size: 14px;
    margin: 0 1px;
    width: 20px;
  }
`;

export const RemoveButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 4px;
  &:hover {
    background-color: red;
    color: white;
  }

  @media only screen and (max-width: 768px) {
    padding: 6px;
    font-size: 12px;
    margin: 0 2px;
  }
`;

export const MaskDiv = styled.div`
  position: absolute;
  bottom: 50px;
  left: 125px;
  width: auto;
  max-height: 30vh;
  height: 30vh;
  z-index: 999;
`;

export const Mask = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: auto;
  height: 30vh;
  z-index: 999;

  @media only screen and (max-width: 600px) {
    max-height: 15vh;
    bottom: 17px;
    left: -80px;
  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {
    max-height: 16vh;
    left: -10vw;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    max-height: 25vh;
    bottom: -7vh;
  }
`;
