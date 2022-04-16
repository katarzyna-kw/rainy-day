from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .views_auth import handle_login, handle_logout
from rest_framework import permissions

class AppUserViewSet(ModelViewSet):
    queryset = AppUser.objects.all()
    serializer_class = AppUserSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return (permissions.AllowAny(),)
        elif self.request.method == "PATCH":
            return (permissions.IsAuthenticated(),)
        return (permissions.IsAdminUser(),)


class ColorPaletteViewSet(ModelViewSet):
    queryset = ColorPalette.objects.all()
    serializer_class =ColorPaletteSerializer
    
    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)
        return super().perform_create(serializer)
    
    
class FontPairViewSet(ModelViewSet):
    queryset = FontPair.objects.all()
    serializer_class =FontPairSerializer
    
    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)
        return super().perform_create(serializer)
