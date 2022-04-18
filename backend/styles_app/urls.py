from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views_auth import handle_login, handle_logout
from .views import *

router = DefaultRouter()

router.register("users", AppUserViewSet, basename="user")
router.register("color-palettes", ColorPaletteViewSet, basename="color-palette")
router.register("font-pairs", FontPairViewSet, basename="font-pair")


urlpatterns = [
    path("", include(router.urls)),
    path("login/", handle_login),
    path("logout/", handle_logout),
]