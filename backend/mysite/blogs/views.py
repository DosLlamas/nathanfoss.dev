from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def index(request):
    data = [
        {'message': 'Hello, React!'}
    ]
    return JsonResponse(data, safe=False)
