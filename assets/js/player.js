let form = document.querySelector("form");
const indvPlayerTblBody = document.getElementById("indv-player-table");

form.onsubmit = function (e) {
	e.preventDefault()
	var searchTerm = this.indvPlayerName.value
	if (!searchTerm) return
	form.indvPlayerName.value = " "
	fetch("https://api-nba-v1.p.rapidapi.com/players?id=265", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
			"x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
		}
	})
		.then(response => {
			console.log(response);
		})
		.then((players) => {
			//console.log(players.response)
			players.response.map((players, key) => {
				let indvPlayerId = player.id;
				let indvPlayerName = `${players.firstname} ${players.lastname}`;
				if (player.leagues.standard.active) {
					let tbleRow = document.createElement("tr");
					tblRow.innerHTML = `
			<tr>
			${players.firstname} ${players.lastname}
			</tr>
			<tr> 
			${players.birth.date}
			</tr> 
			<tr> 
			${players.height}
			</tr> 
			<tr> 
			${players.weight.pounds}
			</tr> 
			<tr> 
			${players.college}
			</tr> 
			<tr> 
			${players.nba.start}
			</tr> 
			<tr> 
			${players.nba.pro}
			</tr> 
			`
					indvPlayerTblBody.appendChild(tbleRow);
				}
			})
		})
		.catch(err => {
			console.log(err);
		});
}

const statsMostCurrentGameTable = document.getElementById("stats-most-current-game")

form.onsubmit = function (e) {
	e.preventDefault()
	var searchTerm = this.indvPlayerName.value
	if (!searchTerm) return
	form.indvPlayerName.value = " "
	fetch("https://api-nba-v1.p.rapidapi.com/players/statistics?season=2020&id=734", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
			"x-rapidapi-key": "c204799958msh8bd639d820cabb0p1137f0jsn255151fddc1c"
		}
	})
		.then(response => {
			console.log(response);
		})
		.then((players) => {
			//console.log(players.response)
			players.response.map((players, key) => {
				if (indvPlayerId === player.id) {
					let tbleRow = document.createElement("tr");
					tblRow.innerHTML = `
			<tr>
			${players.statistics.points} 
			</tr>
			<tr> 
			${players.statistics.pos}
			</tr> 
			<tr> 
			${players.statistics.totReb}
			</tr> 
			<tr> 
			${players.statistics.offReb}
			</tr> 
			<tr> 
			${players.statistics.defReb}
			</tr> 
			<tr> 
			${players.statistics.assists}
			</tr> 
			<tr> 
			${players.statistics.steals}
			</tr> 
			<tr> 
			${players.statistics.turnovers}
			</tr> 
			<tr> 
			${players.statistics.blocks}
			</tr> 
			`;
					statsMostCurrentGameTable.appendChild(tbleRow);
				}
			})
		})
		.catch(err => {
			console.log(err);
		});
}

