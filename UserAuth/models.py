from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class UserProfile(models.Model):
    first_name = models.OneToOneField(User,on_delete=models.CASCADE)
    last_name = models.CharField(max_length=20)
    email = models.EmailField()

class Post(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    post_title = models.CharField(max_length=20)
    post_content = models.CharField(max_length=500)

