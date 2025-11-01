class Algorithm {
    
    invertAlgorithm(alg) {
        return alg
            .trim()
            .split(/\s+/)              // разбиваем на отдельные ходы
            .reverse()                 // переворачиваем порядок
            .map(move => {
                if (move.endsWith("'")) {
                    return move.slice(0, -1);      // R' -> R
                } else if (move.endsWith("2")) {
                    return move;                   // R2 -> R2 (сам себе обратный)
                } else {
                    return move + "'";             // R -> R'
                }
            })
            .join(" ");
    }
}


export default new Algorithm();