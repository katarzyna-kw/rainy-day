from django.contrib import admin
from .models import AppUser, ColorPalette, FontPair


admin.site.register(AppUser)
admin.site.register([ColorPalette, FontPair])
