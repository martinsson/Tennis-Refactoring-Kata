import java.util.*;

public class TennisGame1 implements TennisGame {

    private int m_score1 = 0;
    private int m_score2 = 0;
    private String player1Name;
    private String player2Name;
    private Map<Integer, String> scoreNames = new HashMap<Integer, String>() {{
        put(0, "Love");
        put(1, "Fifteen");
        put(2, "Thirty");
        put(3, "Forty");
    }};
    private TreeMap<Integer, String> playoffScores = new TreeMap<Integer, String>() {{
        put(-2, "Win for player2");
        put(-1, "Advantage player2");
        put(0, "Deuce");
        put(1, "Advantage player1");
        put(2, "Win for player1");
    }};


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
        if (m_score1 == m_score2 && m_score1 + m_score1 <= 4) {
            score = this.scoreNames.get(m_score1) + "-All";
        } else if (m_score1 >= 4 || m_score2 >= 4 || m_score1 == m_score2) {
            int diff = m_score1 - m_score2;
            int min = Math.min(2, Math.max(-2, diff));
            score = playoffScores.get(min);
        } else {
            score = this.scoreNames.get(m_score1) + "-" + this.scoreNames.get(m_score2);
        }
        return score;
    }
}
