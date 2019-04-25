import java.util.*;

public class TennisGame1 implements TennisGame {

    private int m_score1 = 0;
    private int m_score2 = 0;
    private String player1Name;
    private String player2Name;

    private List<String> pointScores = Arrays.asList("Love", "Fifteen", "Thirty", "Forty");

    public TennisGame1(String player1Name, String player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    public void wonPoint(String playerName) {
        if (playerName == "player1")
            m_score1 += 1;
        else
            m_score2 += 1;
    }

    public String getScore() {
        String score = "";
        if (hasEqualScoreBeginningOfGame()) {

            score = getPointScore(m_score1) + "-All";

        } else if (isTieBreak()) {

            score = getTieBreakScore();

        } else {

            score = getPointScore(m_score1) + "-" + getPointScore(m_score2);

        }
        return score;
    }

    private String getTieBreakScore() {
        int scoreDiff = Math.abs(m_score1 - m_score2);
        if (scoreDiff == 0) {
             return "Deuce";
        } else if (scoreDiff == 1) {
            return "Advantage " + leadingPlayerName();
        } else {
            return "Win for " + leadingPlayerName();
        }
    }

    private boolean isTieBreak() {
        return m_score1 >= 4 || m_score2 >= 4 || m_score1 == m_score2;
    }

    private boolean hasEqualScoreBeginningOfGame() {
        return m_score1 == m_score2 && m_score1 + m_score1 <= 4;
    }

    private String getPointScore(int m_score1) {
        return this.pointScores.get(m_score1);
    }

    private String leadingPlayerName() {
        return m_score1 > m_score2 ? "player1" : "player2";
    }
}
