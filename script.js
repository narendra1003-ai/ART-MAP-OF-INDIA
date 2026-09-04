/* =========================================================
   ART MAP OF INDIA
   Interactive JavaScript
   ========================================================= */

/* ---------- Image Paths ---------- */

const LOCATION_IMAGES = {
    bhimbetka: "images/bhimbetka.jpg",
    ajanta: "image/ajanta.jpg",
    sanchi: "images/sanchi.webp",
    ellora: "images/ellora.jpg",
    khajuraho: "images/khajuraho.jpg",
    hampi: "images/hampi.jpg",
    thanjavur: "images/thanjavur.jpg",
    santiniketan: "images/santiniketan.webp",
    "chola-nataraja": "images/chola-nataraja.jpg",
    default: "images/india-heritage.jpg"
};

function imageUrl(id) {
    return LOCATION_IMAGES[id] || LOCATION_IMAGES.default;
}

/* ---------- Location Data ---------- */

const locations = [
    {
        id: "bhimbetka",
        name: "Bhimbetka",
        state: "Madhya Pradesh",
        category: "prehistoric",
        period: "7000 BCE – 1000 BCE",
        coordinates: [22.94, 77.61],
        image: "images/bhimbetka.jpg",
        description:
            "Bhimbetka is famous for prehistoric rock shelters and paintings created by early human communities.",
        history:
            "The rock shelters contain paintings of animals, hunting scenes, dancing figures and everyday activities. They provide important evidence of early human creativity in India.",
        artForms: ["Rock Painting", "Cave Art", "Prehistoric Art"],
        artists: ["Early Human Communities"],
        artworks: ["Animal Rock Paintings"],
        significance:
            "Bhimbetka demonstrates the earliest known artistic expressions of human life in the Indian subcontinent."
    },

    {
        id: "ajanta",
        name: "Ajanta Caves",
        state: "Maharashtra",
        category: "ancient",
        period: "200 BCE – 650 CE",
        coordinates: [20.55, 75.70],
        image: "images/ajanta.jpg",
        description:
            "The Ajanta Caves are known for their beautiful Buddhist murals and sculptures.",
        history:
            "Ajanta developed as a Buddhist monastic and artistic centre. Its paintings illustrate the Jataka tales, royal life, religious stories and human emotions.",
        artForms: ["Mural Painting", "Buddhist Art", "Sculpture"],
        artists: ["Unknown Buddhist Artists"],
        artworks: ["Padmapani Bodhisattva"],
        significance:
            "Ajanta is one of the finest examples of ancient Indian painting and Buddhist visual culture."
    },

    {
        id: "sanchi",
        name: "Sanchi",
        state: "Madhya Pradesh",
        category: "ancient",
        period: "300 BCE – 1200 CE",
        coordinates: [23.48, 77.73],
        image: "images/sanchi.webp",
        description:
            "Sanchi is a major Buddhist site known for its stupas and carved gateways.",
        history:
            "The Great Stupa at Sanchi was developed during the Mauryan and later periods. Its gateways contain detailed carvings of Buddhist stories and symbols.",
        artForms: ["Stupa Architecture", "Stone Carving", "Buddhist Art"],
        artists: ["Mauryan and Shunga Artisans"],
        artworks: ["Great Stupa", "Sanchi Toranas"],
        significance:
            "Sanchi represents the development of Buddhist architecture and narrative sculpture."
    },

    {
        id: "ellora",
        name: "Ellora Caves",
        state: "Maharashtra",
        category: "ancient",
        period: "600 CE – 1000 CE",
        coordinates: [20.02, 75.18],
        image: "images/ellora.avif",
        description:
            "Ellora is a spectacular complex of Buddhist, Hindu and Jain rock-cut temples.",
        history:
            "The caves were carved into volcanic rock over several centuries. The Kailasa Temple is one of the most remarkable examples of monolithic architecture.",
        artForms: ["Rock-cut Architecture", "Sculpture", "Temple Art"],
        artists: ["Rashtrakuta Artisans"],
        artworks: ["Kailasa Temple"],
        significance:
            "Ellora reflects religious diversity and extraordinary technical skill in Indian architecture."
    },

    {
        id: "khajuraho",
        name: "Khajuraho",
        state: "Madhya Pradesh",
        category: "medieval",
        period: "950 CE – 1050 CE",
        coordinates: [24.83, 79.92],
        image: "images/khajuraho.jpg",
        description:
            "Khajuraho is famous for its richly decorated temples and detailed sculptures.",
        history:
            "The temples were built by the Chandela dynasty. Their sculptures represent gods, dancers, musicians, animals and different aspects of human life.",
        artForms: ["Temple Architecture", "Stone Sculpture", "Religious Art"],
        artists: ["Chandela Sculptors"],
        artworks: ["Kandariya Mahadeva Temple"],
        significance:
            "Khajuraho is an important example of the artistic achievements of medieval India."
    },

    {
        id: "hampi",
        name: "Hampi",
        state: "Karnataka",
        category: "medieval",
        period: "1336 CE – 1565 CE",
        coordinates: [15.33, 76.46],
        image: "images/hampi.jpg",
        description:
            "Hampi was the capital of the Vijayanagara Empire and is known for its grand monuments.",
        history:
            "Hampi contains temples, markets, royal structures and stone monuments. Its architecture reflects the wealth and cultural development of the Vijayanagara Empire.",
        artForms: ["Temple Architecture", "Stone Carving", "Urban Design"],
        artists: ["Vijayanagara Artisans"],
        artworks: ["Virupaksha Temple", "Stone Chariot"],
        significance:
            "Hampi shows the cultural and architectural brilliance of South Indian medieval civilization."
    },

    {
        id: "thanjavur",
        name: "Thanjavur",
        state: "Tamil Nadu",
        category: "medieval",
        period: "850 CE – Present",
        coordinates: [10.78, 79.13],
        image: "images/thanjavur.jpg",
        description:
            "Thanjavur is a centre of Chola architecture, bronze sculpture and traditional painting.",
        history:
            "The Chola rulers supported temple building and bronze casting. Thanjavur paintings later became known for their rich colours, gold foil and devotional subjects.",
        artForms: ["Bronze Sculpture", "Temple Art", "Thanjavur Painting"],
        artists: ["Chola Artisans", "Thanjavur Painters"],
        artworks: ["Chola Nataraja", "Brihadisvara Temple"],
        significance:
            "Thanjavur represents the long artistic traditions of Tamil culture."
    },

    {
        id: "santiniketan",
        name: "Santiniketan",
        state: "West Bengal",
        category: "modern",
        period: "1901 CE – Present",
        coordinates: [23.68, 87.68],
        image: "images/santiniketan.webp",
        description:
            "Santiniketan became an important centre for modern Indian art and education.",
        history:
            "Rabindranath Tagore established an educational environment where art, nature and culture were closely connected. The Kala Bhavana school encouraged modern Indian artistic practices.",
        artForms: ["Modern Painting", "Printmaking", "Crafts"],
        artists: ["Rabindranath Tagore", "Nandalal Bose", "Benode Behari Mukherjee"],
        artworks: ["Santiniketan Murals"],
        significance:
            "Santiniketan helped shape modern Indian art by combining tradition with experimentation."
    },

    {
        id: "chennai",
        name: "Chennai",
        state: "Tamil Nadu",
        category: "modern",
        period: "1800 CE – Present",
        coordinates: [13.08, 80.27],
        image: "images/chennai.webp",
        description:
            "Chennai is an important centre for classical dance, music, painting and modern art.",
        history:
            "The city is closely associated with Bharatanatyam, Carnatic music, traditional crafts and contemporary artistic institutions.",
        artForms: ["Bharatanatyam", "Carnatic Music", "Modern Art"],
        artists: ["Rukmini Devi Arundale"],
        artworks: ["Kalakshetra Art Traditions"],
        significance:
            "Chennai continues to connect traditional Indian art with contemporary culture."
    }
];

