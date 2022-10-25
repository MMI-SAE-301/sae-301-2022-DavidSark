--
-- code pour la création des tables
--
/*CREATE TABLE Materiaux(
   id_materiaux int,
   libelle_materiaux VARCHAR(50),
   PRIMARY KEY(id_materiaux)
);

CREATE TABLE Montre(
   id_montre int,
   ecran VARCHAR(50),
   bracelet VARCHAR(50),
   boitier VARCHAR(50),
   id_materiaux int,
   PRIMARY KEY(id_montre),
   FOREIGN KEY(id_materiaux) REFERENCES Materiaux(id_materiaux)
);*/



--
-- code pour la création des vues
--
/*
CREATE VIEW "allMontre" as
SELECT *
FROM "montre";

*/



--
-- code pour la création des policies
--