import {TennisGame} from './TennisGame';

class Player {

    points: number;

    constructor(public name: string) {
        this.points = 0;

    }

    winPoint() {
        this.points++;
    }
}

export class TennisGame1 implements TennisGame {
    private player1: Player;
    private player2: Player;

    constructor(player1Name: string, player2Name: string) {
        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
    }

    wonPoint(playerName: string): void {

        // TODO replace with map?
        let player: Player = this.areYou(playerName) ? this.player1 : this.player2;
        player.winPoint();
    }

    private areYou(playerName: string) {
        return playerName === this.player1.name;
    }

    getScore(): string {
        // TODO here the player object would certainly come in handy
        let p1Score = this.player1.points;
        let p2Score = this.player2.points;
        if (p1Score === p2Score) {
            return equalityScore(p1Score);
        }
        else if (p1Score >= 4 || p2Score >= 4) {
            return this.advantageOrWin(p1Score, p2Score);
        }
        else {
            return pointScore(p1Score, p2Score);
        }
    }

    private advantageOrWin(p1Score, p2Score) {
        const minusResult: number = p1Score - p2Score;
        const leader = minusResult > 0 ? this.player1.name : this.player2.name;
        let typeOfScore = Math.abs(minusResult) === 1 ? 'Advantage ' : 'Win for ';
        return typeOfScore + leader;
    }
}

function pointScore(p1Score, p2Score) {
    const scoreTitles = {
        '0': "Love",
        '1': "Fifteen",
        '2': "Thirty",
        "3": 'Forty',
    };
    return scoreTitles[p1Score] + '-' + scoreTitles[p2Score];
}

function equalityScore(p1Score) {
    const sameScores = {
        '0': "Love-All",
        '1': "Fifteen-All",
        '2': "Thirty-All",
    };
    return sameScores[p1Score] || "Deuce";
}

