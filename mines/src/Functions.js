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
    const rows = board.lenght;
    const columns = board[0].lenght
    let minesPlanted = 0

    while (minesPlanted < minesAmount) {
        /**
         * Seleciona aleatoriamente o número da linha 
         * e da coluna na base decimal para implantar a mina
         */
        const rowSelected = parseInt(Math.random() * rows, 10)
        const columnSelected = parseInt(Math.random() * colums, 10)

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

export { createMinedBoard }