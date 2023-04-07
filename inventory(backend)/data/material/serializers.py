from models import Product


from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields= ['id', 'item_id', 'usd', 'wieght', 'user_id']
        depth = 1