window.onload = function () {
  // const header1 = document.querySelector('h1');
  const header = this.document.getElementById('header');

  header.innerHTML = '<i>i 태그입니다 </i><br/>.';
  header.innerHTML += '&lt;&lt;i 태그입니다. &lt;&lt;';
  header.textContent = '<i>i 태그입니다.';
};
