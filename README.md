## The Zoo

Använd react med typescript för att skapa en sida för ett zoo.<br>
En lista med djur finns tillgänglig på: https://animals.azurewebsites.net/api/animals <br>
<br>
Du behöver ladda ner djuren till din applikation och spara dem i applikationen.
<br>Det kommer inte gå att ändra djuren via api:t.<br>
Förslagsvis lagrar du dem i localStorage ellersessionStorage.<br>
<br>
### För G:<br>
•Skapa en SPA (i react med typescript) som innehåller en startsida där djuren presenteras med namn och en kort beskrivning.<br>
 •Det skall gå att klicka på ett djur för att se mer information om detta djur via en egen route.<br>
  •Från djurets egna sida skall du kunna markera om djuret nu är matat eller inte via en knapp som heter Mata djur. När du klickar på denna knapp skall djurets status ändras så att det framgår att det är matat. Och det skall inte längre gå att klicka på knappen. Du behöver också lägga in tiden som djuret matades.<br>
 •Ni behöver ha en god struktur i ert projekt vad gäller komponenter och filer.
<br>
### VG:<br>
•Samtliga krav för G<br>
•Hantera trasiga bildlänkar på ett snyggt sätt<br>
•När du går in på djurets sida nästa gång kontrollerar du om det har gått mer än tre timmar sedan senaste matningen. Om så är fallet nollställs matningen och det skall gå att mata djuret igen.<br>
 •Ni skall presentera en liten notis på startsidan, samt på djursidan, om att ett djur behöver matas om det är mer än fyra timmar sedan djuret matades.<br>
 •Ni behöver användaminst en tjänster i er applikation, både för hämtning av data och för gemensamma beräkningar.
