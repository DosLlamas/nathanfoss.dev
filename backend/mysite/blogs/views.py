from django.shortcuts import render

# This is from the article
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


# class renderViews(View):
#     def get(self, request):
#         form = UserRegisterForm()
#         return render(request)
    
#     # @csrf_protect
#     def post(self, request):
#         form = UserRegisterForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return {'message': 'User successfully created :)'}
#         else:
#             return {'message':'U done fucked up.'}

