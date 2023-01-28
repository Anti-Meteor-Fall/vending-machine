from rest_framework import serializers
from .models import Product, Order_Method, Order

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class OrderMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_Method
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'