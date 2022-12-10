
/* 页面加载后再执行js文件 */
window.addEventListener('load', function () {

    // logo右边部分鼠标经过时隐藏部分才出现
    var logo = document.querySelector('.js-logo');
    var hidlogo = document.querySelector('.js-hidlogo');
    var hidli = hidlogo.querySelectorAll('li');
    logo.addEventListener('mouseover', function () {
        this.lastElementChild.style.display = 'block';
    });
    logo.addEventListener('mouseout', function () {
        this.lastElementChild.style.display = 'none';
    });
    for (var i = 0; i < hidli.length; i++) {
        hidli[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = '#f6f9fc';
        })
        hidli[i].addEventListener('mouseout', function () {
            this.style.backgroundColor = '#fff';
        })
    }

    //    导航栏鼠标经过时隐藏部分出现  
    var nav = document.querySelectorAll('.js-nav');
    var hidnav = document.querySelectorAll('.js-hidnav');
    for (var i = 0; i < nav.length; i++) {
        nav[i].addEventListener('mouseover', function () {
            this.lastElementChild.style.display = 'block';
        });
        nav[i].addEventListener('mouseout', function () {
            this.lastElementChild.style.display = 'none';
        })
    }
    
    for (var i = 0; i < hidnav.length; i++) {
        for (var j = 0; j < hidnav[i].children.length; j++) {
            hidnav[i].children[j].addEventListener('mouseover', function () {
                this.style.backgroundColor = '#f6f9fc';
            })
            hidnav[i].children[j].addEventListener('mouseout', function () {
                this.style.backgroundColor = '#fff';
            })
        }
    }
    // for (var i = 0; i < hidnav.length; i++) {
    //     for (var j = 0; j < hidnav[i].children.length; j++) {
    //         hidnav[i].children[j].addEventListener('mouseout', function () {
    //             this.style.backgroundColor = '#fff';
    //         })
    //     }
    // }
    // 导航栏鼠标经过时隐藏部分出现 部分结束

    //登录弹出窗口部分
    var btn = document.querySelector('.js-login');
    var login = document.querySelector('.login');
    var close = document.querySelector('.close');
    var bgc = document.querySelector('.login-bgc');
    btn.addEventListener('click', function () {
        login.style.display = 'block';
        bgc.style.display = 'block';
        close.style.display = 'block';
    });
    close.addEventListener('click', function () {
        login.style.display = 'none';
        bgc.style.display = 'none';
        close.style.display = 'none';
        //  恢复原始状态,可能会发生移动
        login.style.top = '53%';
        login.style.left = '50%';
    })
    // 可以拖动弹出框
    login.addEventListener('mousedown', function (e) {
        login.style.cursor = 'move';
        //获得鼠标在盒子内的坐标
        var x = e.pageX - login.offsetLeft;
        var y = e.pageY - login.offsetTop;
        function move(e) {
            // 鼠标在页面的坐标减去在盒子内的坐标即为弹出框移动的坐标
            login.style.left = e.pageX - x + 'px';
            login.style.top = e.pageY - y + 'px';
        }
        document.addEventListener('mousemove', move);
        // 鼠标弹起时拖动结束，即移除拖动事件
        document.addEventListener('mouseup', function () { 
            login.style.cursor = 'default';
            document.removeEventListener('mousemove', move);
        })
    })
    // 在login的子盒子按下时，可以阻止冒泡，（有时需要复制里面的内容，不阻止冒泡的话按下时登录框就会跟着鼠标走
    for (var i = 0; i < login.children.length; i++) {
        login.children[i].addEventListener('mousedown', function (e) {
            e.stopPropagation();  // 阻止冒泡
        })
    }
    // 登录弹出框部分结束

    // app-sort 部分隐藏的部分鼠标经过会出现并随着鼠标移动

    var sort_div = document.querySelectorAll('.sort-div');

    for (var i = 0; i < sort_div.length; i++) {
        sort_div[i].addEventListener('mousemove', function (e) {
            this.lastElementChild.style.display = 'block';
            this.lastElementChild.style.top = e.pageY - this.offsetTop + 20 + 'px';
            this.lastElementChild.style.left = e.pageX - this.offsetLeft + 8 + 'px';
        });

        sort_div[i].addEventListener('mouseout', function () {
            this.lastElementChild.style.display = 'none';
        })

    }

    // 广告部分中点击可以关掉广告
    var ad_close = document.querySelector('.ad-close');
    var ad_word = document.querySelector('.ad-word');
    var ad_hid = document.querySelector('.hid-ad');
    var ad = document.querySelector('.ad');

    ad_close.addEventListener('click', function () {
        ad.style.display = 'none';
    });

    ad_word.addEventListener('mouseover', function () {
        ad_hid.style.display = 'block';
    });
    ad_word.addEventListener('mouseleave', function () {
        ad_hid.style.display = 'none';
    })
    // 广告部分中点击可以关掉广告结束

    // customer部分中点击用户名字可以显示基本信息部分开始
    var pipi = document.querySelectorAll('.pipi');
    var customer_hid = document.querySelectorAll('.customer-hid');
    for (var i = 0; i < pipi.length; i++) {
        pipi[i].addEventListener('mouseover', function () {
            this.children[1].style.display = 'block';
        });
        pipi[i].addEventListener('mouseout', function () {
            this.children[1].style.display = 'none';
        })
    }
    // customer部分中点击用户名字可以显示基本信息部分结束


    // 轮播图制作
    // 获取对象
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    var focusWidth = focus.offsetWidth;  //获得父盒子的宽度

    // 根据图片的数量自动生成小圆点
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);   // 记录当前小圆圈的索引号
        ol.appendChild(li);
        ol.children[i].addEventListener('click', function () {
            for (var j = 0; j < ol.children.length; j++) {
                ol.children[j].className = '';
            }
            this.className = 'current';
            // 点击圆圈实现滚动
            var index = this.getAttribute('index');
            // 当我们点击某个Li,把索引号给num
            num = index;
            // 当我们点击某个li，把索引号给circle
            circle = index;
            animate(ul, - focusWidth * index);
        })
    }
    ol.children[0].className = 'current';
    // 克隆第一张图片放到ul坐后面
    var first = ul.children[0].cloneNode(true);   // 克隆包括子节点
    ul.appendChild(first);
    // 点击箭头实现滚动图片
    var num = 0;
    var circle = 0;
    // flag 节流阀
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = true; //关闭节流阀
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;   // 等到动画结束后再打开节流阀
            });
            // 点击右侧小箭头，小圆圈也跟着变化
            circle++;
            if (circle == ol.children.length) {  //注意是ol长度，比ul长度少1
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })
    // 最后，实现自动播放轮播图
    var timer = setInterval(function () {
        // 手动调用点击事件
        arrow_r.click();
    }, 2000);
    // 鼠标经过时停止自动播放
    focus.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;
    });
    // 鼠标离开时自动播放
    focus.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            arrow_r.click();
        }, 2000);
    });

    // 点击左侧箭头实现播放图片
    arrow_l.addEventListener('click', function () {
        console.log(flag);
        if (flag) {
            flag = false; //关闭节流阀
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -(ul.children.length - 1) * focusWidth + 'px';  // 此时来到最后一张图片，但最后一张图片跟第一张一样
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;   // 等到动画结束后再打开节流阀
            });
            // 点击右侧小箭头，小圆圈也跟着变化
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })
    // 轮播图部分结束

    // 点击图标，直接返回顶部部分开始
    var goBack = document.querySelector('.stick1');

    goBack.addEventListener('click', function () {
        animateY(window, 0);   // 因为是窗口滚动，所以对象是window
    })
    // 点击图标，直接返回顶部部分结束

    // 右侧合作媒体部分开始
    var corporation_ul = document.querySelector('.corporation-ul');
    for (var i = 0; i < corporation_ul.children.length; i++) {
        corporation_ul.children[i].addEventListener('mouseover', function () {
            for (var j = 0; j < corporation_ul.children.length; j++) {
                corporation_ul.children[j].className = '';
            }
            this.className = 'big';
        })
    }

    corporation_ul.children[0].className = 'big';
    // 右侧合作媒体部分结束

    //content 部分隐藏的部分鼠标经过会出现并随着鼠标移动
    var icon_1 = document.querySelectorAll('.icon-1');
    var icon_2 = document.querySelectorAll('.icon-2');

    for (var i = 0; i < icon_1.length; i++) {
        icon_1[i].addEventListener('mousemove', function (e) {
            this.children[1].style.display = 'block';
            this.children[1].style.top = e.pageY - this.offsetTop + 15 + 'px';
            this.children[1].style.left = e.pageX - this.offsetLeft + 12 + 'px';
        });
        icon_1[i].addEventListener('mouseout', function () {
            this.children[1].style.display = 'none';

        })
        icon_2[i].addEventListener('mousemove', function (e) {
            this.children[1].style.display = 'block';
            this.children[1].style.top = e.pageY - this.offsetTop + 15 + 'px';
            this.children[1].style.left = e.pageX - this.offsetLeft + 12 + 'px';
        });
        icon_2[i].addEventListener('mouseout', function () {
            this.children[1].style.display = 'none';

        })

    }
})