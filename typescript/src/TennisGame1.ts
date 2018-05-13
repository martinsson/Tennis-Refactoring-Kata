import {TennisGame} from './TennisGame';


function pointScore(p1Score, p2Score) {
    const scoreTitles = {
        '0': "Love",
        '1': "Fifteen",
        '2': "Thirty",
        "3": 'Forty',
    };
    let pointScores = scoreTitles[p1Score] + '-' + scoreTitles[p2Score];
    return pointScores;
}

function advantageOrWinScore(p1Score, p2Score) {
    const minusResult: number = p1Score - p2Score;
    const leader = minusResult > 0 ? "player1" : 'player2';
    let typeOfScore = Math.abs(minusResult) === 1 ? 'Advantage ' : 'Win for ';
    let advantageOrWin = typeOfScore + leader;
    return advantageOrWin;
}

function equalityScore(p1Score) {
    const sameScores = {
        '0': "Love-All",
        '1': "Fifteen-All",
        '2': "Thirty-All",
    };
    let sameScore = sameScores[p1Score] || "Deuce";
    return sameScore;
}

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
        if (playerName === 'player1')
            this.m_score1 += 1;
        else
            this.m_score2 += 1;
    }

    getScore(): string {
        let p1Score = this.m_score1;
        let p2Score = this.m_score2;
        let score: string = '';
        if (p1Score === p2Score) {
            let sameScore = equalityScore(p1Score);
            score = sameScore;
        }
        else if (p1Score >= 4 || p2Score >= 4) {
            let advantageOrWin = advantageOrWinScore(p1Score, p2Score);
            score = advantageOrWin;
        }
        else {

            let pointScores = pointScore(p1Score, p2Score);
            score = pointScores
        }
        return score;
    }
}
