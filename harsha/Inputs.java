package harsha;

import java.util.Scanner;

public class Inputs {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the number:");
        int roll = input.nextInt();
        System.out.println("Entered Number="+roll);

        String name = input.next();//first word
        String nameLine = input.nextLine();//total line
        float marks  = input.nextFloat();
//        input.next
    }
}
