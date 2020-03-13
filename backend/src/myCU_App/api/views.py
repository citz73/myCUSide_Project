from rest_framework import viewsets
from myCU_App.models import NewProject
from. serializers import NewProjectSerializer

class NewProjectSet(viewsets.ModelViewSet):
    queryset = NewProject.objects.all()
    serializer_class = NewProjectSerializer
