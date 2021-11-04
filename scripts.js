// function to asynchronously fetch file contents from path/URL "fromFile" 
// and insert them in the DOM object found with "whereTo" -- note this
// uses document.querySelector, so use CSS notation on "whereTo"

function loadFileInto(recipeName, listName, whereTo) {

  // 1. creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();
  
  
  // 2. define the fromFile variable with the passed recipe name and list
  fromFile = "recipes.php?recipeName" + recipeName + "&recipeList=" + listName;
  console.log("From URL: " + fromFile);

  // 3. defines the GET/POST method, the source, and the async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // 4. provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

      document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

    } else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

      console.log("Error: " + this.responseText);

    }

  } // end ajax.onreadystatechange function

  // 5. let's go -- initiate request and process the responses
  ajax.send();

}

// new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsFilename, equipmentFilename, directionsFilename) {

  this.recipe = recipeName;
  this.contributor = contributorName;
  this.img = imageURL;
  
  this.displayRecipe = function() {

    document.querySelector("#musubiHeader").innerHTML = this.recipe;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#musubiHeader").style.backgroundImage = "url(" + this.img + ")";
    
    loadFileInto(this.recipe, "ingredients", "#ingredients ul");
    loadFileInto(this.recipe, "equipment", "#equipment ul");
    loadFileInto(this.recipe, "directions", "#directions ol");
  }

}

SpamMusubi = new Recipe("Spam Musubi", 
                        "Chelsea Toves", 
                        "https://www.favfamilyrecipes.com/wp-content/uploads/2020/06/Musubi-Process-Shot-4.jpg");



MacandCheese = new Recipe("Mac and Cheese", 
                          "Erikka Moore", 
                          "https://www.thechunkychef.com/wp-content/uploads/2018/02/Ultimate-Creamy-Baked-Mac-and-Cheese-serving.jpg");


CrumbedChicken = new Recipe ("Crumbed Chicken", "Maya Toleuova", 
                             "https://images.unsplash.com/photo-1562967914-608f82629710?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1746&q=80");


window.onload = function() {

  document.querySelector("#musubiHeader").classList.add("tp6");

  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe");
  }

  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("showMe");
  }

  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("showMe");
  }

  document.querySelector("#musubiHeader").onclick = function() {
    this.classList.toggle("tp6");
  }

document.querySelector("#footer").innerHTML += "<p>This was not my own recipe.</p>";

document.querySelector("#r1").onclick = function() {
  SpamMusubi.displayRecipe();
}

document.querySelector("#r2").onclick = function() {
  MacandCheese.displayRecipe();
}

document.querySelector("#r3").onclick = function() {
  CrumbedChicken.displayRecipe();
  
}
} // end of window.onload