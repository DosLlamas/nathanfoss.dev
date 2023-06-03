from django.core.exceptions import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model
UserModel = get_user_model()

def custom_validation(data):
    email = data['email'].strip()
    username = data['username'].strip()
    password = data['password'].strip()
    if not email or UserModel.objects.filter(email=email).exists():
        raise serializers.ValidationError({"email":'A user with this email already exists'})
    if not password or len(password) < 8:
        raise serializers.ValidationError({"password":'Invalid password, must be minimum 8 characters'})
    if not username:
        raise serializers.ValidationError('Choose another username')
    return data

def validate_email(data):
    email = data['email'].strip()
    if not email:
        raise serializers.ValidationError('An email is needed')
    return True

def validate_username(data):
    username = data['username'].strip()
    if not username:
        raise serializers.ValidationError('Choose another username')
    return True

def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise serializers.ValidationError('a password is needed')
    return True