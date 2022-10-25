import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Employee, Week} from './employee/workStructure';

function App() {
  const [value, setValue] = useState<string>("");
  const [employee, setEmployee] = useState<Employee>({worktime: 0});
  const [week, setWeek] = useState<Week>({days:0, timePerUnit:0});
  const [index, setIndex] = useState<1 | 2 | 3>(1);
  const [output, setOutput] = useState<string>("Legen Sie los! Wieviel arbeiten sie? Sind sie Geringverdiener? (int: in Stunden)");

  function buttonClick(): void {
    switch (index) {
        case 1:
            if(isNaN(parseInt(value))) {setIndex(1); setOutput("Legen Sie los! Wieviel arbeiten sie? Sind sie Geringverdiener? (int: in Stunden)"); break;}
            setEmployee({worktime: parseInt(value)})
            setOutput("Es geht weiter! Wieviele Tage arbeiten sie? Haben sie Brot?");
            break;
        
        case 2: 
          if(isNaN(parseInt(value))) {setIndex(1); setOutput("Legen Sie los! Wieviel arbeiten sie? Sind sie Geringverdiener? (int: in Stunden)"); break;}
            setOutput("Fast fertig.. nur noch ihre Einheiten pro Tag. Für diese Antwort brauchen sie einen Bachelor lol.");
            setWeek((week) => ({...week, days: parseInt(value)}))
            break;

        case 3: 
            if(isNaN(parseInt(value))) {setIndex(1); setOutput("Legen Sie los! Wieviel arbeiten sie? Sind sie Geringverdiener? (int: in Stunden)"); break;}
            setWeek((week) => {week.timePerUnit = parseInt(value); return week;})
            calculatePlan(employee, week);
            setOutput("Legen Sie los! Wieviel arbeiten sie? Sind sie Geringverdiener? (int: in Stunden)");

            break;
    }
    if(index === 3)
          setIndex(1);
      else 
          setIndex((index)=>index +1 as 1|2|3);
  }

  function calculatePlan(empl: Employee, week: Week): number[][] {

    

    return [[2],[3]]
  }

  return (
    <div>
      {value}
      <button  onClick={() => buttonClick()}>Hallo Lucas</button> <textarea value={value} onChange={(evt)=>setValue(evt.target.value)}> </textarea>
      <p>{output}</p>
    </div>
  );


}

export default App;