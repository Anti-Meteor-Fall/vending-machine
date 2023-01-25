from django.urls import path
from vending import views

urlpatterns = [
    path('products/', views.ProductView.as_view(), name='products'),
    path('stocks/<str:pk>/', views.StockView.as_view(), name='stocks'),
    path('order-methods/', views.OrderMethodView.as_view(), name='order-methods'),
    path('orders/', views.OrderView.as_view(), name='orders'),
]


    