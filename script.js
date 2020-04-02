$(document).ready(() => {

$('#question-type').select2();

let question;
$('#generate-button').click(() => {
    question = new QUESTION_TYPES[$('#question-type').val()];
    $('#question').html(question.text);
    if (question) {
        $('#submit-button').click(() => {
            const answer = $('#answer-in').val();
            if (answer == question.answer) {
                $('#answer-out').html('Correct!');
            } else {
                $('#answer-out').html('Incorrect');
            }
        });
    }
});


});