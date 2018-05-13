import {TennisGame} from './TennisGame';

export class TennisGame1 implements TennisGame {
    private m_score1: number = 0;
    private m_score2: number = 0;
    private player1Name: string;
    private player2Name: string;

    constructor(player1Name: string, player2Name: string) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    wonPoint(playerName: string): void {
        if (playerName === this.player1Name)
            this.m_score1 += 1;
        else
            this.m_score2 += 1;
    }

    getScore(): string {
        let p1Score = this.m_score1;
        let p2Score = this.m_score2;
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
        const leader = minusResult > 0 ? this.player1Name : this.player2Name;
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

