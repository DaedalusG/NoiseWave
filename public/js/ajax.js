

document.addEventListener('DOMContentLoaded', e => {
    Array.from(document.getElementsByClassName('ajax')).forEach(el => {
        el.addEventListener('click', async event => {
            event.preventDefault();
            res = await fetch(event.target.href);
            html = await res.text();
            console.log(html);
            document.querySelector('#page-specific-content').innerHTML = html;
        })

    })
});