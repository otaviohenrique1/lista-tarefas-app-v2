import { HTMLAttributes } from "react";
import styled from "styled-components";

const MensagemEstilizada = styled.span`
  background-color: #ffb3b3;
  border-color: #ff4d4d;
  border-width: 2px;
  border-style: solid;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 5px;
  position: absolute;
  width: 200px;
  text-align: center;
`;

interface MensagemProps extends HTMLAttributes<HTMLSpanElement> {
  mensagem: string;
}

export function Mensagem(props: MensagemProps) {
  return (
    <MensagemEstilizada {...props}>
      {props.mensagem}
    </MensagemEstilizada>
  );
}