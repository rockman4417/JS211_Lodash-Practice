// const _ = require('lodash');

// const ver = _.VERSION
// console.log(ver);    
let arrayOfStates = ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "American Samoa",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Guam",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  " North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Puerto Rico",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Virgin Islands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"]
let array = [1,2,3,4,5]
let object = {a:1, b:2, c:3}

console.log("array" + arrayOfStates)
console.log(_.isArray(arrayOfStates))

console.log(_.chunk(arrayOfStates, 2))

console.log(_.take(arrayOfStates, 2))

console.log(_.castArray("abcd"))
console.log(_.invert(object))

console.log(_.shuffle(arrayOfStates))
console.log(_.reverse(arrayOfStates))
console.log(_.without(arrayOfStates, 1, 2))                   

const display = (id, func) => {
    const containerDiv = document.getElementById(id).parentElement
      const displayDiv = document.createElement('div')
      displayDiv.classList.add("display-div")
      const text = document.createTextNode(func)
      displayDiv.appendChild(text)
      containerDiv.append(displayDiv)
}

const displayArray = (id, arr) => {
    const containerDiv = document.getElementById(id).parentElement
      const displayDiv = document.createElement('div')
      displayDiv.classList.add("display-div")
      const text = document.createTextNode(arr)
      displayDiv.appendChild(text)
      containerDiv.append(displayDiv)

}