console.log("Loading javascript.js");
console.log("Importing vocabulary data...");
const VOCAB_DATA = {
  "adjectives": {
    "adjectivePDFList":
      [
        "abrupt","acidic","adorable","adventurous","agitated","alert","aloof","amiable","amused","annoyed","antsy","anxious","appalling","appetizing","arrogant","ashamed","astonishing","attractive","average","biting","bitter","bland","bored","brave","bright","broad","bulky","burly","charming","cheeky","cheerful","chubby","clean","clear","colorful","colossal","comfortable","confused","convincing","convoluted","cooperative","costly","courageous","crooked","curved","dangerous","decayed","deep","defeated","defiant","delicious","delightful","despicable","determined","dilapidated","distinct","dizzy","drab","drained","dull","eager","ecstatic","elated","elegant","emaciated","enchanting","encouraging","energetic","enormous","enthusiastic","excited","exhilarated","extensive","exuberant","fancy","fantastic","fierce","fluttering","foolish","frantic","fresh","friendly","frightened","frothy","frustrating","funny","gaudy","gentle","ghastly","gigantic","glamorous","gleaming","glorious","graceful","gritty","grotesque","grubby","grumpy","handsome","happy","harebrained","helpful","helpless","high","hollow","homely","horrific","huge","hungry","hurt","icy","ideal","immense","intrigued","irate","irritable","itchy","jealous","joyous","flat","floppy","fluttering","foolish","frantic","fresh","friendly","frightened","frothy","frustrating","funny","fuzzy","gaudy","gentle","ghastly","giddy","gigantic","glamorous","gleaming","glorious","gorgeous","graceful","greasy","grieving","gritty","grotesque","grubby","grumpy","handsome","happy","harebrained","healthy","helpful","helpless","high","hollow","huge","hungry","hurt","icy","ideal","immense","impressionable","intrigued","itchy","jealous","jittery","joyous","juicy","jumpy","kind","large","little","lively","livid","loose","lovely","lucky","ludicrous","macho","magnificent","mammoth","maniacal","massive","melancholy","melted","miniature","minute","mistaken","misty","moody","motionless","muddy","mysterious","narrow","nervous","nonchalant","nonsensical","nutritious","oblivious","odd","outrageous","panicky","perfect","perplexed","petite","petty","plain","pleasant","poised","pompous","precious","prickly","proud","pungent","puny","quaint","quizzical","reassured","relieved","repulsive","responsive","ripe","robust","rotten","rotund","rough","round","salty","sarcastic","scary","scattered","scrawny","selfish","shaggy","shaky","shallow","sharp","shiny","short","silky","silly","skinny","slimy","slippery","small","smarmy","smoggy","smooth","smug","soggy","solid","sore","sour","sparkling","spicy","splendid","spotless","square","stale","steady","steep","responsive","sticky","stormy","stout","straight","strange","strong","stunning","substantial","successful","succulent","superficial","superior","swanky","sweet","tart","tasty","teeny","tender","tense","terrible","testy","thankful","thick","thoughtful","thoughtless","tight","timely","tricky","trite","troubled","uneven","unsightly","upset","uptight","vast","vexed","victorious","virtuous","vivacious","vivid","wacky","weary","whimsical","whopping","wicked","witty","wobbly","wonderful","worried","yummy","zany","zealous","zippy"
    ],
    "adverbs": // adverbs
      [
      "chilling", "chillin", "cruising", "cruisin", "talking", "thinking", "building","standing","flying","falling","annoying","challenging","hoping","f-ing","breaking",
      "enchanting","fascinating","surprising", "extremely","entirely","barely","completely","fast","slowly","eagerly","accidentally","rarely","towards","outside","nearby","sometimes","always","normally","fast"
    ],
    "age":
      [
        "Old","New","Young","Child","Aged","Elderly","Senior","Long-lived","Ancient","Mature","Older","Antique","Aging"
    ],
    "colors": // colors
      [
      "blue", "red", "purple", "yellow", "pink", "green", "orange", "violet", "black", "white"
    ],
    "citationMachinePositive":
      [
        "Dazzling","Excellent","Expressive","Flashy","Forgiving","Glamorous","Heroic","Legit","Optimistic","Peaceful","Perfect","Stunning","Wonderful","Accurate","Achieving","Adaptable","Amazing","Awesome","Careful","Calm","Capable","Certain","Charming","Cheerful","Cherished","Civil","Clean","Clever","Cooperative","Creative","Natural","Neat","New","Nifty","Nice","Notable","Novel","Talented","Thrilled","Thriving","Timeless","Tasteful","Toned","Tremendous","Treasured","Triumphant","Trusted","Grumpy","Selfish","Boring","interesting","chunky"
      ],
    "descriptiveAdjectives": // yourdictionary grammar website descriptive adjectives
    [
        "ancient","average","bad","beautiful","beige","better","big","bitter","black","blue","brown","careful","clear","cold","cool","crystal","dusty","excited","fancy","fresh","giant","good","graceful","green","handsome","happy","harsh","huge","hungry","large","light","low","massive","new","noisy","oak","octagonal","old","orange","oval","pink","puny","purple","red","rich","round","sane","scared","shiny","short","skinny","small","solid","strong","tiny","tremendous","triangular","unusual","white","wild","wooden","woolen","fake","yellow","young"
      ],
    "other": // own or other grabbed
      [
       "boring", "friendly", "decent", "great", "small", "big", "huge", "humongous", "tiny", "easy", "creative", "wild", "terrestrial", "happy", "funny", "totally", "legit", "amazing", "dank", "sick", "epic", "straight","rapidly","aesthetic","a e s t h e t i c", "fresh","cool","cheeky","cold","warm","square","straight","round","hexagonal","cubic","triangular","outworldly","alien","marine","hostile","aquatic","volcanic","extraterrestial","ancient","earthy","cave","obscure","oriental","professional","splendid","supersonic","frosty","icecold","tasty","spicy","sour","expert","skilled","the","sunny","rainy","cloudy","expired"
    ],
    "slang": // epic teenage slang words man there don't fit many
      [
      "dope", "lit", "fire", "chill", "fleek", "chill", "lol", "maymay"
    ],
    "wiktionaryOrderedEnglishAdj": // wiktionary ordered english someAdjectives
      [
      "able","acid","automatic","beautiful","boiling","bright","broken","brown","cheap","chemical","chief","clean","clear","common","complex","conscious","cut","deep","dependent","early","elastic","electric","equal","fat","fertile","first","fixed","flat","free","frequent","full","general","good","great","gray","hanging","happy","hard","healthy","high","hollow","important","kind","like","long","male","married","material","medical","military","natural","necessary","new","normal","open","parallel","past","physical","political","poor","possible","present","private","probable","quick","quiet","ready","red","regular","responsible","right","round","same","second","separate","serious","sharp","smooth","sticky","stiff","straight","strong","sudden","sweet","tall","thick","tight","tired","true","violent","waiting","warm","wide","wise","yellow","young","awake","bad","bent","bitter","blue","certain","cold","complete","cruel","dark","dead","dear","delicate","different","dirty","dry","false","feeble","female","foolish","future","green","ill","last","late","left","loose","loud","low","mixed","narrow","old","opposite","public","rough","sad","safe","secret","short","shut","simple","slow","small","soft","solid","special","strange","thin","white","wrong"
    ],
    "wiktionaryColors": //wiktionary colors
      [
      "alabaster","Aliceblue","alizarincrimson","amber","amethyst","antiquebrass","aqua","aquamarine","argent","asparagus","aubergine","auburn","babyblue","banana","battleshipgrey","bicegreen","biscuit","bisque","bluegreen","blueviolet","bone","buff","burgundy","burlywood","cadetblue","Cambridgeblue","camel","cerise","cerulean","chamois","cinnamon","citrine","clairdelune","coral","cornflower","cornflowerblue","daffodil","damask","dandelion","desertsand","Dodgerblue","dovegrey","drab","duckeggblue","dun","eaudenil","ebony","ecru","eggshell","eggshellblue","electricblue","emerald","emeraldgreen","eucalyptus","fawn","federalyellow","firebrick","flame","flamingo","flaxen","floralwhite","forestgreen","frost","fuscous","gainsboro","gamboge","garnet","geranium","ginger","glaucous","goldenrod","goldochre","grape","grey","grizzle","gules","harlequin","harvestgold","hazel","heather","heliotrope","henna","hepatic","hoar","honey","honeydew","hotpink","huntergreen","iceblue","incarnadine","Indianred","indigo","internationalorange","irongrey","ivory","jade","jadegreen","jet","jonquil","junglegreen","kellygreen","Kendalgreen","khaki","khakigreen","lapislazuli","laurelgreen","lava","lemon","lemonchiffon","licorice","lime","Lincolngreen","linen","liver","loden","lovat","madder","magenta","manatee","mango","mantis","midnightblue","mignonette","militarygrey","mocha","mossgreen","mulberry","natural","Navajowhite","navy","Nileblue","Nilegreen","oak","oatmeal","oceangrey","offwhite","oldgold","oldlace","olivedrab","onyx","orange","outerspace","oxblood","Oxfordblue","pansy","paprika","Parisgreen","pearly","periwinkle","perse","pinegreen","pink","pistachiogreen","powderblue","primrose","Prussianblue","quartz","quince","raspberry","rawsienna","red","reseda","riflegreen","robin'seggblue","rouge","royalblue","royalpurple","russet","rust","sable","saddlebrown","safetyorange","sard","saxeblue","scarlet","silvergrey","skyblue","slate","steelblue","stone","straw","tan","tangerine","taupe","teak","teal","terracotta","titian","topaz","towcolored","turquoise","Tyrianpurple","ultramarine","umber","Vandykebrown","venetianred","verdant","verdigris","vermilion","vert","violet","violetred","virid","viridian","walnut","Wedgwoodblue","wheat","wheaten","white","wine","xanthic","yellow","zaffre","zomp"
    ]
  },
  "objects": {
    "animals": // other animals including mammals and minecraft
      [
      "camel", "snake", "goose", "ant", "owl", "fish", "buffalo", "squirrel", "raccoon", "lion", "panda", "walrus", "otter", "kangaroo", "mouse", "goat", "monkey", "koala", "mole", "elephant", "giraffe", "hedgehog", "fox","chicken", "cow", "pig", "rabbit", "sheep", "horse", "squid", "zombie", "cube", "magma", "silverfish", "slime", "witch", "donkey", "llama", "ocelot", "dog", "cat", "bee", "villager", "steve", "creeper? (aww man)", "joe", "pro", "noob", "mob", "monster", "npc"
    ],
    "edibles": // edibles
      [
      //snacks
      "waffle", "chocolatebar", "marshmallow", "toffee", "cookie", "cracker", "ice", "soup", "yogurt", "bagel", "bread", "pretzel", "croissant", "ramen",
      //veggies
      "cabbage", "carrot", "courgette", "beet", "broccoli", "mushroom", "leek", "cucumber", "lettuce", "onion", "pea", "pepper", "potato", "pumpkin", "radish", "zucchini", "corn", "sweetPotato", "tomato", "celery", "chili", "spinach", "peanut", "walnut",
      //fruits
      "apple", "melon", "orange", "strawberry", "grape", "mango", "nectarine", "banana", "pomegranate", "raspberry", "papaya", "kiwi", "pineapple", "lemon", "grapefruit", "peach", "plum", "lime", "blueberry", "lychee", "fig", "cherimoya", "carambola", "coconut", "clementine", "cranberry", "gooseberry", "honeydewMelon", "guava", "grape", "kiwi", "pear"
    ],
    "jobs": // medieval occupations
      [
        "Acrobat","Apothecarist","Architect","Armorer","Artist","Astrologer","Baker","Bowyer","Brewer","Bricklayer","Candlemaker","Carpenter","Cartographer","Clothier","Cook","Diplomat","Dyer","Engineer","Farmer","Fisherman","Forester","FortuneTeller","Gardener","Glassblower","Herald","Herbalist","Hunter","Innkeeper","Interpreter","Jester","Jeweler","Leatherworker","Locksmith","Messenger","Miner","Minstrel","Navigator","Painter","Peddler","Physician","Playwright","Politician","Potter","Sailor","Scribe","Shoemaker","Spy","Stonecarver","Storyteller","Weaver"],
    "other": // other epic
      [
        "dragon","zombie","human","knight","warrior","baker","ninja","samurai","pirate","tech","anime","fighter","player","object","smith","news","shoes","brews","dews","man"
      ],
    "shapes":
      [
        "Cone","Cylinder","Ellipsoid","Spheroid","Sphere","Hyperboloid","Paraboloid","Torus","Octagon","Heptagon","cube","sphere","triangle","hexagon","rhombus","parallelogram","kite"
        ],
    "wikipediaAnimals": // wikipedia animals
      [
      "Aardvark","Albatross","Alligator","Alpaca","Anole","Ant","Anteater","Antelope","Ape","Armadillo","Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee","Binturong","Bird","Bison","Bluebird","Boar","Bobcat","Budgerigar","Buffalo","Butterfly","Camel","Capybara","Caracal","Caribou","Cassowary","Cat","Caterpillar","Chamois","Cheetah","Chicken","Chimpanzee","Chinchilla","Chough","Coati","Cobra","Cockroach","Cod","Cormorant","Cougar","Coyote","Crab","Crane","Cricket","Crocodile","Crow","Cuckoo","Curlew","Deer","Dhole","Dingo","Dinosaur","Dog","Dogfish","Dolphin","Donkey","Dove","Dragonfly","Duck","Dugong","Dunlin","Eagle","Echidna","Eel","Eland","Elephant","Elephantseal","Elk","Emu","Falcon","Ferret","Finch","Fish","Fisher","Flamingo","Fly","Flycatcher","Fox","Frog","Gaur","Gazelle","Gecko","Genet","Gerbil","GiantPanda","Giraffe","Gnat","Gnu","Goat","Goldfinch","Goosander","Goose","Gorilla","Goshawk","Grasshopper","Grouse","Guanaco","GuineaFowl","GuineaPig","Gull","Hamster","Hare","Hawk","Hedgehog","HermitCrab","Heron","Herring","Hippopotamus","Hippopotamus","Hoatzin","Hoopoe","Hornet","Horse","Human","Hummingbird","Hyena","Ibex","Ibis","Iguana","Impala","Jackal","Jaguar","Jay","Jellyfish","Jerboa","Kangaroo","Kingbird","Kingfisher","Kinkajou","Kite","Koala","KomodoDragon","Kookaburra","Kouprey","Kudu","Langur","Lapwing","Lark","Lechwe","Lemur","Leopard","Lion","Lizard","Llama","Lobster","Locust","Loris","Louse","Lynx","Lyrebird","Macaque","Macaw","Magpie","Mallard","Mammoth","Manatee","Mandrill","Marmoset","Marmot","Meerkat","Mink","Mole","Mongoose","Monkey","Moose","Mosquito","Mouse","Myna","Narwhal","Newt","Nightingale","Nilgai","Ocelot","Octopus","Okapi","Opossum","Orangutan","Oryx","Ostrich","Otter","OxSeeCattle","Owl","Oyster","Panther","Parrot","Panda","Partridge","Peafowl","Penguin","Pheasant","Pig","Pigeon","Pika","PolarBear","Pony","Porcupine","Porpoise","PrairieDog","Pug","Quail","Quelea","Quetzal","Rabbit","Raccoon","Ram","Rat","Raven","Reddeer","Redpanda","Reindeer","Rhea","Rhinoceros","Rook","Saki","Salamander","Salmon","SandDollar","Sandpiper","Sardine","Sassaby","SeaLion","Seahorse","Seal","Serval","Shark","Sheep","Shrew","Shrike","Siamang","Skink","Skipper","Skunk","Sloth","Snail","Snake","Spider","Spoonbill","Squid","Squirrel","Starling","Stilt","Swan","Tamarin","Tapir","Tarsier","Termite","Tiger","Toad","Topi","Toucan","Turaco","Turkey","Turtle","Umbrellabird","Vicuna","Vinegaroon","Viper","Vulture","Wallaby","Walrus","Wasp","WaterBuffalo","Waxwing","Weasel","Whale","Wobbegong","Wolf","Wolverine","Wombat","Woodpecker","Worm","Wren","X-rayTetra","Yak","Zebra"],
    "wiktionaryEssentialEnglish": // wiktionary essential english words pictures
      [
        "angle","ant","apple","arch","arm","army","baby","ball","band","basin","basket","bath","bed","bee","bell","berry","bird","blade","board","boat","bone","book","boot","bottle","box","boy","brain","brake","branch","brick","bridge","brush","bucket","bulb","button","cake","camera","card","cart","carriage","chain","chair","cheese","chest","chin","church","circle","clock","cloud","coat","collar","comb","cord","cow","cup","curtain","cushion","dog","door","drain","drawer","dress","drop","ear","egg","engine","eye","face","farm","feather","finger","fish","flag","floor","fly","foot","fork","fowl","frame","garden","girl","glove","goat","hair","hammer","hand","hat","head","heart","hook","horn","horse","hospital","house","island","jewel","kettle","key","knee","knife","knot","leaf","leg","library","line","lip","map","match","monkey","moon","mouth","muscle","nail","neck","needle","nerve","net","nose","nut","office","orange","oven","parcel","pen","pencil","picture","pig","pin","pipe","plane","plate","plow","pocket","pot","potato","prison","pump","rail","rat","receipt","ring","rod","roof","root","sail","school","scissors","screw","seed","sheep","shelf","ship","shirt","shoe","skin","skirt","snake","sock","spade","sponge","spoon","spring","square","stamp","star","station","stem","stick","stocking","stomach","store","street","sun","table","tail","thread","throat","thumb","ticket","toe","tongue","tooth","town","train","tray","tree","trousers","umbrella","wall","watch","wheel","whip","whistle","window","wing","wire","worm"],
    "wiktionaryFruits": // wiktionary fruit list
      [
        "Abiu","Ackee","Apple","Apricot","Avocado","Banana","Bilberry","Blackberry","Blackcurrant","BlackSapote","Blueberry","Boysenberry","Breadfruit","Citron","Cactuspear","Cempedak","CrabApple","Currant","Cherry","Cherimoya","Chicofruit","Cloudberry","CocoDeMer","Coconut","Cranberry","Damson","Date","Dragonfruit","Durian","EggFruit","Elderberry","Feijoa","Fig","GojiBerry","Gooseberry","Grape","Phalsa","Raisin","Grapefruit","Guava","HalaFruit","Honeyberry","Huckleberry","Jabuticaba","Jackfruit","Jambul","Japaneseplum","Jostaberry","Jujube","JuniperBerry","Kiwano","Kiwifruit","Kumquat","Lemon","Lime","Loganberry","Loquat","Longan","Lulo","Lychee","MameyApple","MameySapote","Mango","Mangosteen","Marionberry","Melon","Cantaloupe","Galiamelon","Honeydew","Watermelon","Miraclefruit","Mulberry","Nance","Nectarine","Orange","Bloodorange","Clementine","Mandarine","Tangerine","Papaya","Passionfruit","Peach","Pear","Persimmon","Plantain","Plum","Prune","Pineapple","Pineberry","Plumcot","Pomegranate","Pomelo","Mangosteen","Quince","Raspberry","Salmonberry","Rambutan","Redcurrant","Salak","Satsuma","Soursop","StarApple","Starfruit","Strawberry","Surinamcherry","Tamarillo","Tamarind","Tangelo","Tayberry","Tomato","UgliFruit","Whitecurrant","WhiteSapote","Yuzu","Pepper","Chilly","Corn","Cucumber","Eggplant","Jalapeno","Olive","Pea","Pumpkin","Squash","Tomato","Zucchini"]
  }
};

