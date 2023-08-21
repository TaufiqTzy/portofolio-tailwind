let section = document.querySelectorAll('section');
    let mybutton = document.getElementById("myBtn");

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;

            if (top >= offset && top < offset + height) {
                sec.classList.add('show-animate');
            } else {
                sec.classList.remove('show-animate');
            }
        });
    }
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }