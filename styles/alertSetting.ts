import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
`;

export const InputWrapper = styled.View`
  flex-direction: row-reverse;
  align-items: center;
  margin-top: 16px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding-vertical: 6px;
  padding-horizontal: 12px;
  font-size: 16px;
`;

export const Unit = styled.Text`
  flex: 1;
  font-size: 16px;
  font-style: italic;
  padding-left: 8px;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row-reverse;
  justify-content: space-between;
  flex: 1;
`;

export const SaveButton = styled.Button`
  font-size: 16px;
  border-radius: 8px;
  padding: 8px 16px;
`;

export const CancelButton = styled.Button`
  font-size: 16px;
  border-radius: 8px;
  padding: 8px 16px;
`;
