//to create this array, I used the names that I scraped and ran the following code in a repl:

// const cleanedAuthors = authors.map(author => {
//   return { "name" : author.toUpperCase(), "bio": "tk"}
// })

//then I manually added the bios from the relevant author websites at fsgoriginals.com/authors

let authorsData = [ 
  { name: 'LAURA ADAMCZYK', bio: 'Laura Adamczyk’s fiction has won awards from the Union League Civic & Arts Foundation of Chicago and has appeared in Hobart, Chicago Reader, Pank, Salt Hill, Vol. 1 Brooklyn, Bellevue Literary Review, Necessary Fiction, and elsewhere.' },
  { name: 'CHRIS ADRIAN', bio: 'Chris Adrian is the author of Gob’s Grief, The Children’s Hospital, A Better Angel, and The Great Night.' },
  { name: 'SHIRLEY BARRETT', bio: 'Shirley Barrett is an award-winning filmmaker and writer.' },
  { name: 'AMIE BARRODALE', bio: 'Amie Barrodale’s stories and essays have appeared in The Paris Review, Harper’s Magazine, VICE, McSweeney’s, and other publications.' },
  { name: 'FRANK BILL', bio: 'Frank Bill is the author of the novel Donnybrook and the story collection Crimes in Southern Indiana.' },
  { name: 'CLAY BYARS', bio: 'Clay Byars attended The School of Letters at Sewanee, Tennessee, and is the assistant editor for Narrative Magazine. He lives with his two dogs on a farm outside Birmingham, Alabama.' },
  { name: 'DURGA CHEW-BOSE', bio: 'Durga Chew-Bose is a Montreal-born writer.' },
  { name: 'JACE CLAYTON', bio: 'Jace Clayton’s essays have appears in THE WASHINGTON POST, BIDOUN, and FRIEZE and THE FADER, where he is a regular contributor.' },
  { name: 'CYRUS CONSOLE', bio: 'Cyrus Console grew up in Topeka, Kansas, and received a doctorate in creative writing from Kansas University.' },
  { name: 'KRISTI COULTER', bio: 'Kristi Coulter holds an MFA in creative writing from the University of Michigan.' },
  { name: 'KOONS CROOKS', bio: 'We can only speculate at the anonymous origin of this little treasure.' },
  { name: 'JOSHUA DAVIS', bio: 'Joshua Davis is a contributing editor at Wired, cofounder of Epic magazine, and the author of The Underdog.' },
  { name: 'KRISTIN DOMBEK', bio: 'Kristin Dombek is an essayist and a cultural journalist.' },
  { name: 'WARREN ELLIS', bio: 'WARREN ELLIS is an author, graphic novelist, columnist, and speaker.' },
  { name: 'ALAN FISHBONE', bio: 'Alan Fishbone has an M.Phil. in Classics from Columbia University.' },
  { name: 'FERNANDO A. FLORES', bio: 'Fernando A. Flores was born in Reynosa, Tamaulipas, Mexico, and grew up in South Texas.' },
  { name: 'JESSICA FRIEDMANN', bio: 'Jessica Friedmann is a writer and editor living in Canberra, Australia, with her husband and small son.' },
  { name: 'RYAN GATTIS', bio: 'Ryan Gattis is the author of Kung Fu High School and All Involved, a novel about the 1992 L.A. riots. He lives in Los Angeles.' },
  { name: 'AMELIA GRAY', bio: 'Amelia Gray is the author of several books, including AM/PM, Museum of the Weird, THREATS, and Gutshot.' },
  { name: 'NICOLA GRIFFITH', bio: 'Nicola Griffith is the award-winning author of several novels, including Hild, and a memoir.' },
  { name: 'GUY GUNARATNE', bio: 'Guy Gunaratne was born in London in 1984. His debut novel In Our Mad and Furious City was long-listed for the 2018 Man Booker Prize and short-listed for the 2018 Gordon Burn Prize.' },
  { name: 'LIAN HEARN', bio: 'Lian Hearn is the pseudonym of a writer--born in England, educated at Oxford, currently living in Australia.' },
  { name: 'ALEKSANDAR HEMON', bio: 'Aleksandar Hemon is the author of The Lazarus Project, which was a finalist for the 2008 National Book Award and the National Book Critics Circle Award, and three books of short stories.' },
  { name: 'BRENT HENDRICKS', bio: 'Brent Hendricks is a graduate of the University of Virginia, Harvard Law School, and the MFA program at the University of Arizona.' },
  { name: 'SAMANTHA HUNT', bio: 'Samantha Hunt’s novel about Nikola Tesla, The Invention of Everything Else, was a finalist for the Orange Prize and winner of the Bard Fiction Prize.' },
  { name: 'LINDSAY HUNTER', bio: 'Lindsay Hunter is the author of the story collections Don’t Kiss Me and Daddy’s and the novels Ugly Girls  and  Eat Only When You’re Hungry.' },
  { name: 'JEFF JACKSON', bio: 'Jeff Jackson is the author of Mira Corpora, a finalist for the Los Angeles Times Book Prize.' },
  { name: 'LISKA JACOBS', bio: 'Liska Jacobs holds an MFA from the University of California, Riverside.' },
  { name: 'JAC JEMC', bio: 'Jac Jemc is the author of My Only Wife.' },
  { name: 'ETGAR KERET', bio: 'Etgar Keret was born in Tel Aviv in 1967.' },
  { name: 'CATHERINE LACEY', bio: 'Catherine Lacey is the author of Nobody Is Ever Missing, winner of a 2016 Whiting Award and finalist for the Young Lion’s Fiction Award, and The Answers.' },
  { name: 'J. M. LEDGARD', bio: 'J. M. Ledgard was born in the Shetland Islands.' },
  { name: 'BEN LERNER', bio: 'Ben Lerner was born in Topeka, Kansas, in 1979. He has received fellowships from the Fulbright, Guggenheim, Howard, and MacArthur Foundations.' },
  { name: 'EUGENE LIM', bio: 'Eugene Lim is the author of Fog & Car and The Strangers. His writing has appeared in Fence, the Denver Quarterly, Little Star, Dazed, The Brooklyn Rail, and elsewhere.' },
  { name: 'DENNIS MAHONEY', bio: 'Dennis Mahoney is the author of Fellow Mortals, a Booklist Top Ten Debut in 2013. He lives in upstate New York with his wife, son, and dog.' },
  { name: 'GEOFF MANAUGH', bio: 'Geoff Manaugh is the founder of BLDGBLOG, one of the most popular architecture sites on the Web.' },
  { name: 'MARY MANN', bio: 'Mary Mann is the author of Yawn: Adventures in Boredom. Her writing has also appeared in The New York Times, Smithsonian, The Believer and The Los Angeles Review of Books.' },
  { name: 'TIM MAUGHAN', bio: 'Tim Maughan is an author, a journalist, and a features writer.' },
  { name: 'MARYSE MEIJER', bio: 'Maryse Meijer is the author of Heartbreaker.' },
  { name: 'RACHEL EVE MOULTON', bio: 'Rachel Eve Moulton earned her BA at Antioch College and her MFA in fiction from Emerson College.' },
  { name: 'RICHARD LLOYD PARRY', bio: 'Richard Lloyd Parry is the Asia editor and Tokyo bureau chief of The Times (London) and the author of People Who Eat Darkness and In the Time of Madness.' },
  { name: 'BRIAN PHILLIPS', bio: 'Brian Phillips is a former staff writer for Grantland and a former senior writer for MTV News.' },
  { name: 'MIKE ROBERTS', bio: 'Mike Roberts is a writer from Buffalo, New York.' },
  { name: 'TED SCHEINMAN', bio: 'Ted Scheinman is a writer and scholar based in Southern California, where he works as a senior editor at Pacific Standard magazine.' },
  { name: 'COTE SMITH', bio: 'Cote Smith grew up in Leavenworth, Kansas, and various army bases around the country.' },
  { name: 'JOHN JEREMIAH SULLIVAN', bio: 'John Jeremiah Sullivan is a contributing writer for The New York Times Magazine and the southern editor of The Paris Review.' },
  { name: 'LAURA VAN DEN BERG', bio: 'Laura van den Berg is the author of two story collections, What the World Will Look Like When All the Water Leaves Us and The Isle of Youth, and the novel Find Me.' },
  { name: 'JEFF VANDERMEER', bio: 'Jeff VanderMeer is an award-winning novelist and editor.' },
  { name: 'JUAN PABLO VILLALOBOS', bio: 'Juan Pablo Villalobos was born in Guadalajara, Mexico, in 1973.' },
  { name: 'JOSHUA WHEELER', bio: 'Joshua Wheeler is from Alamogordo, New Mexico.' } 
]

module.exports = authorsData;