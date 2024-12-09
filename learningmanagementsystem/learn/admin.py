from django.contrib import admin

# Register your models here
from .models import Teacher,CourseCategory,Student,Course 

admin.site.register(Teacher)
admin.site.register(CourseCategory)
admin.site.register(Student)
admin.site.register(Course)

