import { FaTrash } from "react-icons/fa";
import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    margin: 0.25rem;
    height: 76vh;
    max-width: 100vw;
  }
`;

export const CheckoutTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
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

  @media only screen and (max-width: 600px) {
    padding: 0.25rem;
    font-size: 12px;
    width: 10px;
    max-width: 10px;
  }
`;

export const CheckoutTableDataActions = styled(CheckoutTableData)`
  width: 5vw;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
    width: 5px;
  }
`;

export const TrashIcon = styled(FaTrash)`
  cursor: pointer;
  color: darkred;
  font-size: 1.25rem;
  padding: 0;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 0;
  }
`;

export const CheckoutTableDataQt = styled.td`
  padding: 0.5rem;
  text-align: right;

  @media only screen and (max-width: 600px) {
    padding: 0.25rem;
    font-size: 12px;
    width: 10px;
    max-width: 10px;
  }
`;

export const CheckoutTableDataName = styled(CheckoutTableData)`
  width: 20vw;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    width: 10px;
    max-width: 10px;
  }
`;

export const CheckoutTableDataPrice = styled(CheckoutTableData)`
  width: 10vw;
  text-align: right;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    width: 10px;
    max-width: 10px;
  }
`;

export const CheckoutTableDataQuantity = styled(CheckoutTableData)`
  width: 10vw;
  text-align: center;

  @media only screen and (max-width: 600px) {
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

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    margin: 0 5px;
  }
`;

export const CheckoutSummaryText = styled.p`
  font-size: 1.25rem;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const CheckoutSummaryValue = styled.p`
  font-size: 1.25rem;
  font-weight: bold;

  @media only screen and (max-width: 600px) {
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
  @media only screen and (max-width: 600px) {
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

  @media only screen and (max-width: 600px) {
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

  @media only screen and (max-width: 600px) {
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

  @media only screen and (max-width: 600px) {
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

  @media only screen and (max-width: 600px) {
    padding: 6px;
    font-size: 12px;
    margin: 0 2px;
  }
`;