// global so all the array functions only get executed once
let adjectives = [];
let objects = [];
// dataBiasPair [[...vocabs], int:bias%0-100]
{ // adjectives bias
  adjectives.push([VOCAB_DATA.adjectives.adjectivePDFList, 50]);
  adjectives.push([VOCAB_DATA.adjectives.adverbs, 50]);
  adjectives.push([VOCAB_DATA.adjectives.age, 50]);
  adjectives.push([VOCAB_DATA.adjectives.colors, 60]);
  adjectives.push([VOCAB_DATA.adjectives.citationMachinePositive, 60]);
  adjectives.push([VOCAB_DATA.adjectives.descriptiveAdjectives, 100]);
  adjectives.push([VOCAB_DATA.adjectives.other, 80]);
  adjectives.push([VOCAB_DATA.adjectives.slang, 50]);
  adjectives.push([VOCAB_DATA.adjectives.wiktionaryColors, 60]);
  adjectives.push([VOCAB_DATA.adjectives.wiktionaryOrderedEnglishAdj, 80]);
}

{ //objects bias
  objects.push([VOCAB_DATA.objects.animals, 100]);
  objects.push([VOCAB_DATA.objects.edibles, 100]);
  objects.push([VOCAB_DATA.objects.jobs, 70]);
  objects.push([VOCAB_DATA.objects.other, 60]);
  objects.push([VOCAB_DATA.objects.shapes, 30]);
  objects.push([VOCAB_DATA.objects.wikipediaAnimals, 80]);
  objects.push([VOCAB_DATA.objects.wiktionaryEssentialEnglish, 100]);
  objects.push([VOCAB_DATA.objects.wiktionaryFruits, 100]);
  console.log("Finished importing vocabulary");
}

