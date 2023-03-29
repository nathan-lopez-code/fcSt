from django.urls import path
from . views import home

app_name = "brief"

urlpatterns = [
    path("", home, name="home-brief")
]
