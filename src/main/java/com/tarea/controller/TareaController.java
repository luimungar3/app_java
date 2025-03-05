package com.ejemplo.listadetareas.controller;

import com.ejemplo.listadetareas.service.TareaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tareas")
public class TareaController {

    @Autowired
    private TareaService tareaService;

    // Endpoint para agregar tarea
    @PostMapping("/agregar")
    public String agregarTarea(@RequestParam String descripcion) {
        tareaService.agregarTarea(descripcion);
        return "Tarea agregada exitosamente";
    }

    // Endpoint para listar tareas
    @GetMapping("/listar")
    public List<String> listarTareas() {
        return tareaService.listarTareas();
    }

    // Endpoint para eliminar tarea
    @DeleteMapping("/eliminar")
    public String eliminarTarea(@RequestParam int indice) {
        return tareaService.eliminarTarea(indice);
    }
}
