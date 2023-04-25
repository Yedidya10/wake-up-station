import React, { useState } from "react";
import {
  Container,
  InputWrapper,
  Input,
  Subtitle,
  Title,
  Unit,
  CancelButton,
  SaveButton,
  ButtonsWrapper,
} from "../styles/alertSetting";

const AlertSetting = () => {
  const [numMins, setNumMins] = useState("10");
  const [isSaved, setIsSaved] = useState(false);
  const [IsChanged, setIsChanged] = useState(false);

  return (
    <Container>
      <Title>Set your alert time</Title>
      <Subtitle>How long before arrival do you want to be warned?</Subtitle>
      <InputWrapper>
        <Input
          defaultValue={numMins}
          onChangeText={(newNumMins: React.SetStateAction<string>) =>
            setNumMins(newNumMins)
          }
          keyboardType="numeric"
          maxLength={2}
        ></Input>
        <Unit>Mins</Unit>
        <ButtonsWrapper>
        <CancelButton title="Cancel" onPress={() => console.log("cancel")} />
        <SaveButton title="Save" onPress={() => console.log(numMins)} />
        </ButtonsWrapper>
      </InputWrapper>
    </Container>
  );
};

export default AlertSetting;
