// the "worktime" attribute describes how much time can be spent for 1 month

export interface Employee {
    worktime: number;
};

export interface Week  {
    days: number;
    timePerUnit: number;
};

export function parameterInput(): {employ: Employee, week: Week} {
    
    
    
    
    return {employ: {worktime: 0}, week: {days: 0, timePerUnit: 0}}
}

export function buttonClick(indexRaise: Function, setText: Function, index: 1 | 2 | 3, text: string): string {
    if(index === 3)
        indexRaise(1);
    else 
        indexRaise(index +1);

    switch (index) {
        case 1:
            setText("Es geht weiter! Wieviele Tage arbeiten sie? Haben sie Brot?");
            parameterInput()
            break;
        
        case 2: 
            setText("Fast fertig.. nur noch ihre Einheiten pro Tag. Für diese Antwort brauchen sie einen Bachelor lol.");
            break;

        case 3: 
            setText("Legen Sie los! Wieviel arbeiten sie? Sind sie Geringverdiener? (int: in Stunden)");
            break;
    }
    return ""
}