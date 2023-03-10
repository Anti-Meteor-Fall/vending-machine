from django.db import models

# Create your models here.


class Product(models.Model):
    """商品テーブル"""
    id = models.AutoField(primary_key=True)
    name = models.CharField("商品名", max_length=50)
    price = models.IntegerField("価格")
    image = models.ImageField(upload_to="products", verbose_name="イメージ画像")
    is_set = models.BooleanField(verbose_name='セットフラグ', default=True)
    quantity = models.PositiveIntegerField("在庫数")
    created_at = models.DateTimeField("作成日時", auto_now_add=True)
    updated_at = models.DateTimeField("更新日時", auto_now=True)

    def __str__(self):
        return self.name
        

class Order_Method(models.Model):
    """購入方法テーブル"""
    id = models.AutoField(primary_key=True)
    name = models.CharField("購入方法", max_length=50)
    image = models.ImageField(
        upload_to="order_methods", verbose_name="イメージ画像", null=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    """購入テーブル"""
    id = models.AutoField(primary_key=True)
    product_id = models.ForeignKey(
        Product, related_name="order_product", on_delete=models.CASCADE)
    order_method_id = models.ForeignKey(
        Order_Method, related_name="order_order_method", on_delete=models.CASCADE)
    created_at = models.DateTimeField("作成日時", auto_now_add=True)
    updated_at = models.DateTimeField("更新日時", auto_now=True)

    def __str__(self):
        return str(self.product_id)
