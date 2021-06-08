# Generated by Django 3.2.2 on 2021-06-08 23:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('documents', '0002_auto_20210608_2249'),
        ('bio_entries', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='content_audio',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='audio', to='documents.biodocumentaudio', verbose_name='Audio File'),
        ),
        migrations.AlterField(
            model_name='entry',
            name='content_video',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='video_content', to='documents.biodocumentvideo', verbose_name='Video File'),
        ),
    ]