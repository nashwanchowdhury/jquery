$('#submit').on('click', function() {
    let name = $('#name').val();
    let email = $('#email').val();
    let number = $('#phone').val();
    let required = [name, email, number];
    let novalue = false;
    for (let i = 0; i < 3; i++) {
        if (required[i] === "") {
            $('textarea').text('Please Fill Out Required Fields');
            $('textarea').addClass('warning');
            $('label').addClass('warning');
            novalue = true;
        } 
    }
    if (novalue == false) {
        $('form').hide();
        $('h2').text('Thanks for the feedback');
    }
    })
  

