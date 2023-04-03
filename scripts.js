class main{
    constructor(){

        //Initialise Variables
        this.ImagePaths = ["./img/MaybeHappyRory.jpg", "./img/RoryEating.jpg", "./img/ShepardRory.jpg", "./img/vampire1.jpg", "./img/vampire2.jpg", "./img/RorysSideEye.jpg", "./img/WhereAmI.jpg"]; //Images must be 640x360
        //true = Rory / false = Vampire
        this.Answers = [true, true, true, false, false, true, true];

        this.number = 0;
        this.score = 0;
        this.tempNumber = 0;
        this.lastScore = 0;

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

        //Hide leaderboard
        this.leaderboardScreen.style.display = "none";

        this.Preload();
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
        if (this.Answers[this.number] == true){
            this.score++;
        }
        else{
            this.EndGame()
        }
        this.Update();
    }

    VampireUpdate(){
        if (this.Answers[this.number] == false){
            this.score++;
        }
        else{
            this.EndGame()
        }
        this.Update();
    }

    Update(){
        //Random number with validation
        while (this.tempNumber == this.number){
            this.tempNumber = Math.floor(Math.random() * this.ImagePaths.length);
        }

        this.number = this.tempNumber;
     
        //Sets image
        this.imageEle.src = ((this.ImagePaths[this.number]).toString());

        //Update Score
        this.scoreEle.innerHTML = this.score;
    }

    Preload(){
        var Images = [];
        for (var i = 0; i < this.ImagePaths.length; i++){
            Images[i] = new Image();
            Images[i].src = this.ImagePaths[i];
        }
    }

    EndGame(){
        if (this.score > 0){
            this.ShowLeaderboard();
        }
        console.log(this.score);
        this.lastScore = this.score;
        this.score = 0;
    }

    DisplayError(){

    }

    UpdateLeaderboard(){
        var username = document.getElementById("nameInput").value;

        if (username in this.leaderboard){
            this.DisplayError();
            alert("Username Taken");
            return null;
        }
        
        else{
            this.leaderboard[username] = this.score;
        }
    }
}

const run = new main();

