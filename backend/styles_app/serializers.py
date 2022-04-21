from rest_framework import serializers
from .models import *
from django.contrib.auth.hashers import make_password

class AppUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        fields = ["id", "email", "first_name", "password"]
    
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField()
    
    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)
            

class ColorPaletteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ColorPalette
        fields = ["id", "name", "color1", "color2", "color3", "color4", "color5", "color6", "user_id"]
        
        
class FontPairSerializer(serializers.ModelSerializer):
    class Meta:
        model = FontPair
        fields = ["id", "font1", "font2", "user_id"]
