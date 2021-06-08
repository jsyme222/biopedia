from documents.models import BioDocument, BioDocumentAudio, BioDocumentImage, BioDocumentVideo
from django.contrib import admin


@admin.register(
    BioDocument, 
    BioDocumentImage, 
    BioDocumentVideo, 
    BioDocumentAudio
)
class DocumentAdmin(admin.ModelAdmin):
    pass