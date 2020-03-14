from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework.authtoken.views import obtain_auth_token

from myCU_App.views import home_view 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myCU_App.api.urls')),
    path('auth/', obtain_auth_token),
]

# I really want to test this works.