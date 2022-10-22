// the "worktime" attribute describes how much time can be spent for 1 month

export type employee = {
    worktime: number;
};

export type week = {
    days: number;
    timePerUnit: number;
};

export type plan = {
    content: number[][];
};