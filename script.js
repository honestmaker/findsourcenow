// Türkçe harfleri normalize eden fonksiyon
function normalizeTurkish(text) {
    const turkishMap = {
        'ğ': 'g',
        'ü': 'u',
        'ş': 's',
        'ı': 'i',
        'ö': 'o',
        'ç': 'c',
        'Ğ': 'G',
        'Ü': 'U',
        'Ş': 'S',
        'I': 'I',
        'İ': 'I',
        'Ö': 'O',
        'Ç': 'C'
    };
    return text.toLowerCase().replace(/[ğüşıöçĞÜŞIİÖÇ]/g, char => turkishMap[char] || char);
}

function findRecipe() {
    const ingredientsInput = document.getElementById("ingredientInput").value;
    // Virgül veya boşlukla ayrılmış malzemeleri al, boş girişleri filtrele
    const ingredientsList = ingredientsInput
        .split(/[\s,]+/)
        .map(item => item.trim())
        .filter(item => item !== "");
    // Kullanıcının girdisini normalize et
    const normalizedIngredientsList = ingredientsList.map(ingredient => normalizeTurkish(ingredient));

    const resultsDiv = document.getElementById("results");

    console.log("Kullanıcının girdiği malzemeler (normalize edilmiş):", normalizedIngredientsList);
    console.log("Yüklenen tarifler:", recipes);

    resultsDiv.innerHTML = "";

    // Her tarif için eşleşen malzeme sayısını hesapla (normalize edilmiş verilerle)
    const recipeMatches = recipes.map(recipe => {
        // Tarifin malzemelerini normalize et
        const normalizedRecipeIngredients = recipe.ingredients.map(ingredient => normalizeTurkish(ingredient));
        const matchingIngredients = normalizedRecipeIngredients.filter(ingredient =>
            normalizedIngredientsList.includes(ingredient)
        );
        return {
            recipe: recipe,
            matchCount: matchingIngredients.length,
            totalIngredients: recipe.ingredients.length
        };
    });

    // Tam eşleşen tarifler (kullanıcının tüm malzemeleri tarifte mevcut)
    const exactMatches = recipeMatches.filter(match => 
        match.matchCount === normalizedIngredientsList.length
    );

    // Tam eşleşme varsa sadece onları göster
    if (exactMatches.length > 0) {
        resultsDiv.innerHTML = '<p class="text-gray-600 mb-4">Tam eşleşen tarifler bulundu:</p>';
        exactMatches.forEach((match, index) => {
            const recipe = match.recipe;
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
            // Yemeğin adını URL parametresi olarak ekleyerek yönlendirme yap
            howToButton.onclick = () => window.location.href = `Nasilyapilir.html?recipe=${encodeURIComponent(recipe.name)}`;

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
        // Tam eşleşme yoksa, en çok eşleşen tarifleri sırala
        const partialMatches = recipeMatches
            .filter(match => match.matchCount > 0) // Hiç eşleşmeyenleri çıkar
            .sort((a, b) => {
                // Eşleşme sayısına göre sırala (çoktan aza)
                if (b.matchCount !== a.matchCount) {
                    return b.matchCount - a.matchCount;
                }
                // Eşleşme sayısı eşitse, malzeme oranı yüksek olanı öne al
                const aRatio = a.matchCount / a.totalIngredients;
                const bRatio = b.matchCount / b.totalIngredients;
                return bRatio - aRatio;
            });

        if (partialMatches.length > 0) {
            resultsDiv.innerHTML = '<p class="text-gray-600 mb-4">Tam eşleşme bulunamadı, ancak şu tarifler bazı malzemelerinize uyuyor:</p>';
            partialMatches.forEach((match, index) => {
                const recipe = match.recipe;
                const recipeDiv = document.createElement("div");
                recipeDiv.className = 'recipe-card';
                recipeDiv.style.animationDelay = `${index * 0.1}s`;
                recipeDiv.innerHTML = `
                    <h3 class="text-xl font-semibold text-gray-800">${recipe.name}</h3>
                    <p class="text-gray-600">Malzemeler: ${recipe.ingredients.join(', ')}</p>
                    <p class="text-gray-500 text-sm">Eşleşen malzeme sayısı: ${match.matchCount}/${normalizedIngredientsList.length}</p>
                `;

                const buttonContainer = document.createElement('div');
                buttonContainer.className = 'mt-4 flex space-x-2';
                
                const howToButton = document.createElement('button');
                howToButton.className = 'px-4 py-2 bg-emerald-500 text-white rounded-lg transition';
                howToButton.textContent = 'Nasıl Yapılır?';
                howToButton.setAttribute('aria-label', `${recipe.name} tarifini görüntüle`);
                // Yemeğin adını URL parametresi olarak ekleyerek yönlendirme yap
                howToButton.onclick = () => window.location.href = `Nasilyapilir.html?recipe=${encodeURIComponent(recipe.name)}`;

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
            resultsDiv.innerHTML = '<p class="text-gray-600">Üzgünüz, bu malzemelerle tarif bulunamadı.</p>';
        }
    }
}