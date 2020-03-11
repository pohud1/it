var yandex = {
    "v1": 51634862,
    "v2": 51635573,
    "v3": 51635927,
    "v4": 51635987,
    "v5": 51636029,
    "v6": 51636053,
    "v7": 51636080,
    "v8": 51636107,
    "v9": 51636125,
    "v10": 53630629,
    "v11": 51634904,
    "v12": 51634949,
    "v13": 54157864,
    "v14": 51634982,
    "v15": 51635135,
    "v16": 51635186,
    "v17": 51635492,
    "v18": 51635522,
    "v19": 51635555,
    "v20": 51635714,
    "v20n": 56727157,
    "v21": 51635780,
    "v22": 51635792,
    "v10": 53630629,
    "v23": 53630653,
    "v24": 53630704,
    "v25": 53630731,
    "v26": 53630803,
    "v27": 53630827,
    "v28": 53630842,
    "v29": 54157870,
    "v30": 54157879,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('it', '').replace('39', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('it', '')
        .replace('39', '')
        .replace('confirm.html', '');

}
(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(yandex[site], "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});