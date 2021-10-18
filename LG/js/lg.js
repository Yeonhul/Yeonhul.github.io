 $(document).ready(function() {


    var count = 0;
    var wheel_TF = true;
    var wrap_width = $(window).width();
    var resize_TF = true;
    var old_width = $(window).width();
    var resize_op;

    
    var use = WWW();
    $(window).resize(function() {
        wrap_width = $(window).width();
        //resize 시작할떄 미리 기록할 함수 
        console.log("1 : " + wrap_width);
        
        if(use < 1024) { //use = 현재 나의 너비 가 1024보다 낮을때 ( 모바일 )
            if(WWW() >= 1024) {location.reload();} //지금 현재 너비가 1024보다 높거나 같을 때
        }else if(use >= 1024){ //ues 현재 나의 너비가 1024보다 높을때 ( pc )
            if(WWW() < 1024) {
                location.reload();
            } //지금 현재의 너비가 1024보다 낮을 때 
        }
    })
    
    //새로고침하면 화면 맨위로 보낸다, pc > m 으로갈때 스크롤이없으므로 그에 대응
    $(window).on('beforeunload', function() { 
        $('.page_box').css({'transform': 'translateY(0%)','transition': 'all 0s'});
        $('html, body').scrollTop(0);
    })
    

    // wheel 방향 이벤트
    $(window).on('wheel', function(e) {
        var wheel = e.originalEvent.wheelDelta;
        console.log(wheel);

        // 아래방향
        if(wheel < 80 && count < 3 && wheel_TF == true && wrap_width > 1024) {
            wheel_TF = false;
            count++;
            console.log("count : " + count);
            $('.page_box').css({
                'transform': 'translateY('+ -count*100 +'%)',
                'transition': 'all 0.75s'
            })
            span_count();
            header_event();
            // footer_E();
            setTimeout(function() {wheel_TF = true; footer_E();},800);
        }else if(wheel > 80 && count > 0 && wheel_TF == true && wrap_width > 1024) {
            console.log('위')
            wheel_TF = false;
            count--;
            console.log("count : " + count);
            $('.page_box').css({
                'transform': 'translateY('+ -count*100 +'%)',
                'transition': 'all 0.75s'
            })
            span_count();
            header_event();
            // footer_E();
            setTimeout(function() {wheel_TF = true; footer_E();},800);
        }
    })

    
    
    // menu hover 이벤트
    var h_ol = document.querySelectorAll('.h_ol');
    var m_ul = document.querySelectorAll('.m_ul');
    var h_ol_w = $(h_ol).width();
    var hoverE;
    
    $(h_ol).hover(function() {
        hoverE = $(this).index();
        $('.bar').css({'display' : 'block'});
        $(m_ul).css({'visibility' : 'hidden'});
        
        if(hoverE == 3) {
            $(m_ul[hoverE]).css({
                'visibility' : 'visible',
                'left' : h_ol_w * 0.5 + 'px'
            });
            h_ol[hoverE].classList.add('h_olE');
            
        }else{
            $(m_ul[hoverE]).css({
                'visibility' : 'visible',
                'left' : h_ol_w * hoverE + 'px'
            });
            h_ol[hoverE].classList.add('h_olE');
        }
        
    },function() {
        h_ol[hoverE].classList.remove('h_olE');
    })


    
    $('.page_box').hover(function() {
        $('.bar').css({'display' : 'none'})
    },function(){
        $('.bar').css({'display' : 'none'})
    })
    // menu hover 이벤트 종료
    
    
    
    
    // span aside 이벤트
    var span = document.querySelectorAll('.cbox');
    function span_count() {
        $(span).css({'backgroundColor' : 'rgba(0,0,0,0)'});
        $(span[count]).css({'backgroundColor' : '#000'});
    }

    $(span).click(function() {
        var s = $(this).index();
        console.log(s);
        count = s;
        span_count();
        $('.page_box').css({
            'transform': 'translateY('+ -count*100 +'%)',
            'transition': 'all 0.75s'
        })
        footer_E();
    })
    // span aside 이벤트 종료
    
    // header 이벤트
    function header_event() {
        if(count > 0) {
            $('.h_box').css({'height' : '6vh','border-bottom' : '1px solid #E5E5E5'});
            setTimeout(function(){$('.h_box').animate({'padding' : '0 3%'});},500)
            
            
        }else{
            $('.h_box').css({'height' : '11vh','border' : '0'});
            setTimeout(function(){$('.h_box').animate({'padding' : '0 6%'});},500)
        }
    }
    // header 이벤트 종료
    
    // language 이벤트
    $('.lang_l').click(function() {
        $('.lang_box').css({
            'visibility' : 'visible',
            'height' : '200%'
        })
    })
    // language 이벤트 종료
    
    // page1 이벤트 
    // page1_header,left,right 이벤트
    var p1_img2 = document.querySelectorAll('.p1_img2')
    function page1_event() {
        if(wrap_width > 1024) {
            $('header').css({'transform': 'translateY(-60%)'});
            $('.p1_l').css({'transform': 'translateX(-60%)'});
            $('.p1_r').css({'transform': 'translateX(60%)'});
            setTimeout(function(){
                $('header').css({'transform': 'translateY(0)', 'transition' : 'all 0.75s'});
                $('.p1_l').css({'transform': 'translateX(0)', 'transition' : 'all 0.75s'});
                $('.p1_r').css({'transform': 'translateX(0)', 'transition' : 'all 0.75s'});
                setTimeout(function(){$('.h_box').stop().animate({'opacity' : '1'})
                setTimeout(function(){
                    $(p1_img2[0]).css({'transform' : 'translate(0)','opacity' : '1'})
                    $(p1_img2[1]).css({'transform' : 'translate(0)','opacity' : '1'})
                },500)
                })
            },1100)
        }else if(wrap_width < 1024) {
            $(p1_img2[0]).css({'transform' : 'translate(0)','opacity' : '1'})
            $(p1_img2[1]).css({'transform' : 'translate(0)','opacity' : '1'})
        }
    }
    page1_event();

    //page1_img 이벤트
    function page1_img_e() {
        var p1_interval;
        var p1_count = 0;
        var p1_img = document.querySelectorAll('.p1_img')
        p1_interval = setInterval(function() {
            p1_count++;
            console.log(p1_count);
            if(p1_count > 3) {
                p1_count = 0; 
                $(p1_img).css({'opacity' : '0'})
                $(p1_img[p1_count]).css({'opacity' : '1'})
            }else if(p1_count > 0) {
                $(p1_img).css({'opacity' : '0'})
                $(p1_img[p1_count]).css({'opacity' : '1'})
            }
        },5000)
    }
    page1_img_e();
    
    // page1 이벤트 종료
    
    
    // page2 이벤트 
    var ol = document.querySelector('.p2_ol');
    var ol_width = $('.p2_ol').width();
    var ul_width = $('.p2_ul').width();
    var width = $(window).width();
    var pc_tf = true; //pc 중복 실행 방지 시켜줄 변수
    var mo_tf = true; //모바일 중복 실행 방지 시켜줄 변수
    var mo_count = 0; // 모바일 환경에서 슬라이드의 양을 측정 할 변수
    var s_count = 0; //span 의 양을 측정 할 변수 

    
    $('.p2_ol').css({'transform': 'translateX(calc(-100%/3))'}); //ol 이동시켜놓음 33% 



    $('.p2_left').click(function(){
        p2_left();
    })

    $('.p2_right').click(function(){
        p2_right();
        console.log("우측");
    })

    // 우측버튼 클릭이벤트 함수
    function p2_right() {
        if(width > 1023) { //pc
            if(pc_tf == true) {
                pc_tf = false;
                ol.classList.add('ol_tr');
                $(ol).css({'transform' : 'translateX(calc(-100%/3*2))'}); //66%
                setTimeout(function() {
                    ol.classList.remove('ol_tr');
                    $(ol).css({'transform': 'translateX(calc(-100%/3))'}); //33%
                    $(ol).append($(ol).children()[0]);
                    pc_tf = true;

                    p2_span[s_count].classList.remove("span_event");
                    s_count++;
                    p2_span_E();
                },500)
            }
        }else if(width < 1024) { //moblie

            if(mo_tf == true) { //중복실행방지
                mo_tf = false;
                mo_count++;
                ol.classList.add('ol_tr');
                if(mo_count == 0) {
                    $(ol).css({'transform': 'translateX(calc(-100%/3))'})
                }else if(mo_count == 1) {
                    $(ol).css({'transform': 'translateX(calc(-100%/6 * 3))'});
                }
                setTimeout(function() {
                    if(mo_count > 1) {
                        $(ol).css({'transform': 'translateX(calc(-100%/6 * 4))'}); 
                        setTimeout(function() { //이런 식 으로 구성하지않으면 지금 상황에서는 애니메이션이 올바르게 이어지지않음
                            ol.classList.remove('ol_tr');
                            $(ol).css({'transform': 'translateX(calc(-100%/3))'})
                            $(ol).append($(ol).children()[0]);
                            mo_count = 0;
                        },500)
                    }
                    setTimeout(function(){
                        mo_tf = true
                        p2_span[s_count].classList.remove("span_event");
                        s_count++;
                        p2_span_E();
                    },600)
                })
            }

        }

    }

    function p2_left() {
        if(width > 1023) { //pc
            if(pc_tf == true) {
                pc_tf = false;
                ol.classList.add('ol_tr');
                $(ol).css({'transform' : 'translateX(0)'}); //0
                setTimeout(function() {
                    ol.classList.remove('ol_tr');
                    $(ol).css({'transform': 'translateX(calc(-100%/3))'}); //33%
                    $(ol).prepend($(ol).children()[2]);
                    pc_tf = true;
                    p2_span[s_count].classList.remove("span_event");
                    s_count--;
                    p2_span_E();
                },500)
            }

        }else if(width < 1024) { //moblie
           if(mo_tf == true) {
                mo_tf = false;
                mo_count--;
                ol.classList.add('ol_tr');
                if(mo_count == 0 ) {
                    $(ol).css({'transform': 'translateX(calc(-100%/3))'});
                }else if(mo_count < 0) {
                    $(ol).css({'transform': 'translateX(calc(-100%/6))'});
                }

                setTimeout(function() {
                    if(mo_count < -1) {
                        $(ol).css({'transform': 'translateX(0)'});
                        setTimeout(function() { //이런 식 으로 구성하지않으면 지금 상황에서는 애니메이션이 올바르게 이어지지않음
                            ol.classList.remove('ol_tr');
                            $(ol).css({'transform': 'translateX(calc(-100%/3))'})
                            $(ol).prepend($(ol).children()[2]);
                            mo_count = 0;
                        },500)
                    }
                    setTimeout(function(){
                        mo_tf = true
                        p2_span[s_count].classList.remove("span_event");
                        s_count--;
                        p2_span_E();
                    },600)
                })
           }
        }

    }

    var p2_span = document.querySelectorAll('.p2_sbox span');
    // p2_span 이벤트
    function p2_span_E() {
        if(width > 1023) {
            if(s_count == -1 ){
                s_count = 2;
                p2_span[s_count].classList.add("span_event");
            }else if(s_count == 3) {
                s_count = 0;
                p2_span[s_count].classList.add("span_event");
            }else if(s_count < 3) {
                p2_span[s_count].classList.add("span_event");

            }
        }else if(width < 1024) {
            if(s_count == -1 ){
                s_count = 5;
                p2_span[s_count].classList.add("span_event");
            }else if(s_count == 6) {
                s_count = 0;
                p2_span[s_count].classList.add("span_event");
            }else if(s_count < 6) {
                p2_span[s_count].classList.add("span_event");

            }
        }
    }
    p2_span_E();
    var old_p2_s = 0;
    var l;
    $(p2_span).click(function() {
        l = $(this).index();
        p2_span[s_count].classList.remove("span_event");
        ol.classList.add('ol_tr');
        s_count = l;
        p2_span_E();
        if(width > 1023) {
            if(old_p2_s > l) {
                $(ol).css({'transform' : 'translateX(0)'});
            }else if(old_p2_s < l) {
                $(ol).css({'transform' : 'translateX(calc(-100%/3*2))'})
            }
            if(l == 0) {
                $(ol).append($('#ul1'));
                $(ol).append($('#ul2'));
                $(ol).append($('#ul3'));
            }else if(l == 1) {
                $(ol).append($('#ul2'));
                $(ol).append($('#ul3'));
                $(ol).append($('#ul1'));
            }else if(l == 2) {
                $(ol).append($('#ul3'));
                $(ol).append($('#ul1'));
                $(ol).append($('#ul2'));
            }

            setTimeout(function() {
                old_p2_s = l;
                ol.classList.remove('ol_tr');
                $(ol).css({'transform' : 'translateX(calc(-100%/3))'})
            },350)
            
        }else if(width < 1024) {
            if(l == 0 || l == 1) {
                $(ol).append($('#ul1'));
                $(ol).append($('#ul2'));
                $(ol).append($('#ul3'));
            }else if(l == 2 || l == 3) {
                $(ol).append($('#ul2'));
                $(ol).append($('#ul3'));
                $(ol).append($('#ul1'));
            }else if(l == 4 || l == 5) {
                $(ol).append($('#ul3'));
                $(ol).append($('#ul1'));
                $(ol).append($('#ul2'));
            }
            if(l % 2 != 0) { //짝수 버튼일경우
                if(old_p2_s > l) {
                    $(ol).css({'transform': 'translateX(calc(-100%/6))'});
                }else if(old_p2_s < l) {
                    if(old_p2_s % 2 != 0) {
                        $(ol).css({'transform': 'translateX(calc(-100%/6*4))'});
                    }else{
                        $(ol).css({'transform': 'translateX(calc(-100%/6 * 3))'});
                    }
                }

                setTimeout(function() {
                    ol.classList.remove('ol_tr');
                    $(ol).css({'transform': 'translateX(calc(-100%/6 * 3))'});
                    mo_count = 1;
                    old_p2_s = l;
                },350)
            }else if(l % 2 == 0) { //홀수 버튼일경우
                if(old_p2_s > l) {
                    $(ol).css({'transform': 'translateX(calc(-100%/6))'});
                    // $(ol).css({'transform': 'translateX(0)'});
                }else if(old_p2_s < l) {
                    if(old_p2_s % 2 != 0) {
                            $(ol).css({'transform': 'translateX(calc(-100%/6 * 4))'});
                    }else{
                        $(ol).css({'transform': 'translateX(calc(-100%/6 * 3))'});
                    }
                }
                setTimeout(function() {
                    ol.classList.remove('ol_tr');
                    $(ol).css({'transform': 'translateX(calc(-100%/3))'});
                    mo_count = 0;
                    old_p2_s = l;
                },350)
            }
        }
    })



    // page2 이벤트 종료
    // footer

    function footer_E() {
        if(count == 3) {
            console.log("실행");
            $('footer').css({
                'display':'block'
            });

        }else{
            $('footer').css({
                'display':'none'
            });
        }
    }
    

    //모바일 전용 이벤트 시작

    $('.ham').click(function(){
        $('.menu_box').css({'display' : 'block'})
    })

    $('.close').click(function() {
        $('.menu_box').css({'display' : 'none'})
    })

    var mo_ul = document.querySelectorAll('.mo_ul')
    var mo_ulp = document.querySelectorAll('.mo_ul_p')
    var mo_dt = document.querySelectorAll('.mo_dt')
    var s;

    $(mo_ul).click(function() {
        s = $(this).index();
        mo_dt[s].classList.toggle("dt_e");
        mo_ulp[s].classList.toggle('ulp_e');

        //자식요소 클릭 시 부모 이벤트가 실행 안되게 함 
        $(mo_dt).click(function(event) {
            event.stopPropagation();
        })

    })

    

    // 모바일 3페이지 이벤트

    var th_s_X;
    var th_m_X;
    var th_e_X;
    var th_count = 0;
    var th_TF = true;

    $('.p3_c2_ul').on('touchstart', function(e){
        th_s_X = e.originalEvent.touches[0].screenX;
    })

    $('.p3_c2_ul').on('touchmove', function(e){
        th_m_X = e.originalEvent.touches[0].screenX;
    })

    $('.p3_c2_ul').on('touchend', function(e){
        th_e_X = th_s_X - th_m_X;
        console.log(th_e_X);

        console.log("asdasdasdasd");
        // 오른쪽
        if(th_e_X > 100 && th_count < 3 && th_TF == true) {
            th_count++;
            th_TF = false;
            $('.p3_c2_ul').css({
                'transform': 'translateX(calc(-100%/4 * '+ th_count + '))',
                'transition' : 'all 0.75s'
            })
            setTimeout(function(){th_TF = true; p3_span_E() },200)
        //왼쪽
        }else if(th_e_X < -100 && th_count > 0 && th_TF == true) {
            th_count--;
            th_TF = false;
            $('.p3_c2_ul').css({
                'transform': 'translateX(calc(-100%/4 * '+ th_count + '))',
                'transition' : 'all 0.75s'
            })
            setTimeout(function(){th_TF = true; p3_span_E() },200)
        }
    })

    // 3페이지 span 이벤트
    var p3_span = document.querySelectorAll(".p3_s")
    $(p3_span[th_count]).css({'backgroundColor' : '#A50034'});
    function p3_span_E() {
        $(p3_span).css({'backgroundColor' : '#cccccc'});
        $(p3_span[th_count]).css({'backgroundColor' : '#A50034'});
    }

    $(p3_span).click(function() {
        var q = $(this).index();
        th_count = q;
        p3_span_E();
        $('.p3_c2_ul').css({
            'transform': 'translateX(calc(-100%/4 * '+ th_count + '))',
            'transition' : 'all 0.75s'
        })
    })
    // 3페이지 span 이벤트 종료


    // 모바일 이벤트 종료

    // resize 실행시 마지막에만 실행된 함수

    // function resize_doen() {
    //     if(wrap_width > 1023 && old_width < 1025) {
    //         location.reload();
    //         // setTimeout(function() {
    //         //     page1_img_e();
    //         //     page1_event();

    //         // },300)
            
    //     }else if(wrap_width < 1025 && old_width > 1023) {
    //         console.log("tlfgod");
    //         location.reload();
    //     }

    //     setTimeout(function() {
    //         resize_TF = true;
    //     })
    // }

    // m > pc or pc > m 
    function WWW() {
        var winW = window.innerWidth > 0 ? 
        window.innerWidth : screen.width; 
        return winW;
    }

    
})