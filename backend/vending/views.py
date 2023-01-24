from django.shortcuts import render
from .serializers import ProductSerializer, StockSerializer, OrderMethodSerializer, OrderSerializer
from .models import Product, Stock, Order_Method, Order
from rest_framework import generics
from rest_framework.permissions import AllowAny


class ProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permissions_classes = (AllowAny,)


class StockView(generics.ListAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer
    permissions_classes = (AllowAny,)


class OrderMethodView(generics.ListAPIView):
    queryset = Order_Method.objects.all()
    serializer_class = OrderMethodSerializer
    permissions_classes = (AllowAny,)


class OrderView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permissions_classes = (AllowAny,)