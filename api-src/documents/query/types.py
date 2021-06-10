from documents.models import BioDocument, BioDocumentAudio, BioDocumentImage, BioDocumentVideo
from graphene_django import DjangoObjectType


class BioDocumentType(DjangoObjectType):
    class Meta:
        model = BioDocument
        fields = "__all__"


class BioDocumentImageType(DjangoObjectType):
    class Meta:
        model = BioDocumentImage
        fields = "__all__"


class BioDocumentAudioType(DjangoObjectType):
    class Meta:
        model = BioDocumentAudio
        fields = "__all__"


class BioDocumentVideoType(DjangoObjectType):
    class Meta:
        model = BioDocumentVideo
        fields = "__all__"
