function apiApp() {
  return {
    title: "🍫Snack Vending Machine",
    tagline: "Click refresh to get a random snack!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading...</p>";
      let barcode = "";
      try {
        // prompt() asks the user for input - a simple way to get data from them
        barcode = prompt("Enter a product barcode (e.g., 2840058987, 737628064502):");
        
        if (!barcode || barcode.trim() === "") {
          out.innerHTML = "<p class='text-gray-600'>No barcode entered. Try again!</p>";
          return;
        }

        // Fetch product data by barcode
        const res = await axios.get(`https://world.openfoodfacts.net/api/v2/product/${barcode.trim()}`);
        console.log(res.data);
        
        if (res.data.status === 1 && res.data.product) {
          // Render product information
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
          // The ?. is called "optional chaining" - it safely checks if properties exist
          // If any part is missing, it returns undefined instead of crashing
          // We try multiple image locations in case one is missing
          const imageUrl = product.selected_images?.front?.display?.en || 
                          product.image_url || 
                          product.image_front_url || 
                          '';
          // nutrition_grades_tags is an array, [0] gets first item, ?. safely checks it exists
          const nutritionGrade = product.nutrition_grades_tags?.[0]?.toUpperCase() || 'N/A';
          const sugars = product.nutriments?.sugars_100g || 'N/A';
          const calories = product.nutriments?.['energy-kcal_100g'] || product.nutriments?.['energy_100g'] || 'N/A';
          
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
    },
  };
}

