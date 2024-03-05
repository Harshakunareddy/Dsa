package harsha;

import java.util.Arrays;

public class Arraysa {
    public static void main(String[] args) {
        System.out.println("Arrays in Java");
        int [] numbers = {10,20,30,40,50};
        System.out.println("Total Numbers :"+numbers.length);
        for(int i=0; i < numbers.length; i++){
            System.out.println(numbers[i]);
        }
        System.out.println("While");
        int a = 0;
        while(a<numbers.length){
            System.out.println(numbers[a]);
            a++;
        }
        System.out.println("Do While");
        int b=0;
        do{
            System.out.println(numbers[b]);
            b++;
        }while (b< numbers.length);

        int[][] matrix = {
                {1,2,3},
                {3,2,1},
                {1,2,5}
        };
        System.out.println(matrix[1][0]);

//        Arrays.sort();
//        like this all functions can be get
        

    }
}
