#SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'G125f34DF58!@5&89)977PTCWA@33$56'

DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'Name': 'backend',
        'USER': 'root',
        'PASSWORD' : 'password',
        'HOST' : '127.0.0.1',
        'PORT' : '3306',
        'OPTIONS' : {
            'autocommit' : True
        }
    }
}