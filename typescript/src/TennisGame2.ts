import {TennisGame} from './TennisGame';
import * as _ from 'lodash';

const pointTitles: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];

let equalPointScore = {
    matches: (P1point, P2point) => P1point === P2point && P1point < 4,
    showScore: (P1point, P2point) => pointTitles[P1point] + "-All"
};
let deuce = {
    matches: (P1point, P2point) => P1point === P2point && P1point >= 3 && P2point >= 3,
    showScore: (P1point, P2point) => "Deuce"
};
let normalPointScore = {
    matches: (P1point, P2point) => P1point < 4 || P2point < 4,
    showScore: (P1point, P2point) => pointTitles[P1point] + "-" + pointTitles[P2point]
};
let winScore = {
    matches: (P1point, P2point) => (P1point - P2point) >= 2,
    showScore: (P1point, P2point) => "Win for " + winnerName(P1point, P2point)
};
let advantageScore = {
    matches: (P1point, P2point) => (P1point - P2point) ===1,
    showScore: (P1point, P2point) => "Advantage for " + winnerName(P1point, P2point)
};
const scoreTypes: any[] = [
    deuce,
    equalPointScore,
    normalPointScore,
    advantageScore,

];

function winnerName(P1point, P2point) {
    return P1point > P2point ? 'player1' : "player2"
}

export class TennisGame2 implements TennisGame {
    P1point: number = 0;
    P2point: number = 0;

    P1res: string = '';
    P2res: string = '';

    private player1Name: string;
    private player2Name: string;

    constructor(player1Name: string, player2Name: string) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    getScore(): string {
        let foundType = _.find(scoreTypes, scoreType => scoreType.matches(this.P1point, this.P2point))
            || winScore
        return foundType.showScore(this.P1point, this.P2point);
    }

    SetP1Score(score: number): void {

        for (let i = 0; i < score; i++) {
            this.P1Score();
        }

    }

    SetP2Score(score: number): void {

        for (let i = 0; i < score; i++) {
            this.P2Score();
        }

    }

    P1Score(): void {
        this.P1point++;
    }

    P2Score(): void {
        this.P2point++;
    }

    wonPoint(player: string): void {
        if (player === 'player1')
            this.P1Score();
        else
            this.P2Score();
    }
}
