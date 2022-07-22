USE [master]

IF db_id('TennesseeCaves') IS NULL
  CREATE DATABASE [TennesseeCaves]
GO

USE [TennesseeCaves]
GO


DROP TABLE IF EXISTS [UserProfileCave];
DROP TABLE IF EXISTS [CaveOrganization];
DROP TABLE IF EXISTS [Image];
DROP TABLE IF EXISTS [Tour];
DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [Cave];
DROP TABLE IF EXISTS [Access];
DROP TABLE IF EXISTS [Organization];
GO

CREATE TABLE [Access] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [AccessLevel] nvarchar(255)
)
GO

CREATE TABLE [Cave] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL,
  [AccessId] int NOT NULL,
  [Website] nvarchar(255),
  [Location] nvarchar(255),
  [About] nvarchar(255),
  [DateAdded] datetime NOT NULL,
  [BannerImageUrl] nvarchar(255)

  CONSTRAINT [FK_Cave_Access] Foreign Key ([AccessId]) REFERENCES [Access] ([Id])
)
GO

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [FirebaseUserId] nvarchar(28) NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [Email] nvarchar(255) NOT NULL,
  [IsAdmin] bit NOT NULL DEFAULT (0),
  [Location] nvarchar(255)

  CONSTRAINT UQ_FirebaseUserId UNIQUE(FirebaseUserId)
)
GO

CREATE TABLE [UserProfileCave] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [UserProfileId] int NOT NULL,
  [CaveId] int NOT NULL,
  [IsFavorite] bit NOT NULL DEFAULT (0),
  [WhenAdded] datetime NOT NULL

  CONSTRAINT [FK_UserProfileCave_UserProfile] Foreign Key ([UserProfileId]) REFERENCES [UserProfile] ([Id]),
  CONSTRAINT [FK_UserProfileCave_Cave] Foreign Key ([CaveId]) REFERENCES [Cave] ([Id]) ON DELETE CASCADE
)
GO

CREATE TABLE [Organization] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL,
  [Website] nvarchar(255),
  [Image] nvarchar(255)
)
GO

CREATE TABLE [CaveOrganization] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [CaveId] int NOT NULL,
  [OrganizationId] int NOT NULL

  CONSTRAINT [FK_CaveOrganization_Cave] Foreign Key ([CaveId]) REFERENCES [Cave] ([Id]) ON DELETE CASCADE,
  CONSTRAINT [FK_CaveOrganization_Organization] Foreign Key ([OrganizationId]) References [Organization] ([Id])
)
GO

CREATE TABLE [Tour] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [CaveId] int NOT NULL,
  [TimeOfDay] nvarchar(255),
  [TimeOfYear] nvarchar(255),
  [Price] decimal,
  [PeoplePerTour] int

  CONSTRAINT [FK_Tour_Cave] Foreign Key ([CaveId]) REFERENCES [Cave] ([Id])
)
GO

CREATE TABLE [Image] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [CaveId] int NOT NULL,
  [Url] nvarchar(255)

  CONSTRAINT [FK_Image_Cave] Foreign Key ([CaveId]) REFERENCES [Cave] ([Id]) ON DELETE CASCADE
)
GO

