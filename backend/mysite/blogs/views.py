from django.shortcuts import render

from .models import User
from .serializers import UserSerializer
from rest_framework import viewsets

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

# This is everything so far that hasn't worked
# from django.http import JsonResponse
# from django.views import View
# from .serializers import UserRegisterForm
# from django.views.decorators.csrf import csrf_protect

# Create your views here.

# def index(request):
#     data = [
#         {'message': 'Hello, React!'}
#     ]
#     return JsonResponse(data, safe=False)

