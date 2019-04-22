const Fscore = (row, column, ct) => {
    let score = [];
    score.push({row: row, column: column})
    for (let i = column - 1; i >= 0 && ct[row][i] == ct[row][column]; i--)
        score.push({row: row, column: i})
    for (let i = column + 1; i < ct[row].length && ct[row][i] == ct[row][column]; i++)
        score.push({row: row, column: i})
    for (let i = row - 1; i >= 0 && ct[i][column] == ct[row][column]; i--)
        score.push({row: i, column: column})
    for (let i = row + 1; i < ct.length && ct[i][column] == ct[row][column]; i++)
        score.push({row: i, column: column})
    if (score.length < 3)
        return false
    else {
        for (let v of score)
            delete ct[v.row][v.column]
        let result = [].concat(...ct);
        result = result.filter(Boolean)
        let newCats = [];
        let i = 0
        for (let y = 0; y < 9; y++) {
            newCats[y] = []
            for (let x = 0; x < 7; x++) {
                newCats[y].push(result[i++])
            }
        }
        return {
            score: score.length,
            cats: newCats
        }
    }
}


export const algoCats = (arrCats, ct) => {
    let cat1 = ct[arrCats[0].row][arrCats[0].column];
    let cat2 = ct[arrCats[1].row][arrCats[1].column];
    ct[arrCats[0].row][arrCats[0].column] = cat2
    ct[arrCats[1].row][arrCats[1].column] = cat1
    let score = Fscore(arrCats[0].row, arrCats[0].column, ct)
    if (score == false)
        score = Fscore(arrCats[1].row, arrCats[1].column, ct)
    return score


}

export const verification = (cats) => {
    if ((cats[0].row == cats[1].row && (cats[0].column == cats[1].column + 1 || cats[0].column == cats[1].column - 1)) ||
        (cats[0].column == cats[1].column && (cats[0].row == cats[1].row + 1 || cats[0].row == cats[1].row - 1)))
        return true
    return false


}