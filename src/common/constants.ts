export enum People {
    BETTY = "BETTY",
    CHARLIE = "CHARLIE",
    SUZANNE_AND_LOWELL = "SUZANNE_AND_LOWELL",
}

export enum Month {
    JAN = "JANUARY",
    FEB = "FEBRUARY",
    MAR = "MARCH",
    APR = "APRIL",
    MAY = "MAY",
    JUN = "JUNE",
    JUL = "JULY",
    AUG = "AUGUST",
    SEP = "SEPTEMBER",
    OCT = "OCTOBER",
    NOV = "NOVEMBER",
    DEC = "DECEMBER"
}

export type Receipt = {
    _id?: string,
    name: string,
    submittedBy: People,
    amount: string,
    month: Month,
    year: number,
    additionalInfo?: string
}


export const formatName = (name: People): string => {
   switch (name) {
        case People.BETTY:
            return "Betty"
        case People.CHARLIE:
            return "Charlie"
        case People.SUZANNE_AND_LOWELL:
            return "Suzanne and Lowell"
        default: 
            return name
    }
}