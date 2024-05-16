from rest_framework import serializers
from .models import UserProfile, Post
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'email']

class UserProfileSerializer(serializers.ModelSerializer):
    first_name = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ['first_name', 'last_name', 'email']


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'user', 'post_title', 'post_content']
