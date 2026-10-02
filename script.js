/**
 * SOTTO – Cantina + Cucina
 * Script principale: Gestione Menu dinamico, Internazionalizzazione (IT/EN), 
 * Interazioni UI, Scrollspy, Mobile Menu e Accessibilità Mobile-First.
 */

// ==========================================
// 1. DATI DEL MENU (UNICO PUNTO DI MODIFICA)
// ==========================================
const MENU_DATA = {
  categories: [
    {
      id: 'antipasti',
      name: { it: 'Antipasti', en: 'Appetizers' }
    },
    {
      id: 'primi',
      name: { it: 'Primi Piatti', en: 'First Dishes' }
    },
    {
      id: 'carni',
      name: { it: 'Le Nostre Carni', en: 'Our Meats' },
      note: {
        it: 'Prodotti del territorio. In assenza di prodotti freschi verranno sostituiti con prodotti congelati e/o surgelati di ottima qualità.',
        en: 'Local products. In the absence of fresh products they will be replaced with excellent quality frozen and/or deep-frozen products.'
      }
    },
    {
      id: 'contorni',
      name: { it: 'Contorni', en: 'Side Dishes' }
    },
    {
      id: 'pizze',
      name: { it: 'Pizze', en: 'Pizzas' },
      intro: {
        it: 'Le nostre pizze sono realizzate unendo tradizione, artigianalità e ricerca delle migliori materie prime. Ogni pizza nasce da un impasto curato con dedizione, maturato lentamente per garantire leggerezza, digeribilità e una consistenza unica.',
        en: 'Our pizzas are made by combining tradition, craftsmanship and the search for the finest ingredients. Each pizza is made from a carefully crafted dough, slowly matured to ensure lightness, digestibility, and a unique texture.'
      },
      note: {
        it: 'Tutte le pizze sono disponibili senza glutine – Maggiorazione € 4,00',
        en: 'All pizzas are available gluten-free – Surcharge € 4.00'
      }
    },
    {
      id: 'dolci',
      name: { it: 'Dolci', en: 'Desserts' }
    },
    {
      id: 'bevande',
      name: { it: 'Bevande', en: 'Drinks' }
    }
  ],
  items: [
    // --- ANTIPASTI ---
    {
      category: 'antipasti',
      name: {
        it: 'Degustazione Completa',
        en: 'Degustazione Completa'
      },
      description: {
        it: 'Degustazione di antipasti caldi e freddi, ideale per 2 persone',
        en: 'Tasting of hot and cold appetizers, ideal for two people'
      },
      price: '€ 22,00',
      badge: { it: 'Ideale per 2', en: 'Ideal for 2' }
    },
    {
      category: 'antipasti',
      name: {
        it: 'Tagliere di salumi e formaggio',
        en: 'Platter of cured meats and cheese'
      },
      description: {
        it: 'Selezione di salumi artigianali e formaggi del territorio marchigiano',
        en: 'Selection of local cured meats and artisanal cheeses'
      },
      price: '€ 14,00'
    },
    {
      category: 'antipasti',
      name: {
        it: 'Frittura tradizionale',
        en: 'Traditional frying'
      },
      description: {
        it: 'Frittura dorata e croccante secondo la tradizione locale',
        en: 'Golden and crisp traditional frying'
      },
      price: '€ 10,00'
    },
    {
      category: 'antipasti',
      name: {
        it: 'Giardiniera',
        en: 'Mixed pickled vegetables'
      },
      description: {
        it: 'Verdure croccanti sott\'aceto di nostra preparazione',
        en: 'Crisp homemade pickled garden vegetables'
      },
      price: '€ 6,00'
    },

    // --- PRIMI PIATTI ---
    {
      category: 'primi',
      name: {
        it: 'Tagliatelle al cinghiale in bianco',
        en: 'Tagliatelle with wild boar in white'
      },
      description: {
        it: 'Pasta all\'uovo fatta a mano con ragù bianco di cinghiale profumato alle erbe',
        en: 'Handmade egg tagliatelle with delicate white wild boar ragù and herbs'
      },
      price: '€ 10,00'
    },
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
    },
    {
      category: 'primi',
      name: {
        it: 'Tagliolino ai porcini',
        en: 'Tagliolini with porcini mushrooms'
      },
      description: {
        it: 'Pasta fresca con funghi porcini trifolati e prezzemolo fresco',
        en: 'Fresh pasta with sautéed wild porcini mushrooms and fresh parsley'
      },
      price: '€ 10,00'
    },
    {
      category: 'primi',
      name: {
        it: 'Tortellacci al formaggio di fossa su fonduta al tartufo',
        en: 'Tortellacci with Fossa cheese on truffle fondue'
      },
      description: {
        it: 'Tortellacci ripieni di formaggio di fossa serviti su una vellutata fonduta al tartufo',
        en: 'Handcrafted tortellacci filled with aged Fossa cheese over a rich truffle fondue'
      },
      price: '€ 14,00',
      badge: { it: 'Specialità', en: 'Specialty' }
    },
    {
      category: 'primi',
      name: {
        it: 'Raviolo Cacio e Pepe su salsa di noci',
        en: 'Raviolo with cheese and pepper on walnut sauce'
      },
      description: {
        it: 'Ravioli artigianali con cuore cremoso di cacio e pepe adagiati su crema di noci',
        en: 'Artisanal ravioli with creamy cacio & pepe filling over a smooth walnut sauce'
      },
      price: '€ 12,00'
    },

    // --- LE NOSTRE CARNI ---
    {
      category: 'carni',
      name: {
        it: 'Agnello Scottadito',
        en: 'Roasted lamb'
      },
      description: {
        it: 'Costolette di agnello cotte alla brace e servite fumanti secondo tradizione',
        en: 'Tender grilled lamb cutlets served sizzling hot according to local tradition'
      },
      price: '€ 18,00'
    },
    {
      category: 'carni',
      name: {
        it: 'Costine di Maiale cotte a bassa temperatura',
        en: 'Pork ribs cooked at low temperature'
      },
      description: {
        it: 'Cottura lenta per ore, carne morbidissima, caramellata e succulenta',
        en: 'Slow-cooked for hours at low temperature, remarkably tender and juicy'
      },
      price: '€ 15,00'
    },
    {
      category: 'carni',
      name: {
        it: 'Lombata di manzo nostra selezione',
        en: 'Beef loin, our selection'
      },
      description: {
        it: 'Taglio pregiato frollato ad arte, cotto alla griglia con sale grosso',
        en: 'Carefully aged premium beef cut, grilled to perfection with coarse salt'
      },
      price: '€ 22,00'
    },

    // --- CONTORNI ---
    {
      category: 'contorni',
      name: {
        it: 'Petali di patate fritte',
        en: 'Fried potato petals'
      },
      description: {
        it: 'Sottili sfoglie di patate dorate e croccanti',
        en: 'Crispy wafer-thin golden potato petals'
      },
      price: '€ 5,00'
    },
    {
      category: 'contorni',
      name: {
        it: 'Verdure di stagione',
        en: 'Seasonal vegetables'
      },
      description: {
        it: 'Verdure fresche dell\'orto saltate o grigliate',
        en: 'Fresh market garden vegetables, sautéed or grilled'
      },
      price: '€ 5,00'
    },
    {
      category: 'contorni',
      name: {
        it: 'Insalata',
        en: 'Salad'
      },
      description: {
        it: 'Misticanza fresca condita con olio extravergine marchigiano',
        en: 'Crisp fresh mixed greens dressed with local extra virgin olive oil'
      },
      price: '€ 4,00'
    },

    // --- PIZZE ---
    {
      category: 'pizze',
      name: {
        it: 'Focaccia',
        en: 'Focaccia'
      },
      description: {
        it: 'Olio extravergine d\'oliva, rosmarino e fior di sale',
        en: 'Extra virgin olive oil, rosemary and sea salt flakes'
      },
      price: '€ 5,00'
    },
    {
      category: 'pizze',
      name: {
        it: 'Marinara',
        en: 'Marinara'
      },
      description: {
        it: 'pomodoro, aglio, origano',
        en: 'tomato, garlic, oregano'
      },
      price: '€ 7,00'
    },
    {
      category: 'pizze',
      name: {
        it: 'Margherita',
        en: 'Margherita'
      },
      description: {
        it: 'pomodoro, fior di latte, basilico',
        en: 'tomato, fior di latte mozzarella, basil'
      },
      price: '€ 9,00'
    },
    {
      category: 'pizze',
      name: {
        it: 'Pizza con farcitura a scelta',
        en: 'Pizza with toppings of your choice'
      },
      description: {
        it: 'Pomodoro, Mozzarella, Funghi, Mais, Prosciutto, ecc.',
        en: 'Tomato, mozzarella, mushrooms, corn, ham, etc.'
      },
      price: 'S.Q.',
      isSQ: true
    },
    {
      category: 'pizze',
      name: {
        it: 'Regina Margherita',
        en: 'Regina Margherita'
      },
      description: {
        it: 'pomodoro, bufala, basilico',
        en: 'tomato, buffalo mozzarella, basil'
      },
      price: '€ 11,00'
    },
    {
      category: 'pizze',
      name: {
        it: 'San Beach',
        en: 'San Beach'
      },
      description: {
        it: 'pomodorini gialli e rossi, fior di latte, alici di San Benedetto del Tronto, basilico',
        en: 'yellow and red cherry tomatoes, fior di latte mozzarella, San Benedetto del Tronto anchovies, basil'
      },
      price: '€ 11,00'
    },
    {
      category: 'pizze',
      name: {
        it: 'Infernaccio',
        en: 'Infernaccio'
      },
      description: {
        it: 'pomodoro, fior di latte, ventricina calabrese piccante',
        en: 'tomato, fior di latte mozzarella, spicy Calabrian ventricina'
      },
      price: '€ 10,00'
    },
    {
      category: 'pizze',
      name: {
        it: 'La Verdumaia',
        en: 'La Verdumaia'
      },
      description: {
        it: 'fior di latte, verdure in base alla disponibilità stagionale',
        en: 'fior di latte mozzarella, vegetables based on seasonal availability'
      },
      price: '€ 12,00'
    },
    {
      category: 'pizze',
      name: {
        it: 'Bologna',
        en: 'Bologna'
      },
      description: {
        it: 'mortadella arrostita, fior di latte, cipolla caramellata, nocciole',
        en: 'roasted mortadella, fior di latte mozzarella, caramelized onions, hazelnuts'
      },
      price: '€ 12,00'
    },
    {
      category: 'pizze',
      name: {
        it: 'Treviso',
        en: 'Treviso'
      },
      description: {
        it: 'fior di latte, radicchio alla brace, gorgonzola, noci',
        en: 'fior di latte mozzarella, grilled radicchio, gorgonzola, walnuts'
      },
      price: '€ 11,00'
    },
    {
      category: 'pizze',
      // TODO: verificare nome pizza (parzialmente coperto da bicchiere sul menu cartaceo)
      name: {
        it: 'Vomero',
        en: 'Vomero'
      },
      description: {
        it: 'bufala, salsiccia, friarielli',
        en: 'buffalo mozzarella, sausage, friarielli'
      },
      price: '€ 11,00',
      comment: 'TODO: verificare nome pizza'
    },
    {
      category: 'pizze',
      name: {
        it: 'Sibilla',
        en: 'Sibilla'
      },
      description: {
        it: 'fior di latte, guanciale, pecorino, pepe',
        en: 'fior di latte mozzarella, bacon, pecorino, pepper'
      },
      price: '€ 11,00'
    },
    {
      category: 'pizze',
      name: {
        it: 'La Macchia',
        en: 'La Macchia'
      },
      description: {
        it: 'fior di latte, porcini, pomodorini, salsiccia',
        en: 'fior di latte mozzarella, porcini mushrooms, cherry tomatoes, sausage'
      },
      price: '€ 12,00'
    },
    {
      category: 'pizze',
      name: {
        it: 'Boscaiola',
        en: 'Boscaiola'
      },
      description: {
        it: 'fior di latte, champignon, prosciutto cotto',
        en: 'fior di latte mozzarella, champignon mushrooms, baked ham'
      },
      price: '€ 11,00'
    },
    {
      category: 'pizze',
      name: {
        it: 'Capricciosa',
        en: 'Capricciosa'
      },
      description: {
        it: 'pomodoro, fior di latte, carciofi, prosciutto cotto, olive taggiasche, funghi champignon',
        en: 'tomato, fior di latte mozzarella, artichokes, baked ham, Taggiasca olives, champignon mushrooms'
      },
      price: '€ 12,00'
    },
    {
      category: 'pizze',
      name: {
        it: "...Non è l'Amatriciana",
        en: "...Non è l'Amatriciana"
      },
      description: {
        it: 'fior di latte, datterino giallo confit, pancetta dei Sibillini, pecorino e basilico',
        en: 'fior di latte mozzarella, confit yellow datterino tomatoes, Sibillini bacon, pecorino cheese and basil'
      },
      price: '€ 11,00',
      badge: { it: 'Territorio Sibillini', en: 'Local Specialty' }
    },
    {
      category: 'pizze',
      name: {
        it: 'Estremadura',
        en: 'Estremadura'
      },
      description: {
        it: 'fior di latte, pomodorini e Jamón Ibérico Bellota',
        en: 'fior di latte mozzarella, cherry tomatoes and Jamón Ibérico Bellota'
      },
      price: '€ 14,00'
    },

    // --- DOLCI ---
    {
      category: 'dolci',
      name: {
        it: 'Dolci della casa',
        en: 'House desserts'
      },
      description: {
        it: 'Proposte artigianali fresche del giorno, chiedi al personale di sala',
        en: 'Artisanal daily homemade desserts, please ask our staff'
      },
      price: '€ 5,00'
    },

    // --- BEVANDE ---
    {
      category: 'bevande',
      name: {
        it: 'Acqua naturale / frizzante',
        en: 'Still / sparkling water'
      },
      description: {
        it: 'In bottiglia di vetro',
        en: 'Glass bottle'
      },
      price: '€ 2,00'
    },
    {
      category: 'bevande',
      name: {
        it: 'Vino della casa (bianco, rosso o rosato)',
        en: 'House wine (white, red or rosé)'
      },
      description: {
        it: 'Selezione marchigiana: 1/2 lt € 5,00 • Bottiglia € 8,00',
        en: 'Local selection: 1/2 lt € 5.00 • Bottle € 8.00'
      },
      price: '1/2 lt € 5,00 | Bottiglia € 8,00',
      customPrice: {
        it: '1/2 lt € 5,00 – Bottiglia € 8,00',
        en: '1/2 lt € 5.00 – Bottle € 8.00'
      },
      isMultiPrice: true
    },
    {
      category: 'bevande',
      name: {
        it: 'Vino al calice',
        en: 'Wine by the glass'
      },
      description: {
        it: 'Dalla nostra cantina di vini del territorio e naturali a rotazione',
        en: 'From our rotating cellar of local and natural wines'
      },
      price: 'S.Q.',
      isSQ: true
    },
    {
      category: 'bevande',
      name: {
        it: 'Coca Cola 0,33 cl',
        en: 'Coca Cola 0.33 cl'
      },
      description: {
        it: 'In vetro',
        en: 'Glass bottle'
      },
      price: '€ 3,00'
    },
    {
      category: 'bevande',
      name: {
        it: 'Birra alla spina',
        en: 'Draft beer'
      },
      description: {
        it: 'piccola € 3,00 • media € 5,00 • 1 lt € 10,00',
        en: 'small € 3.00 • medium € 5.00 • 1 lt € 10.00'
      },
      price: 'Da € 3,00',
      customPrice: {
        it: 'piccola € 3,00 – media € 5,00 – 1 lt € 10,00',
        en: 'small € 3.00 – media € 5.00 – 1 lt € 10.00'
      },
      isMultiPrice: true
    },
    {
      category: 'bevande',
      name: {
        it: 'Birra in bottiglia da 0,50 cl',
        en: 'Bottled beer 0.50 cl'
      },
      description: {
        it: 'Selezione artigianale e classica',
        en: 'Artisanal and classic selection'
      },
      price: '€ 5,00 / € 7,00'
    },
    {
      category: 'bevande',
      name: {
        it: 'Amari',
        en: 'Bitters & Digestifs'
      },
      description: {
        it: 'Amari tipici e della tradizione marchigiana',
        en: 'Traditional and regional Italian herbal bitters'
      },
      price: 'S.Q.',
      isSQ: true
    },
    {
      category: 'bevande',
      name: {
        it: 'Caffè',
        en: 'Coffee'
      },
      description: {
        it: 'Espresso selezionato',
        en: 'Selected Italian espresso'
      },
      price: '€ 1,50'
    }
  ],
  footerInfo: {
    cover: {
      it: 'Coperto, pane e servizio – € 2,00',
      en: 'Bread and service cover – € 2.00'
    },
    allergens: {
      it: 'Se hai un\'intolleranza alimentare, chiedi la lista degli allergeni al personale!',
      en: 'If you have a food intolerance, ask the staff for the list of allergens!'
    },
    sqLegend: {
      it: '* S.Q. (Secondo Quantità / Stagionalità): prezzo su richiesta al personale',
      en: '* S.Q. (Subject to Quantity / Market): price on request to our staff'
    }
  }
};

