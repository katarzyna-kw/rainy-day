# Generated by Django 4.0.4 on 2022-04-21 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('styles_app', '0003_alter_colorpalette_user_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='colorpalette',
            name='color6',
            field=models.CharField(default=None, max_length=64, null=True),
        ),
    ]
