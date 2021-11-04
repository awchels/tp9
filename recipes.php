<?

/* recipe loader for TP9 */

$name = $_GET["recipeName"];

$list = $_GET["recipeList"];

if ($name == "Spam Musubi") {
  
  if ($list == "ingredients") {
    include "ingredients.html";
    
  } elseif ($list == "equipment") {
    include "equipment.html";
  
  } elseif ($list == "directions") {
    include "directions.html";
    
  } else {
    echo "1";
    
  }
  
  
} elseif ($name == "Mac and Cheese") {
  
  if ($list == "ingredients") {
    include "ingredients2.html";
    
  } elseif ($list == "equipment") {
    include "equipment2.html";
  
  } elseif ($list == "directions") {
    include "directions2.html";
  
}
  
  
} elseif ($name == "Crumbed Chicken") {
  
   if ($list == "ingredients") {
    include "ingredients3.html";
    
  } elseif ($list == "equipment") {
    include "equipment3.html";
  
  } elseif ($list == "directions") {
    include "directions3.html";
  
}
  
    
  
} else {
  
  echo "0";
}