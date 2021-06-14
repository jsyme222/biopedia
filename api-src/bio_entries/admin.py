import os
from django.contrib import admin
from .models import Entry, BioEntryCategory


@admin.register(Entry)
class BioEntryAdmin(admin.ModelAdmin):
    readonly_fields = ["id", "date_recorded_on"]

    fieldsets = (
        ("General", {
            'fields': (
                'id',
                'date_recorded_on',
            )
        }),
        ("Content", {
            'fields': (
                'title',
                'member',
                'category',
                'date_of_events',
                'content_written'
            )
        }),
        ("Audio", {
            'fields': ("content_audio", "content_audio_url")
        }),
        ("Images", {
            'fields': ("content_images", )
        }),
        ("Video", {
            'fields': ("content_video", "content_video_url")
        }),
        ("Documents", {
            'fields': ("content_documents", )
        }),
        ("Related Events", {
            'fields': ("events_related_to", "events_corroborating")
        }),
    )

    def save_model(self, request, obj, form, change):
        if not obj.member:
            obj.member = request.user
        obj.last_modified_by = request.user
        obj.save()


@admin.register(
    BioEntryCategory,
)
class RestAdmin(admin.ModelAdmin):
    readonly_fields = ["id", ]
    fieldsets = (
        ("General", {
            'fields': (
                'id',
                'title',
            )
        }),
    )
