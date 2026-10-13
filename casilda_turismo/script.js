/* =========================================
   CONFIGURACIÓN GENERAL
========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "DM Sans", sans-serif;
    background: #f8f5ef;
    color: #3e3027;
    line-height: 1.7;
}

img {
    width: 100%;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}

::selection {
    background: #8a674b;
    color: white;
}


/* =========================================
   VARIABLES
========================================= */

:root {

    --beige: #f8f5ef;
    --beige-dark: #e9dfd0;

    --brown: #5a4030;
    --brown-dark: #34251d;

    --brown-light: #8a674b;

    --cream: #fffdf9;

    --text: #44352c;
    --text-light: #76675d;

    --border: #ded3c5;

}


/* =========================================
   HEADER
========================================= */

.header {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    height: 82px;

    padding: 0 6%;

    display: flex;

    align-items: center;

    justify-content: space-between;

    background: rgba(255, 253, 249, 0.95);

    backdrop-filter: blur(12px);

    border-bottom: 1px solid rgba(90, 64, 48, 0.1);

    z-index: 1000;
}


.logo {

    display: flex;

    flex-direction: column;

    line-height: 1;

    color: var(--brown);
}

.logo span {

    font-family: "Playfair Display", serif;

    font-size: 22px;

    font-weight: 600;

    letter-spacing: 2px;
}

.logo small {

    margin-top: 5px;

    font-size: 8px;

    letter-spacing: 4px;

    text-align: center;
}


.nav {

    display: flex;

    align-items: center;

    gap: 30px;
}

.nav a {

    font-size: 13px;

    color: var(--text);

    position: relative;

    transition: 0.3s;
}

.nav a::after {

    content: "";

    position: absolute;

    left: 0;

    bottom: -7px;

    width: 0;

    height: 2px;

    background: var(--brown-light);

    transition: 0.3s;
}

.nav a:hover {

    color: var(--brown-light);
}

.nav a:hover::after {

    width: 100%;
}


.menu-btn {

    display: none;

    border: none;

    background: none;

    color: var(--brown);

    font-size: 27px;

    cursor: pointer;
}


/* =========================================
   HERO
========================================= */

.hero {

    min-height: 100vh;

    position: relative;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    background-image:
        url("https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=85");

    background-size: cover;

    background-position: center;
}


.hero-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            rgba(45, 32, 24, 0.52),
            rgba(45, 32, 24, 0.68)
        );
}


.hero-content {

    position: relative;

    z-index: 2;

    color: white;

    padding: 30px;

    max-width: 900px;
}


.hero-small {

    letter-spacing: 5px;

    font-size: 12px;

    margin-bottom: 15px;

    opacity: 0.9;
}


.hero h1 {

    font-family: "Playfair Display", serif;

    font-size: clamp(70px, 12vw, 145px);

    font-weight: 500;

    line-height: 1;
}


.line {

    width: 80px;

    height: 1px;

    background: white;

    margin: 25px auto;
}


.hero-subtitle {

    font-size: 18px;

    max-width: 600px;

    margin: auto auto 35px;

    opacity: 0.95;
}


.btn {

    display: inline-flex;

    align-items: center;

    gap: 18px;

    padding: 14px 25px;

    border: 1px solid rgba(255,255,255,0.7);

    color: white;

    transition: 0.3s;

    font-size: 13px;

    letter-spacing: 1px;
}

.btn span {

    font-size: 18px;
}

.btn:hover {

    background: white;

    color: var(--brown);
}


/* =========================================
   SECCIONES
========================================= */

.section {

    padding: 120px 7%;
}

.section-title {

    margin-bottom: 65px;
}

.section-title.center {

    text-align: center;
}


.title-script {

    font-family: "Playfair Display", serif;

    font-style: italic;

    color: var(--brown-light);

    font-size: 22px;

    margin-bottom: 7px;
}


.section-title h2 {

    font-size: clamp(30px, 4vw, 48px);

    letter-spacing: 3px;

    font-weight: 600;

    color: var(--brown-dark);
}


.title-line {

    width: 55px;

    height: 2px;

    background: var(--brown-light);

    margin-top: 18px;
}


.center .title-line {

    margin-left: auto;

    margin-right: auto;
}


.section-intro {

    max-width: 700px;

    margin: 25px auto 0;

    color: var(--text-light);

}


/* =========================================
   HISTORIA
========================================= */

.history {

    background: var(--cream);
}


.history-grid {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 80px;

    align-items: center;
}


