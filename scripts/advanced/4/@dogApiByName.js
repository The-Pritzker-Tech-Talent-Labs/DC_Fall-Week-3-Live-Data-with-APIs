/**
 * 🐾 Level 4: Dog API by Breed - User Input & String Methods
 * 
 * LEARNING OBJECTIVES:
 * - Get user input using prompt()
 * - Format strings using string methods (.toLowerCase(), .trim(), .replace())
 * - Build dynamic URLs using template literals with variables
 * 
 * CONCEPTS YOU'LL LEARN:
 * - prompt() function (getting user input)
 *   📚 Learn more: https://www.w3schools.com/js/js_popup.asp
 * - String methods (.toLowerCase(), .trim(), .replace())
 *   📚 Learn more: 
 *     - toLowerCase: https://www.w3schools.com/jsref/jsref_tolowercase.asp
 *     - trim: https://www.w3schools.com/jsref/jsref_trim_string.asp
 *     - replace: https://www.w3schools.com/jsref/jsref_replace.asp
 * - Template literals with variables (`https://api.com/${variable}`)
 *   📚 Learn more: https://www.w3schools.com/js/js_string_templates.asp
 * - Input validation (checking if user entered something)
 *   📚 Learn more: https://www.w3schools.com/js/js_if_else.asp
 * 
 * PREREQUISITES: Complete Levels 1-3 first!
 * 
 * INSTRUCTIONS:
 * 1. This API lets you search by breed: https://dog.ceo/api/breed/husky/images/random/3
 * 2. Notice the breed name goes in the URL
 * 3. We'll ask the user for a breed, then use it in the URL
 * 4. Complete the TODOs to make this interactive!
 */

function apiApp() {
  return {
    title: "🐾 Dog API by Breed",
    tagline: "Get dog images by breed name!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading...</p>";
      try {
        // TODO 1: Get user input using prompt()
        // prompt() shows a popup asking the user for input
        // It returns whatever the user types (or null if they cancel)
        // Replace null below with: prompt("Enter a dog breed (e.g., husky, golden, labrador):")
        const breed = null; // TODO: Replace null with prompt() call
        
        // TODO 2: Check if the user entered something
        // If breed is empty or null, show an error message and return early
        // Replace the condition below:
        // Hint: !breed || breed.trim() === ""
        if (false) { // TODO: Replace false with your validation check
          out.innerHTML = "<p class='text-gray-600'>No breed entered. Try again!</p>";
          return;
        }

        // TODO 3: Format the breed name for the API
        // The API needs: lowercase, with hyphens instead of spaces
        // "Golden Retriever" should become "golden-retriever"
        // 
        // Steps:
        // 1. Convert to lowercase: breed.toLowerCase()
        // 2. Remove extra spaces: .trim()
        // 3. Replace spaces with hyphens: .replace(/\s+/g, '-')
        // 
        // Chain these together: breed.toLowerCase().trim().replace(/\s+/g, '-')
        const formattedBreed = null; // TODO: Replace null with formatting code
        
        // TODO 4: Build the API URL with the formatted breed
        // The URL pattern is: https://dog.ceo/api/breed/{breed}/images/random/3
        // Use a template literal to insert the formattedBreed variable
        // Replace null below with: `https://dog.ceo/api/breed/${formattedBreed}/images/random/3`
        const res = await axios.get(null); // TODO: Replace null with your URL template literal
        
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
      
      // EXPLANATION:
      // - prompt() gets input from the user
      // - String methods format the input for the API
      // - Template literals let us insert variables into URLs
      // - This makes our API calls dynamic based on user input!
    },
  };
}

