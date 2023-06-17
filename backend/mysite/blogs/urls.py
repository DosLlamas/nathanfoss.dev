from rest_framework.routers import DefaultRouter
from . import views
from django.urls import path

router = DefaultRouter()
router.register(r'users', views.UserViewSet, basename='users')
router.register(r'blogs', views.BlogPostViewSet, basename='blogs')

urlpatterns = [
    path('signup/', views.UserSignup.as_view(), name='signup'),
    path('login/', views.UserLogin.as_view(), name='login'),
    path('logout/', views.UserLogout.as_view(), name='logout'),
    path('user/', views.UserView.as_view(), name='user'),
    # path('blogs/', views.BlogPostView.as_view(), name='blogs'),
    # path('like-post/<int:pk>/', views.LikePostView.as_view(), name='like-post'),
] + router.urls