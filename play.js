(function () {
    window.runFnaf = function (arg) {
        if (arg === '1') {
            setHtml("fnaf 1");
        } else if (arg === '2') {
            setHtml("fnaf 2");
        } else if (arg === '3') {
            setHtml("fnaf 3");
        } else if (arg === '4') {
            setHtml("fnaf 4");
        } else if (arg === 'sl') {
            setHtml("fnaf sl");
        } else if (arg === 'world') {
            setHtml("fnaf world");
        } else if (arg === 'ps') {
            setHtml("fnaf ps");
        } else if (arg === 'ucn') {
            setHtml("fnaf ucn");
        }
    };

    function setHtml(link) {
        try {
            fetch(link + "?t=" + Date.now()).then(response => response.text()).then(html => {
                document.documentElement.innerHTML = html;
                document.documentElement.querySelectorAll('script').forEach(oldScript => {
                    const newScript = document.createElement('script');
                    if (oldScript.src) {
                        newScript.src = oldScript.src;
                    } else {
                        newScript.textContent = oldScript.textContent;
                    }
                    document.body.appendChild(newScript);
                });
            });
        } catch (error) {
            console.error('error:', error);
        }
    }
})();