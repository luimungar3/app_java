package com.ejemplo.listadetareas.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TareaService {

    private List<String> tareas = new ArrayList<>();

    // Método para agregar tarea
    public void agregarTarea(String descripcion) {
        tareas.add(descripcion);
    }

    // Método para listar tareas
    public List<String> listarTareas() {
        return tareas;
    }

    // Método para eliminar tarea
    public String eliminarTarea(int indice) {
        if (indice >= 0 && indice < tareas.size()) {
            tareas.remove(indice);
            return "Tarea eliminada.";
        } else {
            return "Número de tarea no válido.";
        }
    }
}
