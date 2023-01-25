const url = "ftp://devbg.org/forum/index.php";

const regexp = /^(https?|ftp):\/\/([^/]+)\/([^/]+\/?)+/;

console.log(url.match(regexp));



