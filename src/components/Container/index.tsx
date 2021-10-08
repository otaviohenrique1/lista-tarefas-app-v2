import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const ContainerAppEstilizado = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
`;

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function ContainerApp(props: ContainerProps) {
  return (
    <ContainerAppEstilizado {...props}>
      {props.children}
    </ContainerAppEstilizado>
  );
}

export const ContainerBotoes = styled.div`
  display: flex;
  flex-direction: row;

  button:first-child {
    margin-right: 5px;
  }
`;