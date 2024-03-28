$(function () {
    $('.js-scroll').click(function () {
        var speed = 1000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 80;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});
$(function () {
    $("#js-hum").click(function () {
        $("body").toggleClass("is-open");
    });
    $("#js-mask").click(function () {
        $("body").toggleClass("is-open");
    });
});

$(function () {
    href = location.href;
    var links = jQuery(".l-header__item > a");

    links.each(function (index, value) {
        if (value.href == href) {
            jQuery(".l-header__item").children("a").eq(index).addClass("l-header__link--current");
        }
    });
});

$(function () {
	var appBtn = $('.js-fade');
	appBtn.hide();
	//スクロールが100より下に達したら表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			appBtn.fadeIn();
		} else {
			appBtn.fadeOut();
		}
	});
});

(function (d) {
    var config = {
        kitId: 'hco8nji',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);

(function (d) {
    var config = {
        kitId: 'wdf5kmh',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);

window.addEventListener("scroll", function () {
    // ヘッダーを変数の中に格納する
    const header = document.querySelector(".l-header");
    // 100px以上スクロールしたらヘッダーに「is-header」クラスをつける
    header.classList.toggle("is-header", window.scrollY > 1);
});