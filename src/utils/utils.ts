export function Mensagem(texto: string) {
  return texto;
}

export function MensagemErro(campo: string) {
  return Mensagem(`Campo ${campo} esta vazio`);
}

export interface TarefaTypes {
  id: number,
  tarefa: string;
}

export interface TarefaArrayTypes {
  tarefas: TarefaTypes[];
}

export const tarefaInitialState: TarefaArrayTypes = {
  tarefas: [],
};

export interface FormTypes {
  tarefa: string;
}

export const valoresIniciais: FormTypes = {
  tarefa: '',
};