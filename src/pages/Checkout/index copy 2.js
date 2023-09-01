import React, { useContext, useState } from "react";
import {
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
  MinusButton,
  PlusButton,
  QuantityButtons,
  TrashIcon,
} from "./Checkout";
import { CartContext } from "../../components/CartContext";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";

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
                {/* Exibindo a taxa de entrega com base na cidade selecionada */}
                <div>
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
            <option value="Outros">Outros</option>
          </select>
          {typeof deliveryFee 
            <div>
              Taxa de Entrega para {selectedCity}: R$ {deliveryFee.toFixed(2)}
            </div>
          }
          <div>
            Total com Taxa de Entrega: R$ {getTotalWithDelivery().toFixed(2)}
          </div>
        </div>
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
                <CheckoutTableData>{`R$ ${(item.price * item.quantity).toFixed(
                  2
                )}`}</CheckoutTableData>
                <CheckoutTableDataActions>
                  <TrashIcon onClick={() => removeFromCart(item.id)} />
                </CheckoutTableDataActions>
              </CheckoutTableRow>
            ))}
          </tbody>
        </CheckoutTable>
        <CheckoutSummary>
          <CheckoutSummaryText>Total:</CheckoutSummaryText>
          <CheckoutSummaryValue>{`R$ ${getTotalPrice().toFixed(
            2
          )}`}</CheckoutSummaryValue>
        </CheckoutSummary>
        <DivButton>
          <AnimatedButton />
        </DivButton>

      </CheckoutContainer>
    </>
  );
}

export default Checkout;