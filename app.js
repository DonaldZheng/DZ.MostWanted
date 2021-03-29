"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits//Criteria 
      searchResults = searchByCriteria(people);
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  if (searchResults)
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson[0];
}

function searchByCriteria(){
    let criteria = promptFor("What Criteria are you searching for?: gender, eyecolor, height, weight, occupation")

   switch (criteria){
        case "gender":
            criteriaFound = searchByGender(people);
            displayPeople(criteriaFound);
            break;
        case "eyecolor":
            criteriaFound = searchByEyeColor(people);
            displayPeople(criteriaFound);
            break;
        case "height":
            criteriaFound = searchByHeight(people);
            displayPeople(criteriaFound);
            break;
        case "weight":
            criteriaFound = searchByWeight(people);
            displayPeople(criteriaFound);
            break;
        case "occupation":
            criteriaFound =searchByOccupation(people);
            displayPeople(criteriaFound);
            break;
        case "restart":
        app(people); // restart
        break;
        case "quit":
        return; // stop execution
        default:
        return mainMenu(person, people); // ask again
    }
 }

//search by gender
function searchByGender(people){
    let gender = promptFor("Please enter male or female: ", chars).toLowerCase;
    let foundPerson = people.filter(person => {
        if(person.gender === gender){
            return true;
    } else {
        return false;
    }
})
return foundPerson[0];
}

function searchByEyeColor(people){
    let eyeColor = promptFor("Please enter hazel, brown black, blue, green for eyecolor: ", chars).toLowerCase;
    let foundPerson = people.filter( person => {
        if (person.eyeColor === eyeColor){
            return true;
        } else {
            return false;
        }
    })
    return foundPerson[0];
}

function searchByHeight(){ // get function to work 
    let height = promptFor ("Please enter the height of the individual you are looking for: ", chars).toLowerCase;
    let foundPerson = people.filter( person => {
        if (person.height === height){
            return true;
        } else {
            return false;
        }
    })
    return foundPerson[0];
}

function searchByWeight(){ // get function to work
    let weight = promptFor ("Please enter the weight of the individual you are looking for: ",chars).toLowerCase
    let foundPerson = people.filter( person => {
        if (person.weight === weight){
            return true;  
        } else {
            return false;
        }
    })
    return foundPerson[0];
}

function searchByOccupation(){
    let occupation = promptFor ("Please enter the individual occupation you are looking for: ", chars).toLowerCase
    let foundPerson = people.filter ( person => { 
        if (person.occupation === occupation){
            return true;
        }else{
            return false;
        }
    })
    return foundPerson[0];
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Height: " + person.height + "/n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
