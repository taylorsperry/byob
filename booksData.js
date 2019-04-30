const books = [
  {
    title: "False Bingo",
    pub: 2019,
    au_key: "JAC JEMC", 
  },
  {
    title: "Tinfoil Butterfly",
    pub: 2019,
    au_key: "RACHEL EVE MOULTON", 
  },
  {
    title: "Tears of the Trufflepig",
    pub: 2019,
    au_key: "FERNANDO A. FLORES", 
  },
  {
    title: "Infinite Detail",
    pub: 2019,
    au_key: "TIM MAUGHAN", 
  },
  {
    title:  "Rag",
    pub: 2019,
    au_key: "MARYSE MEIJER", 
  },
  {
    title: "In Our Mad and Furious City", 
    pub: 2018,
    au_key: "GUY GUNARATNE", 
  },
  {
    title: "Hardly Children",
    pub: 2018,
    au_key: "LAURA ADAMCZYK", 
  },
  {
    title: "Destroy All Monsters",
    pub: 2018,
    au_key: "JEFF JACKSON", 
  },
  {
    title: "Impossible Owls",
    pub: 2018,
    au_key: "BRIAN PHILLIPS", 
  },
  {
    title: "The Bus on Thursday",
    pub: 2018, 
    au_key: "SHIRLEY BARRETT",
  },
  {
    title: "Nothing Good Can Come from This",
    pub: 2018,
    au_key: "KRISTI COULTER",
  },
  {
    title: "So Lucky",
    pub: 2018,
    au_key: "NICOLA GRIFFITH",
  },
  {
    title: "Acid West",
    pub: 2018,
    au_key: "JOSHUA WHEELER",
  },
  {
    title: "Things That Helped",
    pub: 2018,
    au_key: "JESSICA FRIEDMANN",
  },
  {
    title: "Camp Austen",
    pub: 2018,
    au_key: "TED SCHEINMAN",
  },
  {
    title: "The Strange Bird", 
    pub: 2018,
    au_key: "JEFF VANDERMEER",
  },
  {
    title: "Annihilation",
    pub: 2018,
    au_key: "JEFF VANDERMEER",
  },
  {
    title: "The Savage",
    pub: 2017, 
    au_key:"FRANK BILL",
  },
  {
    title: "Catalina",
    pub: 2017,
    au_key: "LISKA JACOBS",
  },
  {
    title: "Kung Fu High School",
    pub: 2017, 
    au_key: "RYAN GATTIS",
  },
  {
    title: "The Grip of It",
    pub: 2017,
    au_key: "JAC JEMC",
   },
  {
    title: "The Dark Dark",
    pub: 2017,
    au_key: "SAMANTHA HUNT",  
  },
  {
    title: "Dear Cyborgs",
    pub: 2017,
    au_key: "EUGENE LIM",
   },
  {
    title: "Yawn",
    pub: 2017,
    au_key: "MARY MANN",
  },
  {
    title: "Organ Grinder",
    pub: 2017,
    au_key: "ALAN FISHBONE",
  },  
  {
    title: "Too Much and Not the Mood",
    pub: 2017,
    au_key: "DURGA CHEW-BOSE",
  },  
  {
    title: "Romanian Notebook",
    pub: 2017,
    au_key: "CYRUS CONSOLE"
  },
  {
    title: "Normal",
    pub: 2016,
    au_key: "WARREN ELLIS",
  },
  {
    title: "The Tengu's Game of Go",
    pub: 2016,
    au_key: "LIAN HEARN",
  },
  {
    title: "Cannibals in Love", 
    pub: 2016,
    au_key: "MIKE ROBERTS",
  },
  {
    title: "Uproot",
    pub: 2016,
    au_key: "JACE CLAYTON",
  }, 
  { title: "The Selfishness of Others",
    pub: 2016,
    au_key: "KRISTIN DOMBEK"
  },
  {
    title: "Lord of the Darkwood",
    pub: 2016,
    au_key: "LIAN HEARN",
  },
  { 
    title: "Heartbreaker",
    pub: 2016, 
    au_key: "MARYSE MEIJER",
  },
  { 
    title: "You Are Having a Good Time",
    pub: 2016,
    au_key: "AMIE BARRODALE",
  },
  {
    title: "Will & I",
    pub: 2016,
    au_key: "CLAY BYARS",
  },
  {
    title: "Autumn Princess, Dragon Child",
    pub: 2016,
    au_key: "LIAN HEARN",
  },
  { 
    title: "The Hatred of Poetry", 
    pub: 2016, 
    au_key: "BEN LERNER",
  },
  { 
    title: "Emperor of the Eight Islands", 
    pub: 2016,
    au_key: "LIAN HEARN",
  },
  {
    title: "A Burglar's Guide to the City", 
    pub: 2016,
    au_key: "GEOFF MANAUGH",
  },
  {
    title: "Hurt People",
    pub: 2016,
    au_key: "COTE SMITH",
  }, 
  { 
    title: "Find Me",
    pub: 2016,
    au_key: "LAURA VAN DEN BERG",
  },
  { 
    title: "Iterating Grace", 
    pub: 2016,
    au_key: "KOONS CROOKS",
  },
  {
    title: "Ugly Girls",
    pub: 2015,
    au_key: "LINDSAY HUNTER",
  },
  {
    title: "The Pickle Index",
    pub: 2015,
    au_key: "ELI HOROWITZ",
  },
  {
    title: "Terra Firma Triptych",
    pub: 2015,
    au_key: "J. M. LEDGARD",
  },
  { 
    title: "Gutshot",
    pub: 2015,
    au_key: "AMELIA GRAY",
  },
  {
    title: "My Prisoner",
    pub: 2015,
    au_key: "ALEKSANDAR HEMON",
  },
  {
    title: "Spare Parts",
    pub: 2014,
    au_key: "JOSHUA DAVIS",
  },
  {
    title: "Area X",
    pub: 2014,
    au_key: "JEFF VANDERMEER",
  },
  {
    title: "Acceptance",
    pub: 2014,
    au_key: "JEFF VANDERMEER",
  },
  {
    title: "Nobody Is Ever Missing",
    pub: 2014,
    au_key: "CATHERINE LACEY",
  },
  {
    title: "The Matters of Life, Death, and More",
    pub: 2014,
    au_key: "ALEKSANDAR HEMON",
  },
  {
    title: "Authority",
    pub: 2014,
    au_key: "JEFF VANDERMEER",
  },
  {
    title: "Quesadillas",
    pub: 2014,
    au_key: "JUAN PABLO VILLALOBOS",
  },
  {
    title: "The Isle of Youth",
    pub: 2013,
    au_key: "LAURA VAN DEN BERG",
  },
  {
    title: "Dead Pig Collector",
    pub: 2013,
    au_key: "WARREN ELLIS",
  },
  {
    title: "Don't Kiss Me",
    pub: 2013,
    au_key: "LINDSAY HUNTER",
  },
  {
    title: "A Long Day at the End of the World",
    pub: 2013,
    au_key: "BRENT HENDRICKS",
  },
  {
    title: "Donnybrook",
    pub: 2013,
    au_key: "FRANK BILL",
  },
  {
    title: "Fellow Mortals",
    pub: 2013,
    au_key: "DENNIS MAHONEY",
  },
  {
    title: "Down the Rabbit Hole",
    pub: 2012,
    au_key: "JUAN PABLO VILLALOBOS",
  },
  {
    title: "People Who Eat Darkness", 
    pub: 2012, 
    au_key: "RICHARD LLOYD PARRY",
  },
  {
    title: "Suddenly, a Knock on the Door",
    pub: 2012,
    au_key: "ETGAR KERET",
  },
  {
    title: "Threats",
    pub: 2012,
    au_key: "AMELIA GRAY",
  },
  {
    title: "Pulphead",
    pub: 2011,
    au_key: "JOHN JEREMIAH SULLIVAN",
  },
  {
    title: "Crimes in Southern Indiana',
    pub: 2011,
    au_key: "FRANK BILL",
  },
]