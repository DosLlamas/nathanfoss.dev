from django.contrib import admin

# Register your models here.
from .models import User

class UserAdmin(admin.ModelAdmin):
    list = ('first_name', 'last_name', 'email', 'password', 'profile_image', 'roles')
    admin.site.register(User)