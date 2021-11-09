window.addEventListener('load', function () {

    let faq = document.querySelector('.faq');

    faq.addEventListener('click', function (e) {
        if (e.target.classList.contains('ask')) {
            toggleItem(e.target);
        }
    });

    function toggleItem(ask) {
        let answer = ask.nextElementSibling;

        if (answer.classList.contains('visible')) {
            let animation = answer.animate([
                {maxHeight: 2000},
                {maxHeight: 0}
            ], {
                duration: 1500,
                easing: 'ease-out',
                fill: "backwards",
            });

            animation.addEventListener('finish', function () {
                answer.classList.remove('visible');
            });
        } else {
            answer.classList.add('visible');
            answer.animate([
                {background: 'rgba(255,255,0,0.75)', maxHeight: 0},
                {background: 'rgba(222,222,222,0.37)', maxHeight: 2000}
            ], {
                duration: 1500,
                easing: 'ease-in',
                fill: "forwards",
                delay: 0,
            });
        }
    }

});
