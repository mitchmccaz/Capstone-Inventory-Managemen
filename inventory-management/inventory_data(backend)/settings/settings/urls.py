from django.urls import path, include
from material_data import views


urlpatterns=[
    path('', views.item_id),
    path('all/', views.get_all_items),
    path('videoid/', views.get_item_id),
]