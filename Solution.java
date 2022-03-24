
public class Solution {

    private static final int NOT_POSSIBLE = -1;
    private int sizeInput;

    public int minDominoRotations(int[] tops, int[] bottoms) {
        sizeInput = tops.length;
        int achorValueTop = rotationCheck(tops[0], tops, bottoms);
        return (achorValueTop != NOT_POSSIBLE) ? achorValueTop : rotationCheck(bottoms[0], tops, bottoms);
    }

    private int rotationCheck(int anchorValue, int[] tops, int[] bottoms) {

        int topToBottomRotations = 0;
        int bottomToTopRotations = 0;

        for (int i = 0; i < sizeInput; i++) {
            if (tops[i] != anchorValue && bottoms[i] != anchorValue) {
                return NOT_POSSIBLE;
            }
            if (tops[i] != anchorValue) {
                bottomToTopRotations++;
            }
            if (bottoms[i] != anchorValue) {
                topToBottomRotations++;
            }
        }
        return Math.min(topToBottomRotations, bottomToTopRotations);
    }
}
