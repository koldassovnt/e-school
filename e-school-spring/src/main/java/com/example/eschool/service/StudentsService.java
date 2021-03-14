package com.example.eschool.service;

import com.example.eschool.module.Student;

import java.util.List;

public interface StudentsService {

    void createStudentsTable();
    List<Student> getAllStudents();
    Student getStudentById(Long id);
    void saveDefaultStudents();
    void saveStudent(Student student);
    void deleteStudentById(Long id);
    void updateStudent(Long id, String name, String surname, int age, double gpa);
}
