package com.example.eschool.mapper;

import com.example.eschool.module.Student;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface StudentsMapper {

    void createStudentsTable();
    List<Student> getAllStudents();
    Student getStudentById(Long id);
    void saveDefaultStudents();
    void saveStudent(Student student);
    void deleteStudentById(Long id);
    void updateStudent(@Param("id") Long id, @Param("name") String name,
                       @Param("surname") String surname, @Param("age") int age, @Param("gpa") double gpa);
}
