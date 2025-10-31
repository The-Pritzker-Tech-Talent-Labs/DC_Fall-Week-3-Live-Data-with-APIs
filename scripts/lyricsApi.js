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
        // prompt() asks the user for input - we need two pieces of info
        artist = prompt("Enter the artist name (e.g., Adele, Drake, The Beatles):");
        
        if (!artist || artist.trim() === "") {
          out.innerHTML = "<p class='text-gray-600'>No artist entered. Try again!</p>";
          return;
        }

        song = prompt("Enter the song title (e.g., Hello, Gods Plan, Let It Be):");
        
        if (!song || song.trim() === "") {
          out.innerHTML = "<p class='text-gray-600'>No song title entered. Try again!</p>";
          return;
        }

        // encodeURIComponent() converts spaces and special characters for URLs
        // "Hello World" becomes "Hello%20World" so it works in the URL
        const encodedArtist = encodeURIComponent(artist.trim());
        const encodedSong = encodeURIComponent(song.trim());
        
        // Fetch lyrics
        const res = await axios.get(`https://api.lyrics.ovh/v1/${encodedArtist}/${encodedSong}`);
        console.log(res.data);
        
        // Render lyrics
        this.render(res.data.lyrics, artist.trim(), song.trim());
      } catch (err) {
        // 404 means "not found" - lyrics don't exist for that song
        if (err.response && err.response.status === 404) {
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
    },
  };
}

