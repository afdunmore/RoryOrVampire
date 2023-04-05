//Todos:
// -Add writing for leaderboard

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function witch(){
    var audio = new Audio('feelgood.mp3');
    audio.play();
}

class main{
    constructor(){
      
      <!-- Insert this script at the bottom of the HTML, but before you use any Firebase services -->
      import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js'

      // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
      import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js'

      // Add Firebase products that you want to use
      import { getAuth } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js'
      import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js'

      // TODO: Replace the following with your app's Firebase project configuration
      const firebaseConfig = {
        // ...
      };

        //Initialise Variables
        //Images must be 640x360
        this.vampirePaths = [ "./img/vampire1.jpg", "./img/vampire2.jpg","./img/vampire3.png", "./img/vampire4.png"];
        this.roryPaths = ["./img/MaybeHappyRory.jpg", "./img/RoryEating.jpg", "./img/ShepardRory.jpg","./img/RorysSideEye.jpg", "./img/WhereAmI.jpg"];

        this.number = 0;
        this.score = 0;
        this.tempNumber = 0;
        this.lastScore = 0;
        this.imageType = 0;
        
        fetch("leaderboard.json")
          .then(response => response.json())
          .then(json => {
            
            this.leaderboard = json;
            
            //Getting Elements
            this.imageEle = document.getElementById("imageID");
            this.RoryEle = document.getElementById("Rory");
            this.VampireEle = document.getElementById("Vampire");
            this.scoreEle = document.getElementById("score");
            this.leaderboardScreen = document.getElementById("leaderboard")
            this.leaderboardButton = document.getElementById("leaderboardButton")
            this.leaderboardSubmitButton = document.getElementById("submitName")

            //Set image
            this.Update();

            //Button event listeners
            this.RoryEle.addEventListener("click", this.RoryUpdate.bind(this));
            this.VampireEle.addEventListener("click", this.VampireUpdate.bind(this));  
            this.leaderboardButton.addEventListener("click", this.ShowLeaderboard.bind(this));
            this.leaderboardSubmitButton.addEventListener("click", this.UpdateLeaderboard.bind(this));

            this.Preload();
            
          });

        

        
    }

    ShowLeaderboard(){
        if (this.leaderboardScreen.style.display == "none"){
            this.leaderboardScreen.style.display = "block"
        }

        else{
            this.leaderboardScreen.style.display = "none"
        }

    }

    RoryUpdate(){
        if (this.imageType == 0){
            this.score++;
        }
        else{
            this.EndGame()
        }
        this.Update();
    }

    VampireUpdate(){
        if (this.imageType == 1){
            this.score++;
        }
        else{
            this.EndGame()
        }
        this.Update();
    }

    Update(){
        //Random number for type
        this.imageType = Math.floor(Math.random() * 2);
        
        //Rory
        if (this.imageType == 0){
            //Random number with validation for image
            while (this.tempNumber == this.number){
                this.tempNumber = Math.floor(Math.random() * this.roryPaths.length);
            }
            
            this.number = this.tempNumber;
            
            //Sets image
            this.imageEle.src = ((this.roryPaths[this.number]).toString());
            
            
        }
        
        //Vampire
        else if (this.imageType == 1){
            //Random number with validation for image
            while (this.tempNumber == this.number){
                this.tempNumber = Math.floor(Math.random() * this.vampirePaths.length);
            }
            
            this.number = this.tempNumber;
            
            //Sets image
            this.imageEle.src = ((this.vampirePaths[this.number]).toString());
        }

        
        //Update Score
        this.scoreEle.innerHTML = this.score;
    }

    Preload(){
        var j = 0;
        var Images = [];
        for (var i = 0; i < this.vampirePaths.length; i++){
            Images[i] = new Image();
            Images[i].src = this.vampirePaths[i];
            
            j++;               
        }
        
        for (var i = 0; i < this.roryPaths.length; i++){
            Images[i + j] = new Image();
            Images[i + j].src = this.roryPaths[i];
        }
    }

    EndGame(){
        if (this.score > 0){
            //this.ShowLeaderboard();
        }
        this.lastScore = this.score;
        this.score = 0;
    }

    DisplayError(){

    }

    UpdateLeaderboard(){
        var username = document.getElementById("nameInput").value;
        
        if (username == ""){
            alert("Username is null")
        }

        else if (username in this.leaderboard){
            this.DisplayError();
            alert("Username Taken");
            return null;
        }
        
        else{
            this.leaderboard[username] = this.score;
            console.log(this.leaderboard);
        }
    }
}

const run = new main();

