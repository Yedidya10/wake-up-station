import React, { useState } from "react";

import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, IconWrapper, InputWrapper } from "../styles/wrapper";
import { Input, Option } from "../styles/text";
import { Divider } from "../styles/dropdown";
import TransportFilterModal from "./TransportFilterModal";
import RouteOptionsModal from "./RouteOptionsModal";
import RouteOptionsButton from "./RouteOptionsButton";
import TransportationTypeButton from "./TransportationTypeButton";

interface RouteSearchProps {}

type Filter = {
  bus: boolean;
  train: boolean;
  subway: boolean;
  tram: boolean;
};

const RouteSearch: React.FC<RouteSearchProps> = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [transportation, setTransportation] = useState<Filter>({
    bus: true,
    train: true,
    subway: true,
    tram: true,
  });
  const [option, setOption] = useState("");
  const [transportFilterModalVisible, setTransportFilterModalVisible] =
    useState(false);
  const [routeOptionsModalVisible, setRouteOptionsModalVisible] =
    useState(false);

  const handleOriginChange = (text: string) => {
    setOrigin(text);
  };

  const handleDestinationChange = (text: string) => {
    setDestination(text);
  };

  const handleTransportFilterPress = () => {
    setTransportFilterModalVisible(true);
  };

  const handleTransportFilterModalClose = () => {
    setTransportFilterModalVisible(false);
  };

  const handleTransportFilterModalConfirm = (filter: Filter) => {
    setTransportation(filter);
  };

  const handleRouteOptionsPress = () => {
    setRouteOptionsModalVisible(true);
  };

  const handleRouteOptionsModalClose = () => {
    setRouteOptionsModalVisible(false);
  };

  const handleRouteOptionsModalConfirm = (
    selectedOption:
      | "best"
      | "fewerChanges"
      | "lessWalking"
      | "wheelchairAccessibility"
  ) => {
    setOption(selectedOption);
  };

  return (
    <Container>
      <InputWrapper>
        <IconWrapper>
          <MaterialIcons name="location-searching" size={22} color="black" />
        </IconWrapper>
        <Input
          placeholder="Starting point"
          value={origin}
          onChangeText={handleOriginChange}
        />
      </InputWrapper>
      <InputWrapper>
        <IconWrapper>
          <MaterialIcons name="location-pin" size={24} color="black" />
        </IconWrapper>
        <Input
          placeholder="Destination"
          value={destination}
          onChangeText={handleDestinationChange}
        />
      </InputWrapper>
      <Divider />
      <TransportationTypeButton onPress={handleTransportFilterPress} />
      <RouteOptionsButton onPress={handleRouteOptionsPress} />
      <TransportFilterModal
        visible={transportFilterModalVisible}
        onClose={handleTransportFilterModalClose}
        transportationActive={transportation}
        onConfirm={handleTransportFilterModalConfirm}
      />
      <RouteOptionsModal
        visible={routeOptionsModalVisible}
        onClose={handleRouteOptionsModalClose}
        onConfirm={handleRouteOptionsModalConfirm}
      />
    </Container>
  );
};

export default RouteSearch;
