import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import { Botao } from "../Botao";
import { ContainerBotoes } from "../Container";

export const ItemListaVaziaEstilizado = styled.li`
  list-style: none;
  font-size: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  border-color: cadetblue;
  border-width: 1px;
  border-style: solid;
  padding: 10px;
  border-radius: 10px;
`;

interface ItemProps {
  tarefa: string;
  handleRemoveItem?: React.FormEventHandler<HTMLFormElement>
}

export function Item(props: ItemProps) {
  const [itemChecked, setItemChecked] = useState<boolean>(true);
  
  return (
    <ItemEstilizado>
      <input
        type="checkbox"
        name="check"
        id="checkItem"
        onClick={() => { setItemChecked(!itemChecked); }}
      />
      <TarefaTitulo
        style={{ textDecoration: (!itemChecked) ? 'line-through' : 'none' }}
      >
        {props.tarefa}
      </TarefaTitulo>
      <ContainerBotoes>
        <form onSubmit={props.handleRemoveItem}>
          <BotaoApagar type="submit">
            <AiOutlineDelete size={15} />
          </BotaoApagar>
        </form>
      </ContainerBotoes>
    </ItemEstilizado>
  );
}

const TarefaTitulo = styled.span`
  text-align: start;
  width: 100%;
  margin-right: 5px;
  margin-left: 5px;
`;

const BotaoApagar = styled(Botao)`
  background-color: orangered;
`;

const ItemEstilizado = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;
  border-color: cadetblue;
  border-width: 1px;
  border-style: solid;
  padding: 10px;
  border-radius: 10px;

  & {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &:first-child {
    margin-bottom: 0;
  }
`;
