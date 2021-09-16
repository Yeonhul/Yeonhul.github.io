$(document).ready(function() {

    var set1;
    var set1_count = 0;
    var pp = document.querySelectorAll('.p1_p');
    console.log(pp.length);
    //1안 setinterval
    $('.p1_click').click(function() {
        set1 = setInterval(function() {
            pp[set1_count].classList.add("p1E");

            setTimeout(function() {
                pp[set1_count].classList.remove("p1E");
                if(set1_count == 2) {
                    set1_count = 0;
                }else {
                    set1_count++;
                }
            },1000)
        },2000)
    })



    // p2

    var f;
    var fc = 0;
    var fc_old;
    var p2input = document.querySelectorAll('.p2_input');
    var con1 = false;

    $('.p2_input').hover(function() {
        f = $(this).index();
        p2input[f].classList.add('f_hover');
    },function() {
        p2input[f].classList.remove('f_hover');
    })

    $('.p2_input').click(function() {
        con1 = p2input[fc].classList.contains('f_click');
        console.log(con1);
        // p2input[fc].classList.remove('f_click');
        if(con1) {
            p2input[fc].classList.remove('f_click');
            fc_old = fc;
            fc = $(this).index();
            if(fc_old != fc) {
                p2input[fc].classList.add('f_click');
            }
        }else{
            fc = $(this).index();
            p2input[fc].classList.add('f_click');
        }
        con1 = p2input[fc].classList.contains('f_click');

        // console.log(fc_old);

        // if(fc_old == fc) {
        //     p2input[fc].classList.remove('f_click');
        //     fc_old = -1;
        // }else{
        // }
    })

    var add = document.querySelector('.add')
    $(add).hover(function() {
        console.log(con1);
        if(!con1){
            add.classList.add('add_no');
        }else{
            add.classList.add('add_ok');
        }
    },function() {
        if(!con1){
            add.classList.remove('add_no');
        }else{
            add.classList.remove('add_ok');
        }
    })


})