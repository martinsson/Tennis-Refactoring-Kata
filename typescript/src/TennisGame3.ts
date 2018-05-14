import {TennisGame} from './TennisGame';

const pointTitles: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];

export class TennisGame3 implements TennisGame {
    private p2: number = 0;
    private p1: number = 0;
    private p1N: string;
    private p2N: string;

    constructor(p1N: string, p2N: string) {
        this.p1N = p1N;
        this.p2N = p2N;
    }

    getScore(): string {
        let beforeDeuce = (this.p1 + this.p2 < 6);
        let noOneHasWonYet = this.p1 < 4 && this.p2 < 4;
        let equality = this.p1 === this.p2;
        if (noOneHasWonYet && beforeDeuce) {
            return equality ? pointTitles[this.p1] + '-All' : pointTitles[this.p1] + '-' + pointTitles[this.p2];
        } else if (equality) {
            return 'Deuce';
        } else {
            let leaderName: string = this.p1 > this.p2 ? this.p1N : this.p2N;
            let gameHasWinner = Math.abs(this.p1 - this.p2) > 1;
            return (gameHasWinner ? 'Win for ' : 'Advantage ') + leaderName;
        }
    }

    wonPoint(playerName: string): void {
        if (playerName === 'player1')
            this.p1 += 1;
        else
            this.p2 += 1;

    }
}
