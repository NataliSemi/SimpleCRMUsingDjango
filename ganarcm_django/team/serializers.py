from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Team


class UserSerilalizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
        )


class TeamSerializer(serializers.ModelSerializer):
    members = UserSerilalizer(many=True, read_only=True)
    created_by = UserSerilalizer()

    class Meta:
        model = Team
        fields = (
            "id",
            "name",
            "members",
            "created_by",
        )
