from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from .models import AppUser, ColorPalette, FontPair

admin.site.register([AppUser, ColorPalette, FontPair])
