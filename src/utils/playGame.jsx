import axios from 'axios';

const PlayGame = async (e, gameId) => {
	// playing game's variable based on player action
	let playerChoice = null;
  	let compChoice = null;
  	let result = null;

	let gameStatus = document.getElementsByClassName("status")[0]; //the status text in the middle ("VS")

	// mark and print the player's action (conditions: can clicked the button tag or the img tag)
  if (e.target.localName === "button") {
		playerChoice = e.target.childNodes[0].className;
		console.log(`Player 1 Choose ${playerChoice}`);
		e.target.classList.add("chosen") ;
	} 
	else if (e.target.localName === "img") {
		playerChoice = e.target.className;
		console.log(`Player 1 Choose ${playerChoice}`);
		e.target.parentNode.style.backgroundColor = "#ccc";
	};

	// player actions buttons declaration
	const playerRock = document.getElementsByTagName("button")[1];
	const playerPaper = document.getElementsByTagName("button")[2];
	const playerScissors = document.getElementsByTagName("button")[3];

	// player actions button array
	const playerButtons = [
		playerPaper,
		playerRock,
		playerScissors
	];

	// disable button after first action
	playerButtons.forEach((el)=> {
		el.style.pointerEvents = "none";
	});

	let gameHistoryId;

	try {
		let res = await axios({
			method: 'post',
			url: '/games/play/init',
			headers: { 
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			},
			data : {
				id: Number(gameId),
				playedAt: new Date().toISOString()
			}
		})
		gameHistoryId = res.data.data.id;
		console.log(res);
	} catch(err) {
		console.log(err)
	}
	
	// comp actions buttons declaration
	const compRock = document.getElementsByTagName("button")[4];
	const compPaper = document.getElementsByTagName("button")[5];
	const compScissors = document.getElementsByTagName("button")[6];

	// comp actions button array
	const compButtons = [
		compPaper,
		compRock,
		compScissors
	];

	// comp action's randomization and mark the comp action
	const choiceIndex = Math.floor(Math.random() * compButtons.length);
	const randomResult = compButtons[choiceIndex];
	compChoice = compButtons[choiceIndex].childNodes[0].className;
	randomResult.style.backgroundColor = '#ccc';
	console.log(`Computer Choose ${compChoice}`);

	// comp randomization's animation
	for (let i = 0; i < 8; i++) {
		let a = Math.floor(Math.random() * compButtons.length);
		setTimeout(function() {
			compButtons[a].style.backgroundColor= "#ccc";
		}, (i+1) * 200);
		setTimeout(function() {
			compButtons[a].style.backgroundColor="transparent";
		}, (i+2) * 200 - 100);
	};
	setTimeout(function() {
		randomResult.style.backgroundColor = "#ccc";
	}, 1700);
	
	// change the status's style based on the game result
	const winningStatus = () => {
		setTimeout(function() {
				// console.log(gameStatus.className);
				gameStatus.className = "col-sm-2 d-flex align-items-center justify-content-center text-center";
				// console.log(gameStatus.className);
				if (result === "win") {
						gameStatus.innerHTML = "PLAYER 1<br>WIN"
						gameStatus.classList.add("resultStatus")
				} else if (result === "draw") { 
						gameStatus.innerHTML ="DRAW" 
						gameStatus.classList.add("resultStatus")
				} else {
						gameStatus.innerHTML = "COM<br>WIN"
						gameStatus.classList.add("resultStatus")
				}
		}, 1800);
	}

	// rules of the game to decide the winner
	if (playerChoice === "Paper") {
		if (compChoice === "Rock") {
			result = "win";
			winningStatus();
			console.log("PLAYER 1 Win");
		} else if (compChoice === "Paper") {
			result = "draw";
			winningStatus();
			console.log("The Result is Draw");
		} else {
			result = "lose";
			winningStatus();
			console.log("COMPUTER Win");
		}
	} else if (playerChoice === "Rock") {
		if (compChoice === "Scissors") {
			result = "win";
			winningStatus();
			console.log("PLAYER 1 Win");
		} else if (compChoice === "Rock") {
			result = "draw";
			winningStatus();
			console.log("The Result is Draw");
		} else {
			result = "lose";
			winningStatus();
			console.log("COMPUTER Win");
		}
	} else if (playerChoice === "Scissors") {
		if (compChoice === "Paper") {
			result = "win";
			winningStatus();
			console.log("PLAYER 1 Win");
		} else if (compChoice === "Scissors") {
			result = "draw";
			winningStatus();
			console.log("The Result is Draw");
		} else {
			result = "lose";
			winningStatus();
			console.log("COMPUTER Win");
		}
	}

	try {
		let res = await axios({
			method: 'post',
			url: '/games/play/com',
			headers: { 
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			},
			data : {
				id: Number(gameId),
				idHistory: gameHistoryId,
				status: result.toUpperCase(),
				metaData: {
					playerChoice: playerChoice.toUpperCase(),
					comChoice: compChoice.toUpperCase()
				}
			}
		})
		console.log(res);
	} catch(err) {
		console.log(err)
	}

	// async function createHistory() {
	// 	await initHistory();
	// 	await updateHistory();
	// }

	// createHistory();
	
	// refresh button functions (reset style)
	const refreshButton = document.getElementsByTagName("button")[7];
	refreshButton.addEventListener("click", function () {
		gameStatus.innerHTML = "VS";
    gameStatus.classList.remove("resultStatus");
    gameStatus.className = "status col-sm-2 d-flex align-items-center justify-content-center text-center";
    
		e.target.parentNode.style.backgroundColor = "transparent";
		randomResult.style.backgroundColor = 'transparent';

		playerButtons.forEach((el)=> {
			el.style.pointerEvents = "auto";
		});    
	})
}

export default PlayGame;