# 📌 Rättningsrapport – fed24d-case-af-jobtech-team-14

## 🎯 Uppgiftens Krav:
# Skapa en egen Platsbanken för ert drömscenario 

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. 
I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen 

-  [Övergripande dokumentation API:etJobSearch](https://data.arbetsformedlingen.se/data/platsannonser/)
-  [Kom-igång guide](https://gitlab.com/arbetsformedlingen/job-ads/jobsearch/jobsearch-api/-/blob/main/docs/GettingStartedJobSearchSE.md)

## Prova att utforska datan med vår interaktiva tjänst 

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): [Search job ads (jobtechdev.se)](https://jobsearch.api.jobtechdev.se/)

## Uppgift 

Använd endpoint **/search** för att söka bland befintliga annonser. 
Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: [Historical job ads (jobtechdev.se)](https://historical.api.jobtechdev.se/)

Om möjligt, använd en grafisk presentation av era resultat genom t.ex. stapeldiagram eller linjegrafer.

**Observera**
Er slutprodukt ska ej innehålla Arbetsförmedlingens logga eller färger. Anpassa gärna efter eget tycke och smak så att ni har en färgpalett och en god tanke bakom. 

## Betygskriterier 

### Need-to-have (G) 
- Ni har hämtat data på ett strukturerat sätt med hjälp av antingen fetch eller axios. 
- Ni har skapat en tjänst som ni använder för att hämta data. 
- Ni använder react-koncept vi har pratat om för att göra datan tillgänglig (context, state, routing et.c.). 
- Ni använder den syntax, namngivningsstandard samt skrivsätt som vi har lärt er.  
- Ni använder designsystemet för presentation. 

### Nice-to-have (Extra bonus) 
- Styled components (som drar nytta av designsystemet) 
- Grafisk presentation av datat 
- Användning av custom hook där det finns möjlighet
- Använd endpoint /complete för att lägga till autocomplete-funktion och få förslag på begrepp vid fritextsökning

## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-team-14\src\contexts\SavedJobsContext.ts - no-unused-vars - 'job' is defined but never used.,no-unused-vars - 'id' is defined but never used.,no-unused-vars - 'id' is defined but never used.
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-team-14\src\contexts\recentSearchesContext.ts - no-unused-vars - 'q' is defined but never used.
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-team-14\src\services\adsService.ts - no-console - Unexpected console statement.,no-console - Unexpected console statement.
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-team-14\src\services\filteringServices.ts - no-console - Unexpected console statement.,no-console - Unexpected console statement.,no-console - Unexpected console statement.,no-console - Unexpected console statement.,no-console - Unexpected console statement.,no-console - Unexpected console statement.,no-console - Unexpected console statement.,no-console - Unexpected console statement.

## 🏆 **Betyg: IG**
📌 **Motivering:** Kunde inte tolka uppgiften korrekt. Kontrollera manuellt.

💡 **Förbättringsförslag:**  
Automatisk rättning misslyckades. Vänligen kontrollera koden manuellt.

## 👥 Gruppbidrag

| Deltagare | Antal commits | Commit % | Uppgiftskomplettering | Totalt bidrag |
| --------- | -------------- | -------- | ---------------------- | ------------- |
| JanisSeibutis | 50 | 47.6% | 0.25 | 0.34 |
| mikaelakihl | 38 | 36.2% | 0.25 | 0.29 |
| Alexandra | 14 | 13.3% | 0.25 | 0.2 |
| JanisSeibutis | 3 | 2.9% | 0.25 | 0.16 |


### 📊 Förklaring
- **Antal commits**: Antalet commits som personen har gjort
- **Commit %**: Procentuell andel av totala commits
- **Uppgiftskomplettering**: Poäng baserad på mappning av README-krav mot kodbidrag 
- **Totalt bidrag**: Viktad bedömning av personens totala bidrag (40% commits, 60% uppgiftskomplettering)