// ==========================================
// 2. DIZIONARIO TRADUZIONI INTERFACCIA (IT/EN)
// ==========================================
const UI_TRANSLATIONS = {
  it: {
    // Header & Nav
    navLocale: 'Il Locale',
    navMenu: 'Menu',
    navPizze: 'Le Pizze',
    navRecensioni: 'Recensioni',
    navComeOrdinare: 'Come Ordinare',
    navContatti: 'Dove Siamo',
    btnPrenotaTavolo: 'Prenota un tavolo',
    btnVediMenu: 'Vedi il menu',
    badgeRating: '4,8 ★ su Google (68 recensioni)',
    badgePrice: 'Fascia 20–30 € a persona',
    taglineHero: 'Cucina, vino e pizza',
    subtaglineHero: 'Cantina + Cucina nel centro storico di Comunanza (AP)',
    heroAddress: 'Piazza Santa Caterina, 1 • Presso Interamnia Boutique Hotel',

    // Il Locale
    localeSectionTag: 'Identità & Atmosfera',
    localeTitle: 'Un rifugio di gusto tra le mura del borgo',
    localeText1: 'Nel suggestivo centro storico di Comunanza, accarezzato dal respiro dei Monti Sibillini, Sotto accoglie i propri ospiti negli spazi intimi e ricchi di fascino dell\'Interamnia Boutique Hotel.',
    localeText2: 'Una cantina accogliente e una cucina che valorizza il territorio: dalle paste tirate a regola d\'arte ai sapori franchi delle carni locali, fino alle nostre pizze ad alta digeribilità e a una carta vini con un\'attenzione viva per le produzioni naturali.',
    highlightCucinaTitle: 'Cucina del Territorio',
    highlightCucinaDesc: 'Primi piatti della tradizione, sapori schietti dei Sibillini e carni cotte a regola d\'arte.',
    highlightVinoTitle: 'Cantina & Vini Naturali',
    highlightVinoDesc: 'Una selezione ricercata di etichette del territorio marchigiano e vignaioli artigianali.',
    highlightPizzaTitle: 'Pizze a Lenta Maturazione',
    highlightPizzaDesc: 'Impasti curati con dedizione, maturati a lungo per garantire massima leggerezza e fragranza.',

    // Menu section
    menuSectionTag: 'La Nostra Proposta',
    menuTitle: 'La Carta del Ristorante',
    menuSubtitle: 'Tutti i piatti sono preparati con ingredienti selezionati e prodotti del territorio marchigiano.',
    filterAll: 'Tutto il Menu',
    legendSq: '* S.Q. = prezzo variabile / prezzo su richiesta al personale',
    glutenFreeNotice: 'Opzione senza glutine disponibile su tutte le pizze (+€ 4,00)',

    // Pizze Section
    pizzaSectionTag: 'Artigianalità & Lievitazione',
    pizzaFocusTitle: 'L\'Arte della Nostra Pizza',
    pizzaPill1: 'Lenta Maturazione',
    pizzaPill2: 'Alta Digeribilità',
    pizzaPill3: 'Disponibile Senza Glutine (+€ 4)',
    pizzaPill4: 'Ingredienti Selezionati',
    pizzaGlutenTag: 'Disponibile anche Senza Glutine (+ € 4,00)',
    pizzaCallCTA: 'Ordina o prenota le pizze',

    // Recensioni
    reviewsSectionTag: 'Dicono di Noi',
    reviewsTitle: 'L\'esperienza dei nostri ospiti',
    reviewsBadge: 'Valutazione eccellente di 4,8 su 5 basata su 68 recensioni reali Google',
    reviewQuote1: '«Location suggestiva, ingredienti ricercati e di qualità, ottimi vini.»',
    reviewQuote2: '«Una bella realtà con un interessante selezione di vini prevalentemente naturali.»',
    reviewQuote3: '«Super tapas con prodotti di eccellenza»',
    reviewGoogleLink: 'Leggi tutte le recensioni su Google Maps',

    // Come Ordinare
    orderSectionTag: 'Modalità di Servizio',
    orderTitle: 'Come Ordinare e Prenotare',
    serviceTableTitle: 'Consumazione sul Posto',
    serviceTableDesc: 'Vivi l\'atmosfera della nostra cantina nel centro storico di Comunanza. È consigliata la prenotazione telefonica.',
    serviceTableCta: 'Chiama per prenotare',
    serviceTakeawayTitle: 'Asporto',
    serviceTakeawayDesc: 'Ordina telefonicamente pizze e piatti della cucina, pronti da ritirare caldi e fragranti all\'orario che preferisci.',
    serviceTakeawayCta: 'Ordina da asporto',
    serviceDeliveryTitle: 'Consegna a Domicilio',
    serviceDeliveryDesc: 'Portiamo la qualità di Sotto direttamente a casa tua a Comunanza e zone limitrofe con consegna puntuale.',
    serviceDeliveryCta: 'Ordina a domicilio',

    // Dove Siamo & Contatti
    contactSectionTag: 'Dove Trovarci',
    contactTitle: 'Vieni a trovarci a Comunanza',
    addressLabel: 'Indirizzo',
    hotelNote: 'Presso Interamnia Boutique Hotel',
    phoneLabel: 'Telefono / Prenotazioni',
    hoursLabel: 'Orari di Apertura',
    hoursProvisional: 'Chiama per conoscere gli orari di apertura',
    eveningClosing: 'Chiusura serale alle ore 23:00',
    daysMon: 'Lunedì',
    daysMonHours: 'Chiuso',
    daysTueSun: 'Martedì – Domenica',
    daysTueSunHours: '19:00 – 23:00',
    directionsBtn: 'Ottieni Indicazioni su Google Maps',
    callBtn: 'Chiama il Ristorante',
    socialFollow: 'Seguici sui social',

    // Footer
    footerTagline: 'Ristorante, Cantina e Pizzeria nel cuore di Comunanza (AP)',
    footerHotel: 'Presso Interamnia Boutique Hotel • Piazza Santa Caterina, 1',
    footerRights: 'Tutti i diritti riservati.',

    // Mobile Action Bar
    mobileCall: 'Chiama',
    mobileMenu: 'Menu',
    mobileDirections: 'Indicazioni'
  },
  en: {
    // Header & Nav
    navLocale: 'About Us',
    navMenu: 'Menu',
    navPizze: 'Pizzas',
    navRecensioni: 'Reviews',
    navComeOrdinare: 'Services',
    navContatti: 'Location',
    btnPrenotaTavolo: 'Book a table',
    btnVediMenu: 'View menu',
    badgeRating: '4.8 ★ on Google (68 reviews)',
    badgePrice: 'Price range €20–30 per person',
    taglineHero: 'Kitchen, wine and pizza',
    subtaglineHero: 'Cellar + Kitchen in the historic center of Comunanza (AP)',
    heroAddress: 'Piazza Santa Caterina, 1 • At Interamnia Boutique Hotel',

    // Il Locale
    localeSectionTag: 'Identity & Atmosphere',
    localeTitle: 'A culinary haven in the medieval village',
    localeText1: 'In the picturesque historic center of Comunanza, sheltered by the Sibillini Mountains, Sotto welcomes guests in the intimate and refined setting of the Interamnia Boutique Hotel.',
    localeText2: 'An inviting wine cellar and a kitchen dedicated to regional flavors: from freshly handmade pasta to honest local meats, slow-matured digestible pizzas, and a wine list with a dedicated passion for natural wines.',
    highlightCucinaTitle: 'Local Regional Cuisine',
    highlightCucinaDesc: 'Traditional handmade pasta, authentic Sibillini ingredients, and perfectly cooked meats.',
    highlightVinoTitle: 'Cellar & Natural Wines',
    highlightVinoDesc: 'A curated selection of Marche regional labels and artisanal, natural winemakers.',
    highlightPizzaTitle: 'Slow-Matured Pizzas',
    highlightPizzaDesc: 'Artisanal dough nurtured with care, slowly matured to guarantee superior lightness and flavor.',

    // Menu section
    menuSectionTag: 'Our Offerings',
    menuTitle: 'Restaurant & Pizza Menu',
    menuSubtitle: 'All dishes are prepared with select local ingredients from the Marche region.',
    filterAll: 'Full Menu',
    legendSq: '* S.Q. = variable price / price upon request to our staff',
    glutenFreeNotice: 'Gluten-free option available on all pizzas (+€ 4.00)',

    // Pizze Section
    pizzaSectionTag: 'Craftsmanship & Leavening',
    pizzaFocusTitle: 'The Craft of Our Pizza',
    pizzaPill1: 'Slow Fermentation',
    pizzaPill2: 'High Digestibility',
    pizzaPill3: 'Gluten-Free Available (+€ 4)',
    pizzaPill4: 'Select Quality Ingredients',
    pizzaGlutenTag: 'Also available Gluten-Free (+ € 4.00)',
    pizzaCallCTA: 'Order or reserve pizzas',

    // Recensioni
    reviewsSectionTag: 'Testimonials',
    reviewsTitle: 'What our guests say',
    reviewsBadge: 'Outstanding 4.8 out of 5 rating based on 68 genuine Google reviews',
    reviewQuote1: '«Atmospheric location, refined quality ingredients, excellent wines.»',
    reviewQuote2: '«A wonderful dining spot with an interesting selection of predominantly natural wines.»',
    reviewQuote3: '«Super tapas with exceptional produce.»',
    reviewGoogleLink: 'Read all reviews on Google Maps',

    // Come Ordinare
    orderSectionTag: 'Service Options',
    orderTitle: 'How to Order & Reserve',
    serviceTableTitle: 'Dine-In',
    serviceTableDesc: 'Experience the warm cellar atmosphere in Comunanza\'s historic center. Advance phone reservation is recommended.',
    serviceTableCta: 'Call to reserve a table',
    serviceTakeawayTitle: 'Takeaway',
    serviceTakeawayDesc: 'Call us to order pizzas and kitchen dishes, ready for hot pickup at your preferred time.',
    serviceTakeawayCta: 'Order for pickup',
    serviceDeliveryTitle: 'Home Delivery',
    serviceDeliveryDesc: 'Enjoy Sotto\'s culinary quality delivered hot to your doorstep in Comunanza and nearby areas.',
    serviceDeliveryCta: 'Order delivery',

    // Dove Siamo & Contatti
    contactSectionTag: 'Where to Find Us',
    contactTitle: 'Visit us in Comunanza',
    addressLabel: 'Address',
    hotelNote: 'Located at Interamnia Boutique Hotel',
    phoneLabel: 'Phone / Reservations',
    hoursLabel: 'Opening Hours',
    hoursProvisional: 'Call us to check opening hours',
    eveningClosing: 'Evening closing at 23:00 (11:00 PM)',
    daysMon: 'Monday',
    daysMonHours: 'Closed',
    daysTueSun: 'Tuesday – Sunday',
    daysTueSunHours: '19:00 – 23:00',
    directionsBtn: 'Get Directions on Google Maps',
    callBtn: 'Call Restaurant',
    socialFollow: 'Follow us on social media',

    // Footer
    footerTagline: 'Restaurant, Wine Cellar & Pizzeria in Comunanza (AP)',
    footerHotel: 'At Interamnia Boutique Hotel • Piazza Santa Caterina, 1',
    footerRights: 'All rights reserved.',

    // Mobile Action Bar
    mobileCall: 'Call',
    mobileMenu: 'Menu',
    mobileDirections: 'Directions'
  }
};

