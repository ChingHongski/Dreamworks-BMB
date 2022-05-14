window.addEventListener("DOMContentLoaded", start);

function start(){
	alert("Stitch and Lilo are competing against each other to see who can get 4 orbs in a row into their respective colours. Choose your side and help them now!")
}

class Connect4{
	constructor(selector){
		this.rows = 6;
		this.cols = 7;
		this.selector = selector;
		this.player = 'stitch';
		this.isGameOver = false;
		this.createGrid();
		this.setupEventListeners();
		
	}

	createGrid(){
		const $board = $(this.selector);
		for (let row = 0; row < this.rows; row++){
			const $row = $('<div>').addClass('row');
			for (let col = 0; col < this.cols; col++){
				const $col = $('<div>').addClass('col empty').attr('data-col',col).attr('data-row',row);
				$row.append($col);
			}
			$board.append($row);
		}

		console.log($board.html);
		
	}

	setupEventListeners(){
		const $board = $(this.selector);
		const that = this;
		function findLastEmptyCell(col){
			const cells = $(`.col[data-col='${col}']`);

			for (let i = cells.length -1; i>=0; i--){
				const $cell = $(cells[i]);

				if ($cell.hasClass('empty')){
					return $cell;
				}
			}
			return null;
		}

		$board.on('mouseenter', '.col.empty', function(){
			if (that.isGameOver) return;
			const col = $(this).data('col');

			const $lastEmptyCell = findLastEmptyCell(col);
			$lastEmptyCell.addClass(`next-${that.player}`);
		});

		$board.on('mouseleave', '.col', function(){
			$('.col').removeClass(`next-${that.player}`);
		});

		$board.on('click', '.col.empty', function(){
			if (that.isGameOver) return;
			const col = $(this).data('col');
			const row = $(this).data('row');
			const $lastEmptyCell = findLastEmptyCell(col);

			$lastEmptyCell.removeClass(`empty next-${that.player}`);
			$lastEmptyCell.addClass(`${that.player}`);
			$lastEmptyCell.data('player', that.player);

			const winner = that.checkForWinner(
				$lastEmptyCell.data('row'),
				$lastEmptyCell.data('col')
				);
			if (winner){
				that.isGameOver = true
				alert(`Game Over! Player ${that.player} has won the round!`);
				$('.col.empty').removeClass('empty')
				return;
			}

			that.player = (that.player === 'stitch') ? 'lilo' : 'stitch';
			$(this).trigger('mouseenter');
		});
		
	}

	checkForWinner(row,col){
		const that = this
		function $getCell(i,j){
			return $(`.col[data-row = '${i}'][data-col = '${j}']`);
		}

		function checkDirection(direction){
			let total = 0;
			let i = row + direction.i;
			let j = col + direction.j;
			let $next = $getCell(i,j);
			//&& stands for AND
			while (i >= 0 &&
				i < that.rows &&
				j >= 0 &&
				j < that.cols &&
				$next.data('player') === that.player
		){
			total++;
			i += direction.i;
			j += direction.j;
			$next = $getCell(i,j);
	
		}

		return total;

	}
		function checkWin(directionA, directionB){
			const total = 1 + 
				checkDirection(directionA) +
				checkDirection(directionB);
			if (total >= 4){
				return that.player;
			}
			else {
				null;
			}
		}

		// check from bottom left to top right
		function checkDiagonalBLtoTR(){
			return checkWin({i:1, j:-1}, {i:1, j:1})
		}

		// check from top left to bottom right
		function checkDiagonalTLtoBR(){
			return checkWin({i:1, j:1}, {i:-1, j:-1})
		}

		function checkVerticals(){
			// i is going up and down, j is going left and right
			// directionA : Up , directionB : Down
			return checkWin({i:-1, j:0}, {i:1, j:0})

		}

		function checkHorizontals(){
			// Check from left to right
			return checkWin({i:0, j:-1}, {i:0, j:1})
		}

		return checkVerticals() || checkHorizontals() || checkDiagonalBLtoTR() || checkDiagonalTLtoBR();
	}
	restart(){
		this.createGrid();
		this.onPlayerMove();
	}

}

$(document).ready(function(){
	const connect4 = new Connect4("#connect4")

	connect4.onPlayerMove = function(){
		$("#player").text(connect4.player);

	}

	$("#restart").click(function(){
		connect4.restart();
	})
})