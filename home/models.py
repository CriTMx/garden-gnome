from django.db import models

# Create your models here.
class inputs(models.Model):
    city=models.CharField(max_length=100)
    crop=models.CharField(max_length=100)