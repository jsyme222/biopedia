from documents.models import BioDocument, BioDocumentAudio, BioDocumentImage, BioDocumentVideo
import uuid
from django.db import models
from django.utils import timezone

from members.models import Member

from ckeditor.fields import RichTextField


class BioEntryCategory(models.Model):
    class Meta:
        verbose_name_plural = "Categories"

    title = models.CharField(
        max_length=250,
        blank=False,
        default=""
    )

    def __str__(self) -> str:
        return self.title

    def save(self, *args, **kwargs):
        self.title = self.title.lower()
        super(BioEntryCategory, self).save(*args, **kwargs)


class AbstractBioEntry(models.Model):
    class Meta:
        abstract = True

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    title = models.CharField(
        max_length=250,
        blank=False,
        default=""
    )
    category = models.ForeignKey(
        BioEntryCategory,
        null=True,
        blank=True,
        on_delete=models.CASCADE
    )

    member = models.ForeignKey(
        Member,
        on_delete=models.CASCADE
    )

    date_recorded_on = models.DateTimeField(default=timezone.now)
    date_of_events = models.DateField(null=True, blank=True)

    events_related_to = models.ManyToManyField(
        "self", 
        verbose_name="Related Event",
        blank=True,
        help_text="Other events in your Biography that are related to this one."
    )
    events_corroborating = models.ManyToManyField(
        "self", 
        verbose_name="Corroborating Event",
        blank=True,
    )


class Entry(AbstractBioEntry):
    class Meta:
        verbose_name_plural = " Entries"

    content_written = RichTextField(default="")

    content_audio = models.ForeignKey(
        BioDocumentAudio,
        verbose_name="Audio File",
        related_name="audio",
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )
    content_audio_url = models.URLField(
        verbose_name="Audio Link",
        blank=True,
        null=True,
        default="",
        help_text="OPTIONAL: Link to an audio file... https://"
    )
    content_images = models.ManyToManyField(
        BioDocumentImage,
        verbose_name="Images",
        related_name="images",
        blank=True
    )
    content_video = models.ForeignKey(
        BioDocumentVideo,
        verbose_name="Video File",
        related_name="video_content",
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )
    content_video_url = models.URLField(
        verbose_name="Video Link",
        blank=True,
        null=True,
        default="",
        help_text="OPTIONAL: Link to a video file... https://"
    )
    content_documents = models.ManyToManyField(
        BioDocument,
        verbose_name="Documents",
        related_name="documents",
        blank=True,
        help_text="Upload any documents related to the entry."
    )

    def __str__(self) -> str:
        return f'{self.member.name_first} - {self.title}'
