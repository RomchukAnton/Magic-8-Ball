
let options = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
]


const languages = {
    en:[
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
    ],
    ru:[
    'Бесспорно',
    'Предрешено',
    'Никаких сомнений',
    'Определённо да',
    'Можешь быть уверен в этом',
    'Мне кажется - «да»',
    'Вероятнее всего',
    'Хорошие перспективы',
    'Да',
    'Знаки говорят - «да»',
    'Пока не ясно, попробуй снова',
    'Спроси позже',
    'Лучше не рассказывать',
    'Сейчас нельзя предсказать',
    'Сконцентрируйся и спроси опять',
    'Даже не думай',
    'Мой ответ - «нет»',
    'По моим данным - «нет»',
    'Перспективы не очень хорошие',
    'Весьма сомнительно'
    ],
    de:[
    'Ganz sicher',
    'Vorherbestimmt',
    'Kein Zweifel',
    'Definitiv ja',
    'Du kannst dir sicher sein',
    'Ich denke schon',
    'Wahrscheinlich',
    'Gute Aussichten',
    'Ja',
    'Die Zeichen deuten auf ja hin',
    'Noch nicht klar, versuch es später nochmal',
    'Frag später nochmal',
    'Besser nicht jetzt sagen',
    'Jetzt nicht vorhersagbar',
    'Konzentriere dich und frag nochmal',
    'Ganz und gar nicht',
    'Meine Antwort lautet nein',
    'Meinen Informationen nach: nein',
    'Aussichten sind nicht gut',
    'Sehr zweifelhaft'
    ],
    lv:[
    'Noteikti',
    'Iepriekš paredzēts',
    'Bez šaubām',
    'Noteikti jā',
    'Vari būt pārliecināts',
    'Man liekas - jā',
    'Visticamāk',
    'Labi izredzes',
    'Jā',
    'Zīmes liecina par jā',
    'Pagaidām nav skaidrs, mēģini vēlreiz',
    'Jautā vēlāk',
    'Labāk nerunāt tagad',
    'Tagad nav prognozējams',
    'Koncentrējies un jautā vēlreiz',
    'Nemaz nepiedomā',
    'Mana atbilde ir nē',
    'Pēc maniem datiem - nē',
    'Perspektīvas nav īpaši labas',
    'Ļoti šaubīgi'
    ]
}

//Translation
const languageSelector = document.querySelector("select");

languageSelector.addEventListener("change", (event) => {
    if (event.target.value == "en") {
        options = languages.en;
    } else if (event.target.value == "ru") {
        options = languages.ru;
    }else if (event.target.value == "de") {
        options = languages.de;
    }else if (event.target.value == "lv") {
        options = languages.lv;
    }
})



//Ball Prediction
const magicBall = document.getElementById("mb-container")
const response = document.getElementById("response")

magicBall.addEventListener("click", function () {
    const index = Math.floor(Math.random() * 20)
    const message = options[index]
    magicBall.className = 'magicball_outer animate'
    setTimeout(() => {
        response.textContent = message;
        response.style.fontSize = '1.1rem'
        magicBall.className = 'magicball_outer'
    },3000)
})