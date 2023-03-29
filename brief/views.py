from django.shortcuts import render


def home(request):

    return render(request, "brief/index.html", None)
