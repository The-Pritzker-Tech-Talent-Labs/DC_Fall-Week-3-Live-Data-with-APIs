function apiApp() {
  return {
    title: "🎮 PokéAPI Practice",
    tagline: "Now let's fetch a list instead of one image.",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading Pokémon...</p>";
      try {
        // Step 1: Fetch list of 3 Pokémon (this only gives us names and URLs)
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=3");
        console.log(res.data);
        
        // Step 2: Fetch full details for each Pokémon
        // Promise.all lets us wait for multiple API calls to finish at the same time
        // This is faster than waiting for each one separately
        const details = await Promise.all(
          res.data.results.map(pokemon => axios.get(pokemon.url))
        );
        
        // Step 3: Extract just the data from each response (we only need .data)
        const pokemonData = details.map(detail => detail.data);
        console.log(pokemonData);
        
        // Step 4: Render the Pokémon with their details
        this.render(pokemonData);
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Error loading Pokémon ⚠️</p>`;
        console.error(err);
      }
    },
    render(list = []) {
      const out = document.getElementById("output");
      out.innerHTML = list
        .map(p => `<article class='bg-white rounded-xl shadow p-4 text-center'>
                    <img src='${p.sprites?.front_default}' alt='${p.name}' class='w-24 h-24 mx-auto'/>
                    <h3 class='mt-2 text-lg font-semibold capitalize'>${p.name}</h3>
                  </article>`)
        .join('');
    },
  };
}