/**
 * 🐾 Level 1: Dog API - Foundation
 * 
 * LEARNING OBJECTIVES:
 * - Make your first API call with axios
 * - Access data from API response using dot notation
 * - Use .map() to loop through an array and create HTML
 * 
 * NEW CONCEPTS IN THIS LESSON:
 * - async/await (waiting for API calls to finish)
 *   📚 Learn more: https://www.w3schools.com/js/js_async.asp
 * 
 * CONCEPTS YOU'LL LEARN:
 * - res.data (accessing response data)
 * - res.data.message (accessing nested properties with dot notation)
 *   📚 Learn more: https://www.w3schools.com/js/js_objects.asp
 * - .map() method (transforming arrays into HTML)
 *   📚 Learn more: https://www.w3schools.com/jsref/jsref_map.asp
 * - Template literals (backticks and ${variables})
 *   📚 Learn more: https://www.w3schools.com/js/js_string_templates.asp
 * 
 * PREREQUISITES: None! This is your first API lesson.
 * 
 * INSTRUCTIONS:
 * 1. Visit https://dog.ceo/api/breeds/image/random/3 in your browser
 * 2. Look at the JSON structure - notice it has "status" and "message"
 * 3. The "message" contains an array of image URLs
 * 4. Complete the TODOs below to make this work!
 */

function apiApp() {
  return {
    title: "🐾 Dog API Project",
    tagline: "Let's fetch real data and show it!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading...</p>";
      try {
        // TODO 1: Add the API endpoint URL here
        // Visit https://dog.ceo/api/breeds/image/random/3 in your browser first!
        // Then copy the URL and paste it below (keep the quotes):
        const res = await axios.get("YOUR_API_URL_HERE");
        
        // TODO 2: Log the response to see what the data structure looks like
        // Uncomment the line below and check the browser console (press F12)
        // This helps you understand what data the API returns
        // console.log(res.data);
        
        // TODO 3: Access the array of image URLs
        // The API returns: { status: "success", message: ["url1", "url2", "url3"] }
        // We want the "message" property which contains the array of URLs
        // Replace 'null' below with the correct way to access the message array:
        // Hint: Use dot notation - res.data.message
        const imageUrls = null; // TODO: Replace null with res.data.message
        
        // Render the images
        this.render(imageUrls);
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Something went wrong 😢</p>`;
        console.error(err);
      }
    },
    render(images = []) {
      const out = document.getElementById("output");
      
      // TODO 4: Use .map() to create HTML for each image
      // .map() loops through each item in the array and creates a new array
      // We're creating HTML strings for each image URL
      // Replace the empty string below with a .map() call:
      // 
      // Structure: images.map(url => `<article>...</article>`).join('')
      // 
      // Hint: Look at the example below, but you need to complete it:
      // images.map(url => `<article>...</article>`).join('')
      // 
      // Inside the article tag, add an <img> tag with src="${url}"
      out.innerHTML = ""; // TODO: Replace "" with your .map() code
      
      // EXPLANATION: 
      // - .map() transforms each URL into an HTML string
      // - .join('') combines all HTML strings into one big string
      // - This creates the HTML that displays all the images on the page
    },
  };
}

