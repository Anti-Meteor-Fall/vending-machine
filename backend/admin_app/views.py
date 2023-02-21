from .serializers import ProductlistSerializer, ProductSerializer, OrderMethodSerializer, OrderSerializer, adminSerializer
from admin_app.models import admin
from vending.models import Product, Order_Method, Order
from rest_framework import generics
from rest_framework.permissions import AllowAny

#id並べ替え
class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.order_by('id')
    serializer_class = ProductlistSerializer
    permissions_classes = (AllowAny,)


class ProductView(generics.RetrieveUpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permissions_classes = (AllowAny,)


class OrderMethodView(generics.ListCreateAPIView):
    queryset = Order_Method.objects.all()
    serializer_class = OrderMethodSerializer
    permissions_classes = (AllowAny,)


class OrderView(generics.ListCreateAPIView):
    queryset = Order.objects.order_by('id')
    serializer_class = OrderSerializer
    permissions_classes = (AllowAny,)

class adminView(generics.ListCreateAPIView):
    queryset = admin.objects.all()
    serializer_class = adminSerializer
    permissions_classes = (AllowAny,)