from graphene_file_upload.scalars import Upload
from documents.query.types import BioDocumentImageType, BioDocumentInputType, BioDocumentType, BioDocumentVideoType
from documents.models import BioDocumentAudio, BioDocumentImage, BioDocumentVideo
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


class BioEntryInputType(graphene.InputObjectType):
    member = graphene.Int()
    title = graphene.String()
    category = graphene.Int()
    date_of_events = graphene.String()

    content_written = graphene.String()
    content_images = graphene.List(BioDocumentInputType)
    content_videos = graphene.Field(BioDocumentInputType)
    content_documents = graphene.List(BioDocumentInputType)
    content_audio = graphene.Field(BioDocumentInputType)


class BioEntryUpdateInputType(BioEntryInputType):
    id = graphene.String()
