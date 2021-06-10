from documents.query.types import BioDocumentAudioType, BioDocumentImageType, BioDocumentType, BioDocumentVideoType
from documents.models import BioDocument, BioDocumentAudio, BioDocumentImage, BioDocumentVideo
import graphene


class DocumentUnion(graphene.Union):
    class Meta:
        types = (BioDocumentType, BioDocumentAudioType,
                 BioDocumentImageType, BioDocumentVideoType)

    @classmethod
    def resolve_type(cls, instance, info):
        if isinstance(instance, BioDocument):
            print("BIODOC")
            return BioDocumentType
        if isinstance(instance, BioDocumentImage):
            return BioDocumentImageType
        if isinstance(instance, BioDocumentVideo):
            return BioDocumentVideoType
        if isinstance(instance, BioDocumentAudio):
            return BioDocumentAudioType
        return DocumentUnion.resolve_type(instance, info)


class Query(graphene.ObjectType):
    all_documents_by_username = graphene.List(
        DocumentUnion,
        username=graphene.String(required=True)
    )

    def resolve_all_documents_by_username(root, info, username):
        return [
            *BioDocument.objects.filter(owner__username=username), 
            *BioDocumentImage.objects.filter(owner__username=username), 
            *BioDocumentAudio.objects.filter(owner__username=username), 
            *BioDocumentVideo.objects.filter(owner__username=username)
        ]
