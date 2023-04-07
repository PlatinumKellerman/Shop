import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  margin-bottom: 20px;
`;

export const SearchInput = styled(Field)`
  width: auto;
  background-color: ${p => p.theme.colors.muted};
  margin-bottom: 20px;
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: 8px;
  border: 1px solid ${p => p.theme.colors.primary};
  outline: none;
  padding: 5px;
  margin-top: 10px;
  ::placeholder {
    font-size: ${p => p.theme.fontSizes.m};
    text-align: center;
  }
  &:hover,
  :focus,
  :active {
    background-color: ${p => p.theme.colors.light};
    border: 1px solid ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.dark};
    transition-duration: 500ms;
    transition-timing-function: $timing-function;
  }
`;

export const SearchButton = styled.button`
  width: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 5px 20px;
  background-color: ${p => p.theme.colors.muted};
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 8px;
  color: ${p => p.theme.colors.dark};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  &:hover,
  :focus,
  :active {
    background-color: ${p => p.theme.colors.accent};
    border: 1px solid ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.light};
    transition-duration: 500ms;
    transition-timing-function: $timing-function;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 16px;
  padding: 5px;
  text-align: center;
`;
