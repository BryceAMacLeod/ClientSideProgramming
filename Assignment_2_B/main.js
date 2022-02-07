(function () {
    // a call to the pokemon API
    fetch('https://pokeapi.co/api/v2/pokemon/mankey')
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        document.write(data.name + "<br>");
        let img = document.createElement('img');
        img.src = data.sprites.front_default;
        document.body.appendChild(img);
        document.write("<br>" +"Abilities: ")
        for (let i = 0; i < data.abilities.length; i++) {
            document.write(data.abilities[i].ability.name + " ");
        }
        for(let j = 0; j < data.stats.length; j++) {
            document.write("<br>" + data.stats[j].stat.name + ": " + data.stats[j].base_stat);
        }
        
    });

      
    
})();
