function apiApp() {
  return {
    title: "🖼️ Art Institute API Project",
    tagline: "Search for artwork from the Art Institute of Chicago!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading...</p>";
      let searchTerm = "";
      try {
        // prompt() asks the user for input - we accept either a keyword or an ID
        searchTerm = prompt("Enter a keyword to search (e.g., 'sunflower', 'chicago') or an artwork ID (e.g., 129884):");
        
        if (!searchTerm || searchTerm.trim() === "") {
          out.innerHTML = "<p class='text-gray-600'>No search term entered. Try again!</p>";
          return;
        }

        const term = searchTerm.trim();
        
        // Check if input is all numbers (an ID) using a regular expression
        // /^\d+$/ means: start to end must be only digits
        if (/^\d+$/.test(term)) {
          // It's an ID - fetch that specific artwork directly
          const res = await axios.get(`https://api.artic.edu/api/v1/artworks/${term}`);
          console.log(res.data);
          
          if (res.data.data) {
            const artwork = res.data.data;
            // Build image URL from image_id (this API requires building the URL yourself)
            if (artwork.image_id) {
              artwork.image_url = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
            }
            this.render([artwork]);
          } else {
            out.innerHTML = `<p class='text-red-600'>Artwork with ID "${term}" not found. Try another ID! 🎨</p>`;
          }
        } else {
          // It's a search term - search for multiple artworks
          const res = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(term)}&limit=3`);
          console.log(res.data);
          
          if (res.data.data && res.data.data.length > 0) {
            // Search only returns basic info, so we need to fetch full details for images
            // Get IDs from search results, then fetch each one's details
            const artworkIds = res.data.data.map(artwork => artwork.id);
            
            // Promise.all lets us wait for multiple API calls to finish at the same time
            const detailsRes = await Promise.all(
              artworkIds.map(id => axios.get(`https://api.artic.edu/api/v1/artworks/${id}`))
            );
            
            // Build image URLs for each artwork
            const artworks = detailsRes.map(detail => {
              const artwork = detail.data.data;
              if (artwork.image_id) {
                artwork.image_url = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
              }
              return artwork;
            });
            
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
    },
  };
}

