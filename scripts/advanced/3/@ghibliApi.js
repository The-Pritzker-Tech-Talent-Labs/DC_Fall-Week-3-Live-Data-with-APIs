/**
 * 🎬 Level 3: Studio Ghibli API - Multiple Properties
 * 
 * LEARNING OBJECTIVES:
 * - Access multiple properties from the same object
 * - Display different types of data (strings, numbers, dates)
 * - Build complex HTML templates with multiple data points
 * 
 * CONCEPTS YOU'LL LEARN:
 * - Accessing multiple object properties (film.title, film.director, etc.)
 *   📚 Learn more: https://www.w3schools.com/js/js_objects.asp
 * - Different data types (strings, numbers)
 *   📚 Learn more: https://www.w3schools.com/js/js_datatypes.asp
 * - Conditional rendering for multiple properties
 *   📚 Learn more: https://www.w3schools.com/js/js_comparisons.asp (Ternary Operator section)
 * - Building rich HTML templates
 *   📚 Learn more: https://www.w3schools.com/js/js_string_templates.asp
 * 
 * PREREQUISITES: Complete Levels 1-2 first!
 * 
 * INSTRUCTIONS:
 * 1. Visit https://ghibliapi.vercel.app/films in your browser
 * 2. Notice each film has many properties: title, director, release_date, etc.
 * 3. We'll display multiple properties in one card
 * 4. Complete the TODOs to show all the film information
 */

function apiApp() {
  return {
    title: "🎬 Studio Ghibli API Project",
    tagline: "Explore Studio Ghibli films!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading films...</p>";
      try {
        // TODO 1: Add the Studio Ghibli API endpoint
        // Visit https://ghibliapi.vercel.app/films
        // Copy the URL and paste it below:
        const res = await axios.get("YOUR_API_URL_HERE");
        
        // TODO 2: Log the response to see all available properties
        // Uncomment and check the console to see what data each film has:
        // console.log(res.data);
        
        // The API returns an array of film objects directly
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
          // TODO 3: Access multiple film properties
          // Each film object has: title, director, producer, release_date, running_time, rt_score, image, description
          // Replace the TODO comments below with the actual property access
          // 
          // Example: film.title (already done for you)
          // You need to do the same for other properties
          
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
      
      // EXPLANATION:
      // - We're accessing many properties: film.title, film.director, film.release_date, etc.
      // - Each property is displayed conditionally (only if it exists)
      // - This creates a rich, detailed display of each film
      // - Notice how we use ${film.property} inside the template literal
    },
  };
}

