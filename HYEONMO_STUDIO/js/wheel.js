$(document).ready(function() {


    
    var T = true;
    var footer_TF = true;
    var i;
    var b2_TF = true;
    var b2_TF2 = true;
    var back2;
    var back3;
    var count_1 = 0;
    var co_t = 0;
    var width = $('.wrap').width();
    var b1_height = $('.back1').height();
    var b2_height = $('.back2').height();
    var b3_height = $('.back3').height();
    var b4_height = $('.back4').height();
    var b41_height = $('.back4_1').height();
    var b42_height = $('.back4_2').height();
    var b43_height = $('.back4_3').height();
    var b5_height = $('.back_company').height();
    var b6_height = $('.back_bottom').height();
    //스크롤 이벤트

    $(window).resize(function() {
        width = $('.wrap').width();
        if(width > 769) {
            $('.back2_fixed').animate({
                'top' : '63%',
                'opacity' : '1'
            },0)
            
            
        }else if(width <= 769) {
            $('.back2_fixed').animate({
                'top' : '55%',
                'opacity' : '1'
            },0)
        }
        b1_height = $('.back1').height();
        b2_height = $('.back2').height();
        b3_height = $('.back3').height();
        b4_height = $('.back4').height();
        b41_height = $('.back4_1').height();
        b42_height = $('.back4_2').height();
        b43_height = $('.back4_3').height();
        b5_height = $('.back_company').height();
        b6_height = $('.back_bottom').height();
    })

    
    //새로고침하면 화면 맨위로 보낸다
    $(window).on('beforeunload', function() { 
        $('html').scrollTop(0);
    })

    $(window).scroll(function() {
        i = $(this).scrollTop();
        console.log(i);
        if(i > 200 && T == true) {
            $('.logo').toggleClass('changed');
            T = false;
            span_color_TF = false;
            span_color_scroll();
            back1_event();
            footer_TF = false;
            footer_color_event()
        }else if(i < 200 && T == false) {
            $('.logo').toggleClass('changed');
            T = true; 
            span_color_TF = true;
            span_color_scroll();
            back1_event();
            footer_TF = true;
            footer_color_event()
        }else if(i < 800) {
        }else if(i > 800) {
            if(b2_TF == true) {
                back2_event();
                back2 = setInterval(function() {
                    console.log("실행");
                    back2_auto_event2();
                },1600)
            }
            b2_TF = false;
            // if(b2_TF == true) {
            //     setInterval(function(){
            //         back2_auto_event();
            //     },1000);
            // }
            // b2_TF = false;
        }

        // 글씨 이동 
        co_t = i / 9;
        var co_t_2 = co_t/2.2  + 42
        if(co_t < 53.5) {
            $('.text_back2').css({
                'top' : co_t + '%',
                'background' : 'linear-gradient(to bottom, #000 20%, #000 20%, #000 '+co_t_2+'%, rgba(0,0,0,0) 20%)',
                'background-clip': 'text',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
                'transition' : 'all 0.35s'
            })
        }

        // 애니메이션 이벤트 
        // back3용 
        var back3_li = document.querySelectorAll('.back3_li');
        if(i > b1_height+b2_height/1.9) {

            $(back3_li).css({
                'transform': 'translateY(0px)',
            })

            $(back3_li[0]).css({
                'opacity'  : '1',
                'transition' : 'all 1s',
                'transform': 'translateY(0px)'
            })

            $(back3_li[1]).css({
                'opacity'  : '1',
                'transition' : 'all 1s',
                'transitionDelay': '0.25s'
            })

            $(back3_li[2]).css({
                'opacity'  : '1',
                'transition' : 'all 1s',
                'transitionDelay': '0.5s'

            })

            $(back3_li[3]).css({
                'opacity'  : '1',
                'transition' : 'all 1s',
                'transitionDelay': '0.75s'

            })

            $(back3_li[4]).css({
                'opacity'  : '1',
                'transition' : 'all 1s',
                'transitionDelay': '1s'
            })
        }
        // back4_1
        if(i > b1_height+b2_height+b3_height/1.8) {
            $('.b4_content').css({
                'opacity' : '1',
                'transition' : 'all 1s'
            })
        }
        // back4_2
        if(i > b1_height+b2_height+b3_height+b41_height/1.8) {
            $('.b4_content2').css({
                'opacity' : '1',
                'transition' : 'all 1s'
            })
        }
        // back4_3 
        if(i > b1_height+b2_height+b3_height+b41_height+b42_height/1.8) {
            $('.b4_content3').css({
                'opacity' : '1',
                'transition' : 'all 1s'
            })
        }
        // back4_4 
        if(i > b1_height+b2_height+b3_height+b41_height+b42_height+b43_height/1.8) {
            $('.b4_more').css({
                'opacity' : '1',
                'transition' : 'all 1s'
            })
        }
        var bo_m_li = document.querySelectorAll('.bo_m_li');
        if(i > b1_height+b2_height+b3_height+b4_height+b5_height/2.2) {
            $(bo_m_li).css({
                'opacity' : '1'
            })
            $(bo_m_li[0]).css({
                'transform' : 'translateX(0px)',
                'transition' : 'all 1s',
                'transitionDelay': '0.25s'
            })
            $(bo_m_li[1]).css({
                'transform' : 'translateX(0px)',
                'transition' : 'all 1s',
                'transitionDelay': '0.5s'
            })
            $(bo_m_li[2]).css({
                'transform' : 'translateX(0px)',
                'transition' : 'all 1s',
                'transitionDelay': '0.75s'
            })
            $(bo_m_li[3]).css({
                'transform' : 'translateX(0px)',
                'transition' : 'all 1s',
                'transitionDelay': '1s'
            })
            $(bo_m_li[4]).css({
                'transform' : 'translateX(0px)',
                'transition' : 'all 1s',
                'transitionDelay': '1.25s'
            })
        }

    })
    var count = 0;

    // $(window).on('wheel', function(e) {
    //     console.log(i);
    //     var E = e.originalEvent.wheelDelta;
    //     console.log(E);
    //     if(E < 0 && count*8.5 < 51 && i > 0) {
    //         count++;
    //         console.log(count);
    //         var count_1 = 42 + count*4;
    //         $('.text_back2').css({
    //             'top' : + count * 8.5 + '%',
    //             'background' : 'linear-gradient(to bottom, #000 20%, #000 20%, #000 '+count_1+'%, rgba(0,0,0,0) 20%)',
    //             'background-clip': 'text',
    //             '-webkit-background-clip': 'text',
    //             '-webkit-text-fill-color': 'transparent',
    //             'transition' : 'all 0.5s'
    //         })
    //     }else if(E < 0 && count > 50) {

    //     }

    //     if(E > 0 && i < 800 && count*6 > 0) {
    //         count--;
    //         $('.text_back2').css({
    //             'top' : + count * 6 + '%',
    //             'transition' : 'all 0.5s'
    //         })
    //         count_1 = 42 + count*4;
    //         $('.text_back2').css({
    //             'top' : + count * 8.5 + '%',
    //             'background' : 'linear-gradient(to bottom, #000 20%, #000 20%, #000 '+count_1+'%, rgba(0,0,0,0) 20%)',
    //             'background-clip': 'text',
    //             '-webkit-background-clip': 'text',
    //             '-webkit-text-fill-color': 'transparent',
    //             'transition' : 'all 0.5s'
    //         })
    //     }
    // })
    

    var span = document.querySelectorAll('.ham span');
    var menu_text = document.querySelectorAll('.t_box p')
    var ham_TF = true;
    // 햄버거 이벤트
    $('.ham').click(function() {
        console.log("ssssss");
        if(ham_TF == true) {
            ham_span_event();
            ham_event()
            ham_TF = false;
        }else if(ham_TF == false) {
            ham_span_event();
            ham_event()
            ham_TF = true;
        }
    })


    // 햄버거 이후 메뉴관련 실행될 함수 
    function ham_event() {
        if(ham_TF == true) {
            $('.menu').css({
                'visibility': 'visible'
            })
            $('.menu_box').css({
                'width' : 'calc(100% - 80px)',
                'height' : 'calc(100% - 80px) ',
                'transition': 'all 0.5s',
            })
            setTimeout(function() {
                $(menu_text[0]).css({
                    'transform': 'translateX(0%)',
                    'opacity' : '1',
                    'transition': 'all 0.6s',
                })
                $(menu_text[1]).css({
                    'transform': 'translateX(0%)',
                    'opacity' : '1',
                    'transition': 'all 0.6s',
                    'transition-delay' : '0.25s'
                })
                $(menu_text[2]).css({
                    'transform': 'translateX(0%)',
                    'opacity' : '1',
                    'transition': 'all 0.6s',
                    'transition-delay' : '0.5s'
                })
                $(menu_text[3]).css({
                    'transform': 'translateX(0%)',
                    'opacity' : '1',
                    'transition': 'all 0.6s',
                    'transition-delay' : '0.75s'
                })
            },200)

            setTimeout(function() {
                // 글씨 채워지는 효과 transition, transition 초기화
                $(menu_text).css({
                    'transition': 'all 0.3s',
                    'transition-delay' : '0.0s'
                })
            },300)
        }else if(ham_TF == false) {
            $('.menu').css({
                'visibility' : 'hidden',
            })
            
            $('.menu_box').css({
                'width' : 'calc(100%)',
                'height' : 'calc(100%)',
                'transition': 'all 0.0s'
            })

            $('.t_box p').css({
                'transform': 'translateX(-30%)',
                'opacity' : '0',
                'transition': 'all 0s',
            })
        }
    }

    // 함수 span태그 관련 이벤트 실행될 함수
    function ham_span_event() {
        if(ham_TF == true) {
            console.log("99");
            $(span[0]).css({
                'top' : '50%',
                'left' : '50%',
                'transform' : 'translate(-50%, -50%) rotate(-45deg)',
                'transition': 'all 0.3s',
                'background' : '#000000'
            })
    
            $(span[1]).css({
                'top' : '50%',
                'left' : '50%',
                'transform' : 'translate(-50%, -50%) rotate(45deg)',
                'transition': 'all 0.3s',
                'background' : '#000000'
            })
    
            $(span[2]).css({
                'display' : 'none',
                'background' : '#000000'
            })
        }else if(ham_TF == false && T == true) {
            console.log("11");
            $(span[0]).css({
                'top' : '0',
                'left' : '0',
                'transform' : 'translate(-0%, -0%) rotate(0deg)',
                'transition': 'all 0.3s',
                'background' : '#ffffff'
            })
            
            $(span[1]).css({
                'top' : '50%',
                'left' : '50%',
                'transform' : 'translate(-50%, -50%) rotate(0deg)',
                'transition': 'all 0.3s',
                'background' : '#ffffff'
            })
            
            $(span[2]).css({
                'display' : 'block',
                'transition': 'all 0.3s',
                'background' : '#ffffff'
            })
        }else if(ham_TF == false && T == false) {
            console.log("22");
            $(span[0]).css({
                'top' : '0',
                'left' : '0',
                'transform' : 'translate(-0%, -0%) rotate(-0deg)',
                'transition': 'all 0.3s',
                'background' : '#000000'
            })
            
            $(span[1]).css({
                'top' : '50%',
                'left' : '50%',
                'transform' : 'translate(-50%, -50%) rotate(0deg)',
                'transition': 'all 0.3s',
                'background' : '#000000'
            })
            
            $(span[2]).css({
                'display' : 'block',
                'transition': 'all 0.3s'
            })
        }
    }

    function span_color_scroll() {
        if(ham_TF == true && T == true) {
            $(span[0]).css({
                'top' : '0',
                'left' : '0',
                'transform' : 'translate(-0%, -0%) rotate(-0deg)',
                'transition': 'all 0.3s',
                'background' : '#ffffff'
            })
            
            $(span[1]).css({
                'top' : '50%',
                'left' : '50%',
                'transform' : 'translate(-50%, -50%) rotate(0deg)',
                'transition': 'all 0.3s',
                'background' : '#ffffff'
            })
            
            $(span[2]).css({
                'display' : 'block',
                'transition': 'all 0.3s',
                'background' : '#ffffff'
            })
        }
        if(ham_TF == true && T == false) {
            $(span[0]).css({
                'top' : '0',
                'left' : '0',
                'transform' : 'translate(-0%, -0%) rotate(-0deg)',
                'transition': 'all 0.3s',
                'background' : '#000000'
            })
            
            $(span[1]).css({
                'top' : '50%',
                'left' : '50%',
                'transform' : 'translate(-50%, -50%) rotate(0deg)',
                'transition': 'all 0.3s',
                'background' : '#000000'
            })
            
            $(span[2]).css({
                'display' : 'block',
                'transition': 'all 0.3s',
                'background' : '#000000'
            })
        }
    }

    function footer_color_event() {
        if(footer_TF == false) {
            $('.footer_bar').css({
                'border-top': '7px solid #000000'
            })
            $('.footer_box').css({
                'color' : '#000000'
            })
        }else if(footer_TF == true) {
            $('.footer_bar').css({
                'border-top': '7px solid #ffffff'
            })
            $('.footer_box').css({
                'color' : '#ffffff'
            })
        }
    }

    // 스크롤 시 back1에서 이루어질 이벤트 함수 
    var back_span = document.querySelectorAll('.video span');
    var span_top = $(back_span[0]).height();
    var span_left = $(back_span[1]).width();
    var span_right = $(back_span[2]).width();
    function back1_event() {

        if(i > 200) {
            $(back_span[0]).animate({
                'top' : -span_top + 'px'
            },500)
    
            $(back_span[1]).animate({
                'left' : -span_left + 'px'
            },500)
    
            $(back_span[2]).animate({
                'right' : -span_right + 'px'
            },500)
        }else if(i < 200) {
            $(back_span[0]).animate({
                'top' : -0 + 'px'
            },500)
    
            $(back_span[1]).animate({
                'left' : -0 + 'px'
            },500)
    
            $(back_span[2]).animate({
                'right' : -0 + 'px'
            },500)
        }
    }




    // 스크롤 시 back2에서 이루어질 이벤트 홤수
    var b2_text_list = document.querySelectorAll('.b2_text');
    // 반복되지않고 최초 1회 실행만 하게될 함수
    function back2_event() {
        if(width > 769) {
            $('.back2_fixed').animate({
                'top' : '63%',
                'opacity' : '1'
            },1100)
        }else if(width <= 769) {
            $('.back2_fixed').animate({
                'top' : '55%',
                'opacity' : '1'
            },1100)
        }
        // setInterval(function() {
            // },8500)
        }
    // 한번 실행 이후 계속 반복실행될 함수
    function back2_auto_event() {
        console.log("asdasdasd");
        if(b2_TF2 == true) {
            b2_TF2 = false;
            $(b2_text_list[0]).animate({
                'width' : '100%'
            },500,function(){
                $(b2_text_list[0]).delay(1000).animate({
                    'width' : '0%'
                },500,function() {
                    $(b2_text_list[1]).animate({
                        'width' : '100%'
                    },500,function() {
                        $(b2_text_list[1]).delay(1000).animate({
                            'width' : '0%'
                        },500,function() {
                            $(b2_text_list[2]).animate({
                                'width' : '100%'
                            },500,function() {
                                $(b2_text_list[2]).delay(1000).animate({
                                    'width' : '0%'
                                },500,function() {
                                    setTimeout(function() {
                                        b2_TF2 = true;
                                    },300)
                                })
                            })
                        })
                    })
                })
            })
        }


        // for (var a = 0; a < 3; a++) {
        //     console.log(a);
        //     $(b2_text_list[a]).css({
        //         'display' : 'block'
        //     })
        //     $('.back2_fixed').animate({
        //         'width' : '25%'
        //     })

        //     setTimeout(function() {
        //         $('.back2_fixed').animate({
        //             'width' : '0'
        //         },{duration:600,complete:function(){
        //             $(b2_text_list).css({
        //                 'display' : 'none'
        //             })
        //         }})
        //     })
        // }
    }

    // 한번 실행 이후 계속 반복실행될 함수
    function back2_auto_event2() {
        console.log("count : " + count_1);
        if(count_1 == 0) {
            $(b2_text_list[0]).animate({
                'width' : '100%'
            },500,function() {
                $(b2_text_list[0]).delay(1500).animate({
                    'width' : '0%'
                },500,function() {
                });
            })
            clearInterval(back2);
            setTimeout(function() {
                count_1++;
            })
        }
        
        if(count_1 == 1) {
            $(b2_text_list[1]).animate({
                'width' : '100%'
            },500,function() {
                $(b2_text_list[1]).delay(1500).animate({
                    'width' : '0%'
                });
            })
            clearInterval(back2);
            console.log('클리어');
            setTimeout(function() {
                count_1++;
            })
        }

        if(count_1 == 2) {
            $(b2_text_list[2]).animate({
                'width' : '100%'
            },500,function() {
                $(b2_text_list[2]).delay(1500).animate({
                    'width' : '0%'
                });
            })
            clearInterval(back2);
            console.log('클리어');
            setTimeout(function() {
                count_1 = 0;
            })
        }
        setTimeout(function() {
            back2 = setInterval(function() {
                console.log("실행2");
                back2_auto_event2();
            },100)
        },4000)
    }
    back4_4_event();
    function back4_4_event() {
        $('.b4_more').hover(function() {
            $('.more_span').css({
                'transform' : 'rotate(180deg)',
                'transition' : '0.25s'
            })
        },function() {
            $('.more_span').css({
                'transform' : 'rotate(0deg)',
                'transition' : '0.25s'
            })
        })
    }
    


})

// $(window).on("wheel",function(event) {
//     var i = event.originalEvent.wheelDelta;
//     console.log(i);

// })