// Отримуємо HTML-елементи для тексту питання і кнопок відповідей
let question_field = document.querySelector('.question') // Поле для відображення питання
let answer_buttons = document.querySelectorAll('.answer') // Всі кнопки з класом .answer
let points = 0

// Клас для створення об'єктів питання
class Question {
    constructor(question, answer_1, answer_2, correct, answer_4, answer_5) {
        // Зберігаємо текст питання
        this.question = question

        // Зберігаємо правильну відповідь
        this.correct = correct

        // Зберігаємо всі варіанти відповідей у масиві
        this.answers = [
            answer_1,
            answer_2,
            this.correct, // Додаємо правильну відповідь
            answer_4,
            answer_5,
        ]
    }

    // Метод для відображення питання та відповідей на екрані
    display() {
        question_field.innerHTML = this.question // Встановлюємо текст питання

        // Виводимо всі варіанти відповідей на кнопки
        for (let i = 0; i < this.answers.length; i += 1) {
            answer_buttons[i].innerHTML = this.answers[i] // Встановлюємо текст кнопки
        }
    }
}

// Масив з усіма питаннями
let current_questions = [
    new Question("2+2", "6", "2", "4", "10", "3"), // Питання 1
    new Question("2+3", "6", "4", "5", "10", "3"), // Питання 2
    new Question("3+5", "6", "4", "8", "10", "3"), // Питання 3
    new Question("1+1", "8", "55", "2", "91", "22"), // Питання 4
    new Question("5+5", "8", "10", "15", "9", "11") // Питання 5
]

// Лічильник відповідей, щоб знати, яке питання зараз активне
let total_answers_given = 0

// Поточне питання (на початку перше)
let current_question = current_questions[total_answers_given]

// Викликаємо метод display(), щоб відобразити перше питання
current_question.display()

// Додаємо обробники кліку до кнопок
for (let i = 0; i < answer_buttons.length; i += 1) {
    answer_buttons[i].addEventListener('click', function () {
        // Перевіряємо, чи обрана відповідь є правильною
        if (answer_buttons[i].innerHTML == current_question.correct) {
            console.log("Правильно") // Виводимо у консоль повідомлення
            points += 1
        } else {
            console.log("Неправильно") // Виводимо у консоль повідомлення
            points -= 1
        }

        // Збільшуємо лічильник, щоб перейти до наступного питання
        total_answers_given += 1

        // Перевіряємо, чи закінчилися всі питання
        if (total_answers_given >= current_questions.length) {
            alert("Гра завершена! Кількість ваших балів: "+ points) // Виводимо повідомлення про завершення
            return // Зупиняємо виконання функції
        }

        // Переходимо до наступного питання
        current_question = current_questions[total_answers_given]

        // Відображаємо нове питання та відповіді
        current_question.display()
    })
}
