from django.core.validators import MinLengthValidator
from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("An email is required")
        if not password:
            raise ValueError("A password is required")
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('An email is required')
        if not password:
            raise ValueError("A password is required")
        user = self.create_user(email, password)
        user.is_superuser = True
        user.save()
        return user

class AppUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profile_image = models.ImageField()
    roles = models.ManyToManyField('Role', related_name='user_roles')
    tags = models.ManyToManyField('Tag', related_name='user_tags')
    is_staff = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    objects = AppUserManager()
    
    def __str__(self):
        return self.username

class Role(models.Model):
    type = models.CharField(max_length=50)
    description = models.CharField(max_length=100)

class Comment(models.Model):
    content = models.CharField(max_length=1000)
    blog = models.ForeignKey('BlogPost', on_delete=models.CASCADE, related_name='blog_comment', default=None)

class CommentLike(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='comment_liked_by')
    comment = models.ForeignKey('Comment', on_delete=models.CASCADE, related_name='comment_likes')

class Tag(models.Model):
    name = models.CharField(max_length=50)

class BlogPostLike(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='blog_liked_by')
    blog = models.ForeignKey('BlogPost', on_delete=models.CASCADE, related_name='blog_likes', default=None)

class BlogPostFavorite(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='blog_favorited_by')
    blog = models.ForeignKey('BlogPost', on_delete=models.CASCADE, related_name='blog_favorites', default=None)

class BlogPost(models.Model):
    author = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='blog_posts')
    title = models.CharField(max_length=50)
    image = models.ImageField()
    video = models.TextField()
    content = models.CharField(max_length=5000)
    expected_read_time = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.title} | {self.author.username}"

    
