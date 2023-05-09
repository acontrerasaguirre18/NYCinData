// The reference to the section in our HTML

// API Key ID: 1kg4th51snpvdn8rg03cuqkug
// API Key Secret: 5xtz7yl9p43ahzu5f20ae3qjmd3atiic83qipuyq8g544j2hel
// let parentElement = document.getElementById('parent')
// let divCounter = 0;

// $.ajax({
// 	url: "https://data.cityofnewyork.us/resource/uip8-fykc.json",
// 	type: "GET",
// 	data: {
// 	  "$limit" : 5000,
// 	  "$$app_token": "KqeCXdROGdgFHuab9p12jBqb4"
// 	},
// 	success: function(data) {

// 	  //an object to store the count for each perp_race category
// 	  const perpRaceCount = {};
	  
// 	  // Loop through the data set and count the number of occurrences for each perp race category
// 	  data.forEach(record => {
// 		const perpRace = record.perp_race;

// 		if (perpRace in perpRaceCount) {
// 			perpRaceCount[perpRace]++;
// 		}else {
// 			perpRaceCount[perpRace] = 1;
// 		}

// 	  });

// 	parentElement.style.display = 'flex';
//     parentElement.style.flexDirection = 'row';

// 	  // Print the count for each perp_race category
// 	  for (const category in perpRaceCount) {
// 		console.log(`${category}: ${perpRaceCount[category]}`);
		
// 		let percentage = (perpRaceCount[category] / 5000) * 100
// 		console.log(percentage)
// 		let newDiv = document.createElement('div')
// 		newDiv.style.width = `${percentage * 50}px`
// 		newDiv.style.height = `${percentage * 10}px`

// 		newDiv.setAttribute('id',`div${divCounter}`);
// 		divCounter++;

// 		let h1Element = document.createElement('h1');
// 		h1Element.textContent = category;
// 		newDiv.appendChild(h1Element);

// 		newDiv.addEventListener('mouseenter', function() {
// 			h1Element.style.display = 'block';
// 		});

// 		newDiv.addEventListener('mouseleave', function() {
// 			h1Element.style.display = 'none';
// 		});

// 		parentElement.append(newDiv)
// 	  }
	  
// 	},


// 	error: function(xhr, textStatus, errorThrown) {
// 	  console.log(errorThrown);
// 	}

//   });








	// newDiv.setAttribute('id', `catDiv`);
		// parentElement.append(newDiv)

	// .done(function(data) {
	// 	for(let i =0; i < data.length; i++){
	// let newDiv = document.createElement('div')
	// 	newDiv.innerHTML = `<div> ${data[i].perp_race}</div>`
	// 	parentElement.append(newDiv)

	// 	}


//   $.ajax({
// 	url: "https://data.cityofnewyork.us/resource/uip8-fykc.json",
// 	type: "GET",
// 	data: {
// 	  "$limit" : 1000,
// 	  "$$app_token": "KqeCXdROGdgFHuab9p12jBqb4"
// 	},
// 	success: function(data) {
// 	  // Create an object to store the count for each perp_race category
// 	  const perpRaceCount = {};
	  
// 	  // Loop through the data set and count the number of occurrences for each perp_race category
// 	  data.forEach(record => {
// 		const perpRace = record.perp_race;
// 		if (perpRace in perpRaceCount) {
// 		  perpRaceCount[perpRace]++;
// 		} else {
// 		  perpRaceCount[perpRace] = 1;
// 		}
// 	  });
	  
// 	  // Create a div for each perp_race category, with size proportional to the count
// 	  for (const category in perpRaceCount) {
// 		const count = perpRaceCount[category];
// 		const div = document.createElement("div");
// 		div.textContent = `${category}: ${count}`;
// 		div.style.width = `${count}px`;
// 		div.style.height = `${count}px`;
// 		document.body.appendChild(div);
// 	  }
// 	},
// 	error: function(xhr, textStatus, errorThrown) {
// 	  console.log(errorThrown);
// 	}
//   });
  
  

