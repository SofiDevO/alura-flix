import PropTypes from "prop-types";
import styled from "styled-components";
import { colorGrayLight, colorGrayLigther } from "../UI/variables";
import { TextoLabel } from "../UI";

function CustomTextInput({ type, label, name, placeholder, register, error }) {
  return (
    <>
      <TextoLabel>{label}</TextoLabel>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: "Este campo es obligatorio",
        })}
      />
      {error && <span>{error.message}</span>}
    </>
  );
}

CustomTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default CustomTextInput;

const Input = styled.input`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  background-color: ${colorGrayLight};
  display: flex;
  height: 35px;
  padding: .5rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  outline-style: none;
  color: ${colorGrayLigther};
  font-weight: 600;
`;
