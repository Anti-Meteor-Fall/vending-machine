from .serializers import ProductlistSerializer, ProductSerializer, OrderMethodSerializer, OrderSerializer
from .models import Product, Order_Method, Order
from rest_framework import generics
from rest_framework.permissions import AllowAny

#id並べ替え
class ProductListView(generics.ListAPIView):
    queryset = Product.objects.order_by('id')
    serializer_class = ProductlistSerializer
    permissions_classes = (AllowAny,)


class ProductView(generics.RetrieveUpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permissions_classes = (AllowAny,)


class OrderMethodView(generics.ListAPIView):
    queryset = Order_Method.objects.all()
    serializer_class = OrderMethodSerializer
    permissions_classes = (AllowAny,)


class OrderView(generics.ListCreateAPIView):
    queryset = Order.objects.order_by('id')
    serializer_class = OrderSerializer
    permissions_classes = (AllowAny,)