// ==========================================
// 3. STATO DELL'APPLICAZIONE
// ==========================================
let currentLang = 'it';
let activeCategoryFilter = 'all';

// ==========================================
// 4. RENDERING DEL MENU (TUTTI I PIATTI VISIBILI)
// ==========================================
function renderMenu() {
  const container = document.getElementById('menu-items-container');
  if (!container) return;

  container.innerHTML = '';

  // Renderizza TUTTE le categorie in sequenza:
  // L'utente da telefono può così scorrere l'intero menu liberamente
  MENU_DATA.categories.forEach(category => {
    const categoryDishes = MENU_DATA.items.filter(item => item.category === category.id);
    if (categoryDishes.length === 0) return;

    const catSection = document.createElement('section');
    catSection.className = 'menu-category-block';
    catSection.id = `category-${category.id}`;
    catSection.setAttribute('data-category-id', category.id);
    catSection.setAttribute('aria-label', category.name[currentLang]);

    // Intestazione categoria
    const headerWrapper = document.createElement('div');
    headerWrapper.className = 'category-header';

    const catTitle = document.createElement('h3');
    catTitle.className = 'category-title';
    catTitle.textContent = category.name[currentLang];
    headerWrapper.appendChild(catTitle);

    if (category.intro && category.intro[currentLang]) {
      const catIntro = document.createElement('p');
      catIntro.className = 'category-intro-text';
      catIntro.textContent = category.intro[currentLang];
      headerWrapper.appendChild(catIntro);
    }

    catSection.appendChild(headerWrapper);

    // Lista dei piatti
    const dishList = document.createElement('div');
    dishList.className = 'dish-list';

    categoryDishes.forEach(dish => {
      const dishCard = document.createElement('article');
      dishCard.className = 'dish-item';

      if (dish.isMultiPrice) {
        dishCard.classList.add('is-multi-price');
      }

      if (dish.comment) {
        dishCard.appendChild(document.createComment(dish.comment));
      }

      // Riga principale: Nome + Puntini + Prezzo
      const dishMainRow = document.createElement('div');
      dishMainRow.className = 'dish-main-row';

      const nameWrapper = document.createElement('div');
      nameWrapper.className = 'dish-name-wrapper';

      const nameEl = document.createElement('span');
      nameEl.className = 'dish-name';
      nameEl.textContent = dish.name[currentLang];
      nameWrapper.appendChild(nameEl);

      if (dish.badge && dish.badge[currentLang]) {
        const badgeEl = document.createElement('span');
        badgeEl.className = 'dish-badge';
        badgeEl.textContent = dish.badge[currentLang];
        nameWrapper.appendChild(badgeEl);
      }

      const dotsEl = document.createElement('span');
      dotsEl.className = 'dish-dots';
      dotsEl.setAttribute('aria-hidden', 'true');

      const priceEl = document.createElement('span');
      priceEl.className = 'dish-price';
      
      let priceText = dish.price;
      if (dish.customPrice && dish.customPrice[currentLang]) {
        priceText = dish.customPrice[currentLang];
      }
      
      if (dish.isSQ) {
        priceEl.innerHTML = `<span class="price-sq" title="${currentLang === 'it' ? 'Prezzo variabile / su richiesta' : 'Price upon request'}">${priceText}</span>`;
      } else {
        priceEl.textContent = priceText;
      }

      dishMainRow.appendChild(nameWrapper);
      dishMainRow.appendChild(dotsEl);
      dishMainRow.appendChild(priceEl);
      dishCard.appendChild(dishMainRow);

      if (dish.description && dish.description[currentLang]) {
        const descEl = document.createElement('p');
        descEl.className = 'dish-description';
        descEl.textContent = dish.description[currentLang];
        dishCard.appendChild(descEl);
      }

      dishList.appendChild(dishCard);
    });

    catSection.appendChild(dishList);

    if (category.note && category.note[currentLang]) {
      const noteEl = document.createElement('div');
      noteEl.className = 'category-footnote';
      noteEl.innerHTML = `<span class="footnote-icon">ℹ</span> <span class="footnote-text">${category.note[currentLang]}</span>`;
      catSection.appendChild(noteEl);
    }

    container.appendChild(catSection);
  });

  // Aggiorna testi fissi di fondo menu
  const coverEl = document.getElementById('menu-cover-charge');
  if (coverEl) coverEl.textContent = MENU_DATA.footerInfo.cover[currentLang];

  const allergensEl = document.getElementById('menu-allergens-notice');
  if (allergensEl) allergensEl.textContent = MENU_DATA.footerInfo.allergens[currentLang];

  const sqLegendEl = document.getElementById('menu-sq-legend');
  if (sqLegendEl) sqLegendEl.textContent = MENU_DATA.footerInfo.sqLegend[currentLang];

  // Configura lo scrollspy per le categorie
  setupCategoryScrollspy();
}

