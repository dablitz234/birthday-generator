var facts = [
  "Chelsea are the only team to be holders of the Europa League and the Champions League at the same time",
  "David has a small willy",
  "Nemanja Vidic is the only Premier League winner with a surname made entirely of Roman Numerals",
  "New Zealand were the only unbeaten team in the 2010 World Cup, despite not making it out the group stage",
  "Only one team have ever won the World Cup final playing in red. England.",
  "Dundee United have a 100% record against Barcelona. Played four, won four.",
  "Robert Earnshaw is the only player to have scored a hat-trick in all three divisions of the English Football League, the Premier League, the League Cup, FA Cup, and for his country at International level. Prolific.",
  "In 1941, Rapid Vienna won the German championship. In fact, that Bundesliga title means that Rapid Vienna have actually won more German titles than Bayer Leverkusen.",
  "Javier Mascherano's first game in senior football was for Argentina's national team, not for his club at the time, River Plate.",
  "Chelsea legend Gianfranco Zola is the only player to be sent off in a World Cup finals... on his birthday. The match occurred at the 1994 tournament. Well, at least the referee got him a card.",
  "In 2010/11, David and James were the most common first names in the Premier League. Coincidentally, this was the first Premier League season without David James. We still miss you, Big Dave.",
  "The 1968 European Championship semi-final was decided by a coin toss. Italy beat the Soviet Union on the toss and later won in the final. Madness.",
  "The highest attendance recorded at Old Trafford was 76,962 for an FA Cup semi-final between Wolverhampton Wanderers and Grimsby Town on 25 March 1939.",
  "While she was a director at Birmingham City Karren Brady sold her husband Paul Peschisolido to Stoke for £400k",
  "Ferenc Puskas, the greatest Hungarian footballer ever, played for Spain at the 1962 World Cup. He switched nationality, back when it was allowed. As did teammate Alfredo Di Stefano, from Argentina, to Colombia to Spain, the fickle so-and-so.",
  "There was no World Cup final in 1950. The format had a final four in a group, so while there was a deciding match between Uruguay and Brazil - which became the last time that Brazil would lose at home in competitive football until Germany whupped them 7-1 in 2014 - it wasn't really the World Cup final.",
  "Since 1982 at least one Bayern Munich player has played in every World Cup final.",
  "Hull City is the only team in the Football League with a name in which you can't colour in any of the letters.",
  "St Johnstone is the only team in Britain with a J in it.",
  "Cowdenbeath FC is the only team in the UK with the letters A, B, C, D and E contained in the name.",
  "The first World Cup hat trick and clean sheet were by Americans.",
  "Rio Mavuba was born at sea. The midfielder, most famously of Lille, was born on a boat in international waters and did not have a nationality. He received French citizenship in 2004 as he grew up there.",
  "In 2003 Franz Beckenbauer threatened the German league with moving Bayern Munich to Italy.",
  "Bringing celery to Stamford Bridge is outlawed and could get you a lifetime ban.",
  "AC and Inter Milan were one club who split due to a dispute.",
  "Owen Hargreaves is the only player to have played for England without having previously lived in the United Kingdom. Hargreaves represented Wales U19s, was brought up in Canada and was playing in Germany when the call-up came.",
  "Arsenal and Port Vale are the only two clubs in the country that don’t have the geographical location of the team in their name. Arsenal were originally named Woolwich Arsenal after the area in south London they were named after, shaking the ‘Woolwich’ moniker when they moved to the north of the city. Port Vale’s name is a reference to the valley of ports on the Trent and Mersey Canal; the club are based in Burslem, Stoke-on-Trent.",
  "Gareth Bale's first trophyless season after leaving Tottenham was the season he went back to Tottenham.",
  "Mark Hughes once played for Wales and Bayern Munich in the same day.",
  "David Beckham was born at Whipps Cross hospital.",
  "Norway have an unbeaten record against Brazil. Played four, won two, drawn two. Watch out, Neymar.",
  "In 1996, Eidur Gudjohnsen was subbed on for Arnor Gudjohnsen, making them the first (and still only) father and son to appear in the same international match.",
  "France went 20 years not winning a World Cup game on foreign soil.",
  "Goalkeeper Hans-Jorg Butt scored three Champions League goals - all penalties for different clubs against Juventus.",
  "Steve Finnan is the only player to have played in the World Cup, Champions League, UEFA Cup, and the top 5 levels of English football.",
  "Neither Manchester United nor Liverpool have ever beaten Gillingham in a competitive match. They’re the two most successful English clubs ever but they’ve never got one over the mighty Gills. Manchester City have though, thanks to George Weah.",
  "In the qualification process for the 1998 World Cup, Australia didn't lose a single match yet still failed to qualify.",
  "Mario Balotelli’s only Premier League assist ever was for Sergio Aguero's dramatic title-winning goal in 2011/12.",
  "Nottingham Forest are the only team that have been champions of Europe more times than champions of their own country.",
  "John Terry scored more Premier League goals for Chelsea than Andres Iniesta scored La Liga goals for Barcelona.",
  "Three England captains have played for Scunthorpe United. Kevin Keegan, Ray Clemence and… Sir Ian Botham.",
  "Queen's Park, a team from Glasgow, have played in two FA Cup finals.",
  "The first 50 Premier League goals scored by Bosnians all came from Edin Dzeko. The 51st came from Asmir Begovic.",
  "Alfredo Di Stefano was offered on loan to Manchester United, but the move was blocked by the FA. In the wake of the Munich Air Disaster, Di Stefano - the most exciting player in the world at that time - was all set to go to Manchester on a short-term loan, with Real Madrid’s grace.",
  "Dejan Stankovic has played for three different national teams at World Cups.",
  "AC Milan won the 1993/94 Serie A by only scoring 36 goals. For context, fellow black-and-red-striped side Bournemouth scored 40 when they were relegated to the Championship in 2019/20.",
  "Thomas Muller has never scored in the European Championship.",
];

function randomlist(list) {
  var x = Math.floor(Math.random() * list.length);
  return list[x];
}

function generateFacts() {
  var randomFact = randomlist(facts);
  document.getElementById("here").innerHTML = randomFact;
}
