# Generated by Django 2.2.17 on 2020-12-09 05:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0003_users"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="users",
            name="created_at",
        ),
        migrations.RemoveField(
            model_name="users",
            name="email",
        ),
        migrations.RemoveField(
            model_name="users",
            name="password",
        ),
        migrations.RemoveField(
            model_name="users",
            name="password_hash",
        ),
        migrations.RemoveField(
            model_name="users",
            name="updated_at",
        ),
    ]
