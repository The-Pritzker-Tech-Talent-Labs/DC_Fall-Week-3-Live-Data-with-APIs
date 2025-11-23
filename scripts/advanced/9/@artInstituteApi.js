/**
 * 🖼️ Level 9: Art Institute API - Advanced Patterns (No Regex)
 * 
 * LEARNING OBJECTIVES:
 * - Use simple type checking instead of regex
 * - Build URLs from API data
 * - Combine multiple API calls with Promise.all()
 * 
 * CONCEPTS YOU'LL LEARN:
 * - Simple type checking (isNaN() instead of regex)
 *   📚 Learn more: https://www.w3schools.com/jsref/jsref_isnan.asp
 * - Building URLs from data (constructing image URLs)
 * - Promise.all() for multiple API calls (review from Level 5)
 *   📚 Review: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * - Conditional logic for different API endpoints
 *   📚 Learn more: https://www.w3schools.com/js/js_if_else.asp
 * 
 * PREREQUISITES: Complete Levels 1-8 first!
 * 
 * INSTRUCTIONS:
 * 1. This API can search by keyword OR fetch by ID
 * 2. We'll use simple checks (no regex) to detect if input is a number
 * 3. Search results need additional API calls to get full details
 * 4. Complete the TODOs to create an artwork search app
 */

function apiApp() {
  return {
    title: "🖼️ Art Institute API Project",
    tagline: "Search for artwork from the Art Institute of Chicago!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading...</p>";
      let searchTerm = "";
      try {
        // TODO 1: Get user input
        // Use prompt() to ask for a keyword or artwork ID
        // Replace null below with: prompt("Enter a keyword to search (e.g., 'sunflower', 'chicago') or an artwork ID (e.g., 129884):")
        searchTerm = null; // TODO: Replace null with prompt() call
        
        // TODO 2: Validate input
        // Check if searchTerm is empty
        if (false) { // TODO: Replace false with validation
          out.innerHTML = "<p class='text-gray-600'>No search term entered. Try again!</p>";
          return;
        }

        const term = searchTerm.trim();
        
        // TODO 3: Check if input is a number (ID) using simple check
        // Instead of regex, use: !isNaN(term) && term.trim() !== ''
        // This checks if the term can be converted to a number
        // Replace false below:
        if (false) { // TODO: Replace false with number check
          // It's an ID - fetch that specific artwork directly
          // TODO 4: Build URL for specific artwork
          // Pattern: https://api.artic.edu/api/v1/artworks/{id}
          const res = await axios.get(null); // TODO: Replace null with URL
          
          console.log(res.data);
          
          if (res.data.data) {
            const artwork = res.data.data;
            // TODO 5: Build image URL from image_id
            // Pattern: https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg
            // Use template literal with artwork.image_id
            if (artwork.image_id) {
              artwork.image_url = null; // TODO: Replace null with image URL template literal
            }
            this.render([artwork]);
          } else {
            out.innerHTML = `<p class='text-red-600'>Artwork with ID "${term}" not found. Try another ID! 🎨</p>`;
          }
        } else {
          // It's a search term - search for multiple artworks
          // TODO 6: Build search URL
          // Pattern: https://api.artic.edu/api/v1/artworks/search?q={term}&limit=3
          // Use encodeURIComponent() for the search term
          const res = await axios.get(null); // TODO: Replace null with search URL
          
          console.log(res.data);
          
          if (res.data.data && res.data.data.length > 0) {
            // Search only returns basic info, so we need to fetch full details for images
            // TODO 7: Get IDs from search results
            // Use .map() to extract artwork.id from each result
            // Replace null below: res.data.data.map(artwork => artwork.id)
            const artworkIds = null; // TODO: Replace null with ID extraction
            
            // TODO 8: Use Promise.all() to fetch full details for each artwork
            // Similar to Level 5, use Promise.all() with .map()
            // For each ID, call: axios.get(`https://api.artic.edu/api/v1/artworks/${id}`)
            // Replace null below:
            const detailsRes = null; // TODO: Replace null with Promise.all() code
            
            // TODO 9: Build image URLs for each artwork
            // Map over detailsRes, extract detail.data.data, then build image URL
            // Use the same pattern as TODO 5 for building image URLs
            // Replace null below:
            const artworks = null; // TODO: Replace null with artwork processing code
            
            this.render(artworks);
          } else {
            out.innerHTML = `<p class='text-red-600'>No artworks found for "${term}". Try a different search term! 🎨</p>`;
          }
        }
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Could not load artwork data for "${searchTerm || 'unknown'}". Please try again! 😢</p>`;
        console.error(err);
      }
    },
    render(items = []) {
      const out = document.getElementById("output");
      out.innerHTML = items
        .map(artwork => {
          return `<article class='bg-white rounded-xl shadow p-4'>
                    <h3 class='text-lg font-semibold mb-2'>${artwork.title || 'Untitled'}</h3>
                    ${artwork.artist_display ? `<p class='text-sm text-gray-600 mb-2'><strong>Artist:</strong> ${artwork.artist_display}</p>` : ''}
                    ${artwork.date_display ? `<p class='text-sm text-gray-600 mb-2'><strong>Date:</strong> ${artwork.date_display}</p>` : ''}
                    ${artwork.medium_display ? `<p class='text-xs text-gray-500 mb-2'><strong>Medium:</strong> ${artwork.medium_display}</p>` : ''}
                    ${artwork.image_url ? `<img src='${artwork.image_url}' alt='${artwork.title}' class='rounded-lg mx-auto w-full max-w-md h-auto object-contain mt-4'/>` : 
                      '<p class="text-gray-400 text-sm mt-4">No image available</p>'}
                  </article>`;
        })
        .join('');
      
      // EXPLANATION:
      // - isNaN() is simpler than regex for checking if something is a number
      // - Building URLs from data lets us display images
      // - Promise.all() fetches multiple artworks simultaneously
      // - This combines concepts from previous levels!
    },
  };
}

