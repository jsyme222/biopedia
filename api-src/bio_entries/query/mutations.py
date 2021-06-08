from bio_entries.models import BioEntryCategory
from bio_entries.query.types import EntryCategoryType, EntryCategoryInputType
import graphene


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


class Mutation(graphene.ObjectType):
    create_entry_category = EntryCategoryCreate.Field()
