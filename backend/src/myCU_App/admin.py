from django.contrib import admin

# Register your models here.

from .models import User, Message, NewProject, Image, Tag


admin_models = [User, Message, NewProject, Image, Tag]
admin.site.register(admin_models)
