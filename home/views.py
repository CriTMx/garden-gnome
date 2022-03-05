from django.shortcuts import render,HttpResponse
from home import mainprogram
from home.models import inputs
import asyncio as aio

# Create your views here.
def index(request):
    context={}
    if request.method=="POST":
        city=request.POST.get('city')
        crop=request.POST.get('crop')
        forminputs=inputs(
            city=city,
            crop=crop
        )
        forminputs.save()
        context={
            "curHum":aio.run(mainprogram.getCurHum(city)),
            "curTemp":aio.run(mainprogram.getCurTemp(city)),
            "curSky":aio.run(mainprogram.getCurSky(city)),
            "idealTempRange":mainprogram.idealTempRange(crop),
            "idealHumRange":mainprogram.idealHumRange(crop),
            "idealSky":mainprogram.idealSky(crop),
            "tempText":mainprogram.tempCompare(crop,city),
            "skyText":mainprogram.skytextCompare(crop,city),
            "humText":mainprogram.humiCompare(crop, city)
        }
    return render(request, "index.html",context)
def about(request):
    return render(request, "about.html")