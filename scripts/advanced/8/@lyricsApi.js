/**
 * 🎵 Level 8: Lyrics API - Multiple Inputs & Error Handling
 * 
 * LEARNING OBJECTIVES:
 * - Get multiple pieces of user input
 * - Encode special characters for URLs
 * - Handle specific error types (404 Not Found)
 * 
 * CONCEPTS YOU'LL LEARN:
 * - Multiple prompt() calls
 *   📚 Learn more: https://www.w3schools.com/js/js_popup.asp
 * - encodeURIComponent() (converting text for URLs)
 *   📚 Learn more: https://www.w3schools.com/jsref/jsref_encodeuricomponent.asp
 * - Error handling with err.response.status
 *   📚 Learn more: https://www.w3schools.com/js/js_errors.asp
 * - Different error messages for different situations
 * 
 * PREREQUISITES: Complete Levels 1-7 first!
 * 
 * INSTRUCTIONS:
 * 1. This API needs two inputs: artist name and song title
 * 2. We need to encode them properly for the URL
 * 3. Some songs might not have lyrics (404 error)
 * 4. Complete the TODOs to create a lyrics search app
 */

function apiApp() {
  return {
    title: "🎵 Lyrics API Project",
    tagline: "Search for song lyrics by artist and title!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading...</p>";
      let artist = "";
      let song = "";
      try {
        // TODO 1: Get artist name from user
        // Use prompt() to ask for artist name
        // Replace null below with: prompt("Enter the artist name (e.g., Adele, Drake, The Beatles):")
        artist = null; // TODO: Replace null with prompt() call
        
        // TODO 2: Validate artist input
        // Check if artist is empty
        if (false) { // TODO: Replace false with validation
          out.innerHTML = "<p class='text-gray-600'>No artist entered. Try again!</p>";
          return;
        }

        // TODO 3: Get song title from user
        // Use prompt() to ask for song title
        // Replace null below with: prompt("Enter the song title (e.g., Hello, Gods Plan, Let It Be):")
        song = null; // TODO: Replace null with prompt() call
        
        // TODO 4: Validate song input
        // Check if song is empty
        if (false) { // TODO: Replace false with validation
          out.innerHTML = "<p class='text-gray-600'>No song title entered. Try again!</p>";
          return;
        }

        // TODO 5: Encode the inputs for the URL
        // encodeURIComponent() converts spaces and special characters
        // "Hello World" becomes "Hello%20World" so it works in URLs
        // Use encodeURIComponent() on both artist and song (after .trim())
        // Replace null below:
        const encodedArtist = null; // TODO: Replace with encoding code
        const encodedSong = null; // TODO: Replace with encoding code
        
        // TODO 6: Build the API URL
        // Pattern: https://api.lyrics.ovh/v1/{artist}/{song}
        // Use template literal with encodedArtist and encodedSong
        const res = await axios.get(null); // TODO: Replace null with URL
        
        console.log(res.data);
        
        // Render lyrics
        this.render(res.data.lyrics, artist.trim(), song.trim());
      } catch (err) {
        // TODO 7: Handle specific error types
        // Check if error is 404 (not found)
        // If err.response exists and err.response.status === 404, show "not found" message
        // Otherwise, show generic error
        // Replace the condition below:
        if (false) { // TODO: Replace false with 404 check
          out.innerHTML = `<p class='text-red-600'>Lyrics not found for "${song}" by "${artist}". Try a different song! 🎤</p>`;
        } else {
          out.innerHTML = `<p class='text-red-600'>Something went wrong 😢</p>`;
        }
        console.error(err);
      }
    },
    render(lyrics = "", artist = "", song = "") {
      const out = document.getElementById("output");
      // Lyrics come as one long string with \n for line breaks
      // whitespace-pre-line CSS class preserves those line breaks
      
      out.innerHTML = `<article class='bg-white rounded-xl shadow p-4 max-h-96 overflow-y-auto'>
                        <h3 class='text-xl font-semibold mb-1'>${song}</h3>
                        <p class='text-sm text-gray-600 mb-4'>by ${artist}</p>
                        <div class='whitespace-pre-line text-sm leading-relaxed'>${lyrics}</div>
                      </article>`;
      
      // EXPLANATION:
      // - Multiple prompts get multiple pieces of information
      // - encodeURIComponent() makes text safe for URLs
      // - Checking err.response.status lets us show specific error messages
      // - This creates a better user experience!
    },
  };
}

