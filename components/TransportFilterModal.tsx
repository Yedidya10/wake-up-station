import React, { useState } from "react";
import { Modal } from "react-native";
import { Checkbox } from "react-native-paper";
import {
  CancelButton,
  CancelButtonText,
  ConfirmButton,
  ConfirmButtonText,
  ModalActions,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalWrapper,
  TransportButton,
  TransportButtonText,
} from "../styles/TransportFilterModal";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: (filter: Filter) => void;
  transportationActive: Filter;
};

type Filter = {
  bus: boolean;
  train: boolean;
  subway: boolean;
  tram: boolean;
};

const TransportFilterModal: React.FC<Props> = ({
  visible,
  onClose,
  onConfirm,
  transportationActive,
}) => {
  const [filter, setFilter] = useState<Filter>({
    bus: transportationActive.bus,
    train: transportationActive.train,
    subway: transportationActive.subway,
    tram: transportationActive.tram,
  });

  const toggleFilter = (key: keyof Filter) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [key]: !prevFilter[key],
    }));
  };

  const handleConfirm = () => {
    onConfirm(filter);
    onClose();
  };

  const handleCancel = () => {
    setFilter(transportationActive);
    onClose();
  };

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <ModalWrapper>
        <ModalContainer>
          <ModalHeader>Means of transportation</ModalHeader>
          <ModalContent>
            <TransportButton onPress={() => toggleFilter("bus")}>
              <Checkbox status={filter.bus ? "checked" : "unchecked"} />
              <TransportButtonText>Bus</TransportButtonText>
            </TransportButton>
            <TransportButton onPress={() => toggleFilter("train")}>
              <Checkbox status={filter.train ? "checked" : "unchecked"} />
              <TransportButtonText>Train</TransportButtonText>
            </TransportButton>
            <TransportButton onPress={() => toggleFilter("subway")}>
              <Checkbox status={filter.subway ? "checked" : "unchecked"} />
              <TransportButtonText>Subway</TransportButtonText>
            </TransportButton>
            <TransportButton onPress={() => toggleFilter("tram")}>
              <Checkbox status={filter.tram ? "checked" : "unchecked"} />
              <TransportButtonText>Tram</TransportButtonText>
            </TransportButton>
          </ModalContent>
          <ModalActions>
            <CancelButton onPress={handleCancel}>
              <CancelButtonText>Cancel</CancelButtonText>
            </CancelButton>
            <ConfirmButton onPress={handleConfirm}>
              <ConfirmButtonText>Confirm</ConfirmButtonText>
            </ConfirmButton>
          </ModalActions>
        </ModalContainer>
      </ModalWrapper>
    </Modal>
  );
};

export default TransportFilterModal;
