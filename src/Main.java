import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter student name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your score: ");
        int score = scanner.nextInt();

        String grade;

        if (score >= 70) {
            grade = "A";
        } else if (score >= 60) {
            grade = "B";
        } else if (score >= 50) {
            grade = "C";
        } else if (score >= 40) {
            grade = "D";
        } else {
            grade = "F";
        }

        System.out.println("Hello " + name);
        System.out.println("Your score is " + score);
        System.out.println("Your grade is " + grade);

        scanner.close();
    }
}