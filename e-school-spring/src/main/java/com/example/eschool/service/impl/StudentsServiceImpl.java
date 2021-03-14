package com.example.eschool.service.impl;

import com.example.eschool.mapper.StudentsMapper;
import com.example.eschool.module.Student;
import com.example.eschool.service.StudentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class StudentsServiceImpl implements StudentsService {

    @Autowired
    StudentsMapper studentsMapper;

    @Override
    public void createStudentsTable() {
        studentsMapper.createStudentsTable();
    }

    @Override
    public List<Student> getAllStudents() {
        return studentsMapper.getAllStudents();
    }

    @Override
    public Student getStudentById(Long id) {
        return studentsMapper.getStudentById(id);
    }

    @Override
    public void saveDefaultStudents() {
        studentsMapper.saveDefaultStudents();
    }

    @Override
    public void saveStudent(Student student) {
        studentsMapper.saveStudent(student);
    }

    @Override
    public void deleteStudentById(Long id) {
        studentsMapper.deleteStudentById(id);
    }

    @Override
    public void updateStudent(Long id, String name, String surname, int age, double gpa) {
        studentsMapper.updateStudent(id, name, surname, age, gpa);
    }
}
