import React, { useState, useContext } from "react";
import removeAccents from "remove-accents";
import { CartContext } from "../../components/CartContext"; // Certifique-se de ajustar o caminho correto
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
} from "./Cardapio";

export default function Cardapio() {
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
    <CardapioContainer>
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="Pesquisar produto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon />
      </SearchInputContainer>

      <Table>
        <thead>
          <tr>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Preço</TableHeader>
            <TableHeader>Add</TableHeader>
          </tr>
        </thead>
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
            <ModalText>Preço: R$ {selectedProduct.price.toFixed(2)}</ModalText>
            <CartIcon onClick={() => addToCart(selectedProduct)} />
          </ModalContent>
        </ModalOverlay>
      )}
    </CardapioContainer>
  );
}
