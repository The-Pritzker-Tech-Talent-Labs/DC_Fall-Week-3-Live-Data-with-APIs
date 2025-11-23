/**
 * 🐱 Level 2: Cat API - Nested Data & Conditionals
 * 
 * LEARNING OBJECTIVES:
 * - Access nested data inside objects (objects within objects)
 * - Check if data exists before using it
 * - Use conditional rendering in HTML templates
 * 
 * CONCEPTS YOU'LL LEARN:
 * - Nested objects (item.breeds[0])
 *   📚 Learn more: https://www.w3schools.com/js/js_objects.asp
 * - Conditional checks (if statements)
 *   📚 Learn more: https://www.w3schools.com/js/js_if_else.asp
 * - Conditional HTML rendering (breed ? ... : '')
 *   📚 Learn more: https://www.w3schools.com/js/js_comparisons.asp (Ternary Operator section)
 * - Array access with brackets [0]
 *   📚 Learn more: https://www.w3schools.com/js/js_arrays.asp
 * 
 * PREREQUISITES: Complete Level 1 first!
 * 
 * INSTRUCTIONS:
 * 1. Visit https://api.thecatapi.com/v1/images/search?limit=3&has_breeds=1
 * 2. Notice the structure: it's an array, each item has "url" and "breeds"
 * 3. The "breeds" is an array inside each item
 * 4. Complete the TODOs to display cat images with breed information
 */

function apiApp() {
  return {
    title: "🐱 Cat API Project",
    tagline: "Fetch random cat images with breed information!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading cats...</p>";
      try {
        // TODO 1: Add the Cat API endpoint URL
        // Visit https://api.thecatapi.com/v1/images/search?limit=3&has_breeds=1
        // Copy the URL and paste it below:
        const res = await axios.get("YOUR_API_URL_HERE");
        
        // TODO 2: Log the response to see the structure
        // Uncomment and check the console:
        // console.log(res.data);
        
        // The API returns an array directly (not wrapped in an object)
        // So we can use res.data directly
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
          // TODO 3: Access the breed information from nested data
          // The API returns: [{ url: "...", breeds: [{ name: "...", ... }] }]
          // We need to get the first breed from the breeds array
          // Replace null below with: item.breeds[0]
          // But first check if breeds exists and has items!
          // 
          // Hint: Use a conditional check: item.breeds && item.breeds.length > 0 ? item.breeds[0] : null
          const breed = null; // TODO: Replace null with breed extraction code
          
          return `<article class='bg-white rounded-xl shadow p-4'>
                    ${breed ? `<h3 class='text-center font-semibold mb-2 capitalize'>${breed.name}</h3>` : ''}
                    <img src='${item.url}' alt='Cat' class='rounded-lg mx-auto w-64 h-64 object-cover'/>
                    ${breed && breed.description ? `<p class='mt-2 text-sm text-gray-600 text-center'>${breed.description.substring(0, 100)}...</p>` : ''}
                    ${breed && breed.temperament ? `<p class='mt-2 text-xs text-gray-500 text-center'><strong>Temperament:</strong> ${breed.temperament}</p>` : ''}
                  </article>`;
        })
        .join('');
      
      // EXPLANATION:
      // - breed ? ... : '' means "if breed exists, show this HTML, otherwise show nothing"
      // - breed && breed.description means "if breed exists AND has description, show it"
      // - This prevents errors when data is missing
    },
  };
}

