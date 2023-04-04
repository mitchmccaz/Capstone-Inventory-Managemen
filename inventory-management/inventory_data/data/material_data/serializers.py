from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields= ['id', 'item_id', 'usd', 'wieght', 'user_id']
        depth = 1