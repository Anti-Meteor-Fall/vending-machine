from rest_framework import serializers
from vending.models import Product, Order_Method, Order
from admin_app.models import admin

class ProductlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    
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

class adminSerializer(serializers.ModelSerializer):
    class Meta:
        model = admin
        fields = '__all__'