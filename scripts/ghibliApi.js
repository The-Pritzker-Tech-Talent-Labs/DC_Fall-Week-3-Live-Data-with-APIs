function apiApp() {
  return {
    title: "🎬 Studio Ghibli API Project",
    tagline: "Explore Studio Ghibli films!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading films...</p>";
      try {
        // Fetch all Studio Ghibli films
        const res = await axios.get("https://ghibliapi.vercel.app/films");
        console.log(res.data);
        
        // Render the films (limit to 6 for display)
        this.render(res.data);
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Something went wrong 😢</p>`;
        console.error(err);
      }
    },
    render(items = []) {
      const out = document.getElementById("output");
      
      
      out.innerHTML = items
        .map(film => {
          return `<article class='bg-white rounded-xl shadow p-4'>
                    ${film.image ? `<img src='${film.image}' alt='${film.title}' class='rounded-lg w-full h-64 object-cover mb-3'/>` : ''}
                    <h3 class='text-xl font-semibold mb-2'>${film.title || 'Untitled'}</h3>
                    ${film.original_title ? `<p class='text-sm text-gray-500 mb-2'>${film.original_title}</p>` : ''}
                    <div class='space-y-2 text-sm'>
                      ${film.director ? `<p><strong>Director:</strong> ${film.director}</p>` : ''}
                      ${film.producer ? `<p><strong>Producer:</strong> ${film.producer}</p>` : ''}
                      ${film.release_date ? `<p><strong>Release Date:</strong> ${film.release_date}</p>` : ''}
                      ${film.running_time ? `<p><strong>Running Time:</strong> ${film.running_time} minutes</p>` : ''}
                      ${film.rt_score ? `<p><strong>Rotten Tomatoes Score:</strong> ${film.rt_score}/100</p>` : ''}
                    </div>
                    ${film.description ? `<p class='mt-3 text-sm text-gray-600 line-clamp-3'>${film.description}</p>` : ''}
                  </article>`;
        })
        .join('');
    },
  };
}

