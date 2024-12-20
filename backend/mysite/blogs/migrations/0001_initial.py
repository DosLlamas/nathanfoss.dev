# Generated by Django 4.2.1 on 2023-06-02 20:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppUser',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=50, unique=True)),
                ('username', models.CharField(max_length=50)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('profile_image', models.TextField()),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('image', models.TextField()),
                ('video', models.TextField()),
                ('content', models.CharField(max_length=5000)),
                ('expected_read_time', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('blog', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='post_tags', to='blogs.blogpost')),
                ('users', models.ManyToManyField(related_name='tags', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CommentLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comment_likes', to='blogs.comment')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comment_likes', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='comment',
            name='likes',
            field=models.ManyToManyField(related_name='comments', to='blogs.commentlike'),
        ),
        migrations.CreateModel(
            name='BlogPostLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blog_likes', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='BlogPostFavorite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('blog', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blog_favorites', to='blogs.blogpost')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blog_favorites', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='BlogPostCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('blog', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='categories', to='blogs.blogpost')),
                ('users', models.ManyToManyField(related_name='categories', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='blogpost',
            name='comment',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='blog_post', to='blogs.comment'),
        ),
        migrations.AddField(
            model_name='blogpost',
            name='post_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blog_posts', to='blogs.blogpostcategory'),
        ),
        migrations.AddField(
            model_name='blogpost',
            name='tags',
            field=models.ManyToManyField(related_name='post_tags', to='blogs.tag'),
        ),
        migrations.AddField(
            model_name='blogpost',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blog_posts', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='appuser',
            name='roles',
            field=models.ManyToManyField(related_name='users', to='blogs.role'),
        ),
        migrations.AddField(
            model_name='appuser',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions'),
        ),
    ]
