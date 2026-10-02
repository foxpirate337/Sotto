# Sotto – Cantina + Cucina

Sito web ufficiale per il ristorante, pizzeria e cantina **"Sotto – Cucina, vino e pizza"**, situato nel centro storico di Comunanza (AP) presso l'Interamnia Boutique Hotel.

🌐 **Demo / GitHub Pages**: Pronto per la pubblicazione su GitHub Pages o qualsiasi hosting statico (Netlify, Vercel).

---

## 🍽️ Caratteristiche del Progetto

- **Design su Misura**: Palette colori esatta estratta dal logo (`--bg-sand`, `--ink`, `--cream`, `--wine-accent`), tipografia raffinata con Google Fonts (`Cormorant Garamond` & `Plus Jakarta Sans`).
- **Menu Bilingue Dinamico (IT / EN)**:
  - Selettore lingua integrato nell'header con memorizzazione della preferenza (`localStorage`).
  - Traduzione completa dell'interfaccia e di tutti i 41 piatti della carta.
  - Struttura dati centralizzata in `script.js` (`MENU_DATA`): i piatti, i prezzi e le descrizioni si aggiornano in un unico punto.
- **Stile Carta del Ristorante**:
  - Dotted leader classico (puntini di guida tra nome del piatto e prezzo).
  - Gestione prezzi variabili `S.Q.` con legenda a piè di pagina.
- **Mobile-First & Azioni Rapide**:
  - Barra d'azione inferiore fissa su smartphone ("Chiama", "Menu", "Indicazioni").
  - Mappa interattiva Google Maps integrata (senza necessità di API key).
- **SEO Locale & Dati Strutturati**:
  - Tag Open Graph e Twitter Card.
  - Script JSON-LD Schema.org di tipo `Restaurant` con geolocalizzazione e recensioni aggregate (4,8 ★ su 68 recensioni Google).
- **Zero dipendenze esterne**: HTML5 semantico, CSS3 moderno con variabili, JavaScript Vanilla puro.

---

## 📂 Struttura File

```text
├── assets/
│   ├── logo.png               # Logo ufficiale
│   └── favicon.svg            # Favicon vettoriale coordinata
├── index.html                 # Markup semantico, SEO e struttura della pagina
├── styles.css                 # Fogli di stile responsive e accessibili
├── script.js                  # Dati menu, traduzioni bilingue e logica interattiva
└── README.md                  # Documentazione del progetto
```

---

## ✏️ Come Aggiornare il Menu

Per modificare prezzi, aggiungere nuovi piatti o aggiornare le descrizioni, apri `script.js` e modifica l'oggetto `MENU_DATA`:

```javascript
{
  category: 'primi',
  name: {
    it: 'Tagliolino al tartufo',
    en: 'Tagliolini with truffle'
  },
  description: {
    it: 'Tagliolini freschi con burro chiarificato e tartufo selezionato',
    en: 'Fresh tagliolini with clarified butter and selected aromatic truffle'
  },
  price: '€ 12,00'
}
```

---

## 📍 Contatti & Info Locale

- **Indirizzo**: Piazza Santa Caterina, 1, 63087 Comunanza (AP) – Presso Interamnia Boutique Hotel
- **Telefono**: 0736 618154
- **Instagram**: [@sotto_winefood](https://www.instagram.com/sotto_winefood/)
- **Facebook**: [sottowinefood](https://www.facebook.com/sottowinefood)
