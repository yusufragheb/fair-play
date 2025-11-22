function openPopup() {
    document.getElementById("overlay").style.display = "block";

   // alert("if you don't want the both team1 and team2 to probably be the same team, please select the (distinct) checkbox");

    document.body.style.backgroundImage = `url('YyfyCXK-champions-league-wallpaper.jpg')`;
    }

function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.body.style.backgroundImage = `url('wp11954242-champions-league-stadium-wallpapers.jpg')`;
    }

    
 var players = [];
 var team1Player = "";
 var team2Player = "";
function openPopup2() {
  if(players.length >= 2)
  document.getElementById("overlay2").style.display = "block";
}

function closePopup2() {
  document.getElementById("overlay2").style.display = "none";
}

var players = [];

function addPlayer() {
  let name = document.getElementById("players-names").value.trim();
  let maxPlayers = parseInt(document.getElementById("players-count").value) || 8;

  if (!name) {
    alert("Enter a player name!");
    return;
  }

  if (players.length >= maxPlayers) {
    alert("Maximum limit of players reached.\nYou can only add up to " + maxPlayers + " players.");
    return;
  }

  players.push(name);
  updatePlayerList();

  // ✅ امسح القيمة بعد الإضافة علشان الخانة تبقى فاضية
  document.getElementById("players-names").value = "";

}

function drawPlayers() {
  if (players.length < 2) {
    alert("You need at least 2 players to draw!");
    return;
  }

  // اختار أول لاعب عشوائي
  let index1 = Math.floor(Math.random() * players.length);
  team1Player = players[index1];

  // اعمل نسخة جديدة بدون اللاعب الأول
  let remainingPlayers = players.filter(p => p !== team1Player);

  // اختار لاعب تاني من الباقيين فقط
  let index2 = Math.floor(Math.random() * remainingPlayers.length);
  team2Player = remainingPlayers[index2];

  // عرض النتائج
  document.getElementById("P1game").textContent = `Team 1: ${team1Player}`;
  document.getElementById("P2game").textContent = `Team 2: ${team2Player}`;

  document.getElementById("player1").textContent = "team1 -> {🎯 " + team1Player + " }";
  document.getElementById("player2").textContent = "team2 -> {🎯 " + team2Player + " }";

  startDrawAnimation(team1Player, team2Player);
}

function clearPlayers() {
  players = [];
  updatePlayerList();
  document.getElementById("players-names").value = "";
  document.getElementById("players-count").value = "";
  document.getElementById("draw-popup-result").textContent = "";
}



function openPopup3() {
  document.getElementById("overlay3").style.display = "flex";
}

function openPopup3() {
  document.getElementById("overlay3").style.display = "flex";
}

function closePopup3() {
  document.getElementById("overlay3").style.display = "none";
}

document.getElementById("go-btn").addEventListener("click", function() {
  let choice = document.querySelector('input[name="choice"]:checked');
  if (!choice) {
    alert("Please select an option first!");
    return;
  }

  let popup = document.getElementById("popup-result3");
  popup.className = ""; // reset
  popup.classList.add("drawing");
  popup.innerText = "Drawing... 🎲";
  openPopup3();

  let startTime = Date.now();
  let duration = 2500; // وقت الأنيميشن 2.5 ثانية

  let interval = setInterval(() => {
    let random1 = Math.floor(Math.random() * 8);
    let random2 = Math.floor(Math.random() * 8);

    if(choice.value === "predecting")
    {
              popup.innerText = `🔮 Prediction:\nTeam1 (${team1Player}) ${random1} | Team2 (${team2Player}) ${random2}`;
    }
    else if(choice.value === "begins")
    {
      popup.innerText = `🏴 Drawing: Team1 (${team1Player}) ${random1} | Team2 (${team2Player}) ${random2} `;
    }
    

    if (Date.now() - startTime >= duration) {
      clearInterval(interval);
      popup.classList.remove("drawing");

      let team1 = Math.floor(Math.random() * 8);
      let team2 = Math.floor(Math.random() * 8);
      let resultText = "";
      let winner;

      if (choice.value === "predecting") {
        if(team1 > team2)
        {
          resultText = `🏆 Winner: Team1 \n (${team1Player}) \nScore: ${team1} - ${team2}`;
          popup.classList.add("win-team1");
        }
        else if(team1 < team2)
        {
            resultText = `🏆 Winner: Team2 \n (${team2Player})\nScore: ${team1} - ${team2}`;
          popup.classList.add("win-team2");
        }
      } else if(choice.value === "begins"){
        winner = Math.random() < 0.5 ? "team1" : "team2";

        if (winner === "team1") {
          let score1 = Math.floor(Math.random() * 4) + 1;
          resultText = `🏁 the match starts🏁: Team1 (${team1Player}) \n Score: ${score1} - 0`;
          popup.classList.add("win-team1");
        } else {
          let score2 = Math.floor(Math.random() * 4) + 1;
          resultText = `🏁 the match starts🏁: Team2 (${team2Player})\nScore: 0 - ${score2}`;
          popup.classList.add("win-team2");
        }

        // 💥 تأثير الانفجار
        const flash = document.createElement("div");
        flash.className = "flash";
        document.getElementById("overlay3").appendChild(flash);
        setTimeout(() => flash.remove(), 600);
      }

      popup.innerText = resultText;
    }
  }, 100);
});



   

  
    

let chosenTeam1 = "";
let chosenTeam2 = "";
let distinctCheckbox = document.getElementById("distinct");
var teams = [
      "arsenal",
      "chelsea",
      "liverpool",
      "tottenham",
      "newcastle",
      "manchester united",
      "barcelona",
      "real madrid",
      "bayern munich",
      "juventus",
      "atletico madrid",
      "paris saint-germain",
      "borussia dortmund",
      "inter milan",
      "ac milan",
      "napoli",
      "roma",
      "manchester city"
    ];
function team1Generator() {
    var team1 = teams;

    let t1randomindex = Math.floor(Math.random() * team1.length);
    chosenTeam1 = team1[t1randomindex];
}


function team2Generator() {
    var team2 = teams;

  if (distinctCheckbox.checked) {
    team2 = team2.filter(team => team !== chosenTeam1);
    }

    let t2randomindex = Math.floor(Math.random() * team2.length);
    document.getElementById("display_team2").textContent = team2[t2randomindex].toUpperCase();;
    chosenTeam2 = team2[t2randomindex];

}




