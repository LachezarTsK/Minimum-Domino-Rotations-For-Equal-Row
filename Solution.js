
/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
    this.NOT_POSSIBLE = -1;
    this.sizeInput = tops.length;
    let achorValueTop = rotationCheck(tops[0], tops, bottoms);
    return (achorValueTop !== NOT_POSSIBLE) ? achorValueTop : rotationCheck(bottoms[0], tops, bottoms);
};

/**
 * @param {number} anchorValue
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
function rotationCheck(anchorValue, tops, bottoms) {

    let topToBottomRotations = 0;
    let bottomToTopRotations = 0;

    for (let i = 0; i < this.sizeInput; i++) {
        if (tops[i] !== anchorValue && bottoms[i] !== anchorValue) {
            return this.NOT_POSSIBLE;
        }
        if (tops[i] !== anchorValue) {
            bottomToTopRotations++;
        }
        if (bottoms[i] !== anchorValue) {
            topToBottomRotations++;
        }
    }
    return Math.min(topToBottomRotations, bottomToTopRotations);
}
