from rest_framework import serializers
from .models import Product, Stock, Order_Method, Order

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        # fields = [
        #     "id",
        #     "name",
        #     "image",
        # ]
        fields = '__all__'

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        # fields = [
        #     "id",
        #     "product_id",
        #     "quantity",
        #     "created_at",
        #     "updated_at",
        # ]
        fields = '__all__'

class OrderMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_Method
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'