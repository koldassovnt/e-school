package com.example.eschool.controller;

import com.example.eschool.module.Student;
import com.example.eschool.service.StudentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/students")
public class StudentsController extends Thread{

    final
    StudentsService studentsService;

    public StudentsController(StudentsService studentsService) {
        this.studentsService = studentsService;
        this.studentsService.createStudentsTable();
    }

    @GetMapping(value = "/all")
    public ResponseEntity<?> getAllCards(){
        List<Student> students;
        if (studentsService.getAllStudents().size() < 1)
            studentsService.saveDefaultStudents();

        students = studentsService.getAllStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @PostMapping(value = "/saveStudent")
    public ResponseEntity<?> saveStudent(@RequestBody Student student){
        System.out.println(student);
        studentsService.saveStudent(student);
        return ResponseEntity.ok(student);
    }

    @PostMapping(value = "/deleteStudent/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable(name = "id") Long id) {
        studentsService.deleteStudentById(id);
        return ResponseEntity.ok("DELETED");
    }

    @GetMapping(value = "/student/{id}")
    public ResponseEntity<?> getCardTasks(@PathVariable(name = "id") Long id) {
        Student student = studentsService.getStudentById(id);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

}