.history-image {

    position: relative;
}


.history-image img {

    height: 560px;

    object-fit: cover;
}


.image-caption {

    position: absolute;

    bottom: 25px;

    left: 25px;

    background: rgba(255,255,255,0.94);

    padding: 18px 25px;

    min-width: 210px;
}


.image-caption span {

    font-size: 10px;

    letter-spacing: 3px;

    color: var(--brown-light);
}

.image-caption p {

    font-family: "Playfair Display", serif;

    font-size: 19px;
}


.history-text {

    position: relative;
}


.number {

    font-size: 12px;

    letter-spacing: 3px;

    color: var(--brown-light);
}


.history-text h3 {

    font-family: "Playfair Display", serif;

    font-size: 40px;

    font-weight: 500;

    margin: 12px 0 25px;

    color: var(--brown-dark);
}


.history-text p {

    color: var(--text-light);

    margin-bottom: 18px;
}


.history-facts {

    display: flex;

    gap: 40px;

    margin-top: 35px;

    padding-top: 25px;

    border-top: 1px solid var(--border);
}


.history-facts div {

    display: flex;

    flex-direction: column;
}


.history-facts strong {

    font-family: "Playfair Display", serif;

    font-size: 27px;

    color: var(--brown);
}


.history-facts span {

    font-size: 11px;

    color: var(--text-light);

    text-transform: uppercase;

    letter-spacing: 1px;
}


/* =========================================
   CULTURA
========================================= */

.culture {

    background: var(--beige);
}


.culture-grid {

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 25px;
}


.culture-card {

    background: var(--cream);

    padding: 40px;

    position: relative;

    border: 1px solid var(--border);

    transition: 0.35s;
}


.culture-card:hover {

    transform: translateY(-7px);

    box-shadow: 0 15px 35px rgba(62,48,39,0.08);
}


.card-number {

    position: absolute;

    top: 20px;

    right: 25px;

    color: #cbb9a6;

    font-size: 12px;

    letter-spacing: 2px;
}


.card-icon {

    width: 48px;

    height: 48px;

    border-radius: 50%;

    background: var(--beige-dark);

    color: var(--brown);

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 22px;

    margin-bottom: 25px;
}


.culture-card h3 {

    font-family: "Playfair Display", serif;

    font-size: 26px;

    font-weight: 500;

    color: var(--brown-dark);

    margin-bottom: 15px;
}


.culture-card p {

    color: var(--text-light);

    font-size: 14px;
}


.culture-card ul {

    list-style: none;

    margin-top: 15px;
}


.culture-card li {

    font-size: 13px;

    color: var(--brown-light);

    margin-bottom: 7px;
}


.culture-card li::before {

    content: "— ";

}


/* =========================================
   TURISMO
========================================= */

.tourism {

    background: var(--cream);
}


.tourism-grid {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}


.place-card {

    border: 1px solid var(--border);

    background: white;

    overflow: hidden;

    transition: 0.35s;
}


.place-card:hover {

    transform: translateY(-8px);

    box-shadow: 0 20px 40px rgba(62,48,39,0.1);
}


.place-image {

    position: relative;

    overflow: hidden;
}


.place-image img {

    height: 260px;

    object-fit: cover;

    transition: 0.5s;
}


.place-card:hover .place-image img {

    transform: scale(1.05);
}


.place-image span {

    position: absolute;

    top: 18px;

    left: 18px;

    background: white;

    padding: 8px 12px;

    font-size: 11px;

    color: var(--brown);

    letter-spacing: 2px;
}


.place-content {

    padding: 27px;
}


.place-content h3 {

    font-family: "Playfair Display", serif;

    font-size: 23px;

    color: var(--brown-dark);

    font-weight: 500;

    margin-bottom: 10px;
}


.place-content p {

    font-size: 13px;

    color: var(--text-light);
}


/* =========================================
   SERVICIOS
========================================= */

.services {

    background: var(--brown-dark);

    color: white;
}


.services .section-title h2 {

    color: white;
}


.services .title-script {

    color: #d5bda6;
}


.services .title-line {

    background: #d5bda6;
}


.services-grid {

    display: grid;

    grid-template-columns: repeat(5, 1fr);

    gap: 15px;
}


.service {

    padding: 35px 25px;

    border: 1px solid rgba(255,255,255,0.14);

    min-height: 260px;

    transition: 0.3s;
}


.service:hover {

    background: rgba(255,255,255,0.06);

    transform: translateY(-5px);
}


