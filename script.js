
function findRecipe() {
    const ingredientsInput = document.getElementById("ingredientInput").value.toLowerCase();
    const ingredientsList = ingredientsInput.split(",").map(item => item.trim()).filter(item => item !== '');
    const resultsDiv = document.getElementById("results");

    if (ingredientsList.length === 0) {
        resultsDiv.innerHTML = '<p class="error-text animate-pulse">Lütfen malzeme giriniz! 🍽️</p>';
        return;
    }

    if (typeof recipes === 'undefined') {
        resultsDiv.innerHTML = '<p class="error-text">Tarif veritabanına erişilemedi. Lütfen sayfayı yenileyin.</p>';
        return;
    }

    resultsDiv.innerHTML = "";
    document.getElementById('loading').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        const exactMatches = recipes.filter(recipe =>
            ingredientsList.every(ingredient => recipe.ingredients.includes(ingredient))
        );

        if (exactMatches.length > 0) {
            exactMatches.forEach(recipe => {
                const recipeDiv = document.createElement('div');
                recipeDiv.className = 'recipe-card fade-in';
                recipeDiv.innerHTML = `<h3 class="text-xl font-semibold mb-2">${recipe.name}</h3>
                                       <p class="text-gray-600 mt-2">Malzemeler: ${recipe.ingredients.join(', ')}</p>
                                       <a href="${recipe.link}" target="_blank" class="link-button mt-4 inline-block">Tarife Git</a>`;
                resultsDiv.appendChild(recipeDiv);
            });
        } else {
            let bestMatch = null;
            let maxMatches = 0;

            recipes.forEach(recipe => {
                const matchCount = ingredientsList.filter(ingredient => recipe.ingredients.includes(ingredient)).length;
                if (matchCount > maxMatches) {
                    maxMatches = matchCount;
                    bestMatch = recipe;
                }
            });

            if (bestMatch) {
                const recipeDiv = document.createElement('div');
                recipeDiv.className = 'recipe-card fade-in';
                recipeDiv.innerHTML = `<h3 class="text-xl font-semibold mb-2">${bestMatch.name}</h3>
                                       <p class="text-gray-600 mt-2">Malzemeler: ${bestMatch.ingredients.join(', ')}</p>
                                       <p class="italic text-gray-500 mt-2">Bu tarif, en çok eşleşen malzemelere sahip! 🍽️</p>
                                       <a href="${bestMatch.link}" target="_blank" class="link-button mt-4 inline-block">Tarife Git</a>`;
                resultsDiv.appendChild(recipeDiv);
            } else {
                resultsDiv.innerHTML = '<p class="text-gray-400">Üzgünüz, bu malzemelerle tarif bulunamadı.</p>';
            }
        }
    }, 800);
}
