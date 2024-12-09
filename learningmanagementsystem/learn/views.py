from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Teacher
from .serializers import TeacherSerializer  # Ensure 'serializers' is correctly spelled

class TeacherList(APIView):
    def get(self, request):  # Use None for optional parameters
        teachers = Teacher.objects.all()  # Correct object name
        serializer = TeacherSerializer(teachers, many=True)  # Correct name of serializer
        return Response(serializer.data)
