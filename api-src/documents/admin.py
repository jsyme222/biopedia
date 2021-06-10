from documents.models import BioDocument, BioDocumentAudio, BioDocumentImage, BioDocumentVideo
from django.contrib import admin


@admin.register(
    BioDocument, 
    BioDocumentImage, 
    BioDocumentVideo, 
    BioDocumentAudio
)
class DocumentAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.owner:
            obj.owner = request.user
        obj.last_modified_by = request.user
        obj.save()