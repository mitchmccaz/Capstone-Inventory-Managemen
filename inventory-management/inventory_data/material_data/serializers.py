from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields= ['id', 'item_id', 'usd', 'wieght', 'user_id']
        depth = 1