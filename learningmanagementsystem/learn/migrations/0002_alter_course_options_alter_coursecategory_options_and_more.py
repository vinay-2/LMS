# Generated by Django 5.1.2 on 2024-10-15 09:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('learn', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='course',
            options={'verbose_name_plural': '4.Courses'},
        ),
        migrations.AlterModelOptions(
            name='coursecategory',
            options={'verbose_name_plural': '2.CourseCategories'},
        ),
        migrations.AlterModelOptions(
            name='student',
            options={'verbose_name_plural': '3.Students'},
        ),
        migrations.AlterModelOptions(
            name='teacher',
            options={'verbose_name_plural': '1.Teachers'},
        ),
    ]
