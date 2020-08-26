
document.querySelector('#encode-btn').addEventListener('click', function () {
    var input = document.querySelector('#encode').value;

    var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var arr = input.toUpperCase().split('');
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < abc.length; j++) {
            if (arr[i] === abc[j]) {
                arr[i] = nop[j];
            } else if (arr[i] === nop[j]) {
                arr[i] = abc[j];
            }
        }
    }

    document.querySelector('#encode').value = arr.join('');
})

document.querySelector('#decode-btn').addEventListener('click', function () {
    var input = document.querySelector('#decode').value;
    var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var arr = input.toUpperCase().split('');
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < abc.length; j++) {
            if (arr[i] === abc[j]) {
                arr[i] = nop[j];
            } else if (arr[i] === nop[j]) {
                arr[i] = abc[j];
            }
        }
    }
    document.querySelector('#decode').value = arr.join('');
});
