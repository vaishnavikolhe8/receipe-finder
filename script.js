// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
console.log("js")

let searchBox = document.querySelector(".searchBox");
let searchButton = document.querySelector(".searchButton");
let recipeDetail = document.querySelector(".recipeDetail");
let recipeCont = document.querySelector(".recipeCont");
let closeBut = document.querySelector(".closeBut");
let h3Element = document.querySelector('.recipeCont h3');


// ***function to get receipe from api***
let fetchReceipe = async (serachinput) => { // i/p=> cake

    recipeCont.innerHTML = "<h3>Fetching recipes...</h3>";
    try {
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serachinput}`);
        let response = await data.json();
    // console.log(response); //all recipe for cake


    //***loop to insert all meals from api and insert into html file through js
    recipeCont.innerHTML = "";
    recipeCont.style.backgroundImage = "none";
    h3Element.style.backgroundImage = 'none';
    
    response.meals.forEach((mealvar) => {
        // console.log(mealvar);

        //___________appear on html____________________________
        let receipediv = document.createElement('div');
        receipediv.classList.add('receipe');

        receipediv.innerHTML = `
        <img src="${mealvar.strMealThumb}"/>
        <h3>${mealvar.strMeal}</h3>
        <p>${mealvar.strCategory}</p>
        `;

        let button = document.createElement('button');
        button.textContent = "View Recipe";
        receipediv.appendChild(button);

        recipeCont.appendChild(receipediv);



        // ______________________________________
        // ***function to fetch all ingredent
        let fetchingredent = (mealvar) => {
            let list = "";
            console.log(typeof (list));
            for (let i = 1; i <= 20; i++) {
                let ingredent = mealvar[`strIngredient${i}`];
                if (ingredent) {
                    let measure = mealvar[`strMeasure${i}`];
                    list += `<li>${measure} ${ingredent} </li>`;
                    // console.log(list)
                }
                else {
                    break;
                }
            }
            return list;
        }

        //______________________________________
        // ***adding event on buttton to pop up the receipe 
        button.addEventListener("click", () => {
            console.log(mealvar)
            recipeDetail.style.display = "block";

            let receipebox = document.createElement('div');
            receipebox.innerHTML = `
            <h2 class="receipeboxH">${mealvar.strMeal}</h2>
            <h4 class="receipeboxH4">${mealvar.strArea}</h4>
            <h4 class="receipeboxH4">Belongs to ${mealvar.strCategory} category</h4>
            
            <h3>Ingredents:</h3>
            <ul class="receipeboxul">${fetchingredent(mealvar)}</ul>
            
            <div class="receipeboxInstruction">
                <h3>Instructions:</h3>
                <p>${mealvar.strInstructions}</p>
            </div>

            `;

            closeBut.addEventListener("click", () => {
                recipeDetail.style.display = "none";
                receipebox.innerHTML ="";  
            })
            recipeDetail.appendChild(receipebox);
        })


    });
    }
    catch (error) {
        recipeCont.innerHTML = "<h3>Please enter valid name</h3>";
    }
}

searchButton.addEventListener("click", (e) => {
    e.preventDefault(); //*it will prevent reloading a webpage
    // console.log("Buttonclicked");

    let serachinput = searchBox.value.trim(); //*contain value eg.cake
    // console.log(serachinput); //0/p=> cake

    if (!serachinput) {
        recipeCont.innerHTML = "<h3>Type name of your meals</h3>";
        return;
    }
    fetchReceipe(serachinput);
})