.service-icon {

    display: flex;

    align-items: center;

    justify-content: center;

    width: 45px;

    height: 45px;

    border: 1px solid #d5bda6;

    color: #d5bda6;

    border-radius: 50%;

    margin-bottom: 25px;

    font-size: 18px;
}


.service h3 {

    font-family: "Playfair Display", serif;

    font-size: 22px;

    margin-bottom: 13px;

    font-weight: 500;
}


.service p {

    color: #cfc3ba;

    font-size: 13px;
}


/* =========================================
   AMBIENTE
========================================= */

.environment {

    display: grid;

    grid-template-columns: 1fr 1fr;

    min-height: 700px;
}


.environment-image {

    background-image:
        url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85");

    background-size: cover;

    background-position: center;
}


.environment-content {

    padding: 100px 10%;

    background: var(--beige-dark);

    display: flex;

    flex-direction: column;

    justify-content: center;
}


.environment-content h2 {

    font-family: "Playfair Display", serif;

    font-size: clamp(38px, 5vw, 60px);

    line-height: 1.1;

    font-weight: 500;

    color: var(--brown-dark);

    margin-bottom: 30px;
}


.environment-content > p:not(.title-script) {

    color: var(--text-light);

    margin-bottom: 30px;
}


.environment-list {

    border-top: 1px solid #cdbdaa;
}


.environment-list div {

    display: flex;

    gap: 20px;

    align-items: center;

    padding: 13px 0;

    border-bottom: 1px solid #cdbdaa;
}


.environment-list span {

    font-size: 11px;

    color: var(--brown-light);

    letter-spacing: 1px;
}


.environment-list p {

    font-size: 13px;

    color: var(--text);
}


/* =========================================
   UBICACIÓN
========================================= */

.location {

    background: var(--cream);
}


.location-grid {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 70px;

    align-items: start;
}


.map-container {

    height: 620px;

    border: 10px solid var(--beige-dark);

    box-shadow: 0 15px 40px rgba(62,48,39,0.08);
}


.map-container iframe {

    width: 100%;

    height: 100%;

    border: none;
}


.location-block {

    padding: 0 0 30px;

    margin-bottom: 30px;

    border-bottom: 1px solid var(--border);
}


.location-number {

    font-size: 11px;

    color: var(--brown-light);

    letter-spacing: 2px;
}


.location-block h3 {

    font-family: "Playfair Display", serif;

    font-size: 25px;

    font-weight: 500;

    color: var(--brown-dark);

    margin: 7px 0 10px;
}


.location-block p {

    color: var(--text-light);

    font-size: 14px;

    margin-bottom: 10px;
}


.routes {

    list-style: none;

    margin-top: 10px;
}


.routes li {

    padding: 7px 0;

    color: var(--text-light);

    font-size: 14px;
}


.routes li::before {

    content: "→";

    color: var(--brown-light);

    margin-right: 10px;
}


.towns {

    display: flex;

    flex-wrap: wrap;

    gap: 8px;

    margin-top: 15px;
}


.towns span {

    padding: 7px 12px;

    background: var(--beige);

    border: 1px solid var(--border);

    font-size: 12px;

    color: var(--brown);
}


/* =========================================
   SECCIÓN FINAL
========================================= */

.final-section {

    height: 500px;

    position: relative;

    background-image:
        url("https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85");

    background-size: cover;

    background-position: center;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    color: white;
}


.final-overlay {

    position: absolute;

    inset: 0;

    background: rgba(49,35,27,0.65);
}


.final-content {

    position: relative;

    z-index: 2;
}


.final-content .title-script {

    color: #e4d1bb;
}


.final-content h2 {

    font-family: "Playfair Display", serif;

    font-size: clamp(55px, 9vw, 110px);

    font-weight: 500;

    letter-spacing: 5px;

    line-height: 1;
}


.final-content > p:last-child {

    margin-top: 20px;

    font-size: 16px;

    letter-spacing: 1px;
}


/* =========================================
   FOOTER
========================================= */

.footer {

    background: #281d17;

    color: white;

    padding: 70px 7% 25px;
}


.footer-main {

    display: grid;

    grid-template-columns: 2fr 1fr 1fr;

    gap: 80px;

    padding-bottom: 50px;

    border-bottom: 1px solid rgba(255,255,255,0.12);
}


.footer-brand h2 {

    font-family: "Playfair Display", serif;

    font-size: 38px;

    font-weight: 500;

    letter-spacing: 3px;
}


.footer-brand > p {

    color: #d5bda6;

    margin-top: 5px;
}


