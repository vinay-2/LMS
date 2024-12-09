from rest_framework import serializers
from .models import Teacher

class TeacherSerializer(serializers.ModelSerializer):  # Correct Serializer class name
    class Meta:
        model = Teacher  # Reference the Teacher model
        fields = ['teacher_id', 'first_name', 'last_name', 'email', 'mobile_number']
 