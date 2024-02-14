package net.javaguides.springbootrestapi.controller;

import net.javaguides.springbootrestapi.bean.Student;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("students")
public class StudentController {

    //http://localhost:8080/student
    @GetMapping("student")
    public ResponseEntity<Student> getStudent(){
        Student student = new Student(
                1,
                "Abhishek",
                "Chauhan"
        );
        //return new  ResponseEntity<>(student, HttpStatus.OK);
        return ResponseEntity.ok().header("custom-header","Abhishek")
                .body(student);
    }

    // http://localhost:8080/students
    @GetMapping("students")
    public ResponseEntity<List<Student>> getStudents(){
        List<Student> students = new ArrayList<>();
        students.add(new Student(1,"Ramesh", "Singh"));
        students.add(new Student(2,"Abhishek", "Singh"));
        students.add(new Student(3,"Ronak", "Singh"));
        students.add(new Student(4,"Raju", "Singh"));
        return ResponseEntity.ok(students);
    }

    // Spring BOOT REST API with Path Variable
    // {id} - URI template variable
    // http://localhost:8080/students/1
    @GetMapping("{id}")
    public Student studentPathVariable(@PathVariable("id") int studentId){
        return new Student(studentId, "Abhishek", "Singh");
    }

    // http://localhost:8080/students/1/Abhishek/Chauhan
    @GetMapping("{id}/{first-name}/{last-name}")
    public ResponseEntity<Student> studentPathVariable(@PathVariable("id") int studentId,
                                       @PathVariable("first-name") String firstName,
                                       @PathVariable("last-name") String lastName){
        Student student = new Student(studentId, firstName, lastName);
        return ResponseEntity.ok(student);
    }

    // Spring boot REST API with request Param
    // http://localhost:8080/students/query?id=1&firstName=Abhishek&lastName=Singh
    @GetMapping("query")
    public Student studentRequestVariable(@RequestParam int id,
                                          @RequestParam String firstName,
                                          @RequestParam String lastName){
        return new Student(id, firstName, lastName);
    }

    // Spring boot REST API that handles HTTP POST Request
    // @PostMapping and @RequestBody
    // http://localhost:8080/students/create
    @PostMapping("create")
    @ResponseStatus(HttpStatus.CREATED)
    public Student createStudent(@RequestBody Student student){
        System.out.println(student.getId());
        System.out.println(student.getFirstName());
        System.out.println(student.getLastName());
        return student;
    }

    // Spring boot REST API that handles HTTP PUT Request - updating the existing resource
    @PutMapping("{id}/update")
    public  Student updateStudent(@RequestBody Student student, @PathVariable("id") int studentId){
        System.out.print(student.getFirstName());
        System.out.print(student.getLastName());
        return  student;
    }

    // Sprint-boot REST API that handles HTTP DELETE Request-deleting the existing resource
    @DeleteMapping("{id}/delete")
    public  String deleteStudent(@PathVariable("id") int studentId){
        System.out.println(studentId);
        return "Student deleted successfully!";
    }
}
