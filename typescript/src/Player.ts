const scoreTitles = {
    '0': "Love",
    '1': "Fifteen",
    '2': "Thirty",
    "3": 'Forty',
};

export class Player {

    points: number;

    constructor(public name: string) {
        this.points = 0;

    }

    areYou(playerName: string) {
        return playerName === this.name;
    }


    winPoint() {
        this.points++;
    }

    pointTitle() {
        return scoreTitles[this.points];
    }
}