// $.ajax({
// 		url: "https://data.cityofnewyork.us/resource/uip8-fykc.json",
// 		type: "GET",
// 		data: {
// 		  "$limit" : 1000,
// 		  "$$app_token": "KqeCXdROGdgFHuab9p12jBqb4"
// 		}
// 	})
	
//     .done(function(data) {
// 		for(let i =0; i < data.length; i++){

// 			let newDiv = document.createElement('div')
// 			newDiv.innerHTML = `<div> ${data[i].perp_race}</div>`
// 			parentElement.append(newDiv)
// 		}

// 	});


// let parentElement = document.getElementById('parent');
// let divCounter = 0;
// const totalCount = 5000;

// $.ajax({
//   url: "https://data.cityofnewyork.us/resource/uip8-fykc.json",
//   type: "GET",
//   data: {
//     "$limit": totalCount,
//     "$$app_token": "KqeCXdROGdgFHuab9p12jBqb4"
//   },
//   success: function (data) {

//     //an object to store the count for each perp_race category
//     const perpRaceCount = {};

//     // Loop through the data set and count the number of occurrences for each perp race category
//     data.forEach(record => {
//       const perpRace = record.perp_race;

//       if (perpRace in perpRaceCount) {
//         perpRaceCount[perpRace]++;
//       } else {
//         perpRaceCount[perpRace] = 1;
//       }

//     });

//     parentElement.style.display = 'flex';
//     parentElement.style.flexDirection = 'row';

//     // Print the count for each perp_race category
//     for (const category in perpRaceCount) {
//       console.log(`${category}: ${perpRaceCount[category]}`);

//       let percentage = (perpRaceCount[category] / totalCount) * 100;
//       console.log(percentage);

//       let newDiv = document.createElement('div');
//       newDiv.style.width = `${percentage * 50}px`;
//       newDiv.style.height = `${percentage * 10}px`;

//       newDiv.setAttribute('id', `div${divCounter}`);
//       divCounter++;

//       let h1Element = document.createElement('h1');
//       h1Element.textContent = category;
//       newDiv.appendChild(h1Element);

//       let pElement = document.createElement('p');
//       pElement.textContent = `${perpRaceCount[category]} (${percentage.toFixed(2)}%)`;
//       newDiv.appendChild(pElement);

//       parentElement.append(newDiv);
//     }

//   },


//   error: function (xhr, textStatus, errorThrown) {
//     console.log(errorThrown);
//   }

// });




// let parentElement = document.getElementById('parent');
// let divCounter = 0;
// const totalCount = 5000;

// $.ajax({
//   url: "https://data.cityofnewyork.us/resource/uip8-fykc.json",
//   type: "GET",
//   data: {
//     "$limit": totalCount,
//     "$$app_token": "KqeCXdROGdgFHuab9p12jBqb4"
//   },
//   success: function (data) {
//     const perpRaceCount = {};
//     let total = 0;

//     // Loop through the data set and count the number of occurrences for each perp race category
//     data.forEach(record => {
//       const perpRace = record.perp_race;

//       if (perpRace in perpRaceCount) {
//         perpRaceCount[perpRace]++;
//       } else {
//         perpRaceCount[perpRace] = 1;
//       }

//       total++;
//     });

//     // Calculate the percentage of the total count for each perp race category
//     for (const perpRace in perpRaceCount) {
//       perpRaceCount[perpRace] = {
//         count: perpRaceCount[perpRace],
//         percentage: ((perpRaceCount[perpRace] / total) * 100).toFixed(2) + '%'
//       };
//     }

//     // Generate a list of divs for each perpRace and add a hover effect that displays the selected perpRace's total value and percentage of the total count in a newly generated div
//     for (const perpRace in perpRaceCount) {
//       const div = document.createElement('div');
//       div.id = `div-${divCounter}`;
//       div.textContent = perpRace;
//       divCounter++;
//       div.addEventListener('mouseover', () => {
//         const hoverDiv = document.createElement('div');
//         hoverDiv.textContent = `Count: ${perpRaceCount[perpRace].count}, Percentage: ${perpRaceCount[perpRace].percentage}`;
//         document.body.appendChild(hoverDiv);
//       });
//       div.addEventListener('mouseout', () => {
//         const hoverDiv = document.querySelector('div:hover');
//         if (hoverDiv) {
//           hoverDiv.remove();
//         }
//       });
//       parentElement.appendChild(div);
//     }
//   },
//   error: function (jqXHR, textStatus, errorThrown) {
//     console.log('Error:', textStatus, errorThrown);
//   }
// });





