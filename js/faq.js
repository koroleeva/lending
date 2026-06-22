document.addEventListener("DOMContentLoaded", function() {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function(item) {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!question || !answer) return;

        question.addEventListener("click", function() {

            faqItems.forEach(function(other) {
                if (other !== item) {
                    other.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });

});