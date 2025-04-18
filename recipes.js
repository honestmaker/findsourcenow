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
    },
    {
        name: "Mercimek Çorbası",
        ingredients: ["mercimek", "soğan", "havuç", "kimyon"],
        link: "https://yemekyap.com/mercimekcorbasi"
    },
    {
        name: "Köfte",
        ingredients: ["kıyma", "soğan", "baharat", "yumurta"],
        link: "https://yemekyap.com/kofte"
    },
    {
        name: "Fırında Tavuk",
        ingredients: ["tavuk", "patates", "zeytinyağı", "baharatlar"],
        link: "https://yemekyap.com/firindatavuk"
    },
    {
        name: "Lahmacun",
        ingredients: ["kıyma", "soğan", "domates", "baharatlar"],
        link: "https://yemekyap.com/lahmacun"
    },
    {
        name: "Pizza",
        ingredients: ["un", "domates", "peynir", "sucuk"],
        link: "https://yemekyap.com/pizza"
    },
    {
        name: "Börek",
        ingredients: ["yufka", "peynir", "yumurta", "tereyağı"],
        link: "https://yemekyap.com/borek"
    },
    {
        name: "İskender",
        ingredients: ["döner", "pide", "yoğurt", "domates sosu"],
        link: "https://yemekyap.com/iskender"
    },
    {
        name: "Çılbır",
        ingredients: ["yumurta", "yoğurt", "sarımsak", "zeytinyağı"],
        link: "https://yemekyap.com/cilbir"
    },
    {
        name: "Mantı",
        ingredients: ["kıyma", "un", "yoğurt", "sarımsak"],
        link: "https://yemekyap.com/manti"
    },
    {
        name: "Simit",
        ingredients: ["un", "su", "maya", "pekmez"],
        link: "https://yemekyap.com/simit"
    },
    {
        name: "Kısır",
        ingredients: ["bulgur", "domates", "salatalık", "nar ekşisi"],
        link: "https://yemekyap.com/kisir"
    },
    {
        name: "Kumpir",
        ingredients: ["patates", "peynir", "sosis", "mısır"],
        link: "https://yemekyap.com/kumpir"
    },
    {
        name: "Saray Helvası",
        ingredients: ["un", "tereyağı", "şeker", "su"],
        link: "https://yemekyap.com/sarayhelvasi"
    },
    {
        name: "Hummus",
        ingredients: ["nohut", "tahini", "limon", "zeytinyağı"],
        link: "https://yemekyap.com/hummus"
    },
    {
        name: "Çörek",
        ingredients: ["un", "maya", "zeytinyağı", "şeker"],
        link: "https://yemekyap.com/corek"
    },
    {
        name: "Kabak Mücveri",
        ingredients: ["kabak", "yumurta", "un", "baharatlar"],
        link: "https://yemekyap.com/kabakmucveri"
    },
    {
        name: "Zeytinyağlı Enginar",
        ingredients: ["enginar", "zeytinyağı", "soğan", "limon"],
        link: "https://yemekyap.com/zeytinyaglienginar"
    },
    {
        name: "Pide",
        ingredients: ["un", "kıyma", "domates", "biber"],
        link: "https://yemekyap.com/pide"
    },
    {
        name: "Yoğurtlu Kabak",
        ingredients: ["kabak", "yoğurt", "sarımsak", "zeytinyağı"],
        link: "https://yemekyap.com/yogurtlukabak"
    },
    {
        name: "Adana Kebap",
        ingredients: ["kıyma", "biber", "baharatlar", "soğan"],
        link: "https://yemekyap.com/adanakebap"
    },
    {
        name: "Baklava",
        ingredients: ["yufka", "ceviz", "şerbet", "tereyağı"],
        link: "https://yemekyap.com/baklava"
    },
    {
        name: "Karnıyarık",
        ingredients: ["patlıcan", "kıyma", "domates", "biber"],
        link: "https://yemekyap.com/karniyarik"
    },
    {
        name: "Zeytinyağlı Yaprak Sarma",
        ingredients: ["üzüm yaprağı", "pirinç", "zeytinyağı", "soğan"],
        link: "https://yemekyap.com/zeytinyagliyapraksarma"
    },
    {
        name: "Menemen",
        ingredients: ["yumurta", "domates", "biber", "soğan"],
        link: "https://yemekyap.com/menemen"
    },
    {
        name: "Sütlaç",
        ingredients: ["pirinç", "süt", "şeker", "vanilya"],
        link: "https://yemekyap.com/sutlac"
    },
    {
        name: "Patates Salatası",
        ingredients: ["patates", "soğan", "maydanoz", "zeytinyağı"],
        link: "https://yemekyap.com/patatesalatasi"
    },
    {
        name: "Et Döner",
        ingredients: ["et", "baharatlar", "domates", "soğan"],
        link: "https://yemekyap.com/etdoner"
    },
    {
        name: "Fava",
        ingredients: ["bakla", "zeytinyağı", "limon", "soğan"],
        link: "https://yemekyap.com/fava"
    },
    {
        name: "Aşure",
        ingredients: ["buğday", "nohut", "kuru üzüm", "şeker"],
        link: "https://yemekyap.com/asure"
    },
    {
        name: "Ciğer Tava",
        ingredients: ["ciğer", "un", "baharatlar", "yağ"],
        link: "https://yemekyap.com/cigertava"
    },
    {
        name: "Ezogelin Çorbası",
        ingredients: ["mercimek", "bulgur", "domates", "nane"],
        link: "https://yemekyap.com/ezogelincorbasi"
    },
    {
        name: "Kuru Fasulye",
        ingredients: ["fasulye", "soğan", "domates", "salça"],
        link: "https://yemekyap.com/kurufasulye"
    },
    {
        name: "İmam Bayıldı",
        ingredients: ["patlıcan", "soğan", "domates", "zeytinyağı"],
        link: "https://yemekyap.com/imambayildi"
    },
    {
        name: "Sigara Böreği",
        ingredients: ["yufka", "peynir", "maydanoz", "yağ"],
        link: "https://yemekyap.com/sigaraboregi"
    },
    {
        name: "Künefe",
        ingredients: ["tel kadayıf", "peynir", "şerbet", "tereyağı"],
        link: "https://yemekyap.com/kunefe"
    },
    {
        name: "Acuka",
        ingredients: ["domates", "biber", "sarımsak", "zeytinyağı"],
        link: "https://yemekyap.com/acuka"
    },
    {
        name: "Peynir Tabağı",
        ingredients: ["peynir", "zeytin", "domates", "salatalık"],
        link: "https://yemekyap.com/peynirtabagi"
    },
    {
        name: "Fırında Balık",
        ingredients: ["balık", "limon", "zeytinyağı", "baharatlar"],
        link: "https://yemekyap.com/firindabalik"
    },
    {
        name: "Tarhana Çorbası",
        ingredients: ["tarhana", "domates", "sarımsak", "tereyağı"],
        link: "https://yemekyap.com/tarhanacorbasi"
    },
    {
        name: "Lokma",
        ingredients: ["un", "maya", "şerbet", "yağ"],
        link: "https://yemekyap.com/lokma"
    },
    {
        name: "Mücver",
        ingredients: ["kabak", "yumurta", "un", "dereotu"],
        link: "https://yemekyap.com/mucver"
    },
    {
        name: "Pilav",
        ingredients: ["pirinç", "tereyağı", "su", "tuz"],
        link: "https://yemekyap.com/pilav"
    },
    {
        name: "Tahin Pekmez",
        ingredients: ["tahin", "pekmez"],
        link: "https://yemekyap.com/tahinpekmez"
    },
    {
        name: "Peynirli Poğaça",
        ingredients: ["un", "peynir", "yumurta", "tereyağı"],
        link: "https://yemekyap.com/peynirlipogaca"
    },
    {
        name: "Zeytinyağlı Barbunya",
        ingredients: ["barbunya", "zeytinyağı", "soğan", "domates"],
        link: "https://yemekyap.com/zeytinyaglibarbunya"
    },
    {
        name: "Revani",
        ingredients: ["un", "yumurta", "şerbet", "yoğurt"],
        link: "https://yemekyap.com/revani"
    },
    {
        name: "Şakşuka",
        ingredients: ["patlıcan", "domates", "biber", "zeytinyağı"],
        link: "https://yemekyap.com/saksuka"
    },
    {
        name: "Kadayıf",
        ingredients: ["tel kadayıf", "ceviz", "şerbet", "tereyağı"],
        link: "https://yemekyap.com/kadayif"
    },
    {
        name: "Fırında Patates",
        ingredients: ["patates", "zeytinyağı", "baharatlar", "tuz"],
        link: "https://yemekyap.com/firindapatates"
    },
    {
        name: "Mercimek Köftesi",
        ingredients: ["mercimek", "bulgur", "soğan", "baharatlar"],
        link: "https://yemekyap.com/mercimekkoftesi"
    },
    {
        name: "Güllaç",
        ingredients: ["güllaç yufkası", "süt", "şeker", "ceviz"],
        link: "https://yemekyap.com/gullac"
    },
    {
        name: "Peynirli Omlet",
        ingredients: ["yumurta", "peynir", "tereyağı", "tuz"],
        link: "https://yemekyap.com/peynirliomlet"
    },
    {
        name: "Zeytinyağlı Taze Fasulye",
        ingredients: ["taze fasulye", "zeytinyağı", "domates", "soğan"],
        link: "https://yemekyap.com/zeytinyaglitazefasulye"
    },
    {
        name: "Katmer",
        ingredients: ["yufka", "tereyağı", "şeker", "kaymak"],
        link: "https://yemekyap.com/katmer"
    },
    {
        name: "Peynirli Gözleme",
        ingredients: ["un", "peynir", "maydanoz", "yağ"],
        link: "https://yemekyap.com/peynirligozleme"
    },
    {
        name: "Yayla Çorbası",
        ingredients: ["yoğurt", "pirinç", "nane", "tereyağı"],
        link: "https://yemekyap.com/yaylacorbasi"
    },
    {
        name: "Tulumba Tatlısı",
        ingredients: ["un", "yumurta", "şerbet", "yağ"],
        link: "https://yemekyap.com/tulumbatatlisi"
    },
    {
        name: "Fırında Sebze",
        ingredients: ["kabak", "patlıcan", "biber", "zeytinyağı"],
        link: "https://yemekyap.com/firindasebze"
    },
    {
        name: "Patlıcan Salatası",
        ingredients: ["patlıcan", "yoğurt", "sarımsak", "zeytinyağı"],
        link: "https://yemekyap.com/patlicansalatasi"
    },
    {
        name: "Havuç Tarator",
        ingredients: ["havuç", "yoğurt", "sarımsak", "zeytinyağı"],
        link: "https://yemekyap.com/havuctarator"
    },
    {
        name: "Beyti Kebap",
        ingredients: ["kıyma", "yufka", "yoğurt", "domates sosu"],
        link: "https://yemekyap.com/beytikebap"
    },
    {
        name: "Kuru Köfte",
        ingredients: ["kıyma", "bulgur", "soğan", "baharatlar"],
        link: "https://yemekyap.com/kurukofte"
    },
    {
        name: "Fırında Makarna",
        ingredients: ["makarna", "peynir", "süt", "yumurta"],
        link: "https://yemekyap.com/firindamakarna"
    },
    {
        name: "Peynirli Su Böreği",
        ingredients: ["yufka", "peynir", "yumurta", "süt"],
        link: "https://yemekyap.com/peynirlisuboregi"
    },
    {
        name: "Domates Çorbası",
        ingredients: ["domates", "un", "tereyağı", "süt"],
        link: "https://yemekyap.com/domatescorbasi"
    },
    {
        name: "Ispanak Yemeği",
        ingredients: ["ıspanak", "soğan", "pirinç", "zeytinyağı"],
        link: "https://yemekyap.com/ispanak"
    },
    {
        name: "Zeytinyağlı Pırasa",
        ingredients: ["pırasa", "zeytinyağı", "havuç", "pirinç"],
        link: "https://yemekyap.com/zeytinyaglipirasa"
    },
    {
        name: "Fellah Köftesi",
        ingredients: ["bulgur", "un", "domates", "sarımsak"],
        link: "https://yemekyap.com/fellahkoftesi"
    },
    {
        name: "Kazandibi",
        ingredients: ["süt", "pirinç unu", "şeker", "tereyağı"],
        link: "https://yemekyap.com/kazandibi"
    },
    {
        name: "Kısır Salatası",
        ingredients: ["bulgur", "domates", "yeşil soğan", "nar ekşisi"],
        link: "https://yemekyap.com/kisirsalatasi"
    },
    {
        name: "Paçanga Böreği",
        ingredients: ["yufka", "pastırma", "kaşar", "biber"],
        link: "https://yemekyap.com/pacangaboregi"
    },
    {
        name: "Hünkar Beğendi",
        ingredients: ["et", "patlıcan", "süt", "kaşar"],
        link: "https://yemekyap.com/hunkarbegendi"
    },
    {
        name: "Kereviz Salatası",
        ingredients: ["kereviz", "yoğurt", "sarımsak", "ceviz"],
        link: "https://yemekyap.com/kerevizsalatasi"
    },
    {
        name: "Tavuklu Pilav",
        ingredients: ["pirinç", "tavuk", "tereyağı", "baharatlar"],
        link: "https://yemekyap.com/tavuklupilav"
    },
    {
        name: "Fırında Köfte",
        ingredients: ["kıyma", "patates", "domates", "biber"],
        link: "https://yemekyap.com/firindakofte"
    },
    {
        name: "Kabak Tatlısı",
        ingredients: ["kabak", "şeker", "ceviz", "kaymak"],
        link: "https://yemekyap.com/kabaktatlisi"
    },
    {
        name: "Çiğ Köfte",
        ingredients: ["bulgur", "domates", "biber", "baharatlar"],
        link: "https://yemekyap.com/cigkofte"
    },
    {
        name: "Et Sote",
        ingredients: ["et", "soğan", "biber", "domates"],
        link: "https://yemekyap.com/etsote"
    },
    {
        name: "Peynirli Salata",
        ingredients: ["peynir", "domates", "salatalık", "zeytinyağı"],
        link: "https://yemekyap.com/peynirlisalata"
    },
    {
        name: "Fırında Hamsi",
        ingredients: ["hamsi", "un", "zeytinyağı", "limon"],
        link: "https://yemekyap.com/firindahamsi"
    },
    {
        name: "Krem Karamel",
        ingredients: ["süt", "yumurta", "şeker", "vanilya"],
        link: "https://yemekyap.com/kremkaramel"
    },
    {
        name: "Nohut Yemeği",
        ingredients: ["nohut", "soğan", "domates", "salça"],
        link: "https://yemekyap.com/nohutyemegi"
    },
    {
        name: "Peynirli Pide",
        ingredients: ["un", "peynir", "yumurta", "tereyağı"],
        link: "https://yemekyap.com/peynirlipide"
    },
    {
        name: "Zeytinyağlı Kereviz",
        ingredients: ["kereviz", "zeytinyağı", "limon", "havuç"],
        link: "https://yemekyap.com/zeytinyaglikereviz"
    },
    {
        name: "Sütlü Nuriye",
        ingredients: ["yufka", "süt", "şeker", "ceviz"],
        link: "https://yemekyap.com/sutlunuriye"
    },
    {
        name: "Ispanaklı Börek",
        ingredients: ["yufka", "ıspanak", "peynir", "yumurta"],
        link: "https://yemekyap.com/ispanakliborek"
    },
    {
        name: "Fırında Levrek",
        ingredients: ["levrek", "zeytinyağı", "limon", "baharatlar"],
        link: "https://yemekyap.com/firindalevrek"
    },
    {
        name: "Mercimekli Börek",
        ingredients: ["yufka", "mercimek", "soğan", "baharatlar"],
        link: "https://yemekyap.com/mercimekliborek"
    },
    {
        name: "Şehriyeli Tavuk Çorbası",
        ingredients: ["tavuk", "şehriye", "limon", "tereyağı"],
        link: "https://yemekyap.com/sehriyelitavukcorbasi"
    },
    {
        name: "Fırında Karnabahar",
        ingredients: ["karnabahar", "zeytinyağı", "baharatlar", "yoğurt"],
        link: "https://yemekyap.com/firindakarnabahar"
    },
    {
        name: "Zerde",
        ingredients: ["pirinç", "şeker", "safran", "kuru üzüm"],
        link: "https://yemekyap.com/zerde"
    },
    {
        name: "Kuzu Tandır",
        ingredients: ["kuzu eti", "baharatlar", "sarımsak", "zeytinyağı"],
        link: "https://yemekyap.com/kuzutandir"
    },
    {
        name: "Meyhane Pilavı",
        ingredients: ["pirinç", "soğan", "domates", "biber"],
        link: "https://yemekyap.com/meyhanepilavi"
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