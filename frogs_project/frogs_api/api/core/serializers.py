from rest_framework.serializers import ModelSerializer
from .models import Task


class TaskSerializer(ModelSerializer):

    class Meta:
        model = Task
        fields = ['uuid', 'status', 'name', 'date', 'time', 'task_type', 'priority']