// ==========================================
// 5. GESTIONE CHIP CATEGORIE CON SCROLL FLUIDO
// ==========================================
function setupCategoryFilters() {
  const filterButtons = document.querySelectorAll('.category-chip');
  const chipsContainer = document.querySelector('.category-chips-list');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCategory = btn.getAttribute('data-category');

      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Centra il chip cliccato nella barra orizzontale su mobile
      if (chipsContainer) {
        const chipLeft = btn.offsetLeft;
        const chipWidth = btn.offsetWidth;
        const containerWidth = chipsContainer.offsetWidth;
        chipsContainer.scrollTo({
          left: chipLeft - (containerWidth / 2) + (chipWidth / 2),
          behavior: 'smooth'
        });
      }

      if (targetCategory === 'all') {
        const menuTop = document.getElementById('menu');
        if (menuTop) {
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
          const topPos = menuTop.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: topPos, behavior: 'smooth' });
        }
      } else {
        const targetBlock = document.getElementById(`category-${targetCategory}`);
        if (targetBlock) {
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
          const chipsHeight = document.querySelector('.menu-categories-wrapper')?.offsetHeight || 50;
          const topPos = targetBlock.getBoundingClientRect().top + window.scrollY - (headerHeight + chipsHeight + 10);
          window.scrollTo({ top: topPos, behavior: 'smooth' });
        }
      }
    });
  });
}

