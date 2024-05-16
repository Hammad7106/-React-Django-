from django.urls import path
from . import views
# urls.py

from django.urls import path
from .views import PostListCreateAPIView, PostRetrieveUpdateDestroyAPIView, get_current_user

urlpatterns = [
    path('signup/', views.SignUpView.as_view(), name='signup'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/',views.LogoutView.as_view(), name='logout'),
    path('user/', get_current_user, name='get_current_user'),
    path('posts/', PostListCreateAPIView.as_view(), name='post-list-create'),
    path('posts/<int:pk>/', PostRetrieveUpdateDestroyAPIView.as_view(), name='post-retrieve-update-destroy'),
    path('hello-world/', views.message, name='hello_world'),
]
