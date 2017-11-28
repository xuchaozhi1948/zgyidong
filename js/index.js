/*
* @Author: Administrator
* @Date:   2017-11-12 14:28:03
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-15 19:58:06
*/
window.onload = function () {
    let zYdewm = document.getElementsByClassName("tb-sjyd")[0];
    let Ydtu = document.getElementsByClassName("yd-ewm")[0];
    zYdewm.onmouseover = function () {
        Ydtu.style.display = "block";
    }
    zYdewm.onmouseout = function () {
        Ydtu.style.display = "none";
    }


// ===========================================================
    let dnav = document.getElementsByClassName("daohang")[0];
    let dnavli = document.getElementsByClassName("daohang-xbox2");
    let dnavxl = document.getElementsByClassName("nav-xl");

    for (let i = 0; i < dnavli.length; i++) {
        dnavli[i].onmouseover = function () {
            for (let j = 0; j < dnavli.length; j++) {
                dnavxl[j].style.display = "none";
            }
            dnavxl[i].style.display = "block";
        }
        dnavli[i].onmouseout = function () {
            for (let j = 0; j < dnavli.length; j++) {
                dnavxl[j].style.display = "none";
            }
            // dnavxl[i].style.display="block";
        }
        dnavxl[i].onmouseover = function () {
            dnavxl[i].style.display = "block";
        }
        dnavxl[i].onmouseout = function () {
            dnavxl[i].style.display = "none";
        }
    }

// ========================================================
    let banner = document.getElementsByClassName("banner-zhong")[0];
    let banli = banner.getElementsByClassName("ban-zhong");
    let yuan = document.getElementsByClassName("banner-dian")[0];
    let diand = yuan.getElementsByClassName("dian-dg");
    let widths = banner.offsetWidth;
    let zbss = document.getElementsByClassName("banner-zbs")[0];
    let ybss = document.getElementsByClassName("banner-ybs")[0];

    ybss.onclick = function () {
        if (flag) {
            banfn();
            flag = false;
        }
    }
    zbss.onclick = function () {
        if (flag) {
            banfn1();
            flag = false;
        }
    }
    let flag = true;
    let bnew = bnex = 0;
    let time = setInterval(banfn, 3000);

    banner.onmouseover = function () {
        clearInterval(time);
    }
    banner.onmouseout = function () {
        time = setInterval(banfn, 3000);
    }

    function banfn() {
        bnex++;
        if (bnex == banli.length) {
            bnex = 0;
        }
        banli[bnex].style.left = `${widths}px`;
        animate(banli[bnew], {left: -widths}, function () {
            for (let i = 0; i < banli.length; i++) {
                diand[i].style.background = "#d3afbd";
            }
            diand[bnex].style.background = "#e80375";
            flag = true;
        });
        animate(banli[bnex], {left: "0"});
        bnew = bnex;
    }

    function banfn1() {
        bnex--;
        if (bnex == -1) {
            bnex = banli.length - 1;
        }
        banli[bnex].style.left = "0";
        animate(banli[bnew], {left: widths}, function () {
            for (let i = 0; i < banli.length; i++) {
                diand[i].style.background = "#d3afbd";
            }
            diand[bnex].style.background = "#e80375";
            flag = true;
        });
        animate(banli[bnex], {left: "0"});
        bnew = bnex;
    }

    for (let i = 0; i < banli.length; i++) {
        diand[i].onclick = function () {
            if (i == bnew) {
                return;
            }
            else if (i < bnew) {
                animate(banli[bnew], {left: widths});
                animate(banli[i], {left: 0});
                for (let j = 0; j < banli.length; j++) {
                    diand[j].style.background = "#d3afbd";
                }
                diand[i].style.background = "#e80375";
            }
            else if (i > bnew) {
                animate(banli[bnew], {left: -widths});
                animate(banli[i], {left: 0});
                for (let j = 0; j < banli.length; j++) {
                    diand[j].style.background = "#d3afbd";
                }
                diand[i].style.background = "#e80375";
            }
            bnex = bnew = i;
        }
    }


// ========================================================
    let btnL = document.getElementsByClassName("gd-zbs")[0];
    let btnR = document.getElementsByClassName("gd-ybs")[0];

    //获取图的框
    let kuaN = document.getElementsByClassName("gundong-bbb")[0];

    //获取图的数量
    let tusu = kuaN.childElementCount;
    //获取图的总宽度
    let Zkuan = kuaN.style.width = `${tusu * 300}px`;

    let ti = setInterval(fff, 3000);
    kuaN.onmouseover = function () {
        clearInterval(ti);
    }
    kuaN.onmouseout = function () {
        ti = setInterval(fff, 3000);
    }

    let num = 0;

    //点击
    function fff() {
        num++;
        if (num == 5) {
            num = 0;
        }
        kuaN.style.transform = `translateX(${-300 * num}px)`;
    }


    btnR.onclick = function () {
        num++;
        if (num == 5) {
            num = 0;
        }
        kuaN.style.transform = `translateX(${-300 * num}px)`;
    }
    btnL.onclick = function () {
        num--;
        if (num == -1) {
            num = 4;
        }
        kuaN.style.transform = `translateX(${-300 * num}px)`;
    }


}