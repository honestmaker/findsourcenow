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
        matchingRecipes.forEach(recipe => {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("result-item");
            recipeDiv.innerHTML = `
                <h3>${recipe.name}</h3>
                <p>Malzemeler: ${recipe.ingredients.join(", ")}</p>
                <a href="${recipe.link}" target="_blank">Nasıl Yapılır?</a>
            `;

            // Nasıl yapılır butonunu ekle
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
        // Eğer eşleşen yemek yoksa, bilgilendirme mesajı göster
        resultsDiv.innerHTML = "<p>Üzgünüz, bu malzemelerle herhangi bir yemek bulunamadı.</p>";
    }
}
