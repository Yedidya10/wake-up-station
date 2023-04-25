import styled from "styled-components/native";

export const ModalWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.View`
  background-color: #fff;
  padding: 16px;
`;

export const ModalContent = styled.View`
  margin-top: 16px;
`;

export const ModalActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 48px;
  margin-top: 16px;
`;

export const ModalHeader = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const CancelButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #f1f3f4;
  padding-vertical: 12px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

export const CancelButtonText = styled.Text`
  color: #1a73e8;
  font-weight: bold;
  text-align: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #1a73e8;
  padding-vertical: 12px;
  border-radius: 4px;
  margin-left: 4px;
`;

export const ConfirmButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const TransportButton = styled.TouchableOpacity`
  margin-top: 2px;
  padding-vertical: 8px;
  padding-horizontal: 16px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TransportButtonText = styled.Text`
  font-weight: bold;
  text-align: center;
  margin-left: 8px;
`;
