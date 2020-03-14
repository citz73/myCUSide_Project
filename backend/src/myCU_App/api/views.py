from rest_framework import viewsets
from myCU_App.models import NewProject
from. serializers import NewProjectSerializer, UserSerializer
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class NewProjectViewSet(viewsets.ModelViewSet):
    queryset = NewProject.objects.all()
    serializer_class = NewProjectSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

