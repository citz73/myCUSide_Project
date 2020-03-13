from django.contrib import admin
<<<<<<< HEAD
from django.urls import path
from django.conf.urls import include
=======
from django.urls import path, include
>>>>>>> 35a6797ea6c2f80152efa9a4b21fe22d9f45ef09

from myCU_App.views import home_view 

urlpatterns = [
<<<<<<< HEAD
    path('admin/', admin.site.urls),
    path('api/', include('myCU_App.api.urls')),
    # path('', home_view, name = 'home'), 
=======
    path('api-auth/', include('rest_framework.urls')),
    path('', home_view, name = 'home'), 
    path('admin/', admin.site.urls),
>>>>>>> 35a6797ea6c2f80152efa9a4b21fe22d9f45ef09
]
