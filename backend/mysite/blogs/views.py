from django.contrib.auth import get_user_model, login, logout
UserModel = get_user_model()
from . import models
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import UserSignupSerializer, UserLoginSerializer, UserSerializer, BlogsSerializer, BlogDetailSerializer
from rest_framework import permissions, status
from rest_framework.permissions import AllowAny
from .validations import custom_validation, validate_email, validate_password

class UserSignup(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		clean_data = custom_validation(request.data)
		serializer = UserSignupSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.create(clean_data)
			if user:
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	##
	def post(self, request):
		data = request.data
		assert validate_email(data)
		assert validate_password(data)
		serializer = UserLoginSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.check_user(data)
			login(request, user)
			return Response(serializer.data, status=status.HTTP_200_OK)

class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)

class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)

from rest_framework import viewsets

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
    
class BlogPostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogsSerializer
    queryset = models.BlogPost.objects.all()
    permission_classes = [AllowAny]  # Allow unauthenticated access
    
class BlogDetailViewSet(viewsets.ModelViewSet):
	serializer_class = BlogDetailSerializer
	queryset = models.BlogPost.objects.all()
	permission_classes = [AllowAny]  # Allow unauthenticated access
	def get_queryset(self):
		queryset = super().get_queryset()
		pk = self.kwargs.get('pk')  # Retrieve the primary key from the URL kwargs
		if pk is not None:
			queryset = queryset.filter(pk=pk)  # Filter the queryset based on the primary key
		return queryset

class LikePostView(APIView):
	def like_post(self, request, pk):
		post = get_object_or_404(models.BlogPostLike, id=request.POST.get('post_id'))
		post.user.add(request.user)
		post.blog.add(request.blogId)
		return Response(status=status.HTTP_200_OK)