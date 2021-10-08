import { useEffect, useState } from "react";
import { AiOutlineClear, AiOutlineDelete, AiOutlineSave } from "react-icons/ai";
import styled from "styled-components";
import { Botao } from "../../components/Botao";
import { ContainerApp, ContainerBotoes } from "../../components/Container";
import { Titulo } from "../../components/Titulo";
import * as Yup from "yup";
import { FormTypes, MensagemErro, valoresIniciais } from "../../utils/utils";
import { Form, Formik, FormikHelpers } from "formik";
import { Mensagem } from "../../components/Mensagem";
import { Campo } from "../../components/Campo";

interface DataTypeTarefa {
  id: number,
  tarefa: string;
}

export const validacao = Yup.object().shape({
  tarefa: Yup.string().required(MensagemErro('tarefa')),
});

export function ListaTarefas() {
  const [data, setData] = useState<DataTypeTarefa[]>([]);
  const [itemChecked, setItemChecked] = useState<boolean>(true);

  function handleSubmitForm(values: FormTypes, formikHelpers: FormikHelpers<FormTypes>) {
    const id = Math.floor(Math.random() * 100000);

    const novaTarefa = data.concat({
      id: id,
      tarefa: values.tarefa
    });

    setData(novaTarefa);
    
    alert('Item salvo');

    formikHelpers.resetForm();
  }

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <ContainerApp>
      <Titulo titulo="Lista de tarefas" />
      <Formik
        initialValues={valoresIniciais}
        validationSchema={validacao}
        onSubmit={handleSubmitForm}
      >
        {({ errors, touched, values }) => (
          <FormularioEstilizado>
            <Campo
              id="tarefa"
              name="tarefa"
              type="text"
              placeholder="Nome da tarefa"
              value={values.tarefa}
              erro={(errors.tarefa && touched.tarefa) ? (<Mensagem mensagem={errors.tarefa}/>) : null}
            />
            <ContainerBotoesEstilizado>
              <BotaoSalvar type="submit">
                <AiOutlineSave size={15} />
              </BotaoSalvar>
              <BotaoLimpar type="reset">
                <AiOutlineClear size={15} />
              </BotaoLimpar>
            </ContainerBotoesEstilizado>
          </FormularioEstilizado>
        )}
      </Formik>
      <ListaEstilizada>
        {(data.length === 0) ? (
          <ItemListaVaziaEstilizado>
            Lista vazia
          </ItemListaVaziaEstilizado>
        ) : data.map((item, index) => {
          return (
            <ItemEstilizado
              key={index}
            >
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
                <form onSubmit={(event) => {
                  event.preventDefault();
                  const tarefaRemovida = data.filter((tarefa) => tarefa.id !== item.id);
                  setData(tarefaRemovida);
                }}>
                  <BotaoApagar type="submit">
                    <AiOutlineDelete size={15} />
                  </BotaoApagar>
                </form>
              </ContainerBotoes>
            </ItemEstilizado>
          );
        })}
      </ListaEstilizada>
    </ContainerApp>
  );
}

const ContainerBotoesEstilizado = styled(ContainerBotoes)`
  margin-left: 15px;
`;

const BotaoSalvar = styled(Botao)`
  background-color: deepskyblue;
`;

const BotaoLimpar = styled(Botao)`
  background-color: mediumspringgreen;
`;

const FormularioEstilizado = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ListaEstilizada = styled.ul`
  padding-inline-start: 0;
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

const BotaoApagar = styled(Botao)`
  background-color: orangered;
`;

const TarefaTitulo = styled.span`
  text-align: start;
  width: 100%;
  margin-right: 5px;
  margin-left: 5px;
`;

const ItemListaVaziaEstilizado = styled.li`
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
