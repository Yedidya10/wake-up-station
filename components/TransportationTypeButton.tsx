import React from "react";
import { ButtonContainer, ButtonText } from "../styles/RouteOptionsButton";

type TransportationTypeButtonProps = {
  onPress: () => void;
};

const TransportationTypeButton = ({
  onPress,
}: TransportationTypeButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>Transportation</ButtonText>
    </ButtonContainer>
  );
};

export default TransportationTypeButton;
