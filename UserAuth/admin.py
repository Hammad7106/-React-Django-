from django.contrib import admin
from .models import UserProfile, Post
# Register your models here.


@admin.register(UserProfile)
class User(admin.ModelAdmin):
    list_display = ('first_name','last_name','email')

@admin.register(Post)
class Post(admin.ModelAdmin):
    list_display = ('user', 'post_title', 'post_content')
