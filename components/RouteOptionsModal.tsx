import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import { Modal, TouchableOpacity } from "react-native";

import {
  RouteOptionText,
  ModalTitle,
  ModalActions,
  ConfirmButton,
  ConfirmButtonText,
  CancelButton,
  CancelButtonText,
  RouteOptionButton,
  ModalContent,
  ModalWrapper,
  OptionButtonsWrapper,
} from "../styles/RouteOptionsModal";

type RouteOptions =
  | "best"
  | "fewerChanges"
  | "lessWalking"
  | "wheelchairAccessibility";

type RouteOptionRadioButtonProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

const RouteOptionRadioButton = ({
  label,
  selected,
  onPress,
}: RouteOptionRadioButtonProps) => {
  return (
    <RouteOptionButton onPress={onPress}>
      <RadioButton
        color="#1a73e8"
        value="selected"
        status={selected ? "checked" : "unchecked"}
      />
      <RouteOptionText>{label}</RouteOptionText>
    </RouteOptionButton>
  );
};

type RouteOptionsModalProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: (selectedOption: RouteOptions) => void;
};

const RouteOptionsModal = ({
  visible,
  onClose,
  onConfirm,
}: RouteOptionsModalProps) => {
  const [selectedOption, setSelectedOption] = useState<RouteOptions>("best");

  const handleOptionPress = (option: RouteOptions) => {
    setSelectedOption(option);
  };

  const handleConfirm = () => {
    onConfirm(selectedOption);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <ModalWrapper>
        <ModalContent>
          <ModalTitle>Choose Route Option</ModalTitle>
          <OptionButtonsWrapper>
            <RouteOptionRadioButton
              label="Best Route"
              selected={selectedOption === "best"}
              onPress={() => handleOptionPress("best")}
            />
            <RouteOptionRadioButton
              label="Fewer Changes"
              selected={selectedOption === "fewerChanges"}
              onPress={() => handleOptionPress("fewerChanges")}
            />
            <RouteOptionRadioButton
              label="Less Walking"
              selected={selectedOption === "lessWalking"}
              onPress={() => handleOptionPress("lessWalking")}
            />
            <RouteOptionRadioButton
              label="Wheelchair Accessibility"
              selected={selectedOption === "wheelchairAccessibility"}
              onPress={() => handleOptionPress("wheelchairAccessibility")}
            />
          </OptionButtonsWrapper>
          <ModalActions>
            <CancelButton onPress={onClose}>
              <CancelButtonText>Cancel</CancelButtonText>
            </CancelButton>
            <ConfirmButton onPress={handleConfirm}>
              <ConfirmButtonText>Confirm</ConfirmButtonText>
            </ConfirmButton>
          </ModalActions>
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
};

export default RouteOptionsModal;