function clearDisplay() {
    document.getElementById("display_team1").textContent = "";
    document.getElementById("display_team2").textContent = "";
    document.getElementById("team1vsteam2").textContent = "";
    chosenTeam1 = "";
    chosenTeam2 = "";
    distinctCheckbox.checked = false;
    document.getElementById("team1-logo").src = "";
    document.getElementById("team2-logo").src = "";
    document.getElementById("team1-logo").alt = "";
    document.getElementById("team2-logo").alt = "";
    document.getElementById("ucl-team1").textContent = "";
    document.getElementById("ucl-team2").textContent = "";
    document.getElementById("team1-color").textContent = "";
    document.getElementById("team2-color").textContent = "";
    document.getElementById("team1-name").textContent = "";
    document.getElementById("team2-name").textContent = "";
    document.getElementById("team1-nikename").textContent = "";
    document.getElementById("team2-nikename").textContent = "";
    players = [];
    updatePlayerList();
    document.getElementById("players-result").textContent = "";
    document.getElementById("players-names").value = ""
    document.getElementById("players-count").textContent = "";
}


function openPopup4() {
  document.getElementById("overlay4").style.display = "block";
}

function closePopup4() {
  document.getElementById("overlay4").style.display = "none";
}

function firstLeg() {
  if (!chosenTeam1 || !chosenTeam2) {
    alert("Please generate both teams first!");
    return;
  }

  openPopup4();

  const team1El = document.getElementById("1draw-popup-result4");
  const team2El = document.getElementById("2draw-popup-result4");
  const stadiumImg = document.getElementById("stadiumphoto");
  const stadiumName = document.getElementById("stadiumname");

  // خزن بيانات الصور لكل فريق من الـ stadiums array
  const list = typeof stadiums === "function" ? stadiums() : stadiums;
  const team1Data = list.find(s => s.team === chosenTeam1.toLowerCase().trim());
  const team2Data = list.find(s => s.team === chosenTeam2.toLowerCase().trim());

  let counter = 0;
  const maxCycles = 15;

  // أنيميشن القرعة
  const animation = setInterval(() => {
    const showTeam1 = Math.random() < 0.5;
    const tempTeam = showTeam1 ? chosenTeam1 : chosenTeam2;
    const tempStadium = showTeam1 ? team1Data : team2Data;

    team1El.textContent = tempTeam;
    team2El.textContent = showTeam1 ? chosenTeam2 : chosenTeam1;

    stadiumImg.src = tempStadium ? tempStadium.photo : "default-stadium.jpg";
    stadiumName.textContent = tempStadium ? tempStadium.name : "Unknown Stadium";

    counter++;
    if (counter > maxCycles) {
      clearInterval(animation);
      showFinalResult();
    }
  }, 100); // سرعة القرعة
}

function showFinalResult() {
  const homeOrAway1 = Math.random() < 0.5 ? "home" : "away";
  const homeOrAway2 = homeOrAway1 === "home" ? "away" : "home";

  document.getElementById("1draw-popup-result4").textContent =
    chosenTeam1 + " (" + team1Player + ") : " + homeOrAway1.toUpperCase() + " Match";
  document.getElementById("2draw-popup-result4").textContent =
    chosenTeam2 + " (" + team2Player + ") : " + homeOrAway2.toUpperCase() + " Match";

  if (homeOrAway1 === "home" && homeOrAway2 === "away") {
    document.getElementById("result4imoji1").textContent = " 🏠";
    document.getElementById("result4imoji2").textContent = " ✈";
  } else {
    document.getElementById("result4imoji1").textContent = " ✈";
    document.getElementById("result4imoji2").textContent = " 🏠";
  }

  // تحديد الفريق المستضيف فعلاً
  const homeTeam = homeOrAway1 === "home" ? chosenTeam1 : chosenTeam2;
  const homeKey = homeTeam.toLowerCase().trim();
  const list = typeof stadiums === "function" ? stadiums() : stadiums;
  const stadium = list.find(s => s.team === homeKey);

  if (stadium) {
    document.getElementById("stadiumname").textContent = stadium.name;
    document.getElementById("stadiumphoto").src = stadium.photo;
    document.getElementById("stadiumphoto").alt = stadium.name;
  } else {
    document.getElementById("stadiumname").textContent = "Unknown Stadium";
    document.getElementById("stadiumphoto").src = "default-stadium.jpg";
    document.getElementById("stadiumphoto").alt = "No stadium found";
  }

 const dingSound = document.getElementById("ding3");
      if (dingSound) {
        dingSound.currentTime = 0; 
        var playPromise = dingSound.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => { console.error("Audio play failed:", error); });
        }
      }


}


  let stadiums = [
    { name: "Camp Nou", team: "barcelona", photo: "BarcelonaStad.jpg" },
    { name: "Santiago Bernabéu", team: "real madrid", photo: "R.jpeg" },
    { name: "Emirates Stadium", team: "arsenal", photo: "Arsenal-Emirate-Stadium-Desktop-Backgrounds-3.jpg" },
    { name: "Old Trafford", team: "manchester united", photo: "1316e9e0c1ba71705d17b9163b8bba93-scaled.jpg" },
    { name: "Etihad Stadium", team: "manchester city", photo: "etihad-stadium-2022-3-getty-images.jpg" },
    { name: "Anfield", team: "liverpool", photo: "2024-01-10-005-Liverpool_Fulham.jpg" },
    { name: "St James' Park", team: "newcastle", photo: "R (2).jpeg" },
    { name: "Stamford Bridge", team: "chelsea", photo: "R (1).jpeg" },
    { name: "Tottenham Hotspur Stadium", team: "tottenham", photo: "656f752c03e54197f912059a_shutterstock_2356464283_crop.jpg" },
    { name: "Wanda Metropolitano", team: "atletico madrid", photo: "29b2fda948865440858008ea050d1f64.jpg" },
    { name: "Allianz Arena", team: "bayern munich", photo: "360_F_295434540_iE7uRsAbRPfOiXgW3m0eJhVbOhfNaC08.jpg" },
    { name: "Allianz Stadium", team: "juventus", photo: "R (3).jpeg" },
    { name: "San Siro", team: "inter milan", photo: "inter-milan-outside.jpg" },
    { name: "San Siro", team: "ac milan", photo: "160924-San_siro_stadium.jpg" },
    { name: "Stadio Diego Armando Maradona", team: "napoli", photo: "stadio-diego-armando-maradona-33436-w767.jpg" },
    { name: "Stadio Olimpico", team: "roma", photo: "600px-StadioOlimpicoRome.jpg" },
    { name: "Parc des Princes", team: "paris saint-germain", photo: "COUV-ARTICLES-1920x1080-77-1024x576.jpg" },
    { name: "Signal Iduna Park", team: "borussia dortmund", photo: "R (4).jpeg" }
  ];
  
  