/* ---------- Artwork Data ---------- */

const artworks = [
    {
        id: "chola-nataraja",
        title: "Chola Nataraja",
        artist: "Chola Bronze Artisans",
        period: "Medieval",
        locationId: "thanjavur",
        image: "images/chola-nataraja.jpg",
        description:
            "A bronze representation of Shiva as Nataraja, the cosmic dancer."
    },

    {
        id: "padmapani",
        title: "Padmapani Bodhisattva",
        artist: "Unknown Ajanta Artist",
        period: "Ancient",
        locationId: "ajanta",
        image: "images/ajanta.jpg",
        description:
            "A celebrated mural from Ajanta showing a compassionate Bodhisattva."
    },

    {
        id: "kailasa",
        title: "Kailasa Temple",
        artist: "Rashtrakuta Artisans",
        period: "Ancient",
        locationId: "ellora",
        image: "images/ellora.jpg",
        description:
            "A monumental rock-cut temple carved from a single rock mass."
    },

    {
        id: "stone-chariot",
        title: "Stone Chariot",
        artist: "Vijayanagara Artisans",
        period: "Medieval",
        locationId: "hampi",
        image: "images/hampi.jpg",
        description:
            "An iconic stone monument located in the Vittala Temple complex."
    },

    {
        id: "modern-art",
        title: "Santiniketan Art",
        artist: "Nandalal Bose and Students",
        period: "Modern",
        locationId: "santiniketan",
        image: "images/santiniketan.jpg",
        description:
            "Modern Indian art inspired by nature, folk traditions and Indian culture."
    },

    {
        id: "rock-painting",
        title: "Prehistoric Rock Painting",
        artist: "Early Human Communities",
        period: "Prehistoric",
        locationId: "bhimbetka",
        image: "images/bhimbetka.jpg",
        description:
            "Early paintings showing animals, hunting and community life."
    }
];

