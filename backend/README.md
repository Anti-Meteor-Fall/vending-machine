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
```
