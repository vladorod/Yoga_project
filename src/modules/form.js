function form() {

    let form1 = document.querySelector('.main-form'),
        form2 = document.querySelector('#form'),
        form1AnimEL = document.querySelector('.popup'),
        form2AnimEl = document.querySelector('.contact');


    sendForm(form1, "server.php");
    sendForm(form2, "server.php", form2AnimEl);


    function sendForm(form, url = 'http://127.0.0.1:3000/call', AnimationEl) {
        let massage = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжимся!',
            failure: 'Что-то пошло не так...'
        };

        let input = form.querySelectorAll('input'),
            statusMassage = document.createElement('div');
        statusMassage.classList.add('status');


        form.addEventListener('submit', (e) => {

            e.preventDefault();
            form.appendChild(statusMassage);

            console.log(form.name);

            let fromData = new FormData(form);

            let obj = {};

            fromData.forEach((value, key) => {
                obj[key] = value;
            });

            
            let json = JSON.stringify(obj);
            

            postFrom(json, url)
                .then(() => {
                    statusMassage.innerHTML = massage.loading;
                    statusMassage.style.cssText = "color: white;";
                })
                .then(() => {
                    statusMassage.innerHTML = massage.success;
                    statusMassage.style.cssText = "color: white;";
                })
                .catch(() => {
                    statusMassage.innerHTML = massage.failure;
                    statusMassage.style.cssText = "color: white;";
                    animateCSS(AnimationEl, 'shake');
                })
                .then(clearInputAll)
        });
    };

    function postFrom(data, url) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            req.open("POST", url);
            req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            console.log(req.readyState + ' ' + req.status)
            req.onreadystatechange = () => {
                console.log(req.readyState + ' ' + req.status)
                if (req.readyState < 4) {
                    resolve();
                } else if (req.readyState === 4) {
                    if (req.status == 200 && req.status < 5) {
                        resolve();
                    } else reject();
                } else reject();
            };
            req.send(data)

        });
    }

    //end 

    function clearInputAll() {
        let input = document.querySelectorAll('input')
        for (let i = 0; i < input.length; i++) {
            input[i].value = "";
        }
    }

    function animateCSS(element, animationName, callback) {
        let node = element;
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }


}


module.export = form();