from pathlib import Path
from django.db import models
from django.db.models.signals import post_delete

from api.utils.filecleanup import file_cleanup, image_file_cleanup
from api.settings import AUTH_USER_MODEL as User


class AbstractBioDocument(models.Model):
    class Meta:
        abstract = True

    def document_upload_location(self, file):
        dir = Path(
            'documents',
            file.split(".")[-1],
            file
        )
        return dir

    title = models.CharField(max_length=250, default="")
    owner = models.ForeignKey(
        User, blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title


class BioDocument(AbstractBioDocument):
    class Meta:
        verbose_name = "Document"

    document = models.FileField(
        upload_to=AbstractBioDocument.document_upload_location,
        blank=True,
        null=True
    )


class BioDocumentImage(AbstractBioDocument):
    class Meta:
        verbose_name = "Image"

    document = models.ImageField(
        upload_to=AbstractBioDocument.document_upload_location,
        blank=True,
        null=True
    )


class BioDocumentAudio(AbstractBioDocument):
    class Meta:
        verbose_name = "Audio"
        verbose_name_plural = "Audio Files"

    document = models.FileField(
        upload_to=AbstractBioDocument.document_upload_location,
        blank=True,
        null=True
    )


class BioDocumentVideo(AbstractBioDocument):
    class Meta:
        verbose_name = "Video"

    document = models.FileField(
        upload_to=AbstractBioDocument.document_upload_location,
        blank=True,
        null=True
    )


post_delete.connect(file_cleanup, sender=BioDocument,
                    dispatch_uid="bio_document.document.file_cleanup")

post_delete.connect(file_cleanup, sender=BioDocumentVideo,
                    dispatch_uid="bio_document.video.file_cleanup")

post_delete.connect(file_cleanup, sender=BioDocumentAudio,
                    dispatch_uid="bio_document.audio.file_cleanup")

post_delete.connect(image_file_cleanup, sender=BioDocumentImage,
                    dispatch_uid="bio_document.image.file_cleanup")
