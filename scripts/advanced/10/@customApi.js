/**
 * 🌟 Level 10: Multi-API Mashup - Combining Multiple APIs
 * 
 * LEARNING OBJECTIVES:
 * - Call multiple APIs on the same page
 * - Use Promise.all() to fetch data from multiple sources simultaneously
 * - Combine data from different APIs to create something unique
 * - Build a creative project that's more than the sum of its parts
 * 
 * CONCEPTS YOU'LL USE:
 * - Promise.all() (from Level 5)
 * - Multiple axios.get() calls
 * - Combining data from different sources
 * - Creative thinking about how APIs can work together
 * 
 * PREREQUISITES: Complete Levels 1-9 first!
 * 
 * PROJECT IDEAS (Choose one or create your own!):
 * 
 * 1. Pet Battle Arena 🐕 vs 🐱
 *    - Combine: Dog API + Cat API
 *    - Show random dog and cat side-by-side
 *    - Let users "vote" on which is cuter
 * 
 * 2. Pokémon Movie Night 🎬⚡
 *    - Combine: PokéAPI + Ghibli API
 *    - Get random Pokémon + random Ghibli film
 *    - Create: "Tonight's feature: [Pokémon] watches [Film]"
 * 
 * 3. Art & Music Mood Board 🎨🎵
 *    - Combine: Art Institute API + Lyrics API
 *    - Random artwork + random song lyrics
 *    - Create a mood board combining visual and text
 * 
 * 4. Snack & Song Combo 🍫🎵
 *    - Combine: Nutrition API + Lyrics API
 *    - Get product by barcode + matching song lyrics
 *    - "Snack: [Product] while listening to [Song]"
 * 
 * INSTRUCTIONS:
 * 1. Choose one of the project ideas above (or create your own!)
 * 2. Complete the TODOs for your chosen project
 * 3. Use Promise.all() to fetch multiple APIs at once
 * 4. Combine the data creatively in your render function
 */

function apiApp() {
  return {
    title: "🌟 Multi-API Mashup",
    tagline: "Combine multiple APIs to create something amazing!",
    
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading your mashup...</p>";
      try {
        // ============================================
        // PROJECT IDEA 1: Pet Battle Arena 🐕 vs 🐱
        // ============================================
        // Uncomment and complete this section if you choose Project 1
        
        // TODO 1: Call Dog API to get a random dog image
        // Use: https://dog.ceo/api/breeds/image/random
        // const dogRes = await axios.get(null); // TODO: Replace null with Dog API URL
        
        // TODO 2: Call Cat API to get a random cat image
        // Use: https://api.thecatapi.com/v1/images/search?limit=1
        // const catRes = await axios.get(null); // TODO: Replace null with Cat API URL
        
        // TODO 3: Extract image URLs from both responses
        // Dog API: dogRes.data.message[0]
        // Cat API: catRes.data[0].url
        // const dogImage = null; // TODO: Extract dog image URL
        // const catImage = null; // TODO: Extract cat image URL
        
        // TODO 4: Render the battle (uncomment when ready)
        // this.renderBattle(dogImage, catImage);
        
        // ============================================
        // PROJECT IDEA 2: Pokémon Movie Night 🎬⚡
        // ============================================
        // Uncomment and complete this section if you choose Project 2
        
        // TODO 5: Use Promise.all() to fetch both APIs simultaneously
        // const [pokemonRes, ghibliRes] = await Promise.all([
        //   axios.get(null), // TODO: PokéAPI URL (limit=1)
        //   axios.get(null)  // TODO: Ghibli API URL
        // ]);
        
        // TODO 6: Extract data from responses
        // const pokemon = null; // TODO: Get first Pokémon from pokemonRes.data.results[0]
        // const randomFilm = null; // TODO: Get random film from ghibliRes.data array
        
        // TODO 7: Fetch full Pokémon details (like in Level 5)
        // You'll need another API call to pokemon.url
        
        // TODO 8: Render movie night combo
        // this.renderMovieNight(pokemon, randomFilm);
        
        // ============================================
        // YOUR OWN PROJECT IDEA
        // ============================================
        // TODO 9: Create your own mashup!
        // Choose 2-3 APIs from the lessons
        // Use Promise.all() to fetch them
        // Combine the data creatively
        // Create a custom render function
        
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Something went wrong 😢<br>Check the console for details!</p>`;
        console.error(err);
      }
    },
    
    // Render function for Pet Battle Arena
    renderBattle(dogImage, catImage) {
      const out = document.getElementById("output");
      out.innerHTML = `
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold mb-4">🐕 Pet Battle Arena 🐱</h2>
          <p class="text-gray-600">Which is cuter? Click refresh to see new contenders!</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article class='bg-white rounded-xl shadow p-6 text-center'>
            <h3 class='text-xl font-semibold mb-4'>🐕 Dog</h3>
            <img src='${dogImage}' alt='Dog' class='rounded-lg mx-auto w-full max-w-sm h-64 object-cover mb-4'/>
            <button class='px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Vote Dog! 🐕</button>
          </article>
          <article class='bg-white rounded-xl shadow p-6 text-center'>
            <h3 class='text-xl font-semibold mb-4'>🐱 Cat</h3>
            <img src='${catImage}' alt='Cat' class='rounded-lg mx-auto w-full max-w-sm h-64 object-cover mb-4'/>
            <button class='px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600'>Vote Cat! 🐱</button>
          </article>
        </div>
      `;
    },
    
    // TODO 10: Create a render function for your chosen project
    // Look at renderBattle() above for inspiration
    // Combine data from multiple APIs creatively!
    
    render(items = []) {
      const out = document.getElementById("output");
      out.innerHTML = items
        .map(item => `<article class='bg-white rounded-xl shadow p-4'>
                        <p class='font-medium'>${item.name || item.title}</p>
                      </article>`)
        .join('');
    },
  };
}

