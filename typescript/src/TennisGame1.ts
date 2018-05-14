import {TennisGame} from './TennisGame';
import {Player} from "./Player";

export class TennisGame1 implements TennisGame {
    private player1: Player;
    private player2: Player;

    constructor(player1Name: string, player2Name: string) {
        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
    }

    wonPoint(playerName: string): void {
        // TODO replace with map?
        let player: Player = this.player1.areYou(playerName) ? this.player1 : this.player2;
        player.winPoint();
    }


    getScore(): string {
        let p1 = this.player1;
        let p2 = this.player2;
        if (p1.points === p2.points) {
            return equalityScore(p1);
        }
        else if (p1.points >= 4 || p2.points >= 4) {
            return this.advantageOrWin(p1, p2);
        }
        else {
            return pointScore(p1, p2);
        }
    }

    private advantageOrWin(p1, p2) {
        const minusResult: number = p1.points - p2.points;
        const leader = minusResult > 0 ? p1 : p2;
        let typeOfScore = Math.abs(minusResult) === 1 ? 'Advantage ' : 'Win for ';
        return typeOfScore + leader.name;
    }
}

function pointScore(p1: Player, p2: Player) {
    return p1.pointTitle() + '-' + p2.pointTitle();
}

function equalityScore(player: Player) {
    if (player.points >= 3) {
        return "Deuce"
    } else {
        return player.pointTitle() + "-All";
    }
}