// Scrollspy automatico che evidenzia il chip corretto mentre l'utente scorre
let categoryObserver = null;
function setupCategoryScrollspy() {
  if (categoryObserver) {
    categoryObserver.disconnect();
  }

  const categoryBlocks = document.querySelectorAll('.menu-category-block');
  const chips = document.querySelectorAll('.category-chip');
  const chipsContainer = document.querySelector('.category-chips-list');

  if (categoryBlocks.length === 0 || chips.length === 0) return;

  categoryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const catId = entry.target.getAttribute('data-category-id');
        chips.forEach(chip => {
          if (chip.getAttribute('data-category') === catId) {
            chips.forEach(c => {
              c.classList.remove('active');
              c.setAttribute('aria-selected', 'false');
            });
            chip.classList.add('active');
            chip.setAttribute('aria-selected', 'true');

            // Fai scorrere dolcemente la chip bar per tenere visibile il chip attivo
            if (chipsContainer && window.innerWidth <= 820) {
              const chipLeft = chip.offsetLeft;
              const chipWidth = chip.offsetWidth;
              const containerWidth = chipsContainer.offsetWidth;
              chipsContainer.scrollTo({
                left: chipLeft - (containerWidth / 2) + (chipWidth / 2),
                behavior: 'smooth'
              });
            }
          }
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-120px 0px -60% 0px',
    threshold: 0
  });

  categoryBlocks.forEach(block => categoryObserver.observe(block));
}

