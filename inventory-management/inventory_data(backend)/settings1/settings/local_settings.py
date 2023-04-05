# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-d%yh6nakt6dg*@0o1&#f&()pem9gln=gekxo2tt)^1bd-l6u*f'






# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'inventory_data',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '3306',
        'OPTIONS': {
            'autocommit': True
        }
    }
}

