import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export const Dropdown = styled(Picker)`
flex: 1;
height: 40px;
background-color: #f1f1f1;
border-radius: 4px;
padding-horizontal: 12px;
font-size: 16px;
color: #000;
`;

export const DropdownItem = styled(Picker.Item)`
font-size: 16px;
color: #000;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #ddd;
  margin: 16px 0;
`;