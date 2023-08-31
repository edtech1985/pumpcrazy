import React, { useState, useContext, useEffect } from "react";
import removeAccents from "remove-accents";
import { CartContext } from "../../components/CartContext";
import cookies from "../../db/cookiesdb.json";
import {
  CardapioContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  SearchInputContainer,
  SearchInput,
  SearchIcon,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ProductImage,
  ModalTitle,
  ModalText,
  CartIcon,
  StyledTHead,
} from "./Cardapio";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Cardapio() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const filteredProducts = cookies.cookies.filter((product) =>
    removeAccents(product.name.toLowerCase()).includes(
      removeAccents(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="animation" data-aos="fade-up">
      <CardapioContainer>
        <SearchInputContainer>
          <SearchInput
            type="text"
            placeholder="Pesquisar cookies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon />
        </SearchInputContainer>

        <Table>
          <StyledTHead>
            <tr>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Preço</TableHeader>
              <TableHeader>Add</TableHeader>
            </tr>
          </StyledTHead>
          <tbody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell onClick={() => openModal(product)}>
                  {product.name}
                </TableCell>
                <TableCell>R$ {product.price.toFixed(2)}</TableCell>
                <TableCell>
                  <CartIcon onClick={() => addToCart(product)} />
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>

        {selectedProduct && (
          <ModalOverlay onClick={handleOutsideClick}>
            <ModalContent>
              <CloseButton onClick={closeModal}>Fechar</CloseButton>
              <ModalTitle>{selectedProduct.name}</ModalTitle>
              <ProductImage
                src={selectedProduct.image_url}
                alt={selectedProduct.name}
              />
              <ModalText>{selectedProduct.description}</ModalText>
              <ModalText>
                Preço: R$ {selectedProduct.price.toFixed(2)}
              </ModalText>
              <CartIcon onClick={() => addToCart(selectedProduct)} />
            </ModalContent>
          </ModalOverlay>
        )}
      </CardapioContainer>
    </div>
  );
}
