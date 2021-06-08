from django.db.models.query import QuerySet
import graphene
# from graphene.types.field import Field

from members.models import Member
from members.query.types import MemberType


class Query(graphene.ObjectType):
    all_members = graphene.List(MemberType)
    members_by_name = graphene.List(
        MemberType,
        name_last=graphene.String(required=True),
        name_first=graphene.String(required=False)
    )

    def resolve_all_members(root, info) -> QuerySet:
        return Member.objects.all()

    def resolve_members_by_name(root, info, name_last, name_first=None):
        members = Member.objects.filter(name_last__icontains=name_last)
        if name_first is not None:
            members = members.filter(name_first__icontains=name_first)
        return members
