# Upphandlingsplattformen
En central, öppen och kostnadsfri plattform för offentliga upphandlingar - för att förenkla processen, minska kostnader och öka transparensen i den offentliga sektorn.

Vi arbetar utan vinstintresse för att förbättra offentlig service genom tillgänglig mjukvara.

\- *Samhällskod, byggt för allmänheten med öppenhet, trygghet och långsiktighet.*

## Table of Contents

- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
  - [Fas 1](#fas-1)
  - [Fas 2](#fas-2)
  - [Fas 3](#fas-3)
  - [Fas 4](#fas-4)

## Getting Started

Börja med att installera alla npm paket:
```bash
npm install
```

Starta sedan developer server:
```bash
npm run dev
```

För att bygga applicationen använder du:
```bash
npm run build
```

## Roadmap
Detta är en grov skiss på strukturen av arbetet för Upphandlingsplattformen. Arbetet sker ideellt och kan komma att ändras i och med prioriteringar.

## Fas 1

1. **Skapa en hemsida**
   - Roadmap
   - Grundläggande struktur
   - **Upphandlingar**
     - Sida för att söka upphandlingar med filtrering: `/upphandlingar/annonser`
       - Granska existerande lösningar och härma datastruktur
     - Sida för att skapa anbud för upphandlingar
       - Granska existerande lösningar och härma datastruktur
   - **Kategorier**
     - Skapa en sida för att söka och se CPV-kategorier
       - Skapa ett npm-paket för att hämta CPV-koder programmatiskt
     - Länka kategorier till `/upphandlingar/annonser` för respektive kategori
   - **Om oss**
     - Beskrivning av vision
   - **Integritetssida / Kontakt**

2. **Skapa en GraphQL-backend för att hämta data**
   - Skapa en datastruktur för en SQL-databas:
     - Upphandlingar (procurements)
     - Anbud (offers)
     - Organisation
   - Skapa ett GraphQL-lager för att enkelt hämta data till hemsida

3. **Hitta molnleverantör för samarbete**

---

## Fas 2

1. Inloggning / Authentication
2. Introduktion för offentliga organisationer
   - Feedback och förbättring
3. DevOps-automatisering
4. Statistiksida
   - Enkelt kunna kategorisera, hämta och granska upphandlingar:
     - För framtida upphandlingar
     - Historiska upphandlingar
5. Finansiering eller ökad öppen källkod-gemenskap
6. “Marknadsföring”

---

## Fas 3

1. API-integrationer med externa system
2. Inhämtning av historisk data

---

## Fas 4

1. Förvaltningsprocess eller överlämning till existerande myndigheter
2. Avancerad datavisualisering
3. Machine learning
   - AI-driven agent som använder maskininlärning och/eller regelbaserad logik för att tolka användarfrågor och ge svar baserat på historiska datauppsättningar. Den kan agera som ett beslutsstöd genom att:
     - Identifiera mönster i tidigare konversationer, transaktioner eller händelser
     - Generera prediktioner eller rekommendationer
     - Sammanställa relevant information från lagrade datakällor
