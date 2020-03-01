from django.contrib import admin

# Register your models here.

from .models import MyModelTest

admin.site.register(MyModelTest)
