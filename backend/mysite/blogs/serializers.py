from rest_framework import serializers
from blogs.models import User

class UserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password', 'confirm_password']

    def validate(self, attrs):
        password = attrs.get('password')

        confirm_password = attrs.pop('confirm_password', None)
        if password != confirm_password:
            raise serializers.ValidationError("Password and confirm password do not match")

        return attrs
