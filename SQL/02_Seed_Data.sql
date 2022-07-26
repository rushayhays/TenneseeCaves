USE [TennesseeCaves];
GO

set identity_insert [UserProfile] on
insert into [UserProfile] ([Id],[FirebaseUserId],[Name],[Email],[IsAdmin],[Location]) VALUES (1,'LYfvexxHBsggo9hL64YsDpq8boh1','Moleman','moleman@email.com',1,'Franklin'),
(2,'Ywcn1WUfLhUzoeD2Q1eGHlKqccq1','Riko','whitewhistle@email.com',0,'Chattanooga');
set identity_insert [UserProfile] off

set identity_insert [Access] on
insert into [Access] ([Id],[AccessLevel]) VALUES (1,'Public'),(2,'Restricted'),(3,'Private');
set identity_insert [Access] off

set identity_insert [Cave] on
insert into [Cave] ([Id],[Name],[AccessId],[Website],[Location],[About],[DateAdded],[BannerImageUrl]) VALUES (1,'Cumberland Caverns', 1,'https://cumberlandcaverns.com/','1437 Cumberland Caverns Rd, McMinnville, TN, 37110','With more than 32 miles of caves and underground passageways, incredible underground rock formations, beautiful underground waterfalls, gleaming pools, there is plenty of fun and adventure for everyone!','2022-07-20','https://live.staticflickr.com/4327/35615110550_ba1a722554_b.jpg'),
(2,'The Lost Sea',1,'https://thelostsea.com/','140 Lost Sea Rd, Sweetwater, TN, 37874','The Lost Sea is one of the most popular caving destinations. The adventure begins with a guided tour of the caverns, which involves a ¾ mile round-trip walk on wide sloping pathways.','2022-07-20','https://www.visitloudoncounty.com/wp-content/uploads/2018/04/lost-sea.jpg'),
(3,'Bristol Caverns',1,'https://bristolcaverns.com/','1157 Bristol Caverns Hwy, Briston, TN, 37620','Bristol Caverns offer unique paved, well-lit walkways that wind through the vaulted chambers and along the banks of the ancient Underground','2022-07-20','https://discoverbristol.org/wp-content/uploads/2020/07/bristol-caves-underground-trip-ideas-hero.jpg');
set identity_insert [Cave] off

set identity_insert [Image] on
insert into [Image] ([Id],[CaveId],[Url]) VALUES (1,1,'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c6/c4/33/photo-of-the-pool.jpg?w=1200&h=1200&s=1'),
(2,2,'https://www.visitloudoncounty.com/wp-content/uploads/2018/04/lost-sea.jpg'),
(3,3,'https://discoverbristol.org/wp-content/uploads/2020/07/bristol-caves-underground-trip-ideas-hero.jpg');
set identity_insert [Image] off


set identity_insert [Tour] on
insert into [Tour] ([Id],[CaveId],[TimeOfDay],[TimeOfYear],[Price],[PeoplePerTour]) VALUES (1,1,'9AM-4PM','Year Round',13.75,25),
(2,1,'5AM-7PM','Year Round',23.75,10),
(3,2,'All Day','All Year',23.95,12),
(4,3,'Mon-Sat, 9AM-5PM','March 15 - Oct 31',25.00,5);
set identity_insert [Tour] off

set identity_insert [Organization] on
insert into [Organization] ([Id],[Name],[Website],[Image]) VALUES (1,'National Park Service','https://www.nps.gov/index.htm','https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_of_the_United_States_National_Park_Service.svg'),
(2,'National Cave Association','https://cavern.com/','https://cavern.com/mobile/images/logo.png'),
(3,'Southern Highlands Attractions','https://southernhighlands.org/','https://www.chimneyrockpark.com/wp-content/uploads/2021/09/SHA-logo.png');
set identity_insert [Organization] off

set identity_insert [CaveOrganization] on
insert into [CaveOrganization] ([Id],[CaveId],[OrganizationId]) VALUES (1,1,1),(2,2,2),(3,3,2),(4,3,3);
set identity_insert [CaveOrganization] off

set identity_insert [UserProfileCave] on
insert into [UserProfileCave] ([Id],[UserProfileId],[CaveId],[IsFavorite],[WhenAdded]) VALUES (1,1,1,0,'2022-07-20'),(2,1,2,0,'2022-07-20'),(3,2,3,1,'2022-07-20'),(4,2,2,0,'2022-07-20');
set identity_insert [UserProfileCave] off
