from members.models import Member
from bio_entries.models import Entry
from bio_entries.query.types import BioEntryType
import graphene


class Query(graphene.ObjectType):
    entries_by_member_id = graphene.List(
        BioEntryType,
        id=graphene.Int(required=False),
    )
    entries_by_member_name = graphene.List(
        BioEntryType,
        name_last=graphene.String(required=True),
        name_first=graphene.String(required=False)
    )

    def resolve_entries_by_member_id(root, info, id):
        return Entry.objects.filter(member=id)

    def resolve_entries_by_member_name(root, info, name_last, name_first=None):
        member = Member.objects.filter(name_last__iexact=name_last)
        if name_first != None:
            try:
                member = Member.objects.get(name_first__iexact=name_first)
            except Member.DoesNotExist:
                return None
        else:
            return Entry.objects.filter(member__in=member)
        return Entry.objects.filter(member=member)
