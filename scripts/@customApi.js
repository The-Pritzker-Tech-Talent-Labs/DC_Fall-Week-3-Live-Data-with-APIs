function apiApp() {
  return {
    title: "🌍 My API Project",
    tagline: "Replace the API + customize your display!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading your data...</p>";
      try {
        // STEP 1: Pick API from README
        // STEP 2: Add endpoint below
        // STEP 3: console.log(res.data)
        // STEP 4: this.render(items)
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Could not load data 😢</p>`;
        console.error(err);
      }
    },
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