//* OBJECTS
//* An object is a datatype that consists of key-value pairs.

/*

let name = {
    1.     2.

    key  :    value,
    3.   4.    5.
}

1. Name of the object, how it's identified
2. All of the data for an object is contained in curly braces.
3. This is the name of the specific data inside of the object.
4. The data name and value are separated by a colon.
5. The value of the data. Each key-value pair ends with a comma

*/

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place", 
    seasonInfo: {
      season1: {
        numberOfEpisodes: 5,
        episodeInfo : [
          { episode: 1, episodeName: "Pilot"},
          { episode: 2, episodeName: "Flying"},
          { episode: 3, episodeName: "Tahani Al-Jamil"},
          { episode: 4, episodeName: "Jason Mendoza"},
          { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis"}
        ]
      },
      season2: {
        numberOfEpisodes: 6,
        episodeInfo : [
          { episode: 1, 
            episodeName: "Everything is Great!"},
          { episode: 2, 
            episodeName: "Dance Dance Resolution"},
          { episode: 3, 
            episodeName: "Team Cockroach"},
          { episode: 4, 
            episodeName: "Existential Crisis"},
          { episode: 5,
             episodeName: "The Trolley Problem"},
          { episode: 6, 
            episodeName: "Janet and Michael"}
        ]
      },
      season3: {
        numberOfEpisodes: 5,
        episodeInfo : [
          { episode: 1, episodeName: "Everything Is Bonzer!"},
          { episode: 2, episodeName: "The Brainy Bunch"},
          { episode: 3, episodeName: "The Snowplow"},
          { episode: 4, episodeName: "Jeremy Bearimy"},
          { episode: 5, episodeName: "The Ballad of Donkey Doug"}
        ]
      }
    },
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
  };
  
  
//console.log(netflix);        //will console log entire object. if big: will condense
                             //objects use dot notation to grab specific data in an object
//console.log(netflix.name);   //objects use dot notation to grab specific data in an object
//console.log(netflix.seasonInfo.season1);   //keep chaining dot notation until getting far enough
//console.log(netflix.seasonInfo.season1.episodeInfo[0]);   //grabbing a keyvalue pair in an array

//console.log(netflix.seasonInfo.season3.episodeInfo[2].episodeName);

//* Challenge Loop through the Season 1 array. Object in an array in an object

//let season = netflix.seasonInfo.season1.episodeInfo
// for (e of season) {
//     console.log(e)                                //will loop through all episodes in first season
// }


//season.forEach(epiName => {console.log(epiName)})  //can also use a for Each

 // let season_2 = netflix.seasonInfo.season2.episodeInfo
// for (d of season_2) {
//     console.log(d)
// }

//*How to add an object to an object

netflix.seasonInfo.totalSeasons = 3;                    //assigning a value to the new object (if it                                                           was an array, would be .push)
console.log(netflix.seasonInfo);                        //should give you new key-value pair

//*Adding a new item to an array inside of an object

let newEpisode = netflix.seasonInfo.season2.episodeInfo.push({episode: 7, episodeName: "Derek"});
console.log(netflix.seasonInfo.season2);