import {TennisGame} from './TennisGame';


const scoreTitles = {
    '0': "Love",
    '1': "Fifteen",
    '2': "Thirty",
    "3": 'Forty',
};

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
        let score: string = '';
        let tempScore: number = 0;
        if (this.m_score1 === this.m_score2) {
            const sameScores = {
                '0': "Love-All",
                '1': "Fifteen-All",
                '2': "Thirty-All",
            };
            score = sameScores[this.m_score1] || "Deuce";
        }
        else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
            const minusResult: number = this.m_score1 - this.m_score2;
            if (minusResult === 1) score = 'Advantage player1';
            else if (minusResult === -1) score = 'Advantage player2';
            else if (minusResult >= 2) score = 'Win for player1';
            else score = 'Win for player2';
        }
        else {
            score += scoreTitles[this.m_score1];
            score += "-"
            score += scoreTitles[this.m_score2];
        }
        return score;
    }
}
