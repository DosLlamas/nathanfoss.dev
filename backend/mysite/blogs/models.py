from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=60)
    password = models.CharField(max_length=50)
    profile_image = models.TextField()
    roles = models.ManyToManyField('Role', related_name='users')

class Role(models.Model):
    type = models.CharField(max_length=50)
    description = models.CharField(max_length=100)

class Comment(models.Model):
    content = models.CharField(max_length=1000)
    likes = models.ManyToManyField('CommentLike', related_name='comments')

class CommentLike(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='comment_likes')
    comment = models.ForeignKey('Comment', on_delete=models.CASCADE, related_name='comment_likes')

class Tag(models.Model):
    name = models.CharField(max_length=50)
    users = models.ManyToManyField('User', related_name='tags')
    blog = models.ForeignKey('BlogPost', on_delete=models.CASCADE, related_name='post_tags')

class BlogPostCategory(models.Model):
    name = models.CharField(max_length=50)
    users = models.ManyToManyField('User', related_name='categories')
    blog = models.ForeignKey('BlogPost', on_delete=models.CASCADE, related_name='categories')

class BlogPostLike(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='blog_likes')

class BlogPostFavorite(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='blog_favorites')
    blog = models.ForeignKey('BlogPost', on_delete=models.CASCADE, related_name='blog_favorites')

class BlogPost(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='blog_posts')
    title = models.CharField(max_length=50)
    image = models.TextField()
    video = models.TextField()
    content = models.CharField(max_length=5000)
    expected_read_time = models.CharField(max_length=50)
    comment = models.OneToOneField('Comment', on_delete=models.CASCADE, related_name='blog_post')
    post_category = models.ForeignKey('BlogPostCategory', on_delete=models.CASCADE, related_name='blog_posts')
    tags = models.ManyToManyField('Tag', related_name='post_tags')