.footer-description {

    max-width: 350px;

    margin-top: 20px;

    color: #a99b92 !important;

    font-size: 13px;
}


.footer h3 {

    font-size: 14px;

    letter-spacing: 2px;

    text-transform: uppercase;

    margin-bottom: 20px;
}


.footer-links {

    display: flex;

    flex-direction: column;

    gap: 7px;
}


.footer-links a {

    color: #b7aaa2;

    font-size: 13px;

    transition: 0.3s;
}


.footer-links a:hover {

    color: white;

    padding-left: 5px;
}


.footer-contact p {

    color: #b7aaa2;

    font-size: 13px;

    margin-bottom: 7px;
}


.socials {

    display: flex;

    gap: 8px;

    margin-top: 20px;
}


.socials a {

    width: 35px;

    height: 35px;

    border: 1px solid rgba(255,255,255,0.2);

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 9px;

    transition: 0.3s;
}


.socials a:hover {

    background: white;

    color: var(--brown);
}


.footer-bottom {

    display: flex;

    justify-content: space-between;

    padding-top: 22px;

    color: #82756e;

    font-size: 11px;
}


/* =========================================
   BOTÓN ARRIBA
========================================= */

.top-btn {

    position: fixed;

    right: 25px;

    bottom: 25px;

    width: 45px;

    height: 45px;

    border: none;

    background: var(--brown);

    color: white;

    border-radius: 50%;

    font-size: 20px;

    cursor: pointer;

    opacity: 0;

    visibility: hidden;

    transition: 0.3s;

    z-index: 999;
}


.top-btn.show {

    opacity: 1;

    visibility: visible;
}


.top-btn:hover {

    background: var(--brown-dark);

    transform: translateY(-3px);
}


/* =========================================
   RESPONSIVE - TABLET
========================================= */

@media (max-width: 1100px) {

    .nav {
        gap: 15px;
    }

    .nav a {
        font-size: 12px;
    }

    .history-grid {
        gap: 40px;
    }

    .tourism-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .services-grid {
        grid-template-columns: repeat(3, 1fr);
    }

}


/* =========================================
   RESPONSIVE - CELULAR
========================================= */

@media (max-width: 768px) {

    .header {
        height: 70px;
        padding: 0 5%;
    }


    .menu-btn {
        display: block;
    }


    .nav {

        position: absolute;

        top: 70px;

        left: 0;

        width: 100%;

        background: var(--cream);

        flex-direction: column;

        align-items: flex-start;

        padding: 25px 7%;

        gap: 18px;

        border-bottom: 1px solid var(--border);

        transform: translateY(-150%);

        transition: 0.3s;
    }


    .nav.active {

        transform: translateY(0);
    }


    .hero h1 {
        font-size: 75px;
    }


    .hero-subtitle {
        font-size: 15px;
    }


    .section {
        padding: 80px 6%;
    }


    .history-grid {

        grid-template-columns: 1fr;

        gap: 40px;
    }


    .history-image img {
        height: 400px;
    }


    .history-text h3 {
        font-size: 33px;
    }


    .culture-grid {

        grid-template-columns: 1fr;
    }


    .tourism-grid {

        grid-template-columns: 1fr;
    }


    .place-image img {

        height: 250px;
    }


    .services-grid {

        grid-template-columns: 1fr 1fr;
    }


    .environment {

        grid-template-columns: 1fr;
    }


    .environment-image {

        height: 350px;
    }


    .environment-content {

        padding: 75px 8%;
    }


    .location-grid {

        grid-template-columns: 1fr;

        gap: 40px;
    }


    .map-container {

        height: 400px;
    }


    .footer-main {

        grid-template-columns: 1fr;

        gap: 40px;
    }


    .footer-bottom {

        flex-direction: column;

        gap: 8px;
    }

}


/* =========================================
   CELULARES PEQUEÑOS
========================================= */

@media (max-width: 480px) {

    .hero h1 {
        font-size: 62px;
    }


    .hero-small {
        font-size: 9px;
        letter-spacing: 3px;
    }


    .section-title h2 {
        font-size: 27px;
    }


    .history-facts {

        gap: 20px;

        flex-wrap: wrap;
    }


    .services-grid {

        grid-template-columns: 1fr;
    }


    .service {

        min-height: auto;
    }


    .environment-content h2 {
        font-size: 42px;
    }


    .final-section {
        height: 400px;
    }


    .final-content h2 {
        font-size: 55px;
    }

}