//to create this array, I used the book information that I scraped from fsgoriginals.com/books and created objects with keys of title, pub, and au_key from the resulting strings

let booksData = [
  {
    title: "False Bingo",
    pub: 2019,
    au_name: "JAC JEMC", 
  },
  {
    title: "Tinfoil Butterfly",
    pub: 2019,
    au_name: "RACHEL EVE MOULTON", 
  },
  {
    title: "Tears of the Trufflepig",
    pub: 2019,
    au_name: "FERNANDO A. FLORES", 
  },
  {
    title: "Infinite Detail",
    pub: 2019,
    au_name: "TIM MAUGHAN", 
  },
  {
    title:  "Rag",
    pub: 2019,
    au_name: "MARYSE MEIJER", 
  },
  {
    title: "In Our Mad and Furious City", 
    pub: 2018,
    au_name: "GUY GUNARATNE", 
  },
  {
    title: "Hardly Children",
    pub: 2018,
    au_name: "LAURA ADAMCZYK", 
  },
  {
    title: "Destroy All Monsters",
    pub: 2018,
    au_name: "JEFF JACKSON", 
  },
  {
    title: "Impossible Owls",
    pub: 2018,
    au_name: "BRIAN PHILLIPS", 
  },
  {
    title: "The Bus on Thursday",
    pub: 2018, 
    au_name: "SHIRLEY BARRETT",
  },
  {
    title: "Nothing Good Can Come from This",
    pub: 2018,
    au_name: "KRISTI COULTER",
  },
  {
    title: "So Lucky",
    pub: 2018,
    au_name: "NICOLA GRIFFITH",
  },
  {
    title: "Acid West",
    pub: 2018,
    au_name: "JOSHUA WHEELER",
  },
  {
    title: "Things That Helped",
    pub: 2018,
    au_name: "JESSICA FRIEDMANN",
  },
  {
    title: "Camp Austen",
    pub: 2018,
    au_name: "TED SCHEINMAN",
  },
  {
    title: "The Strange Bird", 
    pub: 2018,
    au_name: "JEFF VANDERMEER",
  },
  {
    title: "Annihilation",
    pub: 2018,
    au_name: "JEFF VANDERMEER",
  },
  {
    title: "The Savage",
    pub: 2017, 
    au_name:"FRANK BILL",
  },
  {
    title: "Catalina",
    pub: 2017,
    au_name: "LISKA JACOBS",
  },
  {
    title: "Kung Fu High School",
    pub: 2017, 
    au_name: "RYAN GATTIS",
  },
  {
    title: "The Grip of It",
    pub: 2017,
    au_name: "JAC JEMC",
   },
  {
    title: "The Dark Dark",
    pub: 2017,
    au_name: "SAMANTHA HUNT",  
  },
  {
    title: "Dear Cyborgs",
    pub: 2017,
    au_name: "EUGENE LIM",
   },
  {
    title: "Yawn",
    pub: 2017,
    au_name: "MARY MANN",
  },
  {
    title: "Organ Grinder",
    pub: 2017,
    au_name: "ALAN FISHBONE",
  },  
  {
    title: "Too Much and Not the Mood",
    pub: 2017,
    au_name: "DURGA CHEW-BOSE",
  },  
  {
    title: "Romanian Notebook",
    pub: 2017,
    au_name: "CYRUS CONSOLE"
  },
  {
    title: "Normal",
    pub: 2016,
    au_name: "WARREN ELLIS",
  },
  {
    title: "The Tengu's Game of Go",
    pub: 2016,
    au_name: "LIAN HEARN",
  },
  {
    title: "Cannibals in Love", 
    pub: 2016,
    au_name: "MIKE ROBERTS",
  },
  {
    title: "Uproot",
    pub: 2016,
    au_name: "JACE CLAYTON",
  }, 
  { title: "The Selfishness of Others",
    pub: 2016,
    au_name: "KRISTIN DOMBEK"
  },
  {
    title: "Lord of the Darkwood",
    pub: 2016,
    au_name: "LIAN HEARN",
  },
  { 
    title: "Heartbreaker",
    pub: 2016, 
    au_name: "MARYSE MEIJER",
  },
  { 
    title: "You Are Having a Good Time",
    pub: 2016,
    au_name: "AMIE BARRODALE",
  },
  {
    title: "Will & I",
    pub: 2016,
    au_name: "CLAY BYARS",
  },
  {
    title: "Autumn Princess, Dragon Child",
    pub: 2016,
    au_name: "LIAN HEARN",
  },
  { 
    title: "The Hatred of Poetry", 
    pub: 2016, 
    au_name: "BEN LERNER",
  },
  { 
    title: "Emperor of the Eight Islands", 
    pub: 2016,
    au_name: "LIAN HEARN",
  },
  {
    title: "A Burglar's Guide to the City", 
    pub: 2016,
    au_name: "GEOFF MANAUGH",
  },
  {
    title: "Hurt People",
    pub: 2016,
    au_name: "COTE SMITH",
  }, 
  { 
    title: "Find Me",
    pub: 2016,
    au_name: "LAURA VAN DEN BERG",
  },
  { 
    title: "Iterating Grace", 
    pub: 2016,
    au_name: "KOONS CROOKS",
  },
  {
    title: "Ugly Girls",
    pub: 2015,
    au_name: "LINDSAY HUNTER",
  },
  {
    title: "The Pickle Index",
    pub: 2015,
    au_name: "ELI HOROWITZ",
  },
  {
    title: "Terra Firma Triptych",
    pub: 2015,
    au_name: "J. M. LEDGARD",
  },
  { 
    title: "Gutshot",
    pub: 2015,
    au_name: "AMELIA GRAY",
  },
  {
    title: "My Prisoner",
    pub: 2015,
    au_name: "ALEKSANDAR HEMON",
  },
  {
    title: "Spare Parts",
    pub: 2014,
    au_name: "JOSHUA DAVIS",
  },
  {
    title: "Area X",
    pub: 2014,
    au_name: "JEFF VANDERMEER",
  },
  {
    title: "Acceptance",
    pub: 2014,
    au_name: "JEFF VANDERMEER",
  },
  {
    title: "Nobody Is Ever Missing",
    pub: 2014,
    au_name: "CATHERINE LACEY",
  },
  {
    title: "The Matters of Life, Death, and More",
    pub: 2014,
    au_name: "ALEKSANDAR HEMON",
  },
  {
    title: "Authority",
    pub: 2014,
    au_name: "JEFF VANDERMEER",
  },
  {
    title: "Quesadillas",
    pub: 2014,
    au_name: "JUAN PABLO VILLALOBOS",
  },
  {
    title: "The Isle of Youth",
    pub: 2013,
    au_name: "LAURA VAN DEN BERG",
  },
  {
    title: "Dead Pig Collector",
    pub: 2013,
    au_name: "WARREN ELLIS",
  },
  {
    title: "Don't Kiss Me",
    pub: 2013,
    au_name: "LINDSAY HUNTER",
  },
  {
    title: "A Long Day at the End of the World",
    pub: 2013,
    au_name: "BRENT HENDRICKS",
  },
  {
    title: "Donnybrook",
    pub: 2013,
    au_name: "FRANK BILL",
  },
  {
    title: "Fellow Mortals",
    pub: 2013,
    au_name: "DENNIS MAHONEY",
  },
  {
    title: "Down the Rabbit Hole",
    pub: 2012,
    au_name: "JUAN PABLO VILLALOBOS",
  },
  {
    title: "People Who Eat Darkness", 
    pub: 2012, 
    au_name: "RICHARD LLOYD PARRY",
  },
  {
    title: "Suddenly, a Knock on the Door",
    pub: 2012,
    au_name: "ETGAR KERET",
  },
  {
    title: "Threats",
    pub: 2012,
    au_name: "AMELIA GRAY",
  },
  {
    title: "Pulphead",
    pub: 2011,
    au_name: "JOHN JEREMIAH SULLIVAN",
  },
  {
    title: "Crimes in Southern Indiana",
    pub: 2011,
    au_name: "FRANK BILL",
  },
]

module.exports = booksData;