/* ---------- Art Movements ---------- */

const movements = [
    {
        number: "01",
        title: "Cave Painting",
        description:
            "Ancient paintings created on rock surfaces, showing animals, rituals and daily life."
    },

    {
        number: "02",
        title: "Temple Sculpture",
        description:
            "Stone and bronze sculptures created to decorate temples and represent religious stories."
    },

    {
        number: "03",
        title: "Miniature Painting",
        description:
            "Detailed paintings created in royal courts, manuscripts and illustrated books."
    },

    {
        number: "04",
        title: "Folk and Tribal Art",
        description:
            "Traditional community art forms expressing local beliefs, festivals and nature."
    },

    {
        number: "05",
        title: "Modern Indian Art",
        description:
            "New artistic styles combining Indian traditions with modern ideas and techniques."
    },

    {
        number: "06",
        title: "Textile Art",
        description:
            "Decorative traditions including weaving, embroidery, printing and dyeing."
    }
];

/* ---------- Regions ---------- */

const regions = [
    {
        name: "North India",
        description: "Miniature painting, Mughal art and temple traditions.",
        image: "images/khajuraho.jpg"
    },

    {
        name: "South India",
        description: "Bronze sculpture, classical dance and Dravidian temples.",
        image: "images/thanjavur.jpg"
    },

    {
        name: "East India",
        description: "Pattachitra, terracotta and modern art movements.",
        image: "images/santiniketan.jpg"
    },

    {
        name: "West India",
        description: "Cave architecture, textiles and folk traditions.",
        image: "images/ajanta.jpg"
    },

    {
        name: "Central India",
        description: "Prehistoric rock art and tribal artistic traditions.",
        image: "images/bhimbetka.jpg"
    },

    {
        name: "Northeast India",
        description: "Weaving, crafts, masks and community art traditions.",
        image: "images/india-heritage.jpg"
    }
];

/* ---------- Variables ---------- */

let map;
let markers = {};
let activeCategory = "all";
let searchText = "";

/* ---------- Utility Functions ---------- */

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getCategoryName(category) {
    return category.charAt(0).toUpperCase() + category.slice(1);
}

function matchesFilters(location) {
    const categoryMatch =
        activeCategory === "all" ||
        location.category === activeCategory;

    const searchableText = [
        location.name,
        location.state,
        location.description,
        ...location.artForms,
        ...location.artists
    ].join(" ").toLowerCase();

    const searchMatch = searchableText.includes(searchText);

    return categoryMatch && searchMatch;
}

function getFilteredLocations() {
    return locations.filter(matchesFilters);
}

/* ---------- Initialize Map ---------- */

function initializeMap() {
    map = L.map("map", {
        zoomControl: true,
        minZoom: 4,
        maxZoom: 8
    }).setView([22.5, 79.5], 5);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

    renderMarkers();
}

