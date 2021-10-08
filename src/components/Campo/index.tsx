import { Field } from "formik";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface CampoProps extends InputHTMLAttributes<HTMLInputElement> {
  erro: any;
}

export function Campo(props: CampoProps) {
  return (
    <ContainerCampo>
      <CampoEstilizado
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
      />
      <div>{props.erro}</div>
    </ContainerCampo>
  );
}

const CampoEstilizado = styled(Field)`
  font-size: 15px;
  width: 100%;
`;

const ContainerCampo = styled.div`
  width: 100%;
`;