from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def lang(request):
    return render(request, 'lang.html')

def ide(request):
    return render(request,'ide.html')

def about(request):
    return render(request,'about.html')

def privacypolicy(request):
    return render(request,'privacypolicy.html')

def termsofuse(request):
    return render(request,'termsofuse.html')