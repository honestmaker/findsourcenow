const recipes = [
    {
        "name": "Tavuklu Sote",
        "ingredients": ["tavuk", "soğan", "biber", "sarımsak"],
        "recipeLink": "https://yemekyap.com/tavuksote"
    },
    {
        "name": "Domatesli Tavuk",
        "ingredients": ["tavuk", "domates", "soğan", "sarımsak"],
        "recipeLink": "https://yemekyap.com/domateslitavuk"
    },
    {
        "name": "Sebzeli Çorba",
        "ingredients": ["domates", "soğan", "biber", "havuç"],
        "recipeLink": "https://yemekyap.com/sebzelicorba"
    }
];

function findRecipes() {
    const userInput = document.getElementById('ingredientInput').value.trim().toLowerCase();
    const userIngredients = userInput.split(',').map(ingredient => ingredient.trim());

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';  // Önceki sonuçları temizle

    // Eşleşme fonksiyonu
    const matchingRecipes = recipes.filter(recipe => {
        const ingredientMatchCount = recipe.ingredients.filter(ingredient => userIngredients.includes(ingredient)).length;
        return ingredientMatchCount > 0;  // En az 1 malzeme eşleşmeli
    });

    if (matchingRecipes.length > 0) {
        matchingRecipes.forEach(recipe => {
            const recipeDiv = document.createElement("div");
            recipeDiv.innerHTML = `
                <h3>${recipe.name}</h3>
                <p>Malzemeler: ${recipe.ingredients.join(", ")}</p>
                <a href="${recipe.recipeLink}" target="_blank">Nasıl Yapılır?</a>
            `;
            resultsDiv.appendChild(recipeDiv);
        });
    } else {
        resultsDiv.innerHTML = "<p>Üzgünüz, bu malzemelerle herhangi bir yemek bulunamadı.</p>";
    }
}
