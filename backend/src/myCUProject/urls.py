from django.contrib import admin
from django.urls import path, include

from myCU_App.views import home_view 

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('', home_view, name = 'home'), 
    path('admin/', admin.site.urls),
]
