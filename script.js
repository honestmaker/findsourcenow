function findRecipe() {
       // Kullanıcının malzeme girdisi alınıyor ve küçük harfe dönüştürülüyor
       const ingredientsInput = document.getElementById("ingredientInput").value.toLowerCase();
       const ingredientsList = ingredientsInput.split(",").map(item => item.trim());
       const resultsDiv = document.getElementById("results");

       // Sonuçları temizle
       resultsDiv.innerHTML = "";

       // Yemek tarifi veritabanı üzerinden arama yapılır
       const matchingRecipes = recipes.filter(recipe => {
           return recipe.ingredients.every(ingredient => ingredientsList.includes(ingredient));
       });

       // Eğer uygun yemekler varsa, sonuçları listele
       if (matchingRecipes.length > 0) {
           matchingRecipes.forEach((recipe, index) => {
               const recipeDiv = document.createElement("div");
               recipeDiv.className = 'recipe-card';
               recipeDiv.style.animationDelay = `${index * 0.1}s`;
               recipeDiv.innerHTML = `
                   <h3 class="text-xl font-semibold text-gray-800">${recipe.name}</h3>
                   <p class="text-gray-600">Malzemeler: ${recipe.ingredients.join(', ')}</p>
               `;

               const buttonContainer = document.createElement('div');
               buttonContainer.className = 'mt-4 flex space-x-2';
               
               const howToButton = document.createElement('button');
               howToButton.className = 'px-4 py-2 bg-emerald-500 text-white rounded-lg transition';
               howToButton.textContent = 'Nasıl Yapılır?';
               howToButton.setAttribute('aria-label', `${recipe.name} tarifini görüntüle`);
               howToButton.onclick = () => window.location.href = recipe.link;

               const favoriteButton = document.createElement('button');
               favoriteButton.className = 'px-4 py-2 bg-yellow-500 text-white rounded-lg transition';
               favoriteButton.textContent = 'Favorilere Ekle';
               favoriteButton.setAttribute('aria-label', `${recipe.name} tarifini favorilere ekle`);
               favoriteButton.onclick = () => {
                   const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
                   if (!favorites.includes(recipe.name)) {
                       favorites.push(recipe.name);
                       localStorage.setItem('favorites', JSON.stringify(favorites));
                       favoriteButton.textContent = 'Favorilerden Çıkar';
                   } else {
                       localStorage.setItem('favorites', JSON.stringify(favorites.filter(fav => fav !== recipe.name)));
                       favoriteButton.textContent = 'Favorilere Ekle';
                   }
               };

               buttonContainer.appendChild(howToButton);
               buttonContainer.appendChild(favoriteButton);
               recipeDiv.appendChild(buttonContainer);
               resultsDiv.appendChild(recipeDiv);
           });
       } else {
           // Eğer eşleşen yemek yoksa, bilgilendirme mesajı göster
           resultsDiv.innerHTML = '<p class="text-gray-600">Üzgünüz, bu malzemelerle tarif bulunamadı.</p>';
       }
   }