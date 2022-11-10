document.addEventListener("DOMContentLoaded", page => {
    const anchors = [].slice.call(document.querySelectorAll('.header__nav_el_link'));
    const animationTime = 300, framesCount = 20;

    anchors.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();

            let coordY = document.querySelector(item.getAttribute('anchor')).getBoundingClientRect().top + window.pageYOffset - 100;

            let scroller = setInterval(function() {
                let scrollBy = coordY / framesCount;


                window.scrollBy(0, coordY);
                clearInterval(scroller);
                
                // if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                //     window.scrollBy(0, scrollBy);
                // }
                // else {
                //     window.scrollBy(0, coordY);
                //     clearInterval(scroller);
                // }
            });
        }, animationTime / framesCount);
    });


    const jobsLinks = document.querySelectorAll('.third_block_list_el_link');
    const jobsLinksArrows = document.querySelectorAll('.arrow');

    jobsLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            const idx = Number(link.getAttribute('idx'));
            jobsLinksArrows[idx].classList.add('visible');
        });

        link.addEventListener('mouseout', function() {
            const idx = Number(link.getAttribute('idx'));
            jobsLinksArrows[idx].classList.remove('visible');
        });
    })
});