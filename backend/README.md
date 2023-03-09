# バックエンド環境構築

## Windows の場合

```bash
# 仮想環境の作成
python -m venv .venv

# 仮想環境に入る
.venv/Scripts/Activate.ps1

# 仮想環境から抜ける
deactivate

# 必要なライブラリのインストール
pip3 install -r requirements.txt

# マイグレーション
python manage.py makemigrations
python manage.py migrate

# サーバの起動
python manage.py runserver

## スーパーユーザの作成
python manage.py createsuperuser

## データの挿入(Windows PowerShell)
psql -f C:\パスを記載\vending-machine\backend\sql\vending_products.sql -U postgres -d vending_machine
```

## Mac の場合

```bash
# 仮想環境の作成
python3 -m venv .venv

# 仮想環境に入る
. .venv/bin/activate

# 仮想環境から抜ける
deactivate

# 必要なライブラリのインストール
pip3 install -r requirements.txt

# マイグレーション
python manage.py makemigrations
python manage.py migrate

# サーバの起動
python manage.py runserver

## スーパーユーザの作成
python manage.py createsuperuser


## データの挿入()
psql -f /パスを記載/vending-machine/backend/sql/vending_products.sql -U postgres -d vending_machine

```
# 各種バージョン
python 3.11.0(3.9.xでも動作確認済み)
django 4.1.7
djangorestframework 3.14.0
django-environ 0.9.0
django-cors-headers 3.13.0
psycopg2-binary 2.9.5
requests 2.28.1
Pillow 9.2.0
pytz 2022.7.1
