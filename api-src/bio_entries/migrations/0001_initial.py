# Generated by Django 3.2.2 on 2021-06-09 14:54

import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('documents', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BioEntryCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=250)),
            ],
            options={
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Entry',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(default='', max_length=250)),
                ('date_recorded_on', models.DateTimeField(default=django.utils.timezone.now)),
                ('date_of_events', models.DateField(blank=True, null=True)),
                ('content_written', ckeditor.fields.RichTextField(default='')),
                ('content_audio_url', models.URLField(blank=True, default='', help_text='OPTIONAL: Link to an audio file... https://', null=True, verbose_name='Audio Link')),
                ('content_video_url', models.URLField(blank=True, default='', help_text='OPTIONAL: Link to a video file... https://', null=True, verbose_name='Video Link')),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='bio_entries.bioentrycategory')),
                ('content_audio', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='audio', to='documents.biodocumentaudio', verbose_name='Audio File')),
                ('content_documents', models.ManyToManyField(blank=True, help_text='Upload any documents related to the entry.', related_name='documents', to='documents.BioDocument', verbose_name='Documents')),
                ('content_images', models.ManyToManyField(blank=True, related_name='images', to='documents.BioDocumentImage', verbose_name='Images')),
                ('content_video', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='video_content', to='documents.biodocumentvideo', verbose_name='Video File')),
                ('events_corroborating', models.ManyToManyField(blank=True, related_name='_bio_entries_entry_events_corroborating_+', to='bio_entries.Entry', verbose_name='Corroborating Event')),
                ('events_related_to', models.ManyToManyField(blank=True, help_text='Other events in your Biography that are related to this one.', related_name='_bio_entries_entry_events_related_to_+', to='bio_entries.Entry', verbose_name='Related Event')),
            ],
            options={
                'verbose_name_plural': ' Entries',
            },
        ),
    ]
