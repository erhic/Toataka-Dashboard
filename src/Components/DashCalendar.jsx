import { useState } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DashCalendar = () => {
  const [selected, setSelected] = useState();

  var footer = "";

  setTimeout(() => {
    if (selected) {
      footer = (
        <p className="text-sm top-0 bg-green-200  absolute">
          You picked {format(selected, "PP")}.
        </p>
      );
    }
  }, 5000);
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      className="border pb-1 rounded-lg"
    />
  );
};

export default DashCalendar;
