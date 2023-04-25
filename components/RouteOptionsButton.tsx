import React from 'react';
import { ButtonContainer, ButtonText } from '../styles/RouteOptionsButton';

type RouteOptionsButtonProps = {
  onPress: () => void;
};

const RouteOptionsButton = ({ onPress }: RouteOptionsButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>Route Options</ButtonText>
    </ButtonContainer>
  );
};

export default RouteOptionsButton;