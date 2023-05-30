# Generated by Django 4.2.1 on 2023-05-30 04:19

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='content',
            field=models.CharField(max_length=5000, validators=[django.core.validators.MaxLengthValidator(5000)]),
        ),
        migrations.AlterField(
            model_name='comment',
            name='content',
            field=models.CharField(max_length=1000, validators=[django.core.validators.MaxLengthValidator(1000)]),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.CharField(max_length=60, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=50, validators=[django.core.validators.MinLengthValidator(8)]),
        ),
    ]