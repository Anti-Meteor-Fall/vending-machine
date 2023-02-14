from django.db import models

# Create your models here.


class admin(models.Model):
    """管理者テーブル"""
    id = models.AutoField(primary_key=True)
    name = models.CharField("管理者名", max_length=50)
    password = models.CharField("パスワード", max_length=50)
    created_at = models.DateTimeField("作成日時", auto_now_add=True)
    updated_at = models.DateTimeField("更新日時", auto_now=True)

    def __str__(self):
        return self.name

