# Generated by Django 4.2.1 on 2023-06-08 11:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0003_remove_blogpost_post_category_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blogpost',
            old_name='user',
            new_name='author',
        ),
        migrations.RemoveField(
            model_name='blogpost',
            name='comment',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='likes',
        ),
        migrations.RemoveField(
            model_name='tag',
            name='blog',
        ),
        migrations.RemoveField(
            model_name='tag',
            name='users',
        ),
        migrations.AddField(
            model_name='appuser',
            name='tags',
            field=models.ManyToManyField(related_name='user_tags', to='blogs.tag'),
        ),
        migrations.AddField(
            model_name='blogpostlike',
            name='blog',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='blog_likes', to='blogs.blogpost'),
        ),
        migrations.AddField(
            model_name='comment',
            name='blog',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='blog_comment', to='blogs.blogpost'),
        ),
        migrations.AlterField(
            model_name='appuser',
            name='profile_image',
            field=models.ImageField(upload_to=''),
        ),
        migrations.AlterField(
            model_name='appuser',
            name='roles',
            field=models.ManyToManyField(related_name='user_roles', to='blogs.role'),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='image',
            field=models.ImageField(upload_to=''),
        ),
        migrations.AlterField(
            model_name='blogpostfavorite',
            name='blog',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='blog_favorites', to='blogs.blogpost'),
        ),
        migrations.AlterField(
            model_name='blogpostfavorite',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blog_favorited_by', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='blogpostlike',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blog_liked_by', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='commentlike',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comment_liked_by', to=settings.AUTH_USER_MODEL),
        ),
    ]