function createMarkerIcon(location) {
    const colors = {
        prehistoric: "#8b5e3c",
        ancient: "#bd8b43",
        medieval: "#b85f3c",
        modern: "#6d7187"
    };

    return L.divIcon({
        className: "",
        html: `
            <div class="custom-marker"
                 style="--marker-color: ${colors[location.category]}">
            </div>
        `,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
    });
}

function renderMarkers() {
    Object.values(markers).forEach(marker => {
        map.removeLayer(marker);
    });

    markers = {};

    getFilteredLocations().forEach(location => {
        const marker = L.marker(
            location.coordinates,
            {
                icon: createMarkerIcon(location)
            }
        ).addTo(map);

        marker.on("click", () => openPanel(location.id));

        markers[location.id] = marker;
    });
}

/* ---------- Render Location Cards ---------- */

function renderLocationCards() {
    const container = document.getElementById("location-cards");
    const count = document.getElementById("location-count");

    const filtered = getFilteredLocations();

    count.textContent = `${filtered.length} location${filtered.length !== 1 ? "s" : ""}`;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No locations found</h3>
                <p>Try another search or category.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(location => `
        <article class="location-card"
                 data-id="${location.id}"
                 tabindex="0">

            <img
                src="${location.image || imageUrl(location.id)}"
                alt="${escapeHTML(location.name)}"
                onerror="this.src='images/india-heritage.jpg'"
            >

            <div>
                <span class="card-category">
                    ${getCategoryName(location.category)}
                </span>

                <h4>${escapeHTML(location.name)}</h4>

                <p>${escapeHTML(location.state)}</p>

                <span class="card-arrow">
                    View Details →
                </span>
            </div>

        </article>
    `).join("");

    container.querySelectorAll(".location-card").forEach(card => {
        card.addEventListener("click", () => {
            openPanel(card.dataset.id);
        });

        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openPanel(card.dataset.id);
            }
        });
    });
}

/* ---------- Open Location Panel ---------- */

function openPanel(locationId) {
    const location = locations.find(item => item.id === locationId);

    if (!location) return;

    const panel = document.getElementById("location-panel");
    const overlay = document.getElementById("location-panel-overlay");
    const content = document.getElementById("panel-content");

    content.innerHTML = `
        <div class="panel-hero">

            <img
                src="${location.image || imageUrl(location.id)}"
                alt="${escapeHTML(location.name)}"
                onerror="this.src='images/india-heritage.jpg'"
            >

            <div class="panel-hero-text">
                <span class="card-category">
                    ${getCategoryName(location.category)}
                </span>

                <h2>${escapeHTML(location.name)}</h2>

                <p>${escapeHTML(location.state)}</p>
            </div>

        </div>

        <div class="panel-body">

            <p class="eyebrow">${escapeHTML(location.period)}</p>

            <h3>About this place</h3>
            <p>${escapeHTML(location.description)}</p>

            <h3>Historical Context</h3>
            <p>${escapeHTML(location.history)}</p>

            <h3>Art Forms</h3>

            <div class="panel-tags">
                ${location.artForms.map(form => `
                    <span class="panel-tag">${escapeHTML(form)}</span>
                `).join("")}
            </div>

            <h3>Artists and Communities</h3>
            <p>${location.artists.map(escapeHTML).join(", ")}</p>

            <h3>Important Artworks</h3>
            <p>${location.artworks.map(escapeHTML).join(", ")}</p>

            <h3>Cultural Significance</h3>
            <p>${escapeHTML(location.significance)}</p>

        </div>
    `;

    panel.classList.add("open");
    overlay.classList.add("visible");
    panel.setAttribute("aria-hidden", "false");
    document.body.classList.add("panel-open");

    document.querySelectorAll(".location-card").forEach(card => {
        card.classList.toggle("active", card.dataset.id === locationId);
    });

    if (markers[locationId]) {
        map.flyTo(location.coordinates, 7, {
            duration: 1
        });
    }
}

/* ---------- Close Panel ---------- */

