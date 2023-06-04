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
    profile_image = models.TextField()
    roles = models.ManyToManyField('Role', related_name='users')
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
    likes = models.ManyToManyField('CommentLike', related_name='comments')

class CommentLike(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='comment_likes')
    comment = models.ForeignKey('Comment', on_delete=models.CASCADE, related_name='comment_likes')

class Tag(models.Model):
    name = models.CharField(max_length=50)
    users = models.ManyToManyField(AppUser, related_name='tags')
    blog = models.ForeignKey('BlogPost', on_delete=models.CASCADE, related_name='post_tags')

class BlogPostLike(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='blog_likes')

class BlogPostFavorite(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='blog_favorites')
    blog = models.ForeignKey('BlogPost', on_delete=models.CASCADE, related_name='blog_favorites')

class BlogPost(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='blog_posts')
    title = models.CharField(max_length=50)
    image = models.TextField()
    video = models.TextField()
    content = models.CharField(max_length=5000)
    expected_read_time = models.CharField(max_length=50)
    comment = models.OneToOneField('Comment', on_delete=models.CASCADE, related_name='blog_post')
    tags = models.ManyToManyField('Tag', related_name='post_tags')
