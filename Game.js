const GameState = Object.freeze({
    WELCOMING:   Symbol("WELCOMING"),
    TEST1: Symbol("TEST1"),
    TEST2: Symbol("TEST2"),
    TEST3: Symbol("TEST3"),
    TEST4: Symbol("TEST4"),
    TEST5: Symbol("TEST5"),
    TEST6: Symbol("TEST6"),
    TEST7: Symbol("TEST7"),
    TEST8: Symbol("TEST8"),
    TEST9: Symbol("TEST9"),
    TEST10: Symbol("TEST10"),
    TEST11: Symbol("TEST11"),
    TEST12: Symbol("TEST12"),
    TEST13: Symbol("TEST13"),
    TEST14: Symbol("TEST14"),
    TEST15: Symbol("TEST15"),
    TEST16: Symbol("TEST16"),
    TEST17: Symbol("TEST17"),
    TEST18: Symbol("TEST18"),
    TEST19: Symbol("TEST19"),
    });

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){

            case GameState.WELCOMING:
                sReply = "Welcome to the math test, Enter yes to play the game";
                this.stateCur = GameState.TEST1;
            break;

            case GameState.TEST1:
                if(sInput.toLowerCase().match("play")){
                    sReply="grat! whats the square root of 47?";
                    this.stateCur = GameState.TEST2;
                }else{
                    sReply="try again";
                }
            break;

            case GameState.TEST2:
            if(sInput.toLowerCase().match("7")){
                sReply="grat! whats the square root of 64?";
                this.stateCur = GameState.TEST3;
            }else{
                sReply="try again";
            }
           break;


           case GameState.TEST3:
           if(sInput.toLowerCase().match("8")){
               sReply="grat! whats the square root of 144?";
               this.stateCur = GameState.TEST4;
           }else{
               sReply="try again";
           }
           break;

           case GameState.TEST4:
           if(sInput.toLowerCase().match("12")){
               sReply="grat! whats the multiplication of 17 and 15?";
               this.stateCur = GameState.TEST5;
           }else{
               sReply="try again";
           }
           break;

            case GameState.TEST5:
            if(sInput.toLowerCase().match("255")){
                sReply="grat! whats the addition of 17 and 15?";
                this.stateCur = GameState.TEST6;
            }else{
                sReply="try again";
            }
            break;

            case GameState.TEST6:
            if(sInput.toLowerCase().match("32")){
                sReply="grat! whats the subtraction of 17 and 15?";
                this.stateCur = GameState.TEST7;
            }else{
                sReply="try again";
            }
            break;

            case GameState.TEST7:
            if(sInput.toLowerCase().match("2")){
                sReply="grat! whats the subtraction of 17 and 15?";
                this.stateCur = GameState.TEST8;
            }else{
                sReply="try again";
            }
            break;
            
            case GameState.TEST8:
            if(sInput.toLowerCase().match("2")){
                sReply="grat! whats the subtraction of 582 and 231?";
                this.stateCur = GameState.TEST9;
            }else{
                sReply="try again";
            }
        break;

            case GameState.TEST9:
            if(sInput.toLowerCase().match("351")){
                sReply="great! whats the division of 230 and 2?";
                this.stateCur = GameState.TEST10;
            }else{
                sReply="try again";
            }
            break;

            case GameState.TEST10:
            if(sInput.toLowerCase().match("115")){
                sReply="grat! whats the subtraction of 1710 and 1536?";
                this.stateCur = GameState.TEST11;
            }else{
                sReply="try again";
            }
            break;

            case GameState.TEST11:
            if(sInput.toLowerCase().match("174")){
                sReply="grat! whats the addition of 127 and 105?";
                this.stateCur = GameState.TEST12;
            }else{
                sReply="try again";
            }
        break;

            case GameState.TEST12:
            if(sInput.toLowerCase().match("232")){
                sReply="grat! whats the addition of 117 and 125?";
                this.stateCur = GameState.TEST13;
            }else{
                sReply="try again";
            }
            break;

            case GameState.TEST13:
            if(sInput.toLowerCase().match("242")){
                sReply="grat! whats the addition of 5 and 12?";
                this.stateCur = GameState.TEST14;
            }else{
                sReply="try again";
            }
            break;


            case GameState.TEST14:
            if(sInput.toLowerCase().match("17")){
                sReply="grat! whats the addition of 15 and 2?";
                this.stateCur = GameState.TEST15;
            }else{
                sReply="try again";
            }
            break;
            case GameState.TEST15:
            if(sInput.toLowerCase().match("17")){
                sReply="grat! whats the subtraction of 5 and 12?";
                this.stateCur = GameState.TEST16;
            }else{
                sReply="try again";
            }
            break;

            case GameState.TEST16:
            if(sInput.toLowerCase().match("-7")){
                sReply="grat! whats the subtraction of 105 and 5?";
                this.stateCur = GameState.TEST17;
            }else{
                sReply="try again";
            }
            break;

            case GameState.TEST17:
            if(sInput.toLowerCase().match("100")){
                sReply="grat! whats the multiplication of 5 and 12?";
                this.stateCur = GameState.TEST18;
            }else{
                sReply="try again";
            }
            break;

            case GameState.TEST18:
            if(sInput.toLowerCase().match("60")){
                sReply="grat! whats the multiplication of 50 by 10?";
                this.stateCur = GameState.TEST19;
            }else{
                sReply="try again";
            }
            break;

            case GameState.TEST19:
            if(sInput.toLowerCase().match("500")){
                sReply="grat You finished the game YaY!!";
            }else{
                sReply="try again";
            }
            break;
        }
        return(sReply);
    }
}