$(document).ready(function() {

    var mmm = document.querySelector('.m_box')
    $('.p1_bt').click(function() {
        $('.menu').css({ 'display' : 'block'})
        setTimeout(function() {

            mmm.classList.add('mmm_E')
        },100)

        $('.wrap').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
        }); 

    })

    $('.close').click(function() {
        $('.menu').css({ 'display' : 'none'})
        mmm.classList.remove('mmm_E')
        $('.wrap').off('scroll touchmove mousewheel'); //마우스휠사용가능
    })


    $('.copy1_input').click(function() {
        document.execCommand('copy');
    })

    $('.copy2_input').click(function() {
        var copy2 = document.getElementById('cp2');
        var copy22 = document.querySelector('#cp2');
        // var copy222 = document.getElementsByClassName('cpp2')
        copy2.select();
        document.execCommand('copy');
        copy2.setSelectionRange(0, 99999);
    })

    $('.copy2_input2').click(function() {
        var copy2 = document.getElementById('cp2');
        var copy2_2 = document.querySelector('#ta2');
        // var copy222 = document.getElementsByClassName('cpp2')
        copy2_2.select();
        document.execCommand('copy');
        copy2_2.setSelectionRange(0, 99999);
    })

    var copy3_count = "COPY3 실행 완료"
    $('.copy3_input').click(function() {
        const copy3 = document.createElement('input');
        copy3.setAttribute("value", copy3_count);
        document.body.appendChild(copy3);
        copy3.select();
        document.execCommand('copy');
        document.body.removeChild(copy3);
    })
})