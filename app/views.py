from django.shortcuts import render
from .models import Profile


def home_view(request):
    profiles = Profile.objects.all()
    return render(request, 'index.html', {'profiles': profiles})
