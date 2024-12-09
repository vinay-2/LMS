from django.db import models


class Teacher(models.Model):
    teacher_id = models.CharField(max_length=10, unique=True)  
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    mobile_number = models.CharField(max_length=10)

    class Meta:
        verbose_name_plural = "1.Teachers"

    
    

class CourseCategory(models.Model):  
    title = models.CharField(max_length=100)
    course_description = models.TextField()

    class Meta:
        verbose_name_plural = "2.CourseCategories"

    

class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20)  
    mobile_number = models.CharField(max_length=10)
    qualification = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "3.Students"

    

class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.SET_NULL, null=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=100)
    course_description = models.TextField()

    class Meta:
        verbose_name_plural = "4.Courses"

    
