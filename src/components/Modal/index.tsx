import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  titulo: string;
  texto: string;
}

export function Modal(props: ModalProps) {
  return (
    <ModalContainer {...props}>
      <ModalContent>
        <ModalHeader>
          <ModalClose>&times;</ModalClose>
          <ModalTitulo>{props.titulo}</ModalTitulo>
        </ModalHeader>
        <ModalBody>
          {props.texto}
        </ModalBody>
      </ModalContent>
      <ModalFooter>
      </ModalFooter>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const ModalTitulo = styled.h2``;

const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;

  @-webkit-keyframes animatetop {
    from {top:-300px; opacity:0} 
    to {top:0; opacity:1}
  }

  @keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
  }
`;

const ModalHeader = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
`;

const ModalClose = styled.style`
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
  
  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ModalBody = styled.div`
  padding: 2px 16px;
`;

const ModalFooter = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
`;
