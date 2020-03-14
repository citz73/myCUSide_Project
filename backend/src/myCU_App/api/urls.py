
#     path('<pk>', ArticleDetailView.as_view()),
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import NewProjectViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('NewProjects', NewProjectViewSet)
router.register('Users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]