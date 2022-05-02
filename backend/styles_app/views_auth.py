import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from rest_framework_simplejwt.tokens import RefreshToken


def error_on_request(error_msg):
    return JsonResponse({ "error": error_msg }, status=400)

def bad_request():
    return error_on_request("bad request")


def generate_new_token(user):
    refresh = RefreshToken.for_user(user)

    return str(refresh.access_token)


@csrf_exempt
def handle_login(request):
    try:
        if request.method == "POST":
            data = json.loads(request.body)
            print("DATA: ", data)
            username = data.get("email")
            password = data.get("password")
            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                token = generate_new_token(user)
                # not passing id for safety -- need to add perform_create to tasklist in serializers since not using id
                return JsonResponse({ "username": user.email, "first_name": user.first_name, "token": token, "success": True }, status=200)
    
    except Exception as e:
        return error_on_request(str(e))
    
    return bad_request()


@csrf_exempt
def handle_logout(request):
    print("try to log out...")
    try:
        if request.method == "POST":
            logout(request)
            return JsonResponse({ "status": "logged out successfully" }, status=200)
    
    except Exception as e:
        return error_on_request(str(e))
    
    return bad_request()


