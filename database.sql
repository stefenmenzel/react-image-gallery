CREATE TABLE images (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(255),
	"description" VARCHAR(255),
	"likes" INTEGER
);

INSERT INTO images ("path", "description", "likes")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
	   ('images/GGJ2018.jpg', 'Photo of my team from Global Game Jam 2018', 0),
	   ('images/guboo.jpg', 'The cutest pupper doggo that lives at my house', 1000),
	   ('images/LokiTheCat.jpg', 'The coolest cat, my roommate, and cuddlebuddy, Loki', 100),
	   ('images/mybeautifulhair.jpg', 'Me when my hair was at its longest', 0),
	   ('images/MeNBro.jpg', 'Me and my actual bro', 0),
	   ('images/Rhea.jpg', 'Rhea and I at a wedding', 0),
	   ('images/RheaAndMeBWCA.jpg', 'Rhea and I at the BWCA', 0),
	   ('images/Sibs.jpg', 'My siblings and I', 0),
	   ('images/Moms.jpg', 'My mother and I', 0);
