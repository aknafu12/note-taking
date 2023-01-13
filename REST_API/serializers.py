from rest_framework import serializers
from .models import Note 
class NoteSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Note
        fields = ('title','body')
