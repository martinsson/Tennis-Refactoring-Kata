
public class TennisGame3 implements TennisGame {

    private int p2Score;
    private int p1Score;
    private String p1Name;
    private String p2Name;
    private String[] pointScores = new String[]{"Love", "Fifteen", "Thirty", "Forty"};

    public TennisGame3(String p1N, String p2N) {
        this.p1Name = p1N;
        this.p2Name = p2N;
    }

    public String getScore() {
        if (isInPlayoff()) {
            if (p1Score == p2Score)
                return "Deuce";
            else if (Math.abs(p1Score - p2Score) == 1)
                return "Advantage " + leadingPlayerName();
            else
                return "Win for " + leadingPlayerName();
        } else {
            if (p1Score == p2Score)
                return pointScore(p1Score) + "-All";
            else
                return pointScore(p1Score) + "-" + pointScore(p2Score);
        }
    }

    private String pointScore(int intScore) {
        return pointScores[intScore];
    }

    private String leadingPlayerName() {
        return p1Score > p2Score ? p1Name : p2Name;
    }

    private boolean isInPlayoff() {
        return p1Score >= 4 || p2Score >= 4 || p1Score + p2Score == 6;
    }

    public void wonPoint(String playerName) {
        if (playerName == "player1")
            this.p1Score += 1;
        else
            this.p2Score += 1;

    }

}
