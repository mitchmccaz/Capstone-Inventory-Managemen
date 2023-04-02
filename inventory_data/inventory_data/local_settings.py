# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-^ps@xgeoz(&_z4#(hnl4muj7@0+41-0jcq8!7^z2o-4_cpd(tg'




# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

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