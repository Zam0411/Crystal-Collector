$( document ).ready(function(){
    //Displayed Random Number Computer Will Choose To Have User Match
    var compChoice = [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62];
    var compDisplay = compChoice[Math.floor(Math.random() * compChoice.length)];
    $('#targetNumber').text(compDisplay);
    //Array Created For Buttons Number Assignment
    var userChoice1 = [1, 3, 5];
    var userChoice2 = [6, 4, 2];
    var userChoice3 = [7, 8, 9];
    var userChoice4 = [10, 11, 12];
    //Setting Up Numbers For Specific Buttons
    var purple = userChoice4[Math.floor(Math.random() * userChoice4.length)];
    var blue = userChoice1[Math.floor(Math.random() * userChoice1.length)];
    var yellow = userChoice3[Math.floor(Math.random() * userChoice3.length)];
    var green = userChoice2[Math.floor(Math.random() * userChoice2.length)];
    
    //Setting User Total and Results
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    
    
    //Refreshes Game Once A Win Or Loss Is Had
    function refresh(){
         compDisplay = compChoice[Math.floor(Math.random() * compChoice.length)];
         $('#targetNumber').text(compDisplay);
         purple = userChoice4[Math.floor(Math.random() * userChoice4.length)];
         blue = userChoice1[Math.floor(Math.random() * userChoice1.length)];
         yellow = userChoice3[Math.floor(Math.random() * userChoice3.length)];
         green = userChoice2[Math.floor(Math.random() * userChoice2.length)];
         userScore= 0;
         $('.finalTotal').text(userScore);
    } 
    //Adds The Wins To The userScore
    function winning(){
        wins++; 
        $('.won').text(wins);
        refresh();
    }
    //Adds The Losses To The userScore
    function loss(){
        losses++;
        $('.loss').text(losses);
        refresh()
    }

    //Setting Click Events And Results For All Buttons
    $('.purp').on ('click', function(){
        userScore = userScore + purple;
        $('.finalTotal').text(userScore); 
            if (userScore == compDisplay) {
                winning();
            }
            else if (userScore > compDisplay){
                loss();
            }
    });  

    $('.blu').on ('click', function(){
        userScore = userScore + blue;
        $('.finalTotal').text(userScore); 
            if (userScore == compDisplay) {
                winning();
            }
            else if (userScore > compDisplay){
                loss();
            }
    });  

    $('.yel').on ('click', function(){
        userScore = userScore + yellow;
        $('.finalTotal').text(userScore); 
            if (userScore == compDisplay) {
                winning();
            }
            else if (userScore > compDisplay){
                loss();
            }
    });  

    $('.gre').on ('click', function(){
        userScore = userScore + green;
        $('.finalTotal').text(userScore);
            if (userScore == compDisplay) {
                winning();
            }
            else if (userScore > compDisplay){
                loss();
            } 
    });



    
    
   

});  

    



    

    
    
   



