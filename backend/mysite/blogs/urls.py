# from django.urls import path
# from . import views

# urlpatterns = [
#     path("", views.index, name="index"),
#     path("signup", views.renderViews.post, name="signup")
# ]

# This is the article

from rest_framework.routers import DefaultRouter
from blogs import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet, basename='user')
urlpatterns = router.urls