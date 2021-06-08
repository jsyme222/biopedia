from graphene_django import DjangoObjectType
from members.models import Member


class MemberType(DjangoObjectType):
    class Meta:
        model = Member
        fields = "__all__"
