import java.util.Scanner;

public class Main {
	public static void main(String[] args){
		Scanner leitor = new Scanner(System.in);

		int A, B, PROD;
		A = leitor.nextInt();
		B = leitor.nextInt();

		PROD = A * B; // Implemente o codigo que representa a multiplicacao.

		System.out.print("PROD = " + PROD)

		leitor.close();
	}
}