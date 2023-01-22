from django.db import models

# Create your models here.

class Product(models.Model):
    """商品テーブル"""
    id = models.AutoField(primary_key=True)
    name = models.CharField("商品名",max_length=50)
    price = models.IntegerField("価格")
    image = models.ImageField(upload_to="images", verbose_name="イメージ画像")
    isSet = models.BooleanField(verbose_name='セットフラグ', default=True)
    created_at = models.DateTimeField("作成日時",auto_now_add=True)
    updated_at = models.DateTimeField("更新日時",auto_now=True)

    def __str__(self):
        return self.name

class stock(models.Model):
    """在庫テーブル"""
    id = models.AutoField(primary_key=True)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name="商品")
    quantity = models.PositiveIntegerField("在庫数")
    created_at = models.DateTimeField("作成日時",auto_now_add=True)
    updated_at = models.DateTimeField("更新日時",auto_now=True)

    def __str__(self):
        return self.product.name

class Order_Methode(models.Model):
    """購入方法テーブル"""
    id = models.AutoField(primary_key=True)
    name = models.CharField("購入方法",max_length=50)
    image = models.ImageField(upload_to="images", verbose_name="イメージ画像", null=True)


    def __str__(self):
        return self.name

class Order(models.Model):
    """購入テーブル"""
    id = models.AutoField(primary_key=True)
    product_id = models.ForeignKey(Product, related_name="order_product", on_delete=models.CASCADE)
    order_method_id = models.ForeignKey(Order_Method, related_name="order_order_method", on_delete=models.CASCADE)
    created_at = models.DateTimeField("作成日時",auto_now_add=True)
    updated_at = models.DateTimeField("更新日時",auto_now=True)
    
    def __str__(self):
        return str(self.product_id)