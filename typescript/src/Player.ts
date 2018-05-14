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
}