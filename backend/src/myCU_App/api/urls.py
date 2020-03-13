
#     path('<pk>', ArticleDetailView.as_view()),
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import NewProjectSet

router = routers.DefaultRouter()
router.register('NewProjects', NewProjectSet)

urlpatterns = [
    path('', include(router.urls)),
]