
#include <vector>
using namespace std;

class Solution {
    
    static const int NOT_POSSIBLE = -1;
    size_t sizeInput;

public:

    int minDominoRotations(vector<int>& tops, vector<int>& bottoms) {
        sizeInput = tops.size();
        int achorValueTop = rotationCheck(tops[0], tops, bottoms);
        return (achorValueTop != NOT_POSSIBLE) ? achorValueTop : rotationCheck(bottoms[0], tops, bottoms);
    }
    
private:

    int rotationCheck(int anchorValue, const vector<int>& tops, const vector<int>& bottoms) {

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
        return min(topToBottomRotations, bottomToTopRotations);
    }
};
