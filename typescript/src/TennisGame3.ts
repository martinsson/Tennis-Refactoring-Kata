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
        if (this.noWinnerYet() && this.isBeforeDeuce()) {
            return this.equality() ? this.equalityScore() : this.normalScore();
        } else if (this.equality()) {
            return 'Deuce';
        } else {
            return this.winOrAdvantageScore() + this.findLeaderName();
        }
    }

    private isBeforeDeuce() {
        return this.p1 + this.p2 < 6;
    }

    private noWinnerYet() {
        return this.p1 < 4 && this.p2 < 4;
    }

    private equality() {
        return this.p1 === this.p2;
    }

    private winOrAdvantageScore() {
        return (this.hasWinner() ? 'Win for ' : 'Advantage ');
    }

    private normalScore() {
        return pointTitles[this.p1] + '-' + pointTitles[this.p2];
    }

    private equalityScore() {
        return pointTitles[this.p1] + '-All';
    }

    private hasWinner() {
        return Math.abs(this.p1 - this.p2) > 1;
    }

    private findLeaderName() {
        return this.p1 > this.p2 ? this.p1N : this.p2N;
    }

    wonPoint(playerName: string): void {
        if (playerName === this.p1N)
            this.p1 += 1;
        else
            this.p2 += 1;

    }
}
