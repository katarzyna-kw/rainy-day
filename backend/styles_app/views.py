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
    
    serializer_class =ColorPaletteSerializer
    
    def create(self, request):
        print("DATA:", request.data)
        request.data["user_id"] = request.user.id
        print("CREATE....", request.user)
        return super().create(request)
    
    def get_queryset(self):
        if self.request.user.is_superuser:
            return ColorPalette.objects.all().order_by('id')
        return ColorPalette.objects.filter(user_id=self.request.user).order_by('id')

    
class FontPairViewSet(ModelViewSet):
    serializer_class =FontPairSerializer

    def create(self, request):
        print("DATA:", request.data)
        request.data["user_id"] = request.user.id
        print("CREATE....", request.user)
        return super().create(request)
    
    def get_queryset(self):
        if self.request.user.is_superuser:
            return FontPair.objects.all().order_by('id')
        return FontPair.objects.filter(user_id=self.request.user).order_by('id')