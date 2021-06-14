import graphene
from documents.models import BioDocument, BioDocumentAudio, BioDocumentImage, BioDocumentVideo
from graphene_django import DjangoObjectType
from graphene_file_upload.scalars import Upload



class BioDocumentType(DjangoObjectType):
    class Meta:
        model = BioDocument
        fields = "__all__"


class BioDocumentInputType(graphene.InputObjectType):
    title = graphene.String(required=True)
    owner = graphene.String()
    document = Upload()


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