// ==========================================
// 6. GESTIONE LINGUA (IT / EN)
// ==========================================
function setLanguage(lang) {
  if (lang !== 'it' && lang !== 'en') return;
  currentLang = lang;
  localStorage.setItem('sotto_language', lang);
  document.documentElement.lang = lang;

  const itBtns = document.querySelectorAll('.lang-btn-it');
  const enBtns = document.querySelectorAll('.lang-btn-en');
  if (lang === 'it') {
    itBtns.forEach(b => b.classList.add('active'));
    enBtns.forEach(b => b.classList.remove('active'));
  } else {
    itBtns.forEach(b => b.classList.remove('active'));
    enBtns.forEach(b => b.classList.add('active'));
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (UI_TRANSLATIONS[lang] && UI_TRANSLATIONS[lang][key]) {
      el.textContent = UI_TRANSLATIONS[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (UI_TRANSLATIONS[lang] && UI_TRANSLATIONS[lang][key]) {
      el.setAttribute('aria-label', UI_TRANSLATIONS[lang][key]);
    }
  });

  renderMenu();
}

function setupLanguageSwitchers() {
  const switchers = document.querySelectorAll('.lang-switcher');
  switchers.forEach(switcher => {
    switcher.addEventListener('click', (e) => {
      const target = e.target.closest('.lang-btn');
      if (!target) return;
      const lang = target.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  const savedLang = localStorage.getItem('sotto_language') || 'it';
  setLanguage(savedLang);
}

// ==========================================
// 7. HEADER STICKY & SCROLL EFFECT
// ==========================================
function setupStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ==========================================
// 8. MOBILE MENU DRAWER
// ==========================================
function setupMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.site-nav');
  const overlay = document.querySelector('.mobile-overlay');
  const navLinks = document.querySelectorAll('.site-nav .nav-link, .site-nav .header-cta-btn');

  if (!toggleBtn || !navMenu) return;

  const openMenu = () => {
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('is-open');
    if (overlay) overlay.classList.add('is-visible');
    document.body.classList.add('menu-open');
  };

  const closeMenu = () => {
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    document.body.classList.remove('menu-open');
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.classList.contains('is-active');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });
}

// ==========================================
// 9. SCROLLSPY PER NAVIGAZIONE PRINCIPALE
// ==========================================
function setupScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

// ==========================================
// 10. REVEAL ANIMATIONS ON SCROLL
// ==========================================
function setupScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const animElements = document.querySelectorAll('.fade-in-up, .fade-in');
  if (animElements.length === 0) return;

  const animObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  animElements.forEach(el => animObserver.observe(el));
}

// ==========================================
// 11. INIZIALIZZAZIONE ALL'AVVIO DEL DOM
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageSwitchers();
  setupCategoryFilters();
  setupStickyHeader();
  setupMobileMenu();
  setupScrollspy();
  setupScrollAnimations();
});
