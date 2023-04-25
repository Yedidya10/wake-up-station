import styled from "styled-components/native";

type RouteOptionButtonProps = {
  isSelected: boolean;
};

type TransportButtonTextProps = {
  isSelected: boolean;
};

export const ModalWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 16px;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const OptionButtonsWrapper = styled.View`
  padding-vertical: 4px;
`;

export const RouteOptionButton = styled.TouchableOpacity`
  margin-top: 2px;
  padding-vertical: 8px;
  padding-horizontal: 16px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const RouteOptionText = styled.Text`
  font-size: 16px;
  margin-left: 16px;
`;

export const ModalActions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 16px;
`;

export const CancelButton = styled.View`
flex: 1;
  background-color: #f2f2f2;
  padding-vertical: 8px;
  padding-horizontal: 16px;
  border-radius: 4px;
  margin-right: 4px;
`;

export const CancelButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  text-align: center;
`;

export const ConfirmButton = styled.View`
flex: 1;
  background-color: #1a73e8;
  padding-vertical: 8px;
  padding-horizontal: 16px;
  margin-left: 4px;
  border-radius: 4px;
`;

export const ConfirmButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
