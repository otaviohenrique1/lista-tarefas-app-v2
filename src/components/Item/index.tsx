import styled from "styled-components";

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
/*
export function Item(props: ItemProps) {
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
        {item.tarefa}
      </TarefaTitulo>
      <ContainerBotoes>
        <form onSubmit={() => HandleRemoveItem(item.id)}>
          <BotaoApagar type="submit">
            <AiOutlineDelete size={15} />
          </BotaoApagar>
        </form>
      </ContainerBotoes>
    </ItemEstilizado>
  );
}

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
*/