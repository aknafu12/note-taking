#app urls
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'python',views.NoteViewSet)

# Wire up  API using automatic URL routing
urlpatterns = [
    path('',include(router.urls)),
    path('api-auth/',include('rest_framework.urls', namespace='rest_framework'))

]