import java.util.ArrayList;
import java.util.Scanner;

public class ListaDeTareas {
    private static ArrayList<String> tareas = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int opcion = 0;
        do {
            mostrarMenu();
            opcion = Integer.parseInt(scanner.nextLine());
            switch (opcion) {
                case 1:
                    agregarTarea();
                    break;
                case 2:
                    listarTareas();
                    break;
                case 3:
                    eliminarTarea();
                    break;
                case 4:
                    System.out.println("Saliendo de la aplicación...");
                    break;
                default:
                    System.out.println("Opción no válida. Intente de nuevo.");
            }
        } while (opcion != 4);
    }

    private static void mostrarMenu() {
        System.out.println("\n--- Lista de Tareas ---");
        System.out.println("1. Agregar tarea");
        System.out.println("2. Listar tareas");
        System.out.println("3. Eliminar tarea");
        System.out.println("4. Salir");
        System.out.print("Seleccione una opción: ");
    }

    private static void agregarTarea() {
        System.out.print("Ingrese la descripción de la tarea: ");
        String descripcion = scanner.nextLine();
        tareas.add(descripcion);
        System.out.println("Tarea agregada.");
    }

    private static void listarTareas() {
        System.out.println("\n--- Tareas ---");
        if (tareas.isEmpty()) {
            System.out.println("No hay tareas en la lista.");
        } else {
            for (int i = 0; i < tareas.size(); i++) {
                System.out.println((i + 1) + ". " + tareas.get(i));
            }
        }
    }

    private static void eliminarTarea() {
        listarTareas();
        if (!tareas.isEmpty()) {
            System.out.print("Ingrese el número de la tarea a eliminar: ");
            int indice = Integer.parseInt(scanner.nextLine()) - 1;
            if (indice >= 0 && indice < tareas.size()) {
                tareas.remove(indice);
                System.out.println("Tarea eliminada.");
            } else {
                System.out.println("Número de tarea no válido.");
            }
        }
    }
}
