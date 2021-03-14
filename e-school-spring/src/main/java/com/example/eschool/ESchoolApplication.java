package com.example.eschool;

import com.example.eschool.module.Student;
import org.apache.ibatis.type.MappedTypes;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@MappedTypes(Student.class)
@MapperScan("com.example.eschool.mapper")
@SpringBootApplication
public class ESchoolApplication {

	public static void main(String[] args) {
		SpringApplication.run(ESchoolApplication.class, args);
	}

}
