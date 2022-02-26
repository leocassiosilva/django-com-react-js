from rest_framework import viewsets
from core.Serializers import ListSerializer
from .models import List
from rest_framework import permissions

class ListViewSet(viewsets.ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer
    permission_classes = [permissions.IsAuthenticated]

