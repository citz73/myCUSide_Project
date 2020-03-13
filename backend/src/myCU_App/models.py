from django.db import models

class User(models.Model):

    def __str__(self):
        return self.name
        
    name = models.CharField(max_length = 150)
    year = models.CharField(max_length = 5)
    email = models.EmailField()
    major = models.CharField(max_length = 10)

class Message(models.Model):

    def __str__(self):
            return self.message_name

    message_name = models.CharField(max_length = 100)
    message_details = models.CharField(max_length = 300)

class NewProject(models.Model):

    def __str__(self):
            return self.project_name

    project_name = models.CharField(max_length = 150)
    project_member = models.CharField(max_length = 150) 
    project_detail = models.CharField(max_length = 200)

class Image(models.Model):

    def __str__(self):
            return self.image_name
    image_name = models.CharField(max_length = 100)
    image_details = models.CharField(max_length = 150)

#test

class Tag(models.Model):

    def __str__(self):
        return self.tag_name

    tag_name = models.CharField(max_length = 100)
