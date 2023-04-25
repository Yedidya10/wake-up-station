import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.background};
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: #f1f1f1;
  border-radius: 4px;
  padding-horizontal: 12px;
  font-size: 16px;
  color: #000;
`;

export const Content = styled.Text`
  font-size: 16px;
  color: #000;
  margin-bottom: 10px;
`;

export const Option = styled.Text`
  font-size: 16px;
`;