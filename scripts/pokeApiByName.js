function apiApp() {
  return {
    title: "🎮 PokéAPI by Name",
    tagline: "Search for a Pokémon by name!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading...</p>";
      let pokemonName = "";
      try {
        // prompt() asks the user for input - a simple way to get data from them
        pokemonName = prompt("Enter a Pokémon name (e.g., pikachu, charizard, bulbasaur):");
        
        if (!pokemonName || pokemonName.trim() === "") {
          out.innerHTML = "<p class='text-gray-600'>No Pokémon name entered. Try again!</p>";
          return;
        }

        // Format name for API - Pokémon names must be lowercase
        const formattedName = pokemonName.toLowerCase().trim();
        
        // Fetch Pokémon data by name
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${formattedName}`);
        console.log(res.data);
        
        // Wrap in array so render() can loop through it (even though it's just one)
        this.render([res.data]);
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Pokémon "${pokemonName || 'unknown'}" not found. Try another name! ⚡</p>`;
        console.error(err);
      }
    },
    render(list = []) {
      const out = document.getElementById("output");
      out.innerHTML = list
        .map(p => {
          // Extract nested data: types and abilities are arrays inside arrays
          // p.types is an array of objects, each has a .type.name property
          const types = p.types.map(t => t.type.name).join(', ');
          // Get first 3 abilities, extract the name from nested structure
          const abilities = p.abilities.slice(0, 3).map(a => a.ability.name).join(', ');
          
          return `<article class='bg-white rounded-xl shadow p-4 text-center'>
                    <img src='${p.sprites?.front_default}' alt='${p.name}' class='w-32 h-32 mx-auto'/>
                    <h3 class='mt-2 text-xl font-semibold capitalize'>${p.name}</h3>
                    <p class='mt-2 text-sm text-gray-600'><strong>Type:</strong> <span class='capitalize'>${types}</span></p>
                    <!-- Height/weight are in decimeters/hectograms, divide by 10 to get meters/kg -->
                    <p class='mt-1 text-sm text-gray-600'><strong>Height:</strong> ${(p.height / 10).toFixed(1)}m</p>
                    <p class='mt-1 text-sm text-gray-600'><strong>Weight:</strong> ${(p.weight / 10).toFixed(1)}kg</p>
                    <p class='mt-1 text-sm text-gray-600'><strong>Abilities:</strong> <span class='capitalize'>${abilities}</span></p>
                  </article>`;
        })
        .join('');
    },
  };
}

