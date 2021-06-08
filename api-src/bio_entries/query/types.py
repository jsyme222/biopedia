from django.db import models
import graphene
from graphene_django import DjangoObjectType
from bio_entries.models import BioEntryCategory, Entry, BioDocument

class EntryCategoryType(DjangoObjectType):
    class Meta:
        model = BioEntryCategory
        fields = "__all__"


class EntryCategoryInputType(graphene.InputObjectType):
    title = graphene.String()


class BioEntryType(DjangoObjectType):
    class Meta:
        model = Entry
        fields = "__all__"


class BioDocumentType(DjangoObjectType):
    class Meta:
        model = BioDocument
        fields = "__all__"