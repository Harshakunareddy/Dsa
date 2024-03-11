function twoDigToNumber(n){
    if(n>99){
        return "Out of Range of 2 digits"
    }
    if(n<=20 && n>0){
        switch(n){
            case 1:
                return "One"
                
            case 2:
                return "Two"
                
            case 3:
                return "Three"
                
            case 4:
                return "Four"
                
            case 5:
                return "Five"
                
            case 6:
                return "six"
                
            case 7:
                return "Seven"
                
            case 8:
                return "Eight"
            
            case 9:
                return "Nine"
            
            case 10:
                return "Ten"
                
            case 11:
                return "Eleven"
                
            case 12:
                return "Twelve"
                
            case 13:
                return "Thirteen"
                
            case 14:
                return "Fourteen"
                
            case 15:
                return "Fifteen"

            case 16:
                return "Sixteen"
                
            case 17:
                return "Seventeen"
                
            case 18:
                return "Eighteen"
                
            case 19:
                return "Ninteen"
                
            case 20:
                return "Twenty"
        }

        
    }

    else if(n>21 && n<99){
        let ones = n%10;
        let tens = Math.floor(n/10);
        let result = "";

        switch(tens){
            case 2:
                result += "twenty"
                break;
            case 3:
                result += "thirty"
                break;
            case 4:
                result += "fourty"
                break;
            case 5:
                result += "Fifty"
                break;
            case 6:
                result += "sixty"
                break;

            case 7:
                result += "seventy"
                break;
            case 8:
                result += "Eighty"
                break;

            case 9:
                result += "Ninety"
                break;
        
        }

        if (ones !== 0) {
            
            result += "-";

            switch(ones){
                case 1:
                    result += "One"
                    break;

                case 2:
                    result += "Two"
                    break;

                case 3:
                    result += "Three"
                    break;

                case 4:
                    result += "Four"
                    break;

                case 5:
                    result += "Five"
                    break;

                case 6:
                    result += "Six"
                    break;

                case 7:
                    result += "Seven"
                    break;

                case 8:
                    result += "Eight"
                    break;

                case 9:
                    result += "Nine"
                    break;
            
            }
        
        }
        return result;

    }






}


console.log(twoDigToNumber(95));