// on page load
window.onload= function() {
  console.log("Event: Window loaded");
  console.log("Installing generator...");
  installGenerator();
  console.log("Finished installing generator");
}

// generate username function
function generateUsername() {
  /*
    Username will be constructed like this:

    (aim: something like AdjectiveObjectObject)

    adjectives = [[[...], bias],[[...], bias]]
    objects = [[[...], bias],[[...], bias]]

    recipes = ["aoo", "aao", "ao", "oo"]; a=adjective; o=object, gets random of that
    for every letter in recipe it adds to result string

    so eg. Username = Adjective + Object + Object + (Number)
  */
  result = "";
  //recipes = ["aoo", "aao", "ao","ao", "oo", "ooo"];
  recipes = ["ao", "oo"];
  function capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
  }
  // Generate name with recipe
  let rarityScore = 0; // for fun (lower = better)
  let recipe = getRandomElement(recipes);
  for (char of recipe) {
    let vocab = "";
    switch(char) {
      case "a": vocab = getBiasedVocab(adjectives); break;
      case "o": vocab = getBiasedVocab(objects); break;
    }
    result += capitalize(vocab);
  }
  console.log("Generated", result, "with recipe", recipe)
  return result;
}

function getBiasedVocab(vocabArraysObject) {
  /*
  Match randomInt into the biasCluster:
  so eg. total bias is 780 and consists of 10 bias for a, 20 for b, up to 780.
  than a dice with up to 780 gets rolled and if I get 230 I look at the stack of
  biases where where it would fit in like
  [10][  20  ][10][    30    ]
  [dice = 30 ], so the second bias wins
  */
  let result = "";
  let vocabBias = 0; // fun
  let vocabRarity = 0; // fun
  let vocabsArray = [];
  let totalBias = 0;

  // get total bias
  for (dataBiasPair of vocabArraysObject) {
    let bias = dataBiasPair[1] 
    totalBias += bias;
  }

  // roll random up to total bias
  let dicedBias = Math.floor(Math.random() * totalBias);

  // get the vocabDataArray from position in biases
  let accBias = 0; // accumulated bias
  let currBias = 0; // current bias
  for (dataBiasPair of vocabArraysObject) {
    currBias = dataBiasPair[1];
    accBias += currBias;
    if (accBias >= dicedBias) {
      vocabsArray = dataBiasPair[0];
      vocabBias = currBias; // also get the bias of the vocab for fun
      vocabRarity = 100/vocabsArray.length; // and rarity
      break;
    }
  }

  // now finally get a random vocab from the array
  result = getRandomElement(vocabsArray);

  // and return
  return result;
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// set up generator
function installGenerator() {
  let generatorInput = document.querySelector("#generatorInput");
  let generatorButton = document.querySelector("#generatorButtonGenerate");
  // Selecting whole input setup
  generatorInput.addEventListener('click', function() {
    this.select( );
  })
  // Generate-Button Setup
  //generatorButton.addEventListener('click', (() => {inputNewUsername();}));
  // Putting in initial Username
  //inputNewUsername();
}

// Input new Username function
function inputNewUsername() {
  let generatorInput = document.querySelector("#generatorInput");
  let generatorButton = document.querySelector("#generatorButtonGenerate");
  console.log("Generating Username...");
  let username = generateUsername();
  generatorInput.value = username;
  generatorInput.select(); // auto-select the field
}

// Input new Password function
function inputNewPassword() {
  let generatorInput = document.querySelector("#generatorInput");
  let generatorButton = document.querySelector("#generatorButtonGenerate");
  console.log("Generating Password...");
  let password = generatePassword();
  generatorInput.value = password;
  generatorInput.select(); // auto-select the field
}

function generatePassword() {
  let result = "";
  let characters = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUFVXYZ123456789!\"§$%&/()=?-+#";
  let length = Math.floor(Math.random()*10+10)
  for (let i=0; i<length; i++) {
    result += characters.charAt(Math.floor(Math.random()*(characters.length-1)));
  }
  console.log("Generated Password of length", length);
  return result;
}