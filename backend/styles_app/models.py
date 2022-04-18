from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser

class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)



class AppUser(AbstractUser):
    """User model."""
    
    username = None
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name'] # Email & Password by default

    objects = UserManager()
    
    def __str__(self):
        return f'User: {self.email}'



class ColorPalette(models.Model):
    name = models.CharField(max_length=64)
    color1 = models.CharField(max_length=64)
    color2 = models.CharField(max_length=64)
    color3 = models.CharField(max_length=64)
    color4 = models.CharField(max_length=64)
    color5 = models.CharField(max_length=64)
    user_id = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name="color_palettes")
    

class FontPair(models.Model):
    font1 = models.CharField(max_length=64)
    font2 = models.CharField(max_length=64)
    user_id = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name="font_pairs")
