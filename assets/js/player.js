
const indvPlayerTblBody = document.getElementById("indv-player-table");

fetch("https://api-nba-v1.p.rapidapi.com/players?id=265", {
	"method": "GET",
	"headers": {
        "X-RapidAPI-Key": "c204799958msh8bd639d820cabb0p1137f0jsn255151fddc1c",
		"X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com"
	}
})
.then((response) => response.json() {
	console.log(response);
})
.catch(err => {
	console.log(err);
});