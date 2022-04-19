from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import *
from .views_auth import handle_login, handle_logout

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
    # queryset = ColorPalette.objects.all()
    
    serializer_class =ColorPaletteSerializer
    
    def create(self, request):
        print("DATA:", request.data)
        request.data["user_id"] = request.user.id
        print("CREATE....", request.user)
        return super().create(request)
    
    def get_queryset(self):
        if self.request.user.is_superuser:
            return ColorPalette.objects.all()
        return ColorPalette.objects.filter(user_id=self.request.user)

    
class FontPairViewSet(ModelViewSet):
    # queryset = FontPair.objects.all()
    serializer_class =FontPairSerializer
    
    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)
        return super().perform_create(serializer)

    def get_queryset(self):
        if self.request.user.is_superuser:
            return FontPair.objects.all()
        return FontPair.objects.filter(user_id=self.request.user)