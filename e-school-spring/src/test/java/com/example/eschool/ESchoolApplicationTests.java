package com.example.eschool;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.springframework.web.client.RestTemplate;
import org.testng.Assert;


@SpringBootTest(classes = ESchoolApplication.class)
class ESchoolApplicationTests extends AbstractTestNGSpringContextTests {

	@Test
	public void addStudent() {
		String addURI = "http://localhost:8000/students/saveStudent";
		HttpHeaders headers = new HttpHeaders();
		headers.add("Accept", "application/json");
		headers.add("Content-Type", "application/json");
		String jsonBody = "{\"name\":\"testname\",\"surname\":\"testsurname\",\"age\":\"50\",\"gpa\":\"3.0\"}";
		HttpEntity<String> entity = new HttpEntity<String>(jsonBody, headers);

		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> response =restTemplate.postForEntity(addURI, entity, String.class);
		Assert.assertEquals(response.getStatusCode(), HttpStatus.OK);
	}
}
