import React, { useState } from "react";
import AppCalendar from "./components/AppCalendar/AppCalendar";

export const DateContext = React.createContext();

function App(props) {
  const initDate = new Date();
  initDate.setDate(initDate.getDate() + 2);
  const [date, setDate] = useState([new Date(), initDate]);
  return (
    <DateContext.Provider value={{ date, setDate }}>
      <div className="App">
        <AppCalendar />
      </div>
    </DateContext.Provider>
  );
}

export default App;
