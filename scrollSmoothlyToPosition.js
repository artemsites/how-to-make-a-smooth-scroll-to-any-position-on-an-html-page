/**
 * @title Scroll smoothly to mode | Плавная прокрутка к положению
 * @author1 https://stackoverflow.com/questions/51689653/how-to-smoothly-scroll-to-an-element-in-pure-javascript#answer-51689657
 * @author2  artemsites.ru
 *
 * @version 2.1 - 18.09.2023
 * @gist    https://gist.github.com/artemijeka/860cfcd079b1f42cace732c31b5e3a29
 *
 * @param {Node}   params.el - node
 * @param {String} params.selector - '.box' 
 * @param {String} params.mode - 'bottom' 
 * @param {Number} params.y - скрол к определённому пикселю - перебивает скрол к селектору или элементу
 * @param {Number|String } params.offsetTop - добавочный скрол, 
 *   если установлено число то это значение в px
 *   если указывается строка то можно применить rem: "5rem" при условии что у :root или html установлен font-size
 **/
export function scrollSmoothlyToPosition(params) {
  params.selector = params.selector || false;
  params.offsetTop = params.offsetTop || 0;

  let el = null;

  let posOfTop;
  if (params.selector) {
    el = document.querySelector(params.selector);
  }
  else if (params.el) {
    el = params.el
  }

  if (typeof params.y === 'number') {
    posOfTop = Number(params.y);
    console.log('posOfTop')
    console.log(posOfTop)
  }
  else if (!params.mode || params.mode === 'top') {
    posOfTop = el.getBoundingClientRect().top;
  }
  else if (params.mode === 'bottom') {
    posOfTop = el.getBoundingClientRect().bottom - window.innerHeight;
  }
    
  // Если offsetTop задан в "rem"
  if (typeof params.offsetTop === 'string' && params.offsetTop.substring('rem')) {
    const elRoot = document.querySelector(':root');
    let fs = getComputedStyle(elRoot).getPropertyValue('font-size'); 
    let fsPx = fs.slice(0,-2)// delete 'px'
    const countRem = params.offsetTop.slice(0,-3)
    params.offsetTop = fsPx * countRem
  }

  posOfTop = Number(posOfTop - params.offsetTop);

  console.log('posOfTop')
  console.log(posOfTop)

  // scroll, scrollBy
  window.scrollTo({
    top: posOfTop,
    left: 0,
    behavior: "smooth",
  });

}