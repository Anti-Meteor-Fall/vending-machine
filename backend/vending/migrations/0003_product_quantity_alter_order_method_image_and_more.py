# Generated by Django 4.1.5 on 2023-01-28 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vending', '0002_rename_isset_product_is_set'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='quantity',
            field=models.PositiveIntegerField(default=20, verbose_name='在庫数'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='order_method',
            name='image',
            field=models.ImageField(null=True, upload_to='order_methods', verbose_name='イメージ画像'),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(upload_to='products', verbose_name='イメージ画像'),
        ),
        migrations.DeleteModel(
            name='stock',
        ),
    ]
