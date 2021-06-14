from graphene.types.scalars import Boolean, Int, String
from bio_entries.models import BioEntryCategory, Entry
from bio_entries.query.types import BioEntryInputType, BioEntryType, BioEntryUpdateInputType, EntryCategoryType, EntryCategoryInputType
import graphene
from django.contrib.auth import get_user_model
User = get_user_model()


def get_member_from_username(username: String) -> User:
    try:
        user = User.objects.get(username__exact=username)
        return user
    except Exception as e:
        print(e)
        return None


def get_category_from_title(title: String = None) -> BioEntryCategory:
    cat = None
    if(title):
        cat, created = BioEntryCategory.objects.get_or_create(
            title=title.lower())
        if(created):
            print(f'Created {cat.title}')
        return cat
    return None


class EntryCategoryCreate(graphene.Mutation):
    class Arguments:
        category_data = EntryCategoryInputType(required=True)

    category = graphene.Field(EntryCategoryType)

    @staticmethod
    def mutate(root, info, category_data=None):
        cat_inst = BioEntryCategory(
            title=category_data.title
        )
        cat_inst.save()
        return EntryCategoryCreate(category=cat_inst)


class EntryCreate(graphene.Mutation):
    # TODO Figure out file upload
    class Arguments:
        bio_entry = BioEntryInputType(required=True)

    entry = graphene.Field(BioEntryType)

    @staticmethod
    def mutate(root, info, bio_entry=None):
        entry_inst = Entry(**bio_entry)
        entry_inst.save()
        return EntryCreate(entry=entry_inst)


class EntryUpdate(graphene.Mutation):
    class Arguments:
        bio_entry = BioEntryUpdateInputType(required=True)

    updated = graphene.Boolean(False)

    @staticmethod
    def mutate(root, info, bio_entry):
        entry_inst = Entry.objects.filter(
            id=bio_entry.id)
        if len(entry_inst) == 1:
            entry_inst.update(**bio_entry)
            return True
        else:
            return False


class Mutation(graphene.ObjectType):
    create_entry_category = EntryCategoryCreate.Field()
    create_entry = EntryCreate.Field()
    update_entry = EntryUpdate.Field()
