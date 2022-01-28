import React from "react";
import styles from "./MeetingTimeInput.module.css";

interface MeetingTimeInputProps {
  value?: string;
  onChange?: (e: string) => void;
}

const MeetingTimeInput = ({ value, onChange }: MeetingTimeInputProps) => {
  if (onChange !== undefined)
    return (
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.timeInput}
      />
    );
  else return <></>;
};

export default MeetingTimeInput;
