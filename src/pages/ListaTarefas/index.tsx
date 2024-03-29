import { useEffect, useState } from "react";
import { AiOutlineClear, AiOutlineSave } from "react-icons/ai";
// import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import { Botao } from "../../components/Botao";
import { ContainerApp, ContainerBotoes } from "../../components/Container";
import { Titulo } from "../../components/Titulo";
import * as Yup from "yup";
import { FormTypes, MensagemErro, valoresIniciais } from "../../utils/utils";
import { Form, Formik, FormikHelpers } from "formik";
import { Mensagem } from "../../components/Mensagem";
import { Campo } from "../../components/Campo";
import { Item, ItemListaVaziaEstilizado } from "../../components/Item";

interface DataTypeTarefa {
  id: number,
  tarefa: string;
}

export const validacao = Yup.object().shape({
  tarefa: Yup.string().required(MensagemErro('tarefa')),
});

export function ListaTarefas() {
  const [data, setData] = useState<DataTypeTarefa[]>([]);
  
  useEffect(() => {
    setData(data);
  }, [data]);

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

  function HandleRemoveItem(id: number) {
    const tarefaRemovida = data.filter((tarefa) => tarefa.id !== id);
    setData(tarefaRemovida);
  }

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
            <Item
              tarefa={item.tarefa}
              handleRemoveItem={() => HandleRemoveItem(item.id)}
              onClickBotaoEditar={() => {}}
            />
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
