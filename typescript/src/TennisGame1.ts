import {TennisGame} from './TennisGame';


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
        // TODO BUG a game cannot be played if the first player isn't called "player1"!
        if (playerName === 'player1')
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
            const minusResult: number = p1Score - p2Score;
            const leader = minusResult > 0 ? this.player1Name : this.player2Name;
            let typeOfScore = Math.abs(minusResult) === 1 ? 'Advantage ' : 'Win for ';
            let s = typeOfScore + leader;
            return s;
        }
        else {
            return pointScore(p1Score, p2Score);
        }
    }
}
