import json
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
import requests
import os

@csrf_exempt
def call_api(request):
    API_KEY = str(os.getenv('FONT_KEY'))
    url = f'https://www.googleapis.com/webfonts/v1/webfonts?key={API_KEY}&sort=popularity'
    header = {
        "Content-Type":"application/json",
        "X-Client_Secret": "AIzaSyCdxWKZ06-ZchV5wIVQnnSRJxp1eMynfrc"
    }
    response = requests.get(url, headers=header)
    json_response = response.json()
    if response.status_code == 200:
        return HttpResponse(json.dumps(json_response), content_type='application/json')
    return HttpResponse('Something went wrong')