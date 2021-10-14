import { Form, Formik } from "formik";
import { FormEventHandler, MouseEventHandler, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import styled from "styled-components";
import { validacao } from "../../pages/ListaTarefas";
import { FormTypes } from "../../utils/utils";
import { Botao } from "../Botao";
import { Campo } from "../Campo";
import { ContainerBotoes } from "../Container";
import { Mensagem } from "../Mensagem";

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
  handleRemoveItem: React.FormEventHandler<HTMLFormElement>;
  onClickBotaoEditar: MouseEventHandler<HTMLButtonElement>;
}

export function Item(props: ItemProps) {
  const [itemChecked, setItemChecked] = useState<boolean>(true);
  const [modoEdicaoItem, setModoEdicaoItem] = useState<boolean>(false);
  
  return (
    <ItemEstilizado>
      <input
        type="checkbox"
        name="check"
        id="checkItem"
        onClick={() => { setItemChecked(!itemChecked); }}
        disabled={(modoEdicaoItem) ? true : false}
      />
      {(modoEdicaoItem) ? (
        <>
          <CampoItem
            type="text"
            value={props.tarefa}
            onChange={() => {}}
          />
          <ContainerBotoes>
            <BotaoSalvar
              type="button"
              onClick={() => setModoEdicaoItem(!modoEdicaoItem)}
            >
              <AiOutlineCheckCircle size={15} />
            </BotaoSalvar>
            <BotaoCancelar
              type="button"
              onClick={() => setModoEdicaoItem(!modoEdicaoItem)}
            >
              <AiOutlineCloseCircle size={15} />
            </BotaoCancelar>
          </ContainerBotoes>
        </>
      ) : (
        <>
          <ItemNaoEditado
            itemChecked={itemChecked}
            tarefa={props.tarefa}
            onClickBotaoEditar={() => setModoEdicaoItem(!modoEdicaoItem)}
            handleRemoveItem={props.handleRemoveItem}
          />
        </>
      )}
    </ItemEstilizado>
  );
}

interface ItemNaoEditadoProps {
  itemChecked: boolean;
  tarefa: string;
  onClickBotaoEditar: MouseEventHandler<HTMLButtonElement>;
  handleRemoveItem: FormEventHandler<HTMLFormElement>
}

function ItemNaoEditado(props: ItemNaoEditadoProps) {
  return (
    <>
      <TarefaTitulo
        style={{ textDecoration: (!props.itemChecked) ? 'line-through' : 'none' }}
      >
        {props.tarefa}
      </TarefaTitulo>
      <ContainerBotoes>
        <BotaoEditar
          type="button"
          onClick={props.onClickBotaoEditar}
        >
          <AiOutlineEdit size={15} />
        </BotaoEditar>
        <form onSubmit={props.handleRemoveItem}>
          <BotaoApagar type="submit">
            <AiOutlineDelete size={15} />
          </BotaoApagar>
        </form>
      </ContainerBotoes>
    </>
  );
}

const TarefaTitulo = styled.span`
  text-align: start;
  width: 100%;
  margin-right: 5px;
  margin-left: 5px;
`;

const BotaoEditar = styled(Botao)`
  background-color: gold;
`;

const BotaoApagar = styled(Botao)`
  background-color: orangered;
`;

const BotaoSalvar = styled(Botao)`
  background-color: chartreuse;
`;

const BotaoCancelar = styled(Botao)`
  background-color: palevioletred;
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

const CampoItem = styled.input`
  width: 100%;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 15px;
`;


interface FormularioEdicaoProps {
  valorCampo: string;
}

export function FormularioEdicao(props: FormularioEdicaoProps) {
  const valoresIniciais: FormTypes = {
    tarefa: props.valorCampo || '',
  };
  
  return (
    <Formik
      initialValues={valoresIniciais}
      validationSchema={validacao}
      onSubmit={() => {}}
    >
      {({ errors, touched, values }) => (
        <Form>
          <Campo
            id="tarefa"
            name="tarefa"
            type="text"
            placeholder="Nome da tarefa"
            value={values.tarefa}
            erro={(errors.tarefa && touched.tarefa) ? (<Mensagem mensagem={errors.tarefa}/>) : null}
          />
        </Form>
      )}
      
    </Formik>
  );
}
