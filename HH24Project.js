class Cowboy {
    constructor(characterName) {
        this.characterName = characterName;
    }
}

// music -- ISA
const mainMusic = new Audio(
    "https://vgmdownloads.com/soundtracks/oregon-trail-2-ost/grhaiqgy/001%20Title%20Theme.mp3"
  );
  mainMusic.loop = true;
  
  const oxMusic = new Audio(
    "https://vgmdownloads.com/soundtracks/oregon-trail-2-ost/hulgofoq/006%20Trail%201%20Good.mp3"
  );
  oxMusic.loop = true;
  
  const boxMusic = new Audio(
    "https://vgmdownloads.com/soundtracks/oregon-trail-2-ost/khhmlora/005%20Kanesville%2C%20Council%20Bluffs.mp3"
  );
  boxMusic.loop = true;
  
  const beesMusic = new Audio(
    "https://vgmdownloads.com/soundtracks/oregon-trail-2-ost/wnynpdgq/021%20Trail%202%20Poor.mp3"
  );
  beesMusic.loop = true;
  
  const goodBoxMusic = new Audio(
    "https://vgmdownloads.com/soundtracks/oregon-trail-2-ost/ujapimen/032%20Trail%203%20Good.mp3"
  );
  
  goodBoxMusic.loop = true;
  
  const riverMusic = new Audio(
    "https://vgmdownloads.com/soundtracks/oregon-trail-2-ost/eitlrgms/022%20Down%20In%20The%20Valley.mp3"
  );
  
  riverMusic.loop = true;
  
  const townMusic = new Audio(
    "https://vgmdownloads.com/soundtracks/oregon-trail-2-ost/ybnhyccg/009%20Go%20Tell%20Aunt%20Rhody%20%28Town%29.mp3"
  );
  
  townMusic.loop = true;
  
  const storeMusic = new Audio(
    "https://vgmdownloads.com/soundtracks/oregon-trail-2-ost/ferblmzs/013%20Jimmy%20Crack%20Corn%20%28Fort%29.mp3"
  );
  storeMusic.loop = true;
  
  const huntMusic = new Audio(
    "https://vgmdownloads.com/soundtracks/oregon-trail-2-ost/iasxwiwx/055%20Buffalo%20Gals%20%28Town%29.mp3"
  );
  huntMusic.loop = true;
  
  const winMusic = new Audio(
    "https://vgmdownloads.com/soundtracks/oregon-trail-2-ost/ilsubhrx/064%20You%27ve%20Reached%20Your%20Destination%21.mp3"
  );
  winMusic.loop = true;
  
  const loseMusic = new Audio(
    "https://vgmdownloads.com/soundtracks/oregon-trail-2-ost/pegpgqml/048%20Trail%204%20Poor.mp3"
  );
  loseMusic.loop = true;




// game stats
const game = {
    cash: 35,
    food: 100,
    days_in: 0,
    dist: 0,
    health: 100,
    healthStat: "Good",
    wagon: {
        health: 100
        },
    playerTimer: 0,
    currentTime: 0,
    speed: "Stopped",
    total: 0,
    
//START GAME KEY --> FUNCTION(pName)

    startGame : function(pName) {
      const player = new Cowboy(pName);
      $(".welcome-screen").remove();
      const $gameScreen = $(".game-screen");
      const $stats = $(".stats-bar");
      const $dayTracker = $("<h2 id='days'>Day: " + this.days_in + "</h2>");
      const $foodTracker = $("<h2 id='food'>Cowboy Food: " + this.food + "</h2>");
      const $moneyTracker = $("<h2 id='money'>Cash: $" + this.cash + "</h2>");
      /*const $distanceTracker = $(
        "<h2 id='distance'>Distance Traveled: " + this.distance + "</h2>"
      );*/

//MESSAGE BOX

const $healthTracker = $(
    "<h2 id='healthStatus'>Wagon Status: " + this.healthStatus + "</h2>"
  );
  const $hpTracker = $("<h2 id='hp'>Health: " + this.health + "</h2>");
  const $message = $(".message-box");
  $message.css("width", "500px");
  $message.css("padding", "20px");
  $message.css("height", "150px");
  $message.css("border", "2px solid white");
  $message.css("margin", "30px auto");
  $message.text(
    `Howdy ${player.characterName}! Welcome to the Wild Wild Aggieland, woof!`
  );

 //BACKGROUND

$message.append("<button id='next-button'>Next</button>");
$stats.append($dayTracker);
//$stats.append($distanceTracker);
$stats.append($foodTracker);
$stats.append($hpTracker);
$stats.append($healthTracker);
$stats.append($moneyTracker);
$(".main-game-image").append(
  $(
    "<img id='main-game-image' src='https://f2.toyhou.se/file/f2-toyhou-se/images/89191695_WwutsmfkFLJ61gN.gif'>"
  )
);
    }
//PLAYER SPRITE WALK

$(".cowswalking").append(
  $("<img id='cows' src='https://f2.toyhou.se/file/f2-toyhou-se/images/89196640_nLC6rNINPk8hngT.png'>")
);
$("#main-game-image").css("height", "350px");
$("#next-button").on("click", function() {
  game.displayStats();
});
},

// JAYDEN 83 - 229







//event listeners
  
$("#start-button").on("click", function() {
    const pName = $("#name-entry-input").val();
    game.startGame(pName);
    mainMusic.play();
  });








// LENA -- 230 - 515
hunt: function() {
    oxMusic.pause();
    huntMusic.play();
    $(".interactionPanel").hide();
    $(".game-screen").hide();
    $(".huntingField").prepend(
        $(
            "<h1 d="
        )
    )
}