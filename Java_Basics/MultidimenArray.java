// int a[][];
// int[][] a;
// int [][]a;
// a = new int[row][col]
// int a[][] = new int[3][2];
// a[0][1] = 20;

public class MultidimenArray {
    public static void main(String[] args) {
        // Declaration and initialization
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Accessing elements
        System.out.println("Element at matrix[1][2]: " + matrix[1][2]); // Output: 6

        // Traversing the array
        System.out.println("Traversing the array:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

        // Finding length
        System.out.println("Number of rows: " + matrix.length);
        System.out.println("Number of columns in row 0: " + matrix[0].length);

        // Copying array
        int[][] copiedMatrix = new int[matrix.length][matrix[0].length];
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                copiedMatrix[i][j] = matrix[i][j];
            }
        }

        // Displaying copied array
        System.out.println("Copied array:");
        for (int i = 0; i < copiedMatrix.length; i++) {
            for (int j = 0; j < copiedMatrix[i].length; j++) {
                System.out.print(copiedMatrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}
