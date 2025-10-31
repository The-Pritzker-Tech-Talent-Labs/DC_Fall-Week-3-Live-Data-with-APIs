function apiApp() {
  return {
    title: "🐾 Dog API Project",
    tagline: "Let's fetch real data and show it!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading...</p>";
      try {
        // Fetch 3 random dog images
        const res = await axios.get("https://dog.ceo/api/breeds/image/random/3");
        console.log(res.data);
        // Render the images from the message array
        this.render(res.data.message);
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Something went wrong 😢</p>`;
        console.error(err);
      }
    },
    render(images = []) {
      const out = document.getElementById("output");
      out.innerHTML = images
        .map(url => `<article class='bg-white rounded-xl shadow p-4'>
                      <img src='${url}' alt='Dog' class='rounded-lg mx-auto w-64 h-64 object-cover'/>
                    </article>`)
        .join('');
    },
  };
}