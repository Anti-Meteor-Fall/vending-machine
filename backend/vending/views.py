from .serializers import ProductSerializer, OrderMethodSerializer, OrderSerializer
from .models import Product, Order_Method, Order
from rest_framework import generics
from rest_framework.permissions import AllowAny


class ProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permissions_classes = (AllowAny,)


class OrderMethodView(generics.ListAPIView):
    queryset = Order_Method.objects.all()
    serializer_class = OrderMethodSerializer
    permissions_classes = (AllowAny,)


class OrderView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permissions_classes = (AllowAny,)