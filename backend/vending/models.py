from django.db import models

# Create your models here.

class Product(models.Model):
    """商品テーブル"""
    id = models.AutoField(primary_key=True)
    name = models.CharField("商品名",max_length=50)
    price = models.IntegerField("価格")
    stock = models.IntegerField("在庫数")
    created_at = models.DateTimeField("作成日時",auto_now_add=True)
    updated_at = models.DateTimeField("更新日時",auto_now=True)
    image = models.ImageField(upload_to="images", verbose_name="イメージ画像")

    def __str__(self):
        return self.name

class Order_detail(models.Model):
    """履歴テーブル"""
    id = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name="商品")
    quantity = models.IntegerField("購入数")
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

class admin(models.Model):
    """管理者テーブル"""
    id = models.AutoField(primary_key=True)
    name = models.CharField("管理者名",max_length=50)
    password = models.CharField("パスワード",max_length=50)
    created_at = models.DateTimeField("作成日時",auto_now_add=True)
    updated_at = models.DateTimeField("更新日時",auto_now=True)

    def __str__(self):
        return self.name
