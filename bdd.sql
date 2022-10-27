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


create view allAcier as 
select "montre".*
from "materiaux", "montre" 
where "materiaux".id_materiaux = "montre".id_materiaux 
and "materiaux"."libelle" = 'Acier';  

create view allBois as 
select "montre".*
from "materiaux", "montre" 
where "materiaux".id_materiaux = "montre".id_materiaux 
and "materiaux"."libelle" = 'Bois'; 

create view allLaiton as 
select "montre".*
from "materiaux", "montre" 
where "materiaux".id_materiaux = "montre".id_materiaux 
and "materiaux"."libelle" = 'Laiton'; 
*/

*/



--
-- code pour la création des policies

/*
ALTER POLICY "Enable insert for authenticated users only" ON "public"."montre" TO authenticated;
 
ALTER POLICY "Enable update for users based on email" ON "public"."montre" USING ((uid() = id_users));

*/
--