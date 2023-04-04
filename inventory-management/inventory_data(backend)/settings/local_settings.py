
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-7pp9+9#o=eed-%vytxsymeri_jo2z4p)(!7&ux#^w#-idz^03v'



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