function closePanel() {
    const panel = document.getElementById("location-panel");
    const overlay = document.getElementById("location-panel-overlay");

    panel.classList.remove("open");
    overlay.classList.remove("visible");
    panel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("panel-open");

    document.querySelectorAll(".location-card").forEach(card => {
        card.classList.remove("active");
    });
}

/* ---------- Filters ---------- */

function setupFilters() {
    document.querySelectorAll(".filter-chip").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-chip").forEach(chip => {
                chip.classList.remove("active");
            });

            button.classList.add("active");
            activeCategory = button.dataset.category;

            renderLocationCards();
            renderMarkers();
        });
    });
}

/* ---------- Search ---------- */

function setupSearch() {
    const input = document.getElementById("search-input");

    input.addEventListener("input", event => {
        searchText = event.target.value.toLowerCase().trim();

        renderLocationCards();
        renderMarkers();
    });
}

/* ---------- Render Movements ---------- */

function renderMovements() {
    const container = document.getElementById("movement-cards");

    container.innerHTML = movements.map(movement => `
        <article class="movement-card">
            <div class="movement-number">${movement.number}</div>
            <h3>${escapeHTML(movement.title)}</h3>
            <p>${escapeHTML(movement.description)}</p>
        </article>
    `).join("");
}

/* ---------- Render Regions ---------- */

function renderRegions() {
    const container = document.getElementById("region-cards");

    container.innerHTML = regions.map(region => `
        <article class="region-card"
                 style="background-image: url('${region.image}')">

            <h3>${escapeHTML(region.name)}</h3>
            <p>${escapeHTML(region.description)}</p>

        </article>
    `).join("");
}

/* ---------- Render Artworks ---------- */

function renderArtworks() {
    const container = document.getElementById("artwork-cards");

    container.innerHTML = artworks.map(artwork => `
        <article class="artwork-card">

            <img
                src="${artwork.image || imageUrl(artwork.locationId)}"
                alt="${escapeHTML(artwork.title)}"
                onerror="this.src='images/india-heritage.jpg'"
            >

            <div class="artwork-info">
                <span>${escapeHTML(artwork.period)}</span>

                <h3>${escapeHTML(artwork.title)}</h3>

                <p>
                    <strong>Artist:</strong>
                    ${escapeHTML(artwork.artist)}
                </p>

                <p>${escapeHTML(artwork.description)}</p>
            </div>

        </article>
    `).join("");
}

/* ---------- Statistics ---------- */

function updateStatistics() {
    document.getElementById("stat-locations").textContent =
        locations.length;

    document.getElementById("stat-periods").textContent =
        new Set(locations.map(location => location.category)).size;

    document.getElementById("stat-artworks").textContent =
        artworks.length;
}

/* ---------- Timeline Buttons ---------- */

function setupTimeline() {
    document.querySelectorAll(".timeline-btn").forEach(button => {
        button.addEventListener("click", () => {
            openPanel(button.dataset.location);
        });
    });
}

/* ---------- Theme Toggle ---------- */

function setupThemeToggle() {
    const button = document.getElementById("theme-toggle");

    const savedTheme = localStorage.getItem("art-map-theme");

    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        button.textContent = "☀ Light Mode";
    }

    button.addEventListener("click", () => {
        const isDark =
            document.documentElement.getAttribute("data-theme") === "dark";

        if (isDark) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("art-map-theme", "light");
            button.textContent = "☾ Dark Mode";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("art-map-theme", "dark");
            button.textContent = "☀ Light Mode";
        }
    });
}

/* ---------- Mobile Navigation ---------- */

function setupNavigation() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-links");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });
}

/* ---------- Close Events ---------- */

function setupPanel() {
    document.getElementById("panel-close")
        .addEventListener("click", closePanel);

    document.getElementById("location-panel-overlay")
        .addEventListener("click", closePanel);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closePanel();
        }
    });
}

/* ---------- Initialize Website ---------- */

function init() {
    initializeMap();
    renderLocationCards();
    renderMovements();
    renderRegions();
    renderArtworks();
    updateStatistics();

    setupFilters();
    setupSearch();
    setupTimeline();
    setupThemeToggle();
    setupNavigation();
    setupPanel();

    setTimeout(() => {
        document.getElementById("loading-screen")
            .classList.add("hidden");
    }, 700);
}

document.addEventListener("DOMContentLoaded", init);