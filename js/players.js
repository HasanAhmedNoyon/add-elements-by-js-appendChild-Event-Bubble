const player = document.getElementsByClassName('player');

 

for (var element of player){
    setStylePlayer(element);
}

function setStylePlayer(player) {
    var styleElement = player.style;
    styleElement.border = '1px solid black';
    styleElement.padding = '10px';
    styleElement.marginTop = '10px';
    styleElement.borderRadius = '10px';
}

function addPlayer() {
    const playerContainer = document.getElementById("players");
    const player = document.createElement("div");
    player.classList.add('player');
    player.innerHTML = 
    `<h1 class="player-tagline">New Player</h1>
    <p class="player-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque id deleniti corrupti odio architecto eligendi aliquam doloribus ex quisquam.</p>`;
    playerContainer.appendChild(player);
    setStylePlayer(player);
}

document.getElementById('players').addEventListener('click', function(event){
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'yellow'
    }
})


