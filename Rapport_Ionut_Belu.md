
## **26/03-2026**

**Hold:** WebH125-1

---

# **Svendeprøve – Cinestar Website**

---

**Udarbejdet af:**
Ionut Catalin Belu

**Github:**
https://github.com/aplusplu/cinestar

**Login:**
[admin@mediacollege.dk](mailto:admin@mediacollege.dk) – admin
[guest@mediacollege.dk](mailto:guest@mediacollege.dk) – guest


---

## **Vurdering af egen indsats**

I dette projekt har jeg udviklet en komplet webapplikation for en filmproduktionsvirksomhed, *Cinestar*, med fokus på både frontend-arkitektur, API-integration og brugeroplevelse.

Jeg har valgt at anvende **React (Vite)** som framework, da det giver mulighed for en komponentbaseret opbygning, hvilket gør applikationen skalerbar og lettere at vedligeholde. Styling er implementeret med **TailwindCSS**, hvilket har gjort det muligt at arbejde hurtigt og præcist i forhold til det givne design.

Mit primære fokus i projektet har været:

* At opbygge en **klar og modulær struktur**
* At implementere en **service layer** til håndtering af API-kald
* At sikre en **responsiv og designmæssigt konsistent løsning**
* At arbejde med **state management og conditional rendering**

Funktionelt har jeg implementeret:

* Datahentning fra backend (GET requests)
* Oprettelse, opdatering og sletning (POST, PUT, DELETE)
* Login/logout baseret på localStorage
* Dynamisk rendering af content (reviews, portfolio m.m.)
* Grundlæggende backoffice-funktionalitet

En vigtig prioritering har været at holde komponenterne rene og adskille ansvar (separation of concerns), især ved ikke at placere fetch-logik direkte i komponenterne, men i stedet i dedikerede service-filer.

Undervejs har jeg mødt flere tekniske udfordringer:

* Fejl i import/export af komponenter
* Problemer med asset paths
* UI-elementer der ikke blev rendered korrekt (fx Testimonials og Portfolio)
* State som ikke opdaterede korrekt efter logout

Disse problemer blev løst gennem systematisk debugging, brug af console logs samt en bedre strukturering af dataflow.

Et centralt læringspunkt har været forståelsen af, hvordan frontend og backend spiller sammen – især hvordan små forskelle i API-respons kan påvirke hele UI’et.

Samlet set vurderer jeg, at jeg har opnået en solid løsning, der både teknisk og visuelt lever op til kravene, samtidig med at koden er struktureret på en måde, der gør den nem at videreudvikle.

---

## **Redegørelse for kodeelementer**

### **1. Komponentstruktur**

Projektet er opbygget med en tydelig komponentstruktur:

* `layout/` – globale komponenter (Navbar, Footer, Layout)
* `sections/` – sideopdelte sektioner (Hero, Portfolio, Testimonials)
* `pages/` – overordnede views

Denne struktur gør det muligt at genbruge komponenter og holde koden overskuelig.

---

### **2. Service Layer (central arkitektur)**

Jeg har bevidst valgt at implementere en **service layer**, hvor alle API-kald håndteres:

```js
/services/reviewService.js
/services/messageService.js
```

Fordele ved denne tilgang:

* Reducerer kompleksitet i komponenter
* Samler al API-logik ét sted
* Gør fejlfinding og ændringer lettere
* Understøtter skalerbarhed

Dette er en praksis, der ofte anvendes i professionelle projekter.

---

### **3. API-håndtering**

Jeg anvender en central Axios-instans (`api.js`) til alle requests.

Der er taget højde for forskellige API-respons-strukturer:

```js
if (Array.isArray(response.data)) return response.data;
if (Array.isArray(response.data?.data)) return response.data.data;
```

Dette gør løsningen mere robust over for backend-variationer.

---

### **4. State Management**

State håndteres med React hooks:

* `useState`
* `useEffect`
* `useMemo`

Eksempler:

* Navbar reagerer dynamisk på login-status
* Testimonials opdateres baseret på API-data
* Portfolio slider styres via lokal state

---

### **5. Authentication**

Login-status gemmes i localStorage:

```js
cinestar_token
cinestar_is_logged_in
cinestar_user_role
```

Navbar opdateres automatisk baseret på disse værdier, hvilket sikrer en dynamisk brugeroplevelse uden behov for global state libraries.

---

### **6. UI og designimplementering**

Designet er implementeret med fokus på:

* Mobile-first tilgang
* Konsistente spacing og typografi
* Mørkt, filmisk udtryk
* Nøjagtig oversættelse fra Figma til kode

Jeg har bevidst undgået unødvendige libraries for at demonstrere forståelse for ren CSS/Tailwind.

---

## **Fremhævede punkter til bedømmelse**

Til den mundtlige eksamen vil jeg især fremhæve:

1. **Service Layer arkitektur**

   * Hvorfor API-logik ikke ligger i komponenterne

2. **Dataflow mellem frontend og backend**

   * Hvordan data håndteres og transformeres

3. **Authentication og conditional rendering**

   * Dynamisk UI baseret på brugerstatus

4. **Portfolio slider**

   * Manuel implementering uden eksterne libraries

5. **Debugging proces**

   * Hvordan konkrete fejl blev identificeret og løst

---

## **Bilag – Planlægning og proces**

### **Arbejdstid**

Mandag – fredag

---

### **Mandag – Plan**

* Gennemgang af kravspecifikation
* Oprettelse af GitHub repository
* Initialisering af React projekt
* Opsætning af dependencies
* Strukturering af mapper

### **Mandag – Resultat**

* Projekt opsat korrekt
* Routing implementeret
* Grundstruktur etableret

---

### **Tirsdag – Plan**

* Oprettelse af sider og komponenter
* Implementering af layout (Navbar, Footer)
* Opbygning af UI-skelet

### **Tirsdag – Resultat**

* Alle komponenter oprettet
* Navigation fungerer
* UI-skelet færdigt

---

### **Onsdag – Plan**

* Implementering af API-fetching
* Integration af data i UI
* Justering af design

### **Onsdag – Resultat**

* Reviews og data rendering fungerer
* Service layer implementeret
* Første dynamiske data vises

---

### **Torsdag – Plan**

* CRUD funktionalitet
* Backoffice struktur
* Fejlretning

### **Torsdag – Resultat**

* Login/logout fungerer korrekt
* Portfolio og Testimonials rettet
* Backend integration stabil

---

### **Fredag – Plan**

* Endelig fejlretning
* Code cleanup
* Kommentarer og dokumentation

### **Fredag – Resultat**

* Applikationen stabil
* Alle kritiske fejl løst
* Klar til aflevering

