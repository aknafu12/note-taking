# DJANGO
 instruction
 == window ==
 1. install python
 2. Setting up a virtual environment install pipenv   => pip3 install pipenv or py -m venv project-name
 3. mkdir DNAME to install django =>pipenv install django or py -m pip install Django
 4. verify your Django installation by executing => django-admin --version or py -m django --version => my version 4.1.3
 5. to start the project=> django-admin startproject PNAME
 6. to start the server => django-admin runserver but first time we can use => python manage.py runserver 
 7. output: http://127.0.0.1:8000/
  === database connection == 
  the default is sqllite3 but in my case use mysql(start apache and mysql => xampp
  1.go to virtual enironment(pipenv shell)install mysqlclient(python driver => pip install mysqlclient
  2.go to current project then edit or setup the db at z file =< settings.py 
  3.inorder to save commands =>python manage.py makemigrations =< python manage.py migrate
  4.python manage.py runserver = start server
  5.to create  superuser\admin => pyhon manage.py createsuperuser
  6.restar =< py manage.py runserver  
  7.go to admin page : http://127.0.0.1:8000/admin
  
 
 


