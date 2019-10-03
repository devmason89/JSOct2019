//* Object.keys() and Object.values()      talking about original instance and it's a method

//*Object.key() is a method that returns an array of a given object's own property names (filtering the key side)

//*Object.values() is a method that returns an array of a given object's own enumerable property values. (filtering the values side)

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      duck: {
          0: 'D',
          1: 'a',
          2: 'f',
      },
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

//   console.log(Object.keys(spaceJam.toonSquad))

//console.log(Object.keys(spaceJam.toonSquad.duck));           
//will give me the keys of the value Daffy Duck

//*Daisy Chaining
//console.log(Object.keys(spaceJam.toonSquad).toString());

//console.log(Object.values(spaceJam.monstars)); //can now use a forEach or for of to loop over it 

console.log(Object.values(spaceJam));
console.log(Object.keys(spaceJam));
