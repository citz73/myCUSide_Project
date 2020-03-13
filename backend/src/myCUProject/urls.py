from django.contrib import admin
from django.urls import path
from django.conf.urls import include

from myCU_App.views import home_view 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myCU_App.api.urls')),
    # path('', home_view, name = 'home'), 
]

# I really want to test this works.