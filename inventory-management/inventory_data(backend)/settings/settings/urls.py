from django.urls import path, include
from inventory_data(backend) import views


urlpatterns=[
    path('', views.user_id),
    path('all/', views.get_all_items),
    path('videoid/', views.get_item_id),
]