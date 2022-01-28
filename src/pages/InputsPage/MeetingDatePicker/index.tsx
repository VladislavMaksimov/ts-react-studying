import React, { FC, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import MeetingTimeInput from "./MeetingTimeInput";
import styles from "./MeetingDatePicker.module.css";

registerLocale("ru", ru);

const MeetingDatePicker: FC = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      Select meeting time:
      <DatePicker
        selected={date}
        className={styles.datePicker}
        onChange={(date: Date) => {
          if (date) setDate(date);
        }}
        locale={"ru"}
        dateFormat="yyyy/MM/dd"
        showTimeInput
        customTimeInput={<MeetingTimeInput />}
        dayClassName={(date) => {
          return styles.day;
        }}
      />
    </div>
  );
};

export default MeetingDatePicker;
