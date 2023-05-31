# Generated by Django 4.2.1 on 2023-05-31 00:10

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0002_alter_blogpost_content_alter_comment_content_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(validators=[django.core.validators.MinLengthValidator(8)]),
        ),
    ]
