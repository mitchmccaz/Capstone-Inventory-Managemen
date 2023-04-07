from django.urls import path, include
import views from settings 

urlpatterns=[
    path('', views.item_id),
    path('all/', views.get_all_items),
    path('videoid/', views.get_item_id),
]