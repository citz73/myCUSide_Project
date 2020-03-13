from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request, *args, **kwargs):
    return render(request, "home.html", {})

def user_profile(request, *args, **kwargs):
    return render(request, "profile.html", {})

