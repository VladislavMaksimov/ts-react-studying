import React, { FC } from "react";
import InputsForm from "./InputsForm";
import MeetingDatePicker from "./MeetingDatePicker";

const InputsPage: FC = () => {
  return (
    <InputsForm>
      <MeetingDatePicker />
    </InputsForm>
  );
};

export default InputsPage;
