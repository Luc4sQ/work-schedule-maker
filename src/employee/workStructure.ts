// the "worktime" attribute describes how much time can be spent for 1 month

export class Day {
    dayOfYear: Number;
    constructor(x: Number) {
        this.dayOfYear = x;
    }
};

let pt = new Day(3);

pt.dayOfYear = 3;

export interface Week  {
    monday: Day;
    tuesday: Day;
    wednesday: Day; 
    thursday: Day;
    friday: Day;
    saturday: Day;
    sunday: Day[];
};

export interface Month {
    days: Number;
};

export interface Employee {
    worktimePerMonth: Number;
    unexpectedDays: Day[];
};

export interface OpeningTimes {
    startTime: Number;
    endTime: Number;
}

export interface Workweek {
    monday: OpeningTimes;
    tuesday: OpeningTimes;
    wednesday: OpeningTimes; 
    thursday: OpeningTimes;
    friday: OpeningTimes;
    saturday: OpeningTimes;
    sunday: OpeningTimes;
}

export interface Company {

}

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