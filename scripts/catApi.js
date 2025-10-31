function apiApp() {
  return {
    title: "🐱 Cat API Project",
    tagline: "Fetch random cat images with breed information!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading cats...</p>";
      try {
        // Fetch 3 random cat images with breed info
        const res = await axios.get("https://api.thecatapi.com/v1/images/search?limit=3&has_breeds=1");
        console.log(res.data);
        
        // Render the cat images
        this.render(res.data);
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Could not load data 😢</p>`;
        console.error(err);
      }
    },
    render(items = []) {
      const out = document.getElementById("output");
      out.innerHTML = items
        .map(item => {
          // The API returns breed info nested inside the item
          // Check if breeds array exists and has items, then get the first one
          const breed = item.breeds && item.breeds.length > 0 ? item.breeds[0] : null;
          return `<article class='bg-white rounded-xl shadow p-4'>
                    ${breed ? `<h3 class='text-center font-semibold mb-2 capitalize'>${breed.name}</h3>` : ''}
                    <img src='${item.url}' alt='Cat' class='rounded-lg mx-auto w-64 h-64 object-cover'/>
                    ${breed && breed.description ? `<p class='mt-2 text-sm text-gray-600 text-center'>${breed.description.substring(0, 100)}...</p>` : ''}
                    ${breed && breed.temperament ? `<p class='mt-2 text-xs text-gray-500 text-center'><strong>Temperament:</strong> ${breed.temperament}</p>` : ''}
                  </article>`;
        })
        .join('');
    },
  };
}

