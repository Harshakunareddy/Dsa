package harsha;

import java.util.Scanner;

public class TypeCasting {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        float num = input.nextFloat();

        System.out.println(num);

//        int num2 = input.nextFloat() error
        float num2 = input.nextInt(); // no error

//        type casting = narrowing Conversion
        int num3 = (int)(12.3f);

        int a = 257;
        byte b = (byte)(a); //reminder comes output 257/256 = 1

        byte c = 67;

        int d = b + c;
        int number = 'A';
        System.out.println(number); //A = 65 , a = 97






    }
}
