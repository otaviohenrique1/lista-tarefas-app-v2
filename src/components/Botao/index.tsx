import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Botao(props: BotaoProps) {
  return (
    <BotaoEstilizado {...props}>
      {props.children}
    </BotaoEstilizado>
  );
}

const BotaoEstilizado = styled.button`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  padding: 0;
`;