'use strict';

//EXERCICE 5

function check() {

    //get inputs values
    var name = document.querySelector('#name').value;
    var lastname = document.querySelector('#surname').value;
    var mail = document.querySelector('#mail').value;
    var passwd = document.querySelector('#passwd').value;

    //get error and show in <p>
    var p1 = document.querySelector('#p1');
    var p2 = document.querySelector('#p2');
    var p3 = document.querySelector('#p3');
    var p4 = document.querySelector('#p4');

    //create regexes
    var Reg1 = new RegExp('^[A-Za-zÀ-ÿ\s -]+$');
    var Reg2 = new RegExp('^([a-zA-ZÀ-ÿ0-9_\.\-])+\@(([a-zA-ZÀ-ÿ0-9\-])+\\.)+([a-zA-ZÀ-ÿ0-9]{2,4})+$');
    var Reg3 = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-zÀ-ÿ\\d@$!%*+#=/\\_-?&]{8,}$');

    //Check if there a name
    if (name != '') {
        if (Reg1.exec(name)) {
            p1.setAttribute(
                'style',
                'color:#32CD32'
            );
            p1.innerText = 'Cool. It\'s a valid name !';
        } else {
            p1.setAttribute(
                'style',
                'color:#ff452'
            );
            p1.innerText = 'Not valid name. Please entry a valid name !';
        }
    } else {
        p1.setAttribute(
            'style',
            'color:#ff452'
        );
        p1.innerText = 'Empty. Please entry your name !';
    }

    //Check if there a surname
    if (lastname != '') {
        if (Reg1.exec(lastname)) {
            p2.setAttribute(
                'style',
                'color:#32CD32'
            );
            p2.innerText = 'Cool. It\'s a valid surname';
        } else {
            p2.setAttribute(
                'style',
                'color:#ff452'
            );
            p2.innerText = 'Not valid surname. Please entry a valid surname !';
        }
    } else {
        p2.setAttribute(
            'style',
            'color:#ff452'
        );
        p2.innerText = 'Empty. Please entry your surname !';
    }

    //Check if there an email
    if (mail != '') {
        if (Reg2.exec(mail)) {
            p3.setAttribute(
                'style',
                'color:#32CD32'
            );
            p3.innerText = 'Cool. It\'s a valid email';
        } else {
            p3.setAttribute(
                'style',
                'color:#ff452'
            );
            p3.innerText = 'Not valid email. Please entry a valid email !';
        }
    } else {
        p3.setAttribute(
            'style',
            'color:#ff452'
        );
        p3.innerText = 'Empty. Please entry your email !';
    }

    //Check if there a password
    if (passwd != '') {
        if (Reg3.exec(passwd)) {
            p4.setAttribute(
                'style',
                'color:#32CD32'
            );
            p4.innerText = 'Cool. It\'s a valid password';
            
        } else {
            p4.setAttribute(
                'style',
                'color:#ff452'
            );
            p4.innerText = 'Not valid password. Please entry a valid password !';
        }
    } else {
        p4.setAttribute(
            'style',
            'color:#ff452'
        );
        p4.innerText = 'Empty. Please entry your password !';
    }
}