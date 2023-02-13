const board = [
    "", "", "",
    "", "", "",
    "", "", ""
];

const cells = document.querySelectorAll(".cell");
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (board[index] === "") {
            cell.textContent = "X";
            board[index] = "X";
        }
    });
});