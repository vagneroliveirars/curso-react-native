/**
 * Cria uma matriz representando o tabuleiro
 * 
 * @param {*} rows 
 * @param {*} columns 
 */
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                open: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

/**
 * Espalha as minas no tabuleiro conforme quantidade de minas determinada
 * 
 * @param {*} board 
 * @param {*} minesAmount 
 */
const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    /**
     * Seleciona aleatoriamente o número da linha 
     * e da coluna na base decimal para implantar a mina
     */
    while (minesPlanted < minesAmount) {
        const rowSelected = parseInt(Math.random() * rows, 10)
        const columnSelected = parseInt(Math.random() * columns, 10)

        /**
         * Verifica se a linha e coluna selecionada já está minada.
         * Se já estiver minada, ignora e vai para a próxima, senão 
         * planta a mina na posição e incrementa o quantidade de
         * minas plantadas.
         * */
        if (!board[rowSelected][columnSelected].mined) {
            board[rowSelected][columnSelected].mined = true
            minesPlanted++
        }
    }
}

/**
 * Cria um tabuleiro minado conforme a quantidade de linhas, 
 * colunas e minas determinadas
 * 
 * @param {*} rows 
 * @param {*} columns 
 * @param {*} minesAmount 
 */
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

/**
 * Retorna os vizinhos ao redor de um field
 * 
 * @param {*} board 
 * @param {*} row 
 * @param {*} column 
 */
const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]

    rows.forEach(r => {
        columns.forEach(c => {
            const different = r != row || c != column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length
            if (different && validRow && validColumn) {
                neighbors.push(board[r][c])
            }
        })
    })

    return neighbors
}

/**
 * Retorna se a vizinhança ao redor de um field é segura
 * 
 * @param {*} board 
 * @param {*} row 
 * @param {*} column 
 */
const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safes, true)
}
// const safeNeighborhood = (board, row, column) => {
//     // Função usando a lógica do reduce: 
//     // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//     const safes = (result, neighbor) => result && !neighbor.mined
//     return getNeighbors(board, row, column).reduce(safes, true)
// }

// const openField = (board, row, column) => {
//     const field = board[row][column]
//     if (!field.open) {
//         field.open = true
//         if (field.mined) {
//             field.exploded = true
//         } else {
//             const neighbors = getNeighbors(board, row, column)
//             if (safeNeighborhood(board, row, column)) {
//                 // Se a vizinhança for segura, abre os vizinhos ao redor recursivamente
//                 neighbors(board, row, column)
//                     .forEach(neighbor => openField(board, neighbor.row, neighbor.column))
//             } else {
//                 // Se a vizinhança não é segura, conta quantas minhas tem ao redor do campo
//                 field.nearMines = neighbors.filter(n => n.mined).length
//             }
//         }
//     }
// }
const openField = (board, row, column) => {
    const field = board[row][column]
    if (!field.opened) {
        field.opened = true
        if (field.mined) {
            field.exploded = true
        } else if (safeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column)
                .forEach(n => openField(board, n.row, n.column))
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

// Retorna um array com todos os fields do board
const fields = board => [].concat(...board)

// Retorna se algum field do board explodiu
const hasExplosion = board => fields(board).filter(field => field.exploded).length > 0

// Retorna se o campo está pendente
const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.open)

// Retorna se o usuário ganhou o jogo quando nenhum dos campos está pendente
const wonGame = board => fields(board).filter(pendding).length === 0

// Mostra todos os campos minados
const showMines = board => 
    fields(board)
    .filter(field => field.mined)
    .forEach(field => field.open = true)

export { 
    createMinedBoard,
    cloneBoard,
    openField,
    hasExplosion,
    wonGame,
    showMines
}