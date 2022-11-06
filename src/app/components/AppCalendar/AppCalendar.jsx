import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AppCalendar.css";
import { DateContext } from "../../App";

function AppCalendar(props) {
  const { date, setDate } = useContext(DateContext);
  const [valid, setValid] = useState(true);

  //counts the number of days between two dates
  const countDays = (startDate, endDate) => {
    const msPerDay = 86400000;
    const timeDifference = endDate.getTime() - startDate.getTime();
    const timeDifferenceInDays = Math.floor(timeDifference / msPerDay + 1);
    return timeDifferenceInDays;
  };

  //check if the date range is valid
  const isDateValid = (startDate, endDate) => {
    const numOfDays = countDays(startDate, endDate);
    if (numOfDays > 14 || numOfDays < 3) return false;
    return true;
  };

  const handleChange = (value) => {
    const validationValue = isDateValid(value[0], value[1]);
    if (validationValue) {
      setDate(value);
      setValid(validationValue);
    } else setValid(validationValue);
  };

  return (
    <div className="AppCalendar">
      <Calendar
        value={date}
        onChange={(value) => handleChange(value)}
        selectRange={true}
        minDate={new Date()}
        returnValue="range"
      />

      <div className="selectedDateContainer">
        <div className="selectedDate">From {date[0].toLocaleDateString()}</div>
        {date[1] && (
          <div className="selectedDate">To {date[1].toLocaleDateString()}</div>
        )}
      </div>
      {!valid && (
        <div className="validation-message">
          Date range cannot be less than 3 days or greater than 14 days
        </div>
      )}
    </div>
  );
}

export default AppCalendar;
