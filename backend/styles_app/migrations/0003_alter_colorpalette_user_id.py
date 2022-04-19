# Generated by Django 4.0.4 on 2022-04-18 21:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('styles_app', '0002_alter_colorpalette_color5'),
    ]

    operations = [
        migrations.AlterField(
            model_name='colorpalette',
            name='user_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='color_palettes', to=settings.AUTH_USER_MODEL),
        ),
    ]
