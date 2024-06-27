const translations = {
    en: {
        popup_header: "Mystic Oracle",
        popup_p1: "Pose your question and tap the mystical sphere to reveal its cryptic answer. The Mystic Oracle awaits your inquiry.",
        popup_p2: "For utmost accuracy, focus your thoughts and let the cosmic energies guide your query.",
        popup_fact: "Did you know? The original Magic 8 Ball was invented in the 1950s and gained fame as a fortune-telling toy. Its cryptic answers have baffled and amused seekers of wisdom for decades. Now, you hold the digital version in your hands—ready to unveil the secrets of the cosmos!🌌✨"
    },
    ru: {
        popup_header: "Мистический оракул",
        popup_p1: "Задайте вопрос и коснитесь мистической сферы, чтобы раскрыть её загадочный ответ. Мистический оракул ждет вашего запроса.",
        popup_p2: "Для максимальной точности сосредоточьтесь на своем вопросе и позвольте космическим энергиям направить его решение.",
        popup_fact: "Знаете ли вы? Оригинальный Magic 8 Ball был изобретен в 1950-х годах и стал знаменитой игрушкой для предсказаний. Его загадочные ответы восхищают и удивляют искателей мудрости уже десятилетиями. Теперь вы держите цифровую версию в своих руках — готовую раскрыть секреты космоса!🌌✨"
    },
    de: {
        popup_header: "Mystisches Orakel",
        popup_p1: "Stelle deine Frage und berühre die mystische Kugel, um ihre rätselhafte Antwort zu enthüllen. Das mystische Orakel erwartet deine Anfrage.",
        popup_p2: "Für höchste Genauigkeit konzentriere deine Gedanken und lass die kosmischen Energien deine Frage leiten.",
        popup_fact: "Wusstest du schon? Die ursprüngliche Magic 8 Ball wurde in den 1950er Jahren erfunden und erlangte als Wahrsage-Spielzeug Berühmtheit. Ihre geheimnisvollen Antworten haben Suchende nach Weisheit seit Jahrzehnten verblüfft und amüsiert. Jetzt hältst du die digitale Version in deinen Händen – bereit, die Geheimnisse des Kosmos zu enthüllen!🌌✨"
    },
    lv: {
        popup_header: "Mistiskais orākuls",
        popup_p1: "Izvirzi savu jautājumu un pieskaries mistiskajai sfērai, lai atklātu tās noslēpumaino atbildi. Mistiskais orākuls gaida tavu vaicājumu.",
        popup_p2: "Lai panāktu maksimālu precizitāti, koncentrē savas domas un ļauj kosmiskajām enerģijām vadīt tavu jautājumu.",
        popup_fact: "Vai zināji? Sākotnējais Magic 8 Ball tika izgudrots 1950. gadu sākumā un kļuva slavena kā spēļu rotaļlieta nākotnes prognozēšanai. Tās noslēpumainie atbildes ir pārsteigušas un iedvesmojušas gudrības meklētājus jau desmitgades. Tagad tu tur rokās digitālo versiju – gatavu atklāt kosmosa noslēpumus!🌌✨"
    },
}



const languageSelect = document.querySelector("select");

let header = document.getElementById("popup_header");
let p1 = document.getElementById("popup_p1");
let p2 = document.getElementById("popup_p2");
let fact = document.getElementById("popup_fact");

languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})


const setLanguage = (language) => {
    if (language == "en") {
        header.innerText = translations.en.popup_header;
        p1.innerText = translations.en.popup_p1;
        p2.innerText = translations.en.popup_p2;
        fact.innerText = translations.en.popup_fact;
    } else if (language == "ru") {
        header.innerText = translations.ru.popup_header;
        p1.innerText = translations.ru.popup_p1;
        p2.innerText = translations.ru.popup_p2;
        fact.innerText = translations.ru.popup_fact;
    } else if (language == "de") {
        header.innerText = translations.de.popup_header;
        p1.innerText = translations.de.popup_p1;
        p2.innerText = translations.de.popup_p2;
        fact.innerText = translations.de.popup_fact;
    } else if (language == "lv") {
        header.innerText = translations.lv.popup_header;
        p1.innerText = translations.lv.popup_p1;
        p2.innerText = translations.lv.popup_p2;
        fact.innerText = translations.lv.popup_fact;
    }
}