from django.db import models
from .models import User

# Create your models here.

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item_id = models.CharField(max_length=255)
    weight = models.IntegerField()
    usd = models.IntegerField()
    
