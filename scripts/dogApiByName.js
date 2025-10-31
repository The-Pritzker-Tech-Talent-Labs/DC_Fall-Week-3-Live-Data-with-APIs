function apiApp() {
  return {
    title: "🐾 Dog API by Breed",
    tagline: "Get dog images by breed name!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading...</p>";
      try {
        // prompt() asks the user for input - a simple way to get data from them
        const breed = prompt("Enter a dog breed (e.g., husky, golden, labrador):");
        
        if (!breed || breed.trim() === "") {
          out.innerHTML = "<p class='text-gray-600'>No breed entered. Try again!</p>";
          return;
        }

        // Format breed name for API: lowercase and replace spaces with hyphens
        // "golden retriever" becomes "golden-retriever"
        const formattedBreed = breed.toLowerCase().trim().replace(/\s+/g, '-');
        
        // Fetch random images for the specified breed
        const res = await axios.get(`https://dog.ceo/api/breed/${formattedBreed}/images/random/3`);
        console.log(res.data);
        
        if (res.data.status === "success") {
          this.render(res.data.message, formattedBreed);
        } else {
          out.innerHTML = `<p class='text-red-600'>Breed "${breed}" not found. Try another breed! 🐕</p>`;
        }
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Something went wrong 😢<br>Make sure you entered a valid breed name!</p>`;
        console.error(err);
      }
    },
    render(images = [], breed = "dog") {
      const out = document.getElementById("output");
      // Convert "golden-retriever" back to "Golden Retriever" for display
      // Split by hyphens, capitalize each word, join with spaces
      const capitalizedBreed = breed.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      out.innerHTML = images
        .map(url => `<article class='bg-white rounded-xl shadow p-4'>
                      <h3 class='text-center font-semibold mb-2 capitalize'>${capitalizedBreed}</h3>
                      <img src='${url}' alt='${capitalizedBreed}' class='rounded-lg mx-auto w-64 h-64 object-cover'/>
                    </article>`)
        .join('');
    },
  };
}

