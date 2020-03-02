from django.db import models

class MyModelTest(models.Model):
    col = models.CharField(max_length = 100)
