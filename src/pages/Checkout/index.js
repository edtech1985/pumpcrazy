import React, { useContext, useState } from "react";
import {
  CheckouContent,
  CheckoutContainer,
  CheckoutSummary,
  CheckoutSummaryText,
  CheckoutSummaryValue,
  CheckoutTable,
  CheckoutTableData,
  CheckoutTableDataActions,
  CheckoutTableDataName,
  CheckoutTableDataPrice,
  CheckoutTableDataQuantity,
  CheckoutTableHead,
  CheckoutTableRow,
  DivButton,
  DivCitySelector,
  Mask,
  MaskDiv,
  MinusButton,
  PlusButton,
  QuantityButtons,
  StyledBackground,
  TrashIcon,
} from "./Checkout";
import { CartContext } from "../../components/CartContext";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import Mask1 from "../../img/mask3.png";

function Checkout() {
  const { cartItems, updateCartItemQuantity, removeFromCart } =
    useContext(CartContext);

  const [selectedCity, setSelectedCity] = useState("Canoas"); // Cidade padrão
  const [deliveryFee, setDeliveryFee] = useState(7); // Taxa padrão para Canoas

  // Função para obter a taxa de entrega com base na cidade
  const getDeliveryFee = (city) => {
    switch (city) {
      case "Canoas":
        return 7;
      case "Porto Alegre":
        return 20;
      case "Cachoeirinha":
        return 15;
      default:
        return "Consultar";
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Função para calcular o total incluindo a taxa de entrega
  const getTotalWithDelivery = () => {
    const totalWithoutDelivery = getTotalPrice();
    return (
      totalWithoutDelivery + (typeof deliveryFee === "number" ? deliveryFee : 0)
    );
  };

  return (
    <>
      <CheckoutContainer>
        <CheckouContent>
          <StyledBackground />
          <DivCitySelector>
            Selecione sua cidade:
            <select
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setDeliveryFee(getDeliveryFee(e.target.value));
              }}
            >
              <option value="Canoas">Canoas</option>
              <option value="Porto Alegre">Porto Alegre</option>
              <option value="Cachoeirinha">Cachoeirinha</option>
            </select>
            {typeof deliveryFee === "number" && deliveryFee !== "Consultar" && (
              <div>
                Taxa de Entrega para {selectedCity}: R$ {deliveryFee.toFixed(2)}
              </div>
            )}
          </DivCitySelector>
          <CheckoutTable>
            <CheckoutTableHead>
              <CheckoutTableDataName>Product</CheckoutTableDataName>
              <CheckoutTableDataPrice>Price</CheckoutTableDataPrice>
              <CheckoutTableDataQuantity>Quantity</CheckoutTableDataQuantity>
              <CheckoutTableData>Total</CheckoutTableData>
              <CheckoutTableData>Actions</CheckoutTableData>
            </CheckoutTableHead>
            <tbody>
              {cartItems.map((item) => (
                <CheckoutTableRow key={item.id}>
                  <CheckoutTableDataName>{item.name}</CheckoutTableDataName>
                  <CheckoutTableDataPrice>{`R$ ${item.price.toFixed(
                    2
                  )}`}</CheckoutTableDataPrice>
                  <CheckoutTableDataQuantity>
                    <QuantityButtons>
                      <MinusButton
                        onClick={() =>
                          updateCartItemQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        -
                      </MinusButton>
                      <CheckoutTableDataQuantity>
                        {item.quantity}
                      </CheckoutTableDataQuantity>
                      <PlusButton
                        onClick={() =>
                          updateCartItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </PlusButton>
                    </QuantityButtons>
                  </CheckoutTableDataQuantity>
                  <CheckoutTableData>{`R$ ${(
                    item.price * item.quantity
                  ).toFixed(2)}`}</CheckoutTableData>
                  <CheckoutTableDataActions>
                    <TrashIcon onClick={() => removeFromCart(item.id)} />
                  </CheckoutTableDataActions>
                </CheckoutTableRow>
              ))}
            </tbody>
          </CheckoutTable>
          <CheckoutSummary>
            <div>
              <CheckoutSummaryText>Total Cookies:</CheckoutSummaryText>
              <CheckoutSummaryValue>{`R$ ${getTotalPrice().toFixed(
                2
              )}`}</CheckoutSummaryValue>
            </div>
            {typeof deliveryFee === "number" && deliveryFee !== "Consultar" && (
              <div>
                <CheckoutSummaryText>Taxa de Entrega:</CheckoutSummaryText>
                <CheckoutSummaryValue>{`R$ ${deliveryFee.toFixed(
                  2
                )}`}</CheckoutSummaryValue>
              </div>
            )}
            <div>
              <CheckoutSummaryText>Total com Entrega:</CheckoutSummaryText>
              <CheckoutSummaryValue>{`R$ ${getTotalWithDelivery().toFixed(
                2
              )}`}</CheckoutSummaryValue>
            </div>
          </CheckoutSummary>
          <DivButton>
            <AnimatedButton
              selectedCity={selectedCity}
              totalWithDelivery={getTotalWithDelivery()}
            />
          </DivButton>
        </CheckouContent>
        <MaskDiv>
          <Mask src={Mask1} alt="Mask1" />
        </MaskDiv>
      </CheckoutContainer>
    </>
  );
}

export default Checkout;
