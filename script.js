const recipes = [
    {
        name: "Tavuklu Sote",
        ingredients: ["tavuk", "soğan", "biber", "sarımsak"],
        link: "https://yemekyap.com/tavuksote"
    },
    {
        name: "Domatesli Tavuk",
        ingredients: ["tavuk", "domates", "soğan"],
        link: "https://yemekyap.com/domateslitavuk"
    },
    {
        name: "Sebzeli Çorba",
        ingredients: ["domates", "soğan", "biber", "havuç"],
        link: "https://yemekyap.com/sebzelicorba"
    }
];

function findRecipe() {
    const ingredientsInput = document.getElementById("ingredientInput").value.toLowerCase();
    const ingredientsList = ingredientsInput.split(",").map(item => item.trim());
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "";

    const matchingRecipes = recipes.filter(recipe => {
        return recipe.ingredients.every(ingredient => ingredientsList.includes(ingredient));
    });

    if (matchingRecipes.length > 0) {
        matchingRecipes.forEach(recipe => {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("result-item");
            recipeDiv.innerHTML = `
                <h3>${recipe.name}</h3>
                <p>Malzemeler: ${recipe.ingredients.join(", ")}</p>
                <a href="${recipe.link}" target="_blank">Nasıl Yapılır?</a>
            `;

            const howToButton = document.createElement("button");
            howToButton.classList.add("how-to-button");
            howToButton.innerText = "Nasıl Yapılır?";
            howToButton.onclick = function() {
                window.location.href = recipe.link;
            };

            recipeDiv.appendChild(howToButton);
            resultsDiv.appendChild(recipeDiv);
        });
    } else {
        resultsDiv.innerHTML = "<p>Üzgünüz, bu malzemelerle herhangi bir yemek bulunamadı.</p>";
    }
}
