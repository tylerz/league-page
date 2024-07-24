/*   STEP 1   */
export const leagueID = "1048314283152527360"; // your league ID
export const leagueName = "DUDES IN POOLS DYNASTY LEAGUE"; // your league name
export const dues = 50; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>DUDES IN POOLS DYNASTY -- EST. 2023</p>
  <hr width="100%;" color="white" size="4">
  <p>Yearly Winnings:<ul>
    <li>1st = $400.00</li>
    <li>2nd = $150.00</li>
    <li>3rd = $50.00</li>
	</ul>
  </p>
  <hr width="100%;" color="white" size="4">
  <p>HISTORICAL KEEPER/REDRAFT RECORDS:</p>
  <img src="/DIP_results.png"/>
  <hr width="100%;" color="white" size="4">
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Tyler",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Denver", // (optional)
      "bio": "As the 2024 season approaches, bringus ya dingus is poised to make a significant leap in the league standings. With a solid foundation already in place, including the acquisition of dynamic playmakers like Kyren Williams and Travis Etienne, this team is ready to compete at a high level. The wide receiver group looks particularly strong with Brandon Aiyuk, Malik Nabers, and Zay Flowers all ranking within the top 26, providing a balanced and explosive aerial attack. Furthermore, the future shines brightly for bringus ya dingus, thanks to their league-leading draft capital. With three first-round picks over the next two years, the potential for further improvement is immense. Last season's middle-of-the-pack finish with a winning percentage of 58% is set to be a stepping stone rather than a ceiling, as they effectively blend a young, ascending roster with strategic veteran acquisitions. With a moderate gain in dynasty value and the highest future draft capital, bringing the championship home seems more achievable than ever for bringus ya dingus.",
      "photo": "/managers/tyler.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2007, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Brandon", // Can be anything (usually your rival's name)
        link: 12, // manager array number within this array, or null to link back to all managers page
        image: "/managers/brandon.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 8676, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "diversify",
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "A.J.",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Cleveland", // (optional)
      "bio": "As the 2024 dynasty fantasy football season looms, Team A.J. finds itself in a precarious position despite its moderately successful 17-9 record from last year. Unfortunately, that success seems more like a distant memory as they head into the new season ranked dead last in both redraft and dynasty value. The team's glaring weaknesses begin at the quarterback position, with Geno Smith, Will Levis, and Justin Fields forming the worst projected QB group in the league. Their running back situation is equally dire, headlined by Zamir White and Ty Chandler, the latter of whom is an unreliable starter. Even their tight ends leave much to be desired. Despite acquiring Garrett Wilson and Nico Collins in a couple of blockbuster trades, the decision to part ways with key assets like Tyreek Hill, Diontae Johnson, and Travis Kelce has left the team devoid of depth. At an average age of 26.7 per starter, Team A.J. should be in a prime position to contend, but they are far from it. With three first-round draft picks over the next two years and a recent selection of Michael Penix Jr., there's a glimmer of hope for the future. However, with a roster that's more fragile than formidable and crucial positions significantly underperforming, Team A.J. is in for a tumultuous 2024 season.",
      "photo": "/managers/aj.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2007, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Tom", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/tom.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 8146, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Joe",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Cleveland", // (optional)
      "bio": "As Squirtle Squad heads into the 2024 season, expectations are sky-high, but there's a lingering sense of dread that this might be their last hurrah for a while. With Lamar Jackson and Brock Purdy leading the charge at quarterback and Travis Kelce still dominating at tight end, the team undoubtedly looks formidable on paper, especially after a moderately successful 18-8 record last year. However, the glaring issue isn't the present performance; it's the future. Ranked dead last in future draft capital, the team has essentially sacrificed tomorrow for today, leaving their cupboard bare for any meaningful picks over the next two years. While acquiring Isiah Pacheco to bolster the running back corps seemed like a shrewd move, it came at the expense of future flexibility, trading away Najee Harris. The squad's immediate success could easily mask the looming long-term struggles, setting them up for a steep decline once the current stars fade or get injured. With Keenan Allen as their weakest projected starter—an enviable position for most teams—the Squirtle Squad is built to win now. But unless they pull off a miracle to replenish their future assets, their dynasty value will continue its nosedive, turning this season into a bittersweet, short-lived high.",
      "photo": "/managers/joe.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2007, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jake", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/jake.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "hates draft picks",
      "tradingScale": 9, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Jake",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Cleveland", // (optional)
      "bio": "QuarterbackClub heads into the 2024 season with a mix of optimism and tempered expectations. The team finished with a disappointing 23% win rate last year, but significant offseason moves have altered their trajectory. By drafting Caleb Williams and Marvin Harrison Jr. with their top picks, QuarterbackClub has bolstered its young core, adding to an already strong wide receiver lineup featuring Jaylen Waddle, Deebo Samuel, and Christian Kirk. Blockbuster trades saw the team acquire key players like Jaylen Waddle and Jahmyr Gibbs, along with the coveted 1.01 rookie draft pick for 2024, at the cost of parting ways with Garrett Wilson and Mark Andrews. With a solid duo in the backfield in Jahmyr Gibbs and Tyjae Spears, and an enviable stockpile of future draft capital, QuarterbackClub is well-positioned for long-term success. Despite currently ranking 8th in redraft value, their 4th-place dynasty value suggests this youthful squad is on the cusp of greatness, poised to make a significant leap as their talent matures.",
      "photo": "/managers/jake.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2007, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Joe", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/joe.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11560, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 9, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Corey",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Cleveland", // (optional)
      "bio": "Cpapcun's dynasty team is poised for an exhilarating 2024 season. With a solid core and a highly competitive roster, they are ready to improve upon a middling finish from last year. The team boasts one of the league's strongest redraft rosters, ranking second overall. The dynamic running back duo of Christian McCaffrey and Breece Hall will be the driving force behind their success, supported by Ezekiel Elliott as a seasoned contributor. On the wide receiver front, CeeDee Lamb leads the charge, flanked by Tee Higgins and Chris Godwin, who, despite being the weakest projected starter, still promises consistent production. The recent draft additions of Jayden Daniels and Keon Coleman add exciting new dimensions to the team's depth. Although their future draft capital ranks lower, the current roster's strength more than compensates, setting the stage for a promising campaign. With an average starter age of just 25.8 years, this team is not only built for immediate impact but also has a bright future ahead. Expect cpapcun to make a significant leap this season and challenge for the top spots in the standings.",
      "photo": "/managers/corey.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2007, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Cory", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/cory.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4033, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "has never traded",
      "tradingScale": 1, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Cory",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Akron", // (optional)
      "bio": "As CHarbin1 gears up for the 2024 season, there's a palpable sense of optimism in the air. Fresh off a championship campaign, the team faces the challenging task of defending their title, but their balanced roster promises competitive play. Anchored by a star-studded quarterback lineup featuring Josh Allen and Jordan Love, CHarbin1 has a solid foundation to build on. The running backs, led by Saquon Barkley and Rachaad White, provide a potent combination of power and versatility that few teams can match. While the wide receiver corps may appear the weakest link with Chris Olave and DK Metcalf leading the charge, the potential of Xavier Worthy and Mike Williams offers exciting upside. The recent additions through the draft, including Worthy and Jordan Travis, inject fresh talent into the mix, ensuring the team's depth remains strong. With an impressive average age of 26.6 per starter, CHarbin1 is primed for immediate success. Although repeating the championship run will be difficult, the team's overall strength and strategic planning place them in an excellent position to compete fiercely throughout the season.",
      "photo": "/managers/cory.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2007, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Corey", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
        image: "/managers/corey.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 3, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Tom",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Tampa", // (optional)
      "bio": "The Rypien and The Tearin are poised for an exciting 2024 season, building on their solid performance last year with significant improvements that position them as a future powerhouse. Their running back unit is unparalleled, featuring top-tier players like Bijan Robinson, Jonathan Taylor, and De'Von Achane, ensuring a dominant ground game. The receiving corps, led by Drake London and D.J. Moore, adds a potent aerial threat, making this team multi-dimensional and hard to defend against. Although their draft capital ranks lower, the strategic addition of promising rookies like Drake Maye and Brock Bowers highlights their commitment to sustained success. At an average age of just 23.9 years per starter, The Rypien and The Tearin boast the youngest lineup, setting the stage for a dynamic and competitive season ahead. With their blend of established stars and emerging talents, this team is not just ready to compete but to potentially dominate in the coming years.",
      "photo": "/managers/tom.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2007, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Corey", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
        image: "/managers/corey.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11604, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 3, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Marshall",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Detroit", // (optional)
      "bio": "The SoulGlodiers are gearing up for an exhilarating 2024 season, brimming with anticipation and promise. Coming off a solid performance last year with a winning percentage of 54%, the team is well-positioned for a leap forward. Bolstered by top-tier quarterback talents Jalen Hurts and Anthony Richardson, they possess a formidable aerial attack that’s bound to keep defenses on their heels. The wide receiver corps, featuring standout playmakers like Puka Nacua, Michael Pittman, and Cooper Kupp, ensures a dynamic and versatile passing game. Complementing this aerial prowess are running backs Josh Jacobs and Rhamondre Stevenson, who add balance with their consistent ground performance. The addition of promising rookies Xavier Legette and Ja'Tavion Sanders brings fresh energy and potential to the squad. With an average age of 26.2 per starter, the SoulGlodiers are in their prime, blending experience with youthful vigor. Ranked high in both redraft and dynasty projections, and with strong future draft capital, the team is poised not just for immediate success but sustained excellence. As they aim to ascend from the middle of the standings, the SoulGlodiers have all the components in place for a breakthrough season, ready to challenge the league's elite and make a deep run for the championship.",
      "photo": "/managers/marshall.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2007, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Tom", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/tom.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 9493, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 3, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Jeff W",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Cleveland", // (optional)
      "bio": "El Jefe is gearing up for an intriguing 2024 season, coming off a strong second-place finish last year despite a middling overall performance. The team sits in a competitive position, ranked 7th in redraft value and 8th in dynasty value, but faces challenges due to its lower rank in future draft capital. With a balanced roster averaging 26.6 years per starter, El Jefe is built to compete now, anchored by an elite receiving duo of Ja'Marr Chase and A.J. Brown, who are both top-10 talents. The addition of promising rookies Jonathon Brooks, Bo Nix, and Ja'Lynn Polk from this year's draft could provide some much-needed depth and potential breakout performances. However, the strength undeniably lies in their tight end position, led by Sam LaPorta, ranked as the current TE1. While not positioned as clear frontrunners this season, El Jefe’s mix of experienced starters and youthful prospects makes them a wildcard entry capable of shaking up the standings.",
      "photo": "/managers/jeffw.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2007, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jeff S", // Can be anything (usually your rival's name)
        link: 11, // manager array number within this array, or null to link back to all managers page
        image: "/managers/jeffs.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7564, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 3, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Mike",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Cleveland", // (optional)
      "bio": "As Peyton Nation gears up for the 2024 season, the outlook appears challenging despite a promising future. After a tough 2023 campaign with only a 35% win rate, the team struggles with a weak redraft roster, ranking near the bottom of the standings. Key players like Stefon Diggs, George Pickens, and Tank Dell form the core of the wide receiver lineup, but their mid-tier rankings underscore the team's uphill battle. The running back situation is particularly dire, with Gus Edwards, ranked 37th at his position, being a projected starter. Despite having an experienced roster averaging nearly 28 years old, which should typically signal readiness for a playoff push, Peyton Nation finds itself in a precarious position. However, the future looks bright with substantial draft capital, including high-profile rookies like Rome Odunze and Blake Corum. While immediate success might be elusive, strategic planning and leveraging future assets could eventually turn this team into a formidable contender.",
      "photo": "/managers/mike.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2007, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Corey", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
        image: "/managers/corey.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 8143, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 2, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Jeff S",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Cleveland", // (optional)
      "bio": "As the 2024 season kicks off, dicksindallas is poised for a thrilling comeback after a challenging 2023 campaign. With a rock-solid redraft roster ranking third overall and an even more promising dynasty value at number two, there's a lot to be excited about. This team boasts the top wide receiver lineup in the league, featuring Tyreek Hill, Mike Evans, and DeVonta Smith, who are set to light up the scoreboard. The tight end group, led by Trey McBride and George Kittle, is projected to be the best in the league, providing a consistent edge each week. Although the running back corps has its challenges with Najee Harris, Nick Chubb, and Brian Robinson needing to step up, the recent addition of Tua Tagovailoa at quarterback should catalyze a high-powered offense. With a strong draft selection, including Trey Benson and Ben Sinnott, and significant future draft capital, dicksindallas is well-prepared to make a lasting impact this season and beyond. The team’s strategic moves and balanced roster promise an exciting turnaround, making them a formidable contender in 2024.",
      "photo": "/managers/jeffs.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2007, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jeff W", // Can be anything (usually your rival's name)
        link: 9, // manager array number within this array, or null to link back to all managers page
        image: "/managers/jeffw.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4988, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 5, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Brandon",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Akron", // (optional)
      "bio": "The Btombombs are entering the 2024 fantasy football season with a clear vision for the future. While their 2023 record might not reflect their full potential, they've strategically positioned themselves for long-term success. Their current roster boasts a solid core of proven players, including the dynamic Amon-Ra St. Brown, who will undoubtedly be a key contributor to the team's offensive firepower. This year presents a valuable opportunity to integrate and develop promising young talent like J.J. McCarthy and Ladd McConkey, setting the stage for a formidable offense in the years to come. While the team may face some initial challenges, due to some aging players, the experience and leadership of the veteran players will prove invaluable as the Btombombs build towards championship contention. The front office has shown foresight by prioritizing draft capital and investing in young talent, a strategy that promises to pay dividends in the near future. With a blend of proven veterans and promising rookies, the Btombombs are poised to surprise many and make a strong push towards playoff contention in the 2024 season.",
      "photo": "/managers/brandon.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2007, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Corey", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
        image: "/managers/corey.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4046, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": 2, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.png", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
