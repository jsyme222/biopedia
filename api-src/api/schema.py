import graphene

from members.query.schema import Query as MemberQuery
from bio_entries.query.schema import Query as BioEntryQuery

from bio_entries.query.mutations import Mutation as BioEntryMutation


class Query(MemberQuery, BioEntryQuery, graphene.ObjectType):
    pass


class Mutation(BioEntryMutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
