/**
 * 🎮 Level 6: PokéAPI by Name - Complex Nested Data
 * 
 * LEARNING OBJECTIVES:
 * - Access deeply nested arrays and objects
 * - Transform nested data into readable formats
 * - Perform simple calculations on API data
 * 
 * CONCEPTS YOU'LL LEARN:
 * - Deeply nested arrays (p.types[0].type.name)
 *   📚 Learn more: https://www.w3schools.com/js/js_objects.asp
 * - Data transformation (.map() on nested arrays)
 *   📚 Learn more: https://www.w3schools.com/jsref/jsref_map.asp
 * - Array methods (.slice() to limit results)
 *   📚 Learn more: https://www.w3schools.com/jsref/jsref_slice_array.asp
 * - Simple math operations (division, .toFixed())
 *   📚 Learn more: https://www.w3schools.com/jsref/jsref_tofixed.asp
 * 
 * PREREQUISITES: Complete Levels 1-5 first!
 * 
 * INSTRUCTIONS:
 * 1. This builds on Level 4 (user input) and Level 5 (API calls)
 * 2. We'll search for a specific Pokémon by name
 * 3. The response has deeply nested data we need to extract
 * 4. Complete the TODOs to display detailed Pokémon information
 */

function apiApp() {
  return {
    title: "🎮 PokéAPI by Name",
    tagline: "Search for a Pokémon by name!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading...</p>";
      let pokemonName = "";
      try {
        // TODO 1: Get user input (similar to Level 4)
        // Use prompt() to ask for a Pokémon name
        // Replace null below with: prompt("Enter a Pokémon name (e.g., pikachu, charizard, bulbasaur):")
        pokemonName = null; // TODO: Replace null with prompt() call
        
        // TODO 2: Validate the input
        // Check if pokemonName is empty or null
        // If so, show error and return early
        if (false) { // TODO: Replace false with validation check
          out.innerHTML = "<p class='text-gray-600'>No Pokémon name entered. Try again!</p>";
          return;
        }

        // TODO 3: Format the name for the API
        // Pokémon names must be lowercase
        // Use .toLowerCase().trim()
        const formattedName = null; // TODO: Replace null with formatting code
        
        // TODO 4: Build the API URL
        // Pattern: https://pokeapi.co/api/v2/pokemon/{name}
        // Use template literal with formattedName
        const res = await axios.get(null); // TODO: Replace null with URL template literal
        
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
          // TODO 5: Extract types from nested data
          // The structure is: p.types = [{ type: { name: "electric" } }, ...]
          // We need to: map over types, get type.name from each, join with commas
          // Replace null below with: p.types.map(t => t.type.name).join(', ')
          const types = null; // TODO: Replace null with types extraction
          
          // TODO 6: Extract abilities (first 3 only)
          // The structure is: p.abilities = [{ ability: { name: "static" } }, ...]
          // Steps:
          // 1. Use .slice(0, 3) to get first 3 abilities
          // 2. Map to get ability.name from each
          // 3. Join with commas
          // Replace null below with: p.abilities.slice(0, 3).map(a => a.ability.name).join(', ')
          const abilities = null; // TODO: Replace null with abilities extraction
          
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
      
      // EXPLANATION:
      // - Nested data requires chaining: p.types[0].type.name
      // - .map() transforms arrays: types array → names array
      // - .slice(0, 3) limits results to first 3
      // - Division by 10 converts API units to human-readable units
    },
  };
}

