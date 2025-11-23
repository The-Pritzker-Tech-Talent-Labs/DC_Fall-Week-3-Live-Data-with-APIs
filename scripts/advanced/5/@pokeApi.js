/**
 * 🎮 Level 5: PokéAPI - Multiple API Calls
 * 
 * LEARNING OBJECTIVES:
 * - Make multiple API calls in sequence
 * - Use Promise.all() to wait for multiple calls simultaneously
 * - Chain .map() calls to transform data multiple times
 * 
 * CONCEPTS YOU'LL LEARN:
 * - Promise.all() (waiting for multiple API calls at once)
 *   📚 Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * - Nested API calls (calling an API, then calling URLs from that response)
 * - Chaining .map() (transforming data multiple times)
 *   📚 Learn more: https://www.w3schools.com/jsref/jsref_map.asp
 * - Extracting data from nested responses
 * 
 * PREREQUISITES: Complete Levels 1-4 first!
 * 
 * INSTRUCTIONS:
 * 1. Visit https://pokeapi.co/api/v2/pokemon?limit=3
 * 2. Notice it returns a list with "results" containing URLs
 * 3. Each URL points to detailed Pokémon data
 * 4. We need to call each URL to get the full details
 * 5. Complete the TODOs to fetch and display Pokémon details
 */

function apiApp() {
  return {
    title: "🎮 PokéAPI Practice",
    tagline: "Now let's fetch a list instead of one image.",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading Pokémon...</p>";
      try {
        // TODO 1: Make the first API call to get a list of Pokémon
        // Visit https://pokeapi.co/api/v2/pokemon?limit=3
        // This gives us names and URLs, but not full details
        // Replace null below with the API URL:
        const res = await axios.get(null); // TODO: Replace null with API URL
        
        // TODO 2: Log the response to see the structure
        // Uncomment and check the console:
        // console.log(res.data);
        // Notice: res.data.results is an array, each item has a "url" property
        
        // TODO 3: Use Promise.all() to fetch details for each Pokémon
        // Promise.all() lets us make multiple API calls at the same time
        // It's faster than waiting for each one separately!
        // 
        // Structure: Promise.all([call1, call2, call3])
        // We'll use .map() to create an array of API calls
        // 
        // Replace null below with:
        // Promise.all(res.data.results.map(pokemon => axios.get(pokemon.url)))
        const details = null; // TODO: Replace null with Promise.all() code
        
        // TODO 4: Extract just the data from each response
        // The details array contains full axios responses
        // We only need the .data property from each
        // Use .map() to extract: details.map(detail => detail.data)
        const pokemonData = null; // TODO: Replace null with data extraction code
        
        console.log(pokemonData);
        
        // Render the Pokémon with their details
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
      
      // EXPLANATION:
      // - First API call gets a list with URLs
      // - Promise.all() makes multiple API calls simultaneously
      // - We extract .data from each response
      // - This is much faster than calling APIs one at a time!
    },
  };
}

