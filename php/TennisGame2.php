<?php


const pointScores = array('Love', 'Fifteen', 'Thirty', 'Forty');

class TennisGame2 implements TennisGame
{
    private $P1point = 0;
    private $P2point = 0;

    private $P1res = "";
    private $P2res = "";
    private $player1Name = "";
    private $player2Name = "";

    public function __construct($player1Name, $player2Name)
    {
        $this->player1Name = $player1Name;
        $this->player2Name = $player2Name;
    }

    public function getScore()
    {
        $score = "";

        $equality = $this->P1point == $this->P2point;
        if ($equality) {
            $p1DidntWinYet = $this->P1point < 4;
            if ($p1DidntWinYet) {
                $score = pointScores[$this->P1point]."-All";
            }

            if ($this->P1point >= 3) {
                $score = "Deuce";
            }
        } else {


            if (max($this->P1point, $this->P2point) < 4) {
                $this->P1res = pointScores[$this->P1point];
                $this->P2res = pointScores[$this->P2point];
                $score = "{$this->P1res}-{$this->P2res}";
            }

            $leader = $this->P1point > $this->P2point ? $this->player1Name : $this->player2Name;
            if (min($this->P1point, $this->P2point) >= 3) {
                $score = "Advantage $leader";
            }

            if (max($this->P1point, $this->P2point) >= 4 && abs($this->P1point - $this->P2point) >= 2) {
                $score = "Win for $leader";
            }
        }

        return $score;
    }

    private function SetP1Score($number)
    {
        for ($i = 0; $i < $number; $i++) {
            $this->P1Score();
        }
    }

    private function SetP2Score($number)
    {
        for ($i = 0; $i < $number; $i++) {
            $this->P2Score();
        }
    }

    private function P1Score()
    {
        $this->P1point++;
    }

    private function P2Score()
    {
        $this->P2point++;
    }

    public function wonPoint($player)
    {
        if ($player == "player1") {
            $this->P1Score();
        } else {
            $this->P2Score();
        }
    }
}
