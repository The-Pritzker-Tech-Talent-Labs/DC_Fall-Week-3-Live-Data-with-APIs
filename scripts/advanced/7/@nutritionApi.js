/**
 * 🍫 Level 7: Nutrition API - Optional Chaining & Fallbacks
 * 
 * LEARNING OBJECTIVES:
 * - Use optional chaining (?.) to safely access properties
 * - Provide fallback values when data is missing
 * - Handle APIs where data structure might vary
 * 
 * CONCEPTS YOU'LL LEARN:
 * - Optional chaining (?.) - safely accessing properties that might not exist
 *   📚 Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 * - Fallback values (|| operator) - providing defaults when data is missing
 *   📚 Learn more: https://www.w3schools.com/js/js_comparisons.asp (Logical Operators section)
 * - Multiple property checks - trying different locations for the same data
 * 
 * PREREQUISITES: Complete Levels 1-6 first!
 * 
 * INSTRUCTIONS:
 * 1. This API returns product data, but some fields might be missing
 * 2. We need to safely access properties that might not exist
 * 3. Use ?. to prevent errors when data is missing
 * 4. Complete the TODOs to safely display product information
 */

function apiApp() {
  return {
    title: "🍫 Nutrition API Project",
    tagline: "Search for food products by barcode!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading...</p>";
      let barcode = "";
      try {
        // TODO 1: Get user input (barcode)
        // Use prompt() to ask for a product barcode
        // Example barcodes: 2840058987, 737628064502
        barcode = null; // TODO: Replace null with prompt() call
        
        // TODO 2: Validate input
        // Check if barcode is empty
        if (false) { // TODO: Replace false with validation
          out.innerHTML = "<p class='text-gray-600'>No barcode entered. Try again!</p>";
          return;
        }

        // TODO 3: Build the API URL
        // Pattern: https://world.openfoodfacts.net/api/v2/product/{barcode}
        // Use template literal with barcode.trim()
        const res = await axios.get(null); // TODO: Replace null with URL
        
        console.log(res.data);
        
        // Check if product was found
        if (res.data.status === 1 && res.data.product) {
          this.render([res.data.product]);
        } else {
          out.innerHTML = `<p class='text-red-600'>Product with barcode "${barcode}" not found. Try another barcode! 🛒</p>`;
        }
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Could not load product data for barcode "${barcode || 'unknown'}". Make sure it's a valid barcode! 😢</p>`;
        console.error(err);
      }
    },
    render(items = []) {
      const out = document.getElementById("output");
      out.innerHTML = items
        .map(product => {
          // TODO 4: Safely access image URL using optional chaining
          // The image might be in different locations:
          // - product.selected_images?.front?.display?.en
          // - product.image_url
          // - product.image_front_url
          // 
          // Use ?. to safely check each, and || to provide fallback
          // Try the first, if it doesn't exist, try the second, etc.
          // Replace null below with your safe access code:
          const imageUrl = null; // TODO: Replace with optional chaining code
          
          // TODO 5: Safely access nutrition grade
          // Structure: product.nutrition_grades_tags[0]
          // Use ?.[0] to safely get first item, then .toUpperCase()
          // Provide 'N/A' as fallback if missing
          // Replace null below:
          const nutritionGrade = null; // TODO: Replace with safe access code
          
          // TODO 6: Safely access sugars and calories
          // Use optional chaining: product.nutriments?.sugars_100g
          // Provide 'N/A' as fallback
          // For calories, try 'energy-kcal_100g' first, then 'energy_100g'
          const sugars = null; // TODO: Replace with safe access
          const calories = null; // TODO: Replace with safe access (try both locations)
          
          return `<article class='bg-white rounded-xl shadow p-4'>
                    <h3 class='text-xl font-semibold mb-2 text-center'>${product.product_name || 'Unknown Product'}</h3>
                    ${product.brands ? `<p class='text-sm text-gray-600 text-center mb-2'><strong>Brand:</strong> ${product.brands}</p>` : ''}
                    ${imageUrl ? `<img src='${imageUrl}' alt='${product.product_name}' class='rounded-lg mx-auto w-48 h-48 object-contain mb-4'/>` : ''}
                    <div class='grid grid-cols-2 gap-2 mt-4 text-sm'>
                      <div><strong>Nutrition Grade:</strong> <span class='font-bold text-lg'>${nutritionGrade}</span></div>
                      <div><strong>Sugars/100g:</strong> ${sugars}g</div>
                      <div><strong>Calories/100g:</strong> ${calories}</div>
                      ${product.categories ? `<div class='col-span-2'><strong>Category:</strong> ${product.categories.split(',').slice(0, 2).join(', ')}</div>` : ''}
                    </div>
                  </article>`;
        })
        .join('');
      
      // EXPLANATION:
      // - ?. safely checks if properties exist before accessing them
      // - If any part is missing, it returns undefined instead of crashing
      // - || provides fallback values when data is missing
      // - This makes our code robust when APIs return incomplete data
    },
  };
}

