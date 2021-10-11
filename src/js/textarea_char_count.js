countChar();

function countChar() {
    var element = document.getElementById('textarea_char_count');
    var numChar = element.value.length;
    var maxChar = element.getAttribute('maxlength');
    
    document.getElementById('numChar').innerText = numChar;
    document.getElementById('maxChar').innerText = maxChar;
}