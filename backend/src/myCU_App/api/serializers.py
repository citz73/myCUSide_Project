from rest_framework import serializers
from myCU_App.models import NewProject

class NewProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewProject
        fields = ('id', 'project_name', 'project_member', 'project_detail')

# I believe this is going to work 