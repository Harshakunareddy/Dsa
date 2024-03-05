package harsha;

public class Conditions {
  /*  public static void main(String[] args) {
        int a = 10;
        if (a>5){
            a+=10;
            System.out.println(a);
        } else if (a<5) {
            System.out.println(a);
        }
        else{
            System.out.println("Hi Bro");
        }

    }

    public static void main(String[] args) {
        int b = 2;
        String dayName;
        switch (b){
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;

            case 6:
                dayName = "Saturday";
                break;
            case 7:
                dayName = "Sunday";
                break;
            default:
                dayName = "Invalid Day";
        }

        System.out.println("Day Name of number b = "+dayName);
    }


   */

    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
        int a = 10;
        while(a<20){
            System.out.println(a);
            a++;
        }
        int b = 1;
        do{
            System.out.println(b);
            b++;
        }while (b<20);
    }
}



