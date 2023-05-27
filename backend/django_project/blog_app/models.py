from django.db import models

class Role(models.Model):
    type = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    user = models.ForeignKey('User', on_delete=models.CASCADE)

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    profile_image = models.TextField()
    role = models.ForeignKey('Role', on_delete=models.CASCADE)
    comment = models.ForeignKey('BlogPost', on_delete=models.CASCADE)

class Comment(models.Model):
    content = models.CharField(max_length=1000)
    like = models.ForeignKey('CommentLike', on_delete=models.CASCADE)

class CommentLike(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)

class Tag(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    blog = models.ForeignKey('BlogPost', on_delete=models.CASCADE)

class BlogPostCategory(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    blog = models.ForeignKey('BlogPost', on_delete=models.CASCADE)

class BlogPostLike(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)

class BlogPostFavorite(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    blog = models.ForeignKey('BlogPost', on_delete=models.CASCADE)

class BlogPost(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    image = models.TextField()
    video = models.TextField()
    content = models.CharField(max_length=5000)
    expected_read_time = models.CharField(max_length=50)
    comment = models.ForeignKey('Comment', on_delete=models.CASCADE)
    post_category = models.ForeignKey('BlogPostCategory', on_delete=models.CASCADE)
    post_tag = models.ForeignKey('Tag', on_delete=models.CASCADE)
