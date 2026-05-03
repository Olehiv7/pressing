// Функція для переходу на сторінку програми
function info(type) {
    window.location.href = `program.html?type=${type}`;
}

// Функція для відображення даних на сторінці program.html
function loadProgramDetails() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');

    const data = {
        u8: {
            title: "Програма U8: Базові навички",
            age: "6–8 років",
            focus: "Координація, техніка володіння м'ячем, ігрова форма навчання.",
            description: "У цьому віці дитина сповненна емоцій та енергії. Ми використовуємо ігри та вправи, щоб розвивати базові навички та любов до футболу."
        },
        u12: {
            title: "Програма U12: Командна гра",
            age: "9–12 років",
            focus: "Тактичне мислення, точність передач, позиційна гра.",
            description: "У цьому віці важливо зрозуміти що таке командна гра. Ми вчимо дітей працювати разом, розвивати тактичне мислення та вдосконалювати технічні навички."
        },
        u16: {
            title: "Програма U16: Професійний розвиток",
            age: "13–16 років",
            focus: "Фізична витривалість, стратегія, підготовка до професійних переглядів.",
            description: "У цьому віці важливо сфокусуватися на розвитку фізичних якостей, тактичного розуміння та психологічної стійкості. Ми готуємо юнаків до дорослого футболу, працюючи над атлетизмом та глибоким вивченням ігрових стратегій."
        }
    };

    if (data[type]) {
        document.getElementById('program-title').innerText = data[type].title;
        document.getElementById('program-age').innerText = data[type].age;
        document.getElementById('program-focus').innerText = data[type].focus;
        document.getElementById('program-description').innerText = data[type].description;
    }
}

function goBack() {
    window.history.back();
}