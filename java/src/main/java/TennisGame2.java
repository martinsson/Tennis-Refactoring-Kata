import java.util.Arrays;
import java.util.List;

public class TennisGame2 implements TennisGame {
    public int P1point = 0;
    public int P2point = 0;

    public String P1res = "";
    public String P2res = "";
    private String player1Name;
    private String player2Name;

    private List<String> ballPoints = Arrays.asList("Love", "Fifteen", "Thirty", "Forty");

    public TennisGame2(String player1Name, String player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    public String getScore() {
        String score = "";
        if (scoreIsEqual() && P1point >= 3) {

            score = "Deuce";

        } else if (scoreIsEqual()) {

            score = getPointScore(P1point) + "-All";

        } else if (gameNotFinished()) {

            score = getPointScore(P1point) + "-" + getPointScore(P2point);

        } else if (isAdvantage()) {

            score = "Advantage " + getLeaderName();

        } else {

            score = "Win for " + getLeaderName();
        }

        return score;
    }

    private boolean scoreIsEqual() {
        return P1point == P2point;
    }

    private boolean isAdvantage() {
        return Math.abs(P1point - P2point) == 1;
    }

    private boolean gameNotFinished() {
        return P1point < 4 && P2point < 4;
    }

    private String getPointScore(int p1point) {
        return ballPoints.get(p1point);
    }

    private String getLeaderName() {
        return P1point > P2point ? "player1" : "player2";
    }

    public void SetP1Score(int number) {

        for (int i = 0; i < number; i++) {
            P1Score();
        }

    }

    public void SetP2Score(int number) {

        for (int i = 0; i < number; i++) {
            P2Score();
        }

    }

    public void P1Score() {
        P1point++;
    }

    public void P2Score() {
        P2point++;
    }

    public void wonPoint(String player) {
        if (player == "player1")
            P1Score();
        else
            P2Score();
    }
}