// let parentElement = document.getElementById('parent');
// let divCounter = 0;
// const totalCount = 5000;

// $.ajax({
//   url: "https://data.cityofnewyork.us/resource/uip8-fykc.json",
//   type: "GET",
//   data: {
//     "$limit": totalCount,
//     "$$app_token": "KqeCXdROGdgFHuab9p12jBqb4"
//   },
//   success: function (data) {

//     //an object to store the count for each perp_race category
//     const perpRaceCount = {};

//     // Loop through the data set and count the number of occurrences for each perp race category
//     data.forEach(record => {
//       const perpRace = record.perp_race;

//       if (perpRace in perpRaceCount) {
//         perpRaceCount[perpRace]++;
//       } else {
//         perpRaceCount[perpRace] = 1;
//       }

//     });

//     parentElement.style.display = 'flex';
//     parentElement.style.flexDirection = 'row';

//     // Print the count for each perp_race category
//     for (const category in perpRaceCount) {
//       console.log(`${category}: ${perpRaceCount[category]}`);

//       let percentage = (perpRaceCount[category] / totalCount) * 100;
//       console.log(percentage);

//       let newDiv = document.createElement('div');
//       newDiv.style.width = `${percentage * 5}px`;
//       newDiv.style.height = `${percentage * 10}px`;
//       newDiv.style.transform = 'scale(1.3)'; // increase overall size by 30%

//       newDiv.setAttribute('id', `div${divCounter}`);
//       divCounter++;

//       let h1Element = document.createElement('h1');
//       h1Element.textContent = category;
//       h1Element.style.display = 'none'; // hide category name initially
//       newDiv.appendChild(h1Element);

//       let pElement = document.createElement('p');
//       pElement.textContent = `${perpRaceCount[category]} (${percentage.toFixed(2)}%)`;
//       pElement.style.display = 'none'; // hide numeric value initially
//       newDiv.appendChild(pElement);

//       // add hover effect to reveal category name and numeric values
//       newDiv.addEventListener('mouseover', () => {
//         h1Element.style.display = 'block';
//         pElement.style.display = 'block';
//       });
//       newDiv.addEventListener('mouseout', () => {
//         h1Element.style.display = 'none';
//         pElement.style.display = 'none';
//       });

//       parentElement.append(newDiv);
//     }

//   },


//   error: function (xhr, textStatus, errorThrown) {
//     console.log(errorThrown);
//   }

// });

// let parentElement = document.getElementById('parent');
// let divCounter = 0;
// const totalCount = 5000;

// $.ajax({
//   url: "https://data.cityofnewyork.us/resource/uip8-fykc.json",
//   type: "GET",
//   data: {
//     "$limit": totalCount,
//     "$$app_token": "KqeCXdROGdgFHuab9p12jBqb4"
//   },
//   success: function (data) {

//     //an object to store the count for each perp_race category
//     const perpRaceCount = {};

//     // Loop through the data set and count the number of occurrences for each perp race category
//     data.forEach(record => {
//       const perpRace = record.perp_race;

//       if (perpRace in perpRaceCount) {
//         perpRaceCount[perpRace]++;
//       } else {
//         perpRaceCount[perpRace] = 1;
//       }

//     });

//     parentElement.style.display = 'flex';
//     parentElement.style.flexDirection = 'row';
//     parentElement.style.flexWrap = 'wrap';
//     parentElement.style.height = '100vh';

//     let totalWidth = 0;
//     // Print the count for each perp_race category
//     for (const category in perpRaceCount) {
//       console.log(`${category}: ${perpRaceCount[category]}`);

//       let percentage = (perpRaceCount[category] / totalCount) * 100;
//       console.log(percentage);

//       let newDiv = document.createElement('div');
//       newDiv.style.width = `calc(${percentage}% - 1rem)`;
//       newDiv.style.height = `calc(${percentage}% - 1rem)`;
//       newDiv.style.margin = '0.5rem';

//       newDiv.setAttribute('id', `div${divCounter}`);
//       divCounter++;

//       let h1Element = document.createElement('h1');
//       h1Element.textContent = category;
//       h1Element.style.display = 'none'; // hide category name initially
//       newDiv.appendChild(h1Element);

//       let pElement = document.createElement('p');
//       pElement.textContent = `${perpRaceCount[category]} (${percentage.toFixed(2)}%)`;
//       pElement.style.display = 'none'; // hide numeric value initially
//       newDiv.appendChild(pElement);

//       // add hover effect to reveal category name and numeric values
//       newDiv.addEventListener('mouseover', () => {
//         h1Element.style.display = 'block';
//         pElement.style.display = 'block';
//       });
//       newDiv.addEventListener('mouseout', () => {
//         h1Element.style.display = 'none';
//         pElement.style.display = 'none';
//       });

//       parentElement.append(newDiv);

//       totalWidth += newDiv.offsetWidth;
//     }

//     // Set the width of each div to make them proportional to each other
//     parentElement.childNodes.forEach(div => {
//       div.style.width = `${(div.offsetWidth / totalWidth) * 100}%`;
//     });
//   },

//   error: function (xhr, textStatus, errorThrown) {
//     console.log(errorThrown);
//   }
// });

let parentElement = document.getElementById('parent');
let categoryInfo = document.createElement('div'); // new div to hold category information
categoryInfo.id = 'category-info';
parentElement.appendChild(categoryInfo);

let divCounter = 0;
const totalCount = 5000;

$.ajax({
  url: "https://data.cityofnewyork.us/resource/uip8-fykc.json",
  type: "GET",
  data: {
    "$limit": totalCount,
    "$$app_token": "KqeCXdROGdgFHuab9p12jBqb4"
  },
  success: function (data) {

    //an object to store the count for each perp_race category
    const perpRaceCount = {};

    // Loop through the data set and count the number of occurrences for each perp race category
    data.forEach(record => {
      const perpRace = record.perp_race;

      if (perpRace in perpRaceCount) {
        perpRaceCount[perpRace]++;
      } else {
        perpRaceCount[perpRace] = 1;
      }

    });

    parentElement.style.display = 'flex';
    parentElement.style.flexDirection = 'row';

    // Print the count for each perp_race category
    for (const category in perpRaceCount) {
      console.log(`${category}: ${perpRaceCount[category]}`);

      let percentage = (perpRaceCount[category] / totalCount) * 100;
      console.log(percentage);

      let newDiv = document.createElement('div');
      newDiv.style.width = `${percentage * 5}px`;
      newDiv.style.height = `${percentage * 10}px`;
      newDiv.style.transform = 'scale(1.3)'; // increase overall size by 30%
      newDiv.style.position = 'relative'; // add relative positioning for child elements

      newDiv.setAttribute('id', `div${divCounter}`);
      divCounter++;

      let h1Element = document.createElement('h1');
      h1Element.textContent = category;
      h1Element.style.display = 'none'; // hide category name initially
      newDiv.appendChild(h1Element);

      let pElement = document.createElement('p');
    
      pElement.style.display = 'none'; // hide numeric value initially
      newDiv.appendChild(pElement);

      // add hover effect to reveal category name and numeric values
      newDiv.addEventListener('mouseover', () => {
        h1Element.style.display = 'block';
        pElement.style.display = 'block';
         // update category information
        categoryInfo.style.display = 'block'; // show category information
      });
      newDiv.addEventListener('mouseout', () => {
        h1Element.style.display = 'none';
        pElement.style.display = 'none';
		categoryInfo.textContent = `${category}: ${perpRaceCount[category]} (${percentage.toFixed(2)}%)`;
        // categoryInfo.style.display = 'none'; // hide category information
      });

      parentElement.append(newDiv);
    }

  },


  error: function (xhr, textStatus, errorThrown) {
    console.log(errorThrown);
  }

});