function logos1()
{     
  let l1 = "";
  let alt1 = "";
  let ucl1 = "";
  let c1 = "";
  let name1 = "";
  let nikename1 = "";
  let p1 = "";
  let banner1 = "";
  let player1 = "";
      

      if (chosenTeam1 === "barcelona") {
          l1 = "barcelona.jpeg";
          alt1 = "FC Barcelona";
          ucl1 = "5 \n , last won in Olympiastadion stadium (Olympic stadium), BERLIN 2015";
            c1 = "🔴🔵";
            name1 = "FC BARCELONA ";
            nikename1 = "\n (BARÇA) (CULES) (BLUGRANAS) (CATALANS)";
            p1 = "38 participations | 8 finals";
            banner1 = "Mes que un club!";
            player1 = "Lamine Yamal";
      } else if (chosenTeam1 === "real madrid") {
          l1 = "real madrid.jpeg";
          alt1 = "Real Madrid CF";
          ucl1 = "15 \n , last won in Wembley stadium, LONDON 2024";
            c1 = "⚪️⚪️";
            name1 = "REAL MADRID CF";
            nikename1 = "\n (LOS BLANCOS) (EL MALAKY) (MADRIDIANS)";
            p1 = "56 participations | 18 finals";
            banner1 = "Hala Madrid!";
            player1 = "Kylian Mbappé";
      }else if (chosenTeam1 === "arsenal") {
          l1 = "arsenal.jpeg";
          alt1 = "Arsenal FC";
          ucl1 = "0 \n , BEST => runner up SAINT-DENIS 2006";
            c1 = "🔴⚪️";
            name1 = "ARSENAL FC ";
            nikename1 = "\n (THE GUNNERS) ";
            p1 = "23 participations | 1 final";
            banner1 = "Victoria Concordia Crescit! (Victory Through Harmony!)";
            player1 = "Bukayo Saka";
      }else if (chosenTeam1 === "manchester united") {
          l1 = "man united.jpeg";
          alt1 = "Manchester United FC";
          ucl1 = "3 \n , last won in Luzhniki stadium, MOSCOW 2008";
            c1 = "🔴⚫️";
            name1 = "MANCHESTER UNITED FC ";
            nikename1 = "\n (MAN UTD) (RED DEVILS) ";
            p1 = "23 participations | 5 finals";
            banner1 = "Glory Glory Man United!";
            player1 = "Bruno Fernandes";
      }else if (chosenTeam1 === "manchester city") {
          l1 = "man city.jpeg";
          alt1 = "Manchester City FC";
          ucl1 = "1 \n , last won in Atatürk Olympic Stadium, ISTANBUL 2023";
            c1 = "🔵⚪";
            name1 = "MANCHESTER CITY FC ";
            nikename1 = "\n (MAN CITY) (CITIZENS)";
            p1 = "16 participations | 2 finals";
            banner1 = "Superbia in Proelio! (Pride in Battle!)";
            player1 = "Erling Haaland";
      }else if (chosenTeam1 === "liverpool") {
          l1 = "liverpool.jpeg";
          alt1 = "Liverpool FC";
          ucl1 = "6 \n , last won in Estadio Metropolitano, MADRID 2019";
            c1 = "🔴🔴";
            name1 = "LIVERPOOL FC ";
            nikename1 = "\n (THE REDS) (LIVERBIRDS)";
            p1 = "25 participations | 10 finals";
            banner1 = "You'll Never Walk Alone!";
            player1 = "Mohamed Salah";
      }else if (chosenTeam1 === "newcastle") {
          l1 = "newcastle united.jpeg";
          alt1 = "Newcastle United FC";
          ucl1 = "0 \n , BEST => second group stage (third round) , (round of 16) 2003 ";
            c1 = "⚪️⚫️";
            name1 = "NEWCASTLE UNITED FC";
            nikename1 = "\n (THE MAGPIES)";
            p1 = "5 participations | 0 finals";
            banner1 = "Toon Army! , (Fortiter Defendit Triumphans!)";
            player1 = "Bruno Guimarães";
      }else if (chosenTeam1 === "chelsea") {
          l1 = "chelsea.jpeg";
          alt1 = "Chelsea FC";
          ucl1 = "2 \n , last won in Estadio do Dragão, PORTO 2021";
            c1 = "🔵🔵";
            name1 = "CHELSEA FC ";
            nikename1 = "\n (BLUES)";
            p1 = "20 participations | 3 finals";
            banner1 = "Blue is the Colour!";
            player1 = "Cole Palmer";
      }else if (chosenTeam1 === "tottenham") {
          l1 = "tottenham.jpeg";
          alt1 = "Tottenham Hotspur FC";
          ucl1 = "0 \n , BEST => runner up Madrid 2019";
            c1 = "⚪️🔵";
            name1 = "TOTTENHAM HOTSPUR FC ";
            nikename1 = "\n (SPURS)";
            p1 = "7 participations | 1 final";
            banner1 = "To Dare Is To Do!";
            player1 = "Richarlison";
      }else if (chosenTeam1 === "atletico madrid") {
          l1 = "atlitico madrid.jpeg";
          alt1 = "Atletico Madrid FC";
          ucl1 = "0 \n , BEST => runner up Heysel stadium 1974 & Estadio da Luz 2014 & MILAN 2016";
            c1 = "⚪️🔴";
            name1 = "ATLETICO MADRID FC";
            nikename1 = "\n (LOS COLCHONEROS) (ATLETI) (EL ROJIBLANCOS) (EL ATLETIS)";
            p1 = "22 participations | 3 finals";
            banner1 = "¡Aúpa Atleti! (Coraje y corazón!)";
            player1 = "Julián Álvarez";
      }else if (chosenTeam1 === "bayern munich") {
          l1 = "bayren munich.jpeg";
          alt1 = "Bayern Munich FC";
          ucl1 = "6 \n , last won in Estadio da Luz, LISBON 2020";
            c1 = "🔴🔴";
            name1 = "BAYERN MUNICH FC";
            nikename1 = "\n (THE BAVARIANS) (BAYERMEUNICHN) "
            p1 = "36 participations | 11 finals";
            banner1 = "Mia San Mia!";
            player1 = "Harry Kane";
      }else if (chosenTeam1 === "juventus") {
          l1 = "juventus.jpeg";
          alt1 = "Juventus FC";
          ucl1 = "2 \n , last won in Stadio Olimpico, ROME 1996";
            c1 = "⚫️⚪️";
            name1 = "JUVENTUS FC ";
            nikename1 = "\n (THE OLD LADY) (JUVE)";
            p1 = "34 participations | 9 finals";
            banner1 = "Fino Alla Fine!";
            player1 = "Dusan Vlahovic";
      }else if (chosenTeam1 === "inter milan") {
          l1 = "inter milan.jpeg";
          alt1 = "Inter Milan FC";
          ucl1 = "3 \n , last won in Santiago Bernabéu stadium, MADRID 2010";
            c1 = "🔵⚫️";
            name1 = "INTER MILAN FC ";
            nikename1 = "\n (THE NERAZZURRI) ";
            p1 = "25 participations | 7 finals";
            banner1 = "Forza Inter!";
            player1 = "Lautaro Martínez";
      }else if (chosenTeam1 === "ac milan") {
          l1 = "ac milan.jpeg";
          alt1 = "AC Milan FC";
          ucl1 = "7 \n , last won in Olympic stadium, ATHENS 2007";
            c1 = "🔴⚫️";
            name1 = "AC MILAN FC ";
            nikename1 = "\n (THE ROSSONERI) ";
            p1 = "32 participations | 11 finals";
            banner1 = "Milan, Milan! (IL club più titolato al mondo!)";
            player1 = "Rafael Leão";
      }else if (chosenTeam1 === "napoli") {
          l1 = "napoli.jpeg";
          alt1 = "Napoli FC";
          ucl1 = "0 \n , BEST => quarter-finals 2023 , \n aggregate 2-1 loss to AC Milan";
            c1 = "🔵🔵";
            name1 = "NAPOLI FC";
            nikename1 = "\n (THE AZZURRI) ";
            p1 = "11 participations | 0 finals";
            banner1 = "Forza Napoli Sempre!";
            player1 = "Kevin De Bruyne";
      }else if (chosenTeam1 === "roma") {
          l1 = "roma.jpeg";
          alt1 = "AS Roma";
          ucl1 = "0 \n , BEST => runner up ROME 1984";
            c1 = "🔴🔴";
            name1 = "AS ROMA ";
            nikename1 = "\n (WOLVES)";
            p1 = "14 participations | 1 final";
            banner1 = "Roma non si discute, Si ama!";
            player1 = "Paulo Dybala";
      }else if (chosenTeam1 === "paris saint-germain") {
          l1 = "psg.jpeg";
          alt1 = "(PSG) Paris Saint-Germain FC";
          ucl1 = "1 \n , last won in Allianz Arena, MUNICH 2025";
            c1 = "🔵🔴";
            name1 = "PARIS SAINT-GERMAIN FC ";
            nikename1 = "\n (LES PARISIENS) (LES ROSES) (PSG)";
            p1 = "18 participations | 2 finals";
            banner1 = "Ici c'est Paris!";
            player1 = "Osmane Dembélé";
      }else if (chosenTeam1 === "borussia dortmund") {
          l1 = "brossia dortmond.jpeg";
          alt1 = "Borussia Dortmund FC";
          ucl1 = "1 \n , last won in Olympiastadion, BERLIN 1997";
            c1 = "⚫️🟡";
            name1 = "BORUSSIA DORTMUND FC ";
            nikename1 = "\n (THE YELLOW WASPS) (BVB)";
            p1 = "23 participations | 3 finals";
            banner1 = "Echte Liebe!";
            player1 = "Serhou Guirassy";
      }
      

      document.getElementById("team1-logo").src = l1;
      document.getElementById("team1-logo").alt = alt1;
      document.getElementById("ucl-team1").textContent = ucl1;
      document.getElementById("team1-color").textContent = c1;
      document.getElementById("team1-name").textContent = name1;
      document.getElementById("team1-nikename").textContent = nikename1;
      document.getElementById("team1-participations").textContent = p1;
      document.getElementById("team1-banner").textContent = banner1;
      document.getElementById("team1-playerto").textContent = player1;

      }

      function logos2()
      {
        let l2 = "";
        let alt2 = "";
        let ucl2 = "";
        let c2 = "";
        let name2 = "";
        let nikename2 = "";
        let p2 = "";
        let banner2 = "";
        let player2 = "";

        if (chosenTeam2 === "barcelona") {
          l2 = "barcelona.jpeg";
          alt2 = "FC Barcelona";
          ucl2 = "5 \n , last won in Olympiastadion stadium (Olympic stadium), BERLIN 2015";
          c2 = "🔴🔵";
          name2 = "FC BARCELONA ";
          nikename2 = "\n (THE CULES) (BLUGRANAS) (CATALANS) (BARÇA)";
          p2 = "38 participations | 8 finals";
          banner2 = "Més que un club!";
          player2 = "Lamine Yamal";
      }else if (chosenTeam2 === "real madrid") {
          l2 = "real madrid.jpeg";
          alt2 = "Real Madrid CF";
          ucl2 = "15 \n , last won in Wembley stadium, LONDON 2024";
            c2 = "⚪️⚪️ ";
          name2 = "REAL MADRID CF";
          nikename2 = "\n (LOS BLANCOS) (EL MALAKY) (MADRIDIANS)";
          p2 = "56 participations | 18 finals";
          banner2 = "Hala Madrid!";
          player2 = "Kylian Mbappé";
      }else if (chosenTeam2 === "arsenal") {
          l2 = "arsenal.jpeg";
          alt2 = "Arsenal FC";
          ucl2 = "0 \n , BEST => runner up SAINT-DENIS 2006";
            c2 = "🔴⚪️";
          name2 = "ARSENAL FC ";
          nikename2 = "\n (THE GUNNERS) ";
          p2 = "23 participations | 1 final";
          banner2 = "Victoria Concordia Crescit! (Victory Through Harmony!)";
          player2 = "Bukayo Saka";
      }else if (chosenTeam2 === "manchester united") {
          l2 = "man united.jpeg";
          alt2 = "Manchester United FC";
          ucl2 = "3 \n , last won in Luzhniki stadium, MOSCOW 2008";
            c2 = "🔴⚫️";
          name2 = "MANCHESTER UNITED FC ";
          nikename2 = "\n (THE RED DEVILS) (MAN UTD) ";
          p2 = "23 participations | 5 finals";
          banner2 = "Glory Glory Man United!";
          player2 = "Bruno Fernandes";
      }else if (chosenTeam2 === "manchester city") {
          l2 = "man city.jpeg";
          alt2 = "Manchester City FC";
          ucl2 = "1 \n , last won in Atatürk Olympic Stadium, ISTANBUL 2023";
            c2 = "🔵⚪️";
          name2 = "MANCHESTER CITY FC ";
          nikename2 = "\n (MAN CITY) (CITIZENS)";
          p2 = "16 participations | 2 finals";
          banner2 = "Superbia in Proelio! (Pride in Battle!)";
          player2 = "Erling Haaland";
      }else if (chosenTeam2 === "liverpool") {
          l2 = "liverpool.jpeg";
          alt2 = "Liverpool FC";
          ucl2 = "6 \n , last won in Estadio Metropolitano, MADRID 2019";
            c2 = "🔴🔴";
          name2 = "LIVERPOOL FC ";
          nikename2 = "\n (THE REDS)";
          p2 = "25 participations | 10 finals";
          banner2 = "You'll Never Walk Alone!";
          player2 = "Mohamed Salah";
      }else if (chosenTeam2 === "newcastle") {
          l2 = "newcastle united.jpeg";
          alt2 = "Newcastle United FC";
          ucl2 = "0  \n , BEST => second group stage (third round) , (round of 16) 2003 ";
            c2 = "⚪️⚫️";
          name2 = "NEWCASTLE UNITED FC";
          nikename2 = "\n (THE MAGPIES)";
          p2 = "5 participations | 0 finals";
          banner2 = "Toon Army! , (Fortiter Defendit Triumphans!)";
          player2 = "Bruno Guimarães";
      }else if (chosenTeam2 === "chelsea") {
          l2 = "chelsea.jpeg";
          alt2 = "Chelsea FC";
          ucl2 = "2 \n , last won in Estadio do Dragão, PORTO 2021";
            c2 = "🔵🔵";
          name2 = "CHELSEA FC ";
          nikename2 = "\n (BLUES)";
          p2 = "20 participations | 3 finals";
          banner2 = "Blue is the Colour!";
          player2 = "Cole Palmer";
      }else if (chosenTeam2 === "tottenham") {
          l2 = "tottenham.jpeg";
          alt2 = "Tottenham Hotspur FC";
          ucl2 = "0 \n , BEST => runner up MADRID 2019";
            c2 = "⚪️🔵";
          name2 = "TOTTENHAM HOTSPUR FC ";
          nikename2 = "\n (SPURS)";
          p2 = "7 participations | 1 final";
          banner2 = "To Dare Is To Do!";
          player2 = "Richarlison";
      }else if (chosenTeam2 === "atletico madrid") {
          l2 = "atlitico madrid.jpeg";
          alt2 = "Atletico Madrid FC";
          ucl2 = "0 \n , BEST => runner up  Heysel stadium 1974 & Estadio da Luz 2014 & MILAN 2016";
            c2 = "⚪️🔴";
          name2 = "ATLETICO MADRID FC ";
          nikename2 = "\n (LOS COLCHONEROS) (ATLETI) (EL ROJIBLANCOS) (EL ATLETIS)";
          p2 = "22 participations | 3 finals";
          banner2 = "¡Aúpa Atleti! (Coraje y corazón!)";
          player2 = "Julián Álvarez";
      }else if (chosenTeam2 === "bayern munich") {
          l2 = "bayren munich.jpeg";
          alt2 = "Bayern Munich FC";
          ucl2 = "6 \n  , last won in Estadio da Luz, LISBON 2020";
          c2 = "🔴🔴";
          name2 = "BAYERN MUNICH FC";
          nikename2 = "\n (THE BAVARIANS) (BAYERMEUNICHN)";
          p2 = "36 participations | 11 finals";
          banner2 = "Mia San Mia!";
          player2 = "Harry Kane";
      }else if (chosenTeam2 === "juventus") {
          l2 = "juventus.jpeg";
          alt2 = "Juventus FC";
          ucl2 = "2 \n , last won in Stadio Olimpico, ROME 1996";
            c2 = "⚫️⚪️";
          name2 = "JUVENTUS FC ";
          nikename2 = "\n (THE OLD LADY) (JUVE)";
          p2 = "34 participations | 9 finals";
          banner2 = "Fino Alla Fine!";
          player2 = "Dusan Vlahovic";
      }else if (chosenTeam2 === "inter milan") {
          l2 = "inter milan.jpeg";
          alt2 = "Inter Milan FC";
          ucl2 = "3 \n , last won in Santiago Bernabéu stadium, MADRID 2010";
            c2 = "🔵⚫️";
          name2 = "INTER MILAN FC ";
          nikename2 = "\n (THE NERAZZURRI) ";
          p2 = "25 participations | 7 finals";
          banner2 = "Forza Inter!";
          player2 = "Lautaro Martínez";
      }else if (chosenTeam2 === "ac milan") {
          l2 = "ac milan.jpeg";
          alt2 = "AC Milan FC";
          ucl2 = "7 \n , last won in Olympic stadium, ATHENS 2007";
            c2 = "🔴⚫️";
          name2 = "AC MILAN FC ";
          nikename2 = "\n (THE ROSSONERI) ";
          p2 = "32 participations | 11 finals";
          banner2 = "Milan, Milan! (IL club più titolato al mondo!)";
          player2 = "Rafael Leão";
      }else if (chosenTeam2 === "napoli") {
          l2 = "napoli.jpeg";
          alt2 = "Napoli FC";
          ucl2 = "0 \n , BEST => quarter-finals 2023 , \n aggregate 2-1 loss to AC Milan";
            c2 = "🔵🔵";
          name2 = "NAPOLI FC";
          nikename2 = "\n (THE AZZURRI) ";
          p2 = "11 participations | 0 finals";
          banner2 = "Forza Napoli Sempre!";
          player2 = "Kevin De Bruyne";
      }else if (chosenTeam2 === "roma") {
          l2 = "roma.jpeg";
          alt2 = "AS Roma";
          ucl2 = "0 \n , BEST => runner up ROME 1984";
            c2 = "🔴🔴";
          name2 = "AS ROMA ";
          nikename2 = "\n (WOLVES)";
          p2 = "14 participations | 1 final";
          banner2 = "Roma non si discute, Si ama!";
          player2 = "Paulo Dybala";
      }else if (chosenTeam2 === "paris saint-germain") {
          l2 = "psg.jpeg";
          alt2 = "(PSG) Paris Saint-Germain FC";
          ucl2 = "1 \n , last won in Allianz Arena, MUNICH 2025";
            c2 = "🔵🔴";
          name2 = "PARIS SAINT-GERMAIN FC ";
          nikename2 = "\n (LES PARISIENS) (LES ROSES) (PSG)";
          p2 = "18 participations | 2 finals";
          banner2 = "Ici c'est Paris!";
          player2 = "Osmane Dembélé";
      }else if (chosenTeam2 === "borussia dortmund") {
          l2 = "brossia dortmond.jpeg";
          alt2 = "Borussia Dortmund FC";
          ucl2 = "1 \n  , last won in Olympiastadion, BERLIN 1997";
            c2 = "⚫️🟡";
          name2 = "BORUSSIA DORTMUND FC ";
          nikename2 = "\n (BVB) (THE YELLOW WASPS)";
          p2 = "23 participations | 3 finals";
          banner2 = "Echte Liebe!";
          player2 = "Serhou Guirassy";
      }

      document.getElementById("team2-logo").src = l2;
      document.getElementById("team2-logo").alt = alt2;
      document.getElementById("ucl-team2").textContent = ucl2;
      document.getElementById("team2-color").textContent = c2;
      document.getElementById("team2-name").textContent = name2;
      document.getElementById("team2-nikename").textContent = nikename2;
      document.getElementById("team2-participations").textContent = p2;
      document.getElementById("team2-banner").textContent = banner2;
      document.getElementById("team2-playerto").textContent = player2;

    }

    function derby() {
      let derby = "";

      if ((chosenTeam1 === "manchester united" && chosenTeam2 === "manchester city") || (chosenTeam1 === "manchester city" && chosenTeam2 === "manchester united")) {
        derby = "Manchester Derby 🏴⚽🏴‍☠️";
      } else if ((chosenTeam1 === "liverpool" && chosenTeam2 === "manchester united") || (chosenTeam1 === "manchester united" && chosenTeam2 === "liverpool")) {
        derby = "North West Derby 🏴⚽🏴‍☠️";
      }
      else if ((chosenTeam1 === "arsenal" && chosenTeam2 === "tottenham") || (chosenTeam1 === "tottenham" && chosenTeam2 === "arsenal")) {
        derby = "North London Derby 🏴⚽🏴‍☠️";
      }
      else if ((chosenTeam1 === "chelsea" && chosenTeam2 === "arsenal") || (chosenTeam1 === "arsenal" && chosenTeam2 === "chelsea")) {
        derby = "London Derby 🏴⚽🏴‍☠️";
      }
      else if ((chosenTeam1 === "chelsea" && chosenTeam2 === "tottenham") || (chosenTeam1 === "tottenham" && chosenTeam2 === "chelsea")) {
        derby = "North London Derby 🏴⚽🏴‍☠️";
      }
      else if ((chosenTeam1 === "liverpool" && chosenTeam2 === "manchester city") || (chosenTeam1 === "manchester city" && chosenTeam2 === "liverpool")) {
        derby = "England Derby 🏴⚽🏴‍☠️";
      }
      else if ((chosenTeam1 === "ac milan" && chosenTeam2 === "inter milan") || (chosenTeam1 === "inter milan" && chosenTeam2 === "ac milan")) {
        derby = "Derby della Madonnina (milan derby) 🎆⚽🔥";
      }
      else if((chosenTeam1 === "roma" && chosenTeam2 === "lazio") || (chosenTeam1 === "lazio" && chosenTeam2 === "roma")) {
        derby = "Derby della Capitale (Rome derby) 🎆⚽🔥";
      }
      else if ((chosenTeam1 === "inter milan" && chosenTeam2 === "juventus") || (chosenTeam1 === "juventus" && chosenTeam2 === "inter milan")) {
        derby = " Derby d'Italia 🎆⚽🔥";
      }
      else if((chosenTeam1 === "roma" && chosenTeam2 === "napoli") || (chosenTeam1 === "napoli" && chosenTeam2 === "roma")) {
        derby = "Derby del Sole (Sun Derby) 🎆⚽🔥";
      }
      else if((chosenTeam1 === "juventus" && chosenTeam2 === "ac milan") || (chosenTeam1 === "ac milan" && chosenTeam2 === "juventus")) {
        derby = "IL classico d'Italia 🎆⚽🔥";
      }
      else if((chosenTeam1 === "atletico madrid" && chosenTeam2 === "real madrid") || (chosenTeam1 === "real madrid" && chosenTeam2 === "atletico madrid")) {
        derby = "Madrid Derby ⚡⚽✨";
      }
      else if((chosenTeam1 === "barcelona" && chosenTeam2 === "real madrid") || (chosenTeam1 === "real madrid" && chosenTeam2 === "barcelona")) {
        derby = "El Clásico ⚡⚽✨";
      }
      else if((chosenTeam1 === "atletico madrid" && chosenTeam2 === "barcelona") || (chosenTeam1 === "barcelona" && chosenTeam2 === "atletico madrid")) {
        derby = "El Derbi Madrileño ⚡⚽✨";
      }
      else if((chosenTeam1 === "bayern munich" && chosenTeam2 === "borussia dortmund") || (chosenTeam1 === "borussia dortmund" && chosenTeam2 === "bayern munich")) {
        derby = "Der Klassiker 💫⚽⚔";
      }
      else {
        derby = "";
      }

      document.getElementById("derby-name").textContent = derby;
      document.getElementById("derby-name-popup").textContent = derby;
    }
  



     function startDrawAnimation(final1, final2) {
    const p1 = document.getElementById("P1game");
    const p2 = document.getElementById("P2game");

    let count = 0;
    const interval = setInterval(() => {
      // اختيار عشوائي مؤقت
      const rand1 = players[Math.floor(Math.random() * players.length)];
      const rand2 = players[Math.floor(Math.random() * players.length)];

      // عرض الأسماء المؤقتة في مكان الفريقين
      p1.textContent = rand1;
      p2.textContent = rand2;

      // حركة بسيطة أثناء القرعة
      p1.style.transform = `scale(${1 + Math.random() * 0.3}) rotate(${Math.random() * 10 - 5}deg)`;
      p2.style.transform = `scale(${1 + Math.random() * 0.3}) rotate(${Math.random() * 10 - 5}deg)`;

      count++;
      if (count > 25) {
        clearInterval(interval);

        // النتيجة النهائية 🎉
        p1.textContent = 'team1:' + final1;
        p2.textContent = 'team2:' + final2;

        p1.style.transform = "scale(1.2)";
        p2.style.transform = "scale(1.2)";

        // لمعة لطيفة
        p1.classList.add("winner-glow");
        p2.classList.add("winner-glow");

         const dingSound = document.getElementById("ding2");
      if (dingSound) {
        dingSound.currentTime = 0; 
        var playPromise = dingSound.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => { console.error("Audio play failed:", error); });
        }
      }

        // إطلاق الـ confetti 🎊
        launchConfetti();
      }
    }, 100);
  }

   function launchConfetti() {
    const duration = 2500;
    const end = Date.now() + duration;

    (function frame() {
      // نعمل شوية مربعات ملونة بتطير بشكل عشوائي
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
      confetti.style.animationDuration = 1 + Math.random() * 2 + "s";
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 3000);

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }




  // 1. كائن (Object) واحد يحتوي على جميع بيانات الفرق
const teamData = {
  "arsenal": {
    logo: "arsenal.jpeg", alt: "Arsenal FC", ucl: "0 \n , BEST => runner up SAINT-DENIS 2006",
    color: "🔴⚪️", name: "ARSENAL FC ", nickname: "\n (THE GUNNERS) ",
    p: "23 participations | 1 final", banner: "Victoria Concordia Crescit! (Victory Through Harmony!)", player: "Bukayo Saka"
  },
  "barcelona": {
    logo: "barcelona.jpeg", alt: "FC Barcelona", ucl: "5 \n , last won in Olympiastadion stadium (Olympic stadium), BERLIN 2015",
    color: "🔴🔵", name: "FC BARCELONA ", nickname: "\n (BARÇA) (CULES) (BLUGRANAS) (CATALANS)",
    p: "38 participations | 8 finals", banner: "Mes que un club!", player: "Lamine Yamal"
  },
  "real madrid": {
    logo: "real madrid.jpeg", alt: "Real Madrid CF", ucl: "15 \n , last won in Wembley stadium, LONDON 2024",
    color: "⚪️⚪️", name: "REAL MADRID CF", nickname: "\n (LOS BLANCOS) (EL MALAKY) (MADRIDIANS)",
    p: "56 participations | 18 finals", banner: "Hala Madrid!", player: "Kylian Mbappé"
  },
  "manchester united": {
    logo: "man united.jpeg", alt: "Manchester United FC", ucl: "3 \n , last won in Luzhniki stadium, MOSCOW 2008",
    color: "🔴⚫️", name: "MANCHESTER UNITED FC ", nickname: "\n (MAN UTD) (RED DEVILS) ",
    p: "23 participations | 5 finals", banner: "Glory Glory Man United!", player: "Bruno Fernandes"
  },
  "manchester city": {
    logo: "man city.jpeg", alt: "Manchester City FC", ucl: "1 \n , last won in Atatürk Olympic Stadium, ISTANBUL 2023",
    color: "🔵⚪", name: "MANCHESTER CITY FC ", nickname: "\n (MAN CITY) (CITIZENS)",
    p: "16 participations | 2 finals", banner: "Superbia in Proelio! (Pride in Battle!)", player: "Erling Haaland"
  },
  "liverpool": {
    logo: "liverpool.jpeg", alt: "Liverpool FC", ucl: "6 \n , last won in Estadio Metropolitano, MADRID 2019",
    color: "🔴🔴", name: "LIVERPOOL FC ", nickname: "\n (THE REDS) (LIVERBIRDS)",
    p: "25 participations | 10 finals", banner: "You'll Never Walk Alone!", player: "Mohamed Salah"
  },
  "newcastle": {
    logo: "newcastle united.jpeg", alt: "Newcastle United FC", ucl: "0 \n , BEST => second group stage (third round) , (round of 16) 2003 ",
    color: "⚪️⚫️", name: "NEWCASTLE UNITED FC", nickname: "\n (THE MAGPIES)",
    p: "5 participations | 0 finals", banner: "Toon Army! , (Fortiter Defendit Triumphans!)", player: "Bruno Guimarães"
  },
  "chelsea": {
    logo: "chelsea.jpeg", alt: "Chelsea FC", ucl: "2 \n , last won in Estadio do Dragão, PORTO 2021",
    color: "🔵🔵", name: "CHELSEA FC ", nickname: "\n (BLUES)",
    p: "20 participations | 3 finals", banner: "Blue is the Colour!", player: "Cole Palmer"
  },
  "tottenham": {
    logo: "tottenham.jpeg", alt: "Tottenham Hotspur FC", ucl: "0 \n , BEST => runner up Madrid 2019",
    color: "⚪️🔵", name: "TOTTENHAM HOTSPUR FC ", nickname: "\n (SPURS)",
    p: "7 participations | 1 final", banner: "To Dare Is To Do!", player: "Richarlison"
  },
  "atletico madrid": {
    logo: "atlitico madrid.jpeg", alt: "Atletico Madrid FC", ucl: "0 \n , BEST => runner up Heysel stadium 1974 & Estadio da Luz 2014 & MILAN 2016",
    color: "⚪️🔴", name: "ATLETICO MADRID FC", nickname: "\n (LOS COLCHONEROS) (ATLETI) (EL ROJIBLANCOS) (EL ATLETIS)",
    p: "22 participations | 3 finals", banner: "¡Aúpa Atleti! (Coraje y corazón!)", player: "Julián Álvarez"
  },
  "bayern munich": {
    logo: "bayren munich.jpeg", alt: "Bayern Munich FC", ucl: "6 \n , last won in Estadio da Luz, LISBON 2020",
    color: "🔴🔴", name: "BAYERN MUNICH FC", nickname: "\n (THE BAVARIANS) (BAYERMEUNICHN) ",
    p: "36 participations | 11 finals", banner: "Mia San Mia!", player: "Harry Kane"
  },
  "juventus": {
    logo: "juventus.jpeg", alt: "Juventus FC", ucl: "2 \n , last won in Stadio Olimpico, ROME 1996",
    color: "⚫️⚪️", name: "JUVENTUS FC ", nickname: "\n (THE OLD LADY) (JUVE)",
    p: "34 participations | 9 finals", banner: "Fino Alla Fine!", player: "Dusan Vlahovic"
  },
  "inter milan": {
    logo: "inter milan.jpeg", alt: "Inter Milan FC", ucl: "3 \n , last won in Santiago Bernabéu stadium, MADRID 2010",
    color: "🔵⚫️", name: "INTER MILAN FC ", nickname: "\n (THE NERAZZURRI) ",
    p: "25 participations | 7 finals", banner: "Forza Inter!", player: "Lautaro Martínez"
  },
  "ac milan": {
    logo: "ac milan.jpeg", alt: "AC Milan FC", ucl: "7 \n , last won in Olympic stadium, ATHENS 2007",
    color: "🔴⚫️", name: "AC MILAN FC ", nickname: "\n (THE ROSSONERI) ",
    p: "32 participations | 11 finals", banner: "Milan, Milan! (IL club più titolato al mondo!)", player: "Rafael Leão"
  },
  "napoli": {
    logo: "napoli.jpeg", alt: "Napoli FC", ucl: "0 \n , BEST => quarter-finals 2023 , \n aggregate 2-1 loss to AC Milan",
    color: "🔵🔵", name: "NAPOLI FC", nickname: "\n (THE AZZURRI) ",
    p: "11 participations | 0 finals", banner: "Forza Napoli Sempre!", player: "Kevin De Bruyne"
  },
  "roma": {
    logo: "roma.jpeg", alt: "AS Roma", ucl: "0 \n , BEST => runner up ROME 1984",
    color: "🔴🔴", name: "AS ROMA ", nickname: "\n (WOLVES)",
    p: "14 participations | 1 final", banner: "Roma non si discute, Si ama!", player: "Paulo Dybala"
  },
  "paris saint-germain": {
    logo: "psg.jpeg", alt: "(PSG) Paris Saint-Germain FC", ucl: "1 \n , last won in Allianz Arena, MUNICH 2025",
    color: "🔵🔴", name: "PARIS SAINT-GERMAIN FC ", nickname: "\n (LES PARISIENS) (LES ROSES) (PSG)",
    p: "18 participations | 2 finals", banner: "Ici c'est Paris!", player: "Osmane Dembélé"
  },
  "borussia dortmund": {
    logo: "brossia dortmond.jpeg", alt: "Borussia Dortmund FC", ucl: "1 \n , last won in Olympiastadion, BERLIN 1997",
    color: "⚫️🟡", name: "BORUSSIA DORTMUND FC ", nickname: "\n (THE YELLOW WASPS) (BVB)",
    p: "23 participations | 3 finals", banner: "Echte Liebe!", player: "Serhou Guirassy"
  }
};

// 2. دالة واحدة لعرض بيانات أي فريق (بديلة عن logos1 و logos2)
function displayTeamData(teamNumber, teamName) {
  const data = teamData[teamName];
  if (!data) return; // حماية

  // تأكد من إصلاح خطأ الـ ID في ملف HTML (كما ذكرت سابقاً)
  // team1-playerto و team2-playerto
  document.getElementById(`team${teamNumber}-logo`).src = data.logo;
  document.getElementById(`team${teamNumber}-logo`).alt = data.alt;
  document.getElementById(`ucl-team${teamNumber}`).textContent = data.ucl;
  document.getElementById(`team${teamNumber}-color`).textContent = data.color;
  document.getElementById(`team${teamNumber}-name`).textContent = data.name;
  document.getElementById(`team${teamNumber}-nikename`).textContent = data.nickname;
  document.getElementById(`team${teamNumber}-participations`).textContent = data.p;
  document.getElementById(`team${teamNumber}-banner`).textContent = data.banner;
  document.getElementById(`team${teamNumber}-playerto`).textContent = data.player;
}

/**
 * الدالة الرئيسية التي تدير تسلسل القرعة (التي ربطناها بالزر)
 */
/**
 * الدالة الرئيسية التي تدير تسلسل القرعة (التي ربطناها بالزر)
 */
async function startDrawAnimationSequence() {
  // 1. افتح الـ Popup
  openPopup();
  
  // 2. عطّل الزر
  const generateBtn = document.getElementById('generate-btn');
  generateBtn.disabled = true;

  // 3. [تعديل] امسح أي ديربي قديم فقط
  document.getElementById('derby-name').textContent = "";
  document.getElementById('derby-name-popup').textContent = "";
  // (النص بتاع "DRAWING..." هيتكتب من الدالة التانية)
  
  // 4. ابدأ سحب الفريق الأول
  await animateTeamDraw(1, 2500, 100); 

  // 5. ابدأ سحب الفريق الثاني
  await animateTeamDraw(2, 2500, 100);

  // 6. بعد انتهاء السحب، قم بتشغيل منطق الديربي
  derby(); 
  
  // 7. أعد تفعيل الزر
  generateBtn.disabled = false;
}


/**
 * دالة الأنيميشن الأساسية (معدلة لعرض "DRAWING...")
 */
function animateTeamDraw(teamNumber, duration = 2500, intervalTime = 100) {
  return new Promise(resolve => {
   var top = document.getElementById('derby-name-popup').textContent = "";

    const logoEl = document.getElementById(`team${teamNumber}-logo`);
    const teamEl = logoEl.closest('.team'); 
    const playerAssignmentEl = document.getElementById(`player${teamNumber}`);
    const popupNameEl = document.getElementById(`display_team${teamNumber}`);
    const popupColorEl = document.getElementById(`team${teamNumber}-color`);
    const matchupEl = document.getElementById('team1vsteam2'); // عنصر المواجهة

    // تأكد إن ده اسم الكلاس الصحيح اللي في الـ CSS
    teamEl.classList.add('is-shuffling'); 

    const intervalId = setInterval(() => {
      const randomTeamName = teams[Math.floor(Math.random() * teams.length)];
      const data = teamData[randomTeamName]; 
      if (!data) return;

      // تحديث البيانات العشوائية (في الخلفية)
      displayTeamData(teamNumber, randomTeamName);
      if (popupNameEl) popupNameEl.textContent = data.name;
      if (popupColorEl) popupColorEl.textContent = data.color;
      if (playerAssignmentEl) playerAssignmentEl.textContent = "DRAWING...";

      // --- [هذا هو الحل لمشكلة النص] ---
      // هنكتب "DRAWING..." في مكان المواجهة أثناء السحب
      if (teamNumber === 1) {
        if (matchupEl) {
          matchupEl.textContent = "DRAWING TEAM 1...";
          top.textContent = matchupEl.textContent;
        }
      } else {
        if (matchupEl) {
          matchupEl.textContent = "DRAWING TEAM 2...";
            top.textContent = matchupEl.textContent;
        }
      }

    }, intervalTime);

    // --- بعد انتهاء الوقت (الاختيار النهائي) ---
    setTimeout(() => {
      clearInterval(intervalId); 
      teamEl.classList.remove('is-shuffling'); 

      // [اختيار الفريق النهائي وعرض بياناته]
      let finalTeamName;
      if (teamNumber === 1) {
        team1Generator(); 
        finalTeamName = chosenTeam1;
      } else {
        team2Generator(); 
        finalTeamName = chosenTeam2;
      }
      const finalData = teamData[finalTeamName];
      if (!finalData) { resolve(); return; } 

      displayTeamData(teamNumber, finalTeamName);
      if (popupNameEl) popupNameEl.textContent = finalData.name;
      if (popupColorEl) popupColorEl.textContent = finalData.color;
      
      // [تحديث المواجهة النهائية]
      if (teamNumber === 1) {
        if (matchupEl) matchupEl.textContent = `${finalData.name} VS ...?`;
      } else {
        const team1FinalName = document.getElementById('display_team1').textContent;
        if (matchupEl) matchupEl.textContent = `${team1FinalName} VS ${finalData.name}`;
      }
      
      // [استعادة أسماء اللاعبين]
      if (playerAssignmentEl && teamNumber === 1 && team1Player) {
        playerAssignmentEl.textContent = "team1 -> {🎯 " + team1Player + " }";
      } else if (playerAssignmentEl && teamNumber === 2 && team2Player) {
        playerAssignmentEl.textContent = "team2 -> {🎯 " + team2Player + " }";
      } else if (playerAssignmentEl) {
          playerAssignmentEl.textContent = ""; 
        }

      // [تشغيل أنيميشن الاحتفال والصوت]
      teamEl.classList.add('team-reveal');
      if (popupNameEl) popupNameEl.classList.add('text-reveal');
      if (popupColorEl) popupColorEl.classList.add('text-reveal');
      
      const dingSound = document.getElementById("ding");
      if (dingSound) {
        dingSound.currentTime = 0; 
        var playPromise = dingSound.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => { console.error("Audio play failed:", error); });
        }
      }

      // [إزالة الكلاسات بعد الأنيميشن]
      setTimeout(() => {
        teamEl.classList.remove('team-reveal');
        if (popupNameEl) popupNameEl.classList.remove('text-reveal');
        if (popupColorEl) popupColorEl.classList.remove('text-reveal');
      }, 600);
      
      resolve(); 
    }, duration);
  });
}


