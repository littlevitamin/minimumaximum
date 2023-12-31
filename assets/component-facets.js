
// Range Slider - https://www.cssscript.com/custom-range-slider-input/

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.rangeSlider=t():e.rangeSlider=t()}(this,(()=>{return e={265:function(e){e.exports=(e,t={})=>{const a=e=>!isNaN(e)&&+e+""==e+"",n=(e=0,t=0)=>({min:e,max:t}),i=e=>{[M,F].forEach(e)},r=(e,t,a)=>{if(e)return t;a()},s=(e,t,a="")=>{e.setAttribute(t,a)},l=(e,t)=>{e.removeAttribute(t)},m=(e,t,a,n=!0)=>{e.addEventListener(t,a,n?{passive:!1,capture:!0}:{})},d=(e,t,a,n=!0)=>{e.removeEventListener(t,a,n?{passive:!1,capture:!0}:{})},o=(e,a)=>{t[e]={}.hasOwnProperty.call(t,e)?t[e]:a},u=(e,a)=>t.orientation===H?e:a,b=e=>1===e?Q.max:Q.min,h=()=>{let e=!1;a(t.min)&&a(t.max)||(e=!0),t.min=e?1:+t.min,t.max=e?1:+t.max},p=()=>{t.thumbsDisabled instanceof Array?(1===t.thumbsDisabled.length&&t.thumbsDisabled.push(!1),1!==t.thumbsDisabled.length&&2!==t.thumbsDisabled.length&&(t.thumbsDisabled=[!1,!1])):t.thumbsDisabled=[t.thumbsDisabled,t.thumbsDisabled],t.thumbsDisabled[0]=!!t.thumbsDisabled[0],t.thumbsDisabled[1]=!!t.thumbsDisabled[1]},g=(e,a=!1,i=!0,r=!0)=>{const m=n(le[Q.min].value,le[Q.max].value);e=e||m,le[Q.min].value=e.min,le[Q.max].value=ie||a?e.max:e.min+ae,c(),K.min>K.max&&(Q.min=+!Q.min,Q.max=+!Q.max,l(me[Q.min],V),l(me[Q.max],P),s(me[Q.min],P),s(me[Q.max],V),ie&&(ie=ie===M?F:M),c()),ee=a?K:e;let d=!1;(m.min!==le[Q.min].value||a)&&(d=!0),(m.max!==le[Q.max].value||a)&&(d=!0),d&&(i&&t.onInput&&t.onInput([K.min,K.max],r),$(),x(),f(),w())},c=()=>{i((e=>{K[e]=+le[Q[e]].value}))},x=()=>{i((e=>{me[Q[e]].style[u("top","left")]=`calc(${(K[e]-t.min)/te*100}% + ${(.5-(K[e]-t.min)/te)*u(W,U)[e]}px)`}))},f=()=>{const a=e.getBoundingClientRect(),n=(.5-(K.min-t.min)/te)*u(W,U).min/u(a.bottom-a.top,a.right-a.left),i=(.5-(K.max-t.min)/te)*u(W,U).max/u(a.bottom-a.top,a.right-a.left);se.style[u("top","left")]=100*((K.min-t.min)/te+n)+"%",se.style[u("height","width")]=100*((K.max-t.min)/te-(K.min-t.min)/te-n+i)+"%"},v=()=>{i(((e,a)=>{Z[e]=t.thumbsDisabled[a]?K[e]:t[e]}))},D=()=>{i(((e,a)=>{t.disabled||t.thumbsDisabled[a]?l(me[b(a)],O):s(me[b(a)],O,0)}))},w=()=>{i((e=>{s(me[Q[e]],"aria-valuemin",t.min),s(me[Q[e]],"aria-valuemax",t.max),s(me[Q[e]],"aria-valuenow",K[e]),s(me[Q[e]],"aria-valuetext",K[e])}))},y=()=>{t.disabled?s(e,J):l(e,J)},_=()=>{t.thumbsDisabled.forEach(((e,t)=>{const a=b(t);e?(s(me[a],J),s(me[a],"aria-disabled",!0)):(l(me[a],J),s(me[a],"aria-disabled",!1))}))},S=(e,a=!1)=>{t[e]=a,h(),i((e=>{le[0][e]=t[e],le[1][e]=t[e]})),te=t.max-t.min,g("",!0,!0,!1),v()},E=()=>{t.orientation===H?s(e,Y):l(e,Y),se.style[u("left","top")]="",se.style[u("width","height")]="",me[0].style[u("left","top")]="",me[1].style[u("left","top")]=""},$=()=>{i((e=>{U[e]=q(N(me[Q[e]]).width),W[e]=q(N(me[Q[e]]).height)}))},k=(a,n)=>{const i=e.getBoundingClientRect(),r=n.getBoundingClientRect(),s=(u(r.top-i.top,r.left-i.left)+(a[`client${u("Y","X")}`]-n.getBoundingClientRect()[u("top","left")])-(ie?(.5-(K[ie]-t.min)/te)*u(W,U)[ie]:0))/u(i.bottom-i.top,i.right-i.left)*te+t.min;return s<t.min?t.min:s>t.max?t.max:s},R=(e,t)=>!e.target.classList.contains(t),z=(e,a=!0)=>{let i=!1;if(!t.disabled&&(R(e,"range-slider__thumb")&&R(e,"range-slider__range")||t.rangeSlideDisabled&&R(e,"range-slider__thumb"))&&(i=!0),i&&t.thumbsDisabled[0]&&t.thumbsDisabled[1]&&(i=!1),i){const i=k(e,se),r=B(K.min-i),s=B(K.max-i);if(t.thumbsDisabled[0])i>=K.min&&(g(n(K.min,i),!0,!a),T(e,Q.max,me[Q.max],!a));else if(t.thumbsDisabled[1])i<=K.max&&(g(n(i,K.max),!0,!a),T(e,Q.min,me[Q.min],!a));else{let t=Q.max;r===s?g(n(K.min,i),!0,!a):(g(n(r<s?i:K.min,s<r?i:K.max),!0,!a),t=r<s?Q.min:Q.max),T(e,t,me[t],!a)}a&&z(e,!1)}},C=(e,t)=>{$(),s(t,X),re=k(e,t),ne=!0},T=(e,a,n,i=!0)=>{t.disabled||t.thumbsDisabled[b(a)]||(C(e,n),ie=Q.min===a?M:F,i&&t.onThumbDragStart&&t.onThumbDragStart())},A=e=>{if(ne){const a=k(e,se),i=a-re;let r=K.min,s=K.max;const l=ie?Z.min:t.min,m=ie?Z.max:t.max;ie&&ie!==M||(r=ie?a:ee.min+i),ie&&ie!==F||(s=ie?a:ee.max+i),r>=l&&r<=m&&s>=l&&s<=m?(g({min:r,max:s}),re=a):(r>m&&ie&&(g(n(m,m)),re=a),s<l&&ie&&(g(n(l,l)),re=a),r<l&&(g(n(l,ie?K.max:K.max-K.min+l)),re=a),s>m&&(g(n(ie?K.min:K.min-K.max+m,m)),re=a)),ie||v()}},I=()=>{ne&&(l(me[0],X),l(me[1],X),l(se,X),ne=!1,ie?t.onThumbDragEnd&&t.onThumbDragEnd():t.onRangeDragEnd&&t.onRangeDragEnd())},L=()=>{$(),x(),f()},j=()=>{const e=q(le[0].step);return le[0].step===G?G:0===e||isNaN(e)?1:e},B=Math.abs,q=parseFloat,N=window.getComputedStyle,M="min",F="max",G="any",H="vertical",O="tabindex",P="data-lower",V="data-upper",X="data-active",Y="data-vertical",J="data-disabled",K=n(),Q=n(0,1),U=n(),W=n(),Z=n();let ee=n(),te=0,ae=0,ne=!1,ie=!1,re=0;if(!this.cssInjected){const e=document.createElement("style");e.textContent=".range-slider{touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:pointer;display:block;position:relative;width:100%;height:8px;background:#ddd;border-radius:4px}.range-slider[data-vertical]{height:100%;width:8px}.range-slider[data-disabled]{opacity:.5;cursor:not-allowed}.range-slider .range-slider__thumb{position:absolute;z-index:3;top:50%;width:24px;height:24px;transform:translate(-50%,-50%);border-radius:50%;background:#2196f3}.range-slider .range-slider__thumb:focus-visible{outline:0;box-shadow:0 0 0 6px rgba(33,150,243,.5)}.range-slider[data-vertical] .range-slider__thumb{left:50%}.range-slider .range-slider__thumb[data-disabled]{z-index:2}.range-slider .range-slider__range{position:absolute;z-index:1;transform:translate(0,-50%);top:50%;width:100%;height:100%;background:#51adf6}.range-slider[data-vertical] .range-slider__range{left:50%;transform:translate(-50%,0)}.range-slider input[type=range]{-webkit-appearance:none;pointer-events:none;position:absolute;z-index:2;top:0;left:0;width:0;height:0;background-color:transparent}.range-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}.range-slider input[type=range]::-moz-range-thumb{width:0;height:0;border:0}.range-slider input[type=range]:focus{outline:0}";const t=document.head,a=document.querySelector("head>style,head>link");a?t.insertBefore(e,a):t.appendChild(e),this.cssInjected=!0}o("rangeSlideDisabled",!1),o("thumbsDisabled",[!1,!1]),o("orientation","horizontal"),o("disabled",!1),o("onThumbDragStart",!1),o("onRangeDragStart",!1),o("onThumbDragEnd",!1),o("onRangeDragEnd",!1),o("onInput",!1),o("value",[25,75]),o("step",1),o("min",0),o("max",100),h(),p(),e.innerHTML=`<input type="range" min="${t.min}" max="${t.max}" step="${t.step}" value="${t.value[0]}" disabled><input type="range" min="${t.min}" max="${t.max}" step="${t.step}" value="${t.value[1]}" disabled><div role="slider" class="range-slider__thumb" ${P}></div><div role="slider" class="range-slider__thumb" ${V}></div><div class="range-slider__range"></div>`,e.classList.add("range-slider");const se=e.querySelector(".range-slider__range"),le=e.querySelectorAll("input"),me=e.querySelectorAll(".range-slider__thumb");return te=t.max-t.min,g("",!0,!1),v(),y(),_(),D(),E(),m(e,"pointerdown",(e=>{z(e)})),Array.from(me).forEach(((e,a)=>{m(e,"pointerdown",(t=>{T(t,a,e)})),m(e,"keydown",(e=>{e.which>=37&&e.which<=40&&(e.preventDefault(),((e,a)=>{const n=(37===a||40===a?-1:1)*u(-1,1);if(!t.disabled&&!t.thumbsDisabled[b(e)]){let t=j();t=t===G?1:t;let a=K.min+t*(Q.min===e?n:0),i=K.max+t*(Q.max===e?n:0);a>Z.max&&(a=Z.max),i<Z.min&&(i=Z.min),g({min:a,max:i},!0)}})(a,e.which))}))})),m(se,"pointerdown",(e=>{(e=>{t.disabled||t.rangeSlideDisabled||(C(e,se),ae=K.max-K.min,ie=!1,t.onRangeDragStart&&t.onRangeDragStart())})(e)})),m(document,"pointermove",A),m(document,"pointerup",I),m(window,"resize",L),{min:(e=!1)=>r(!e&&0!==e,t.min,(()=>{S(M,e)})),max:(e=!1)=>r(!e&&0!==e,t.max,(()=>{S(F,e)})),step:(e=!1)=>r(!e,j(),(()=>{le[0].step=e,le[1].step=e,g("",!0,!0,!1)})),value:(e=!1)=>r(!e,[K.min,K.max],(()=>{g(n(e[0],e[1]),!0,!0,!1),v()})),orientation:(e=!1)=>r(!e,t.orientation,(()=>{t.orientation=e,E(),g("",!0,!0,!1)})),disabled:(e=!0)=>{t.disabled=!!e,y()},thumbsDisabled:(e=[!0,!0])=>{t.thumbsDisabled=e,p(),v(),D(),_()},rangeSlideDisabled:(e=!0)=>{t.rangeSlideDisabled=!!e},currentValueIndex:()=>ie?ie===M?0:1:-1,removeGlobalEventListeners:()=>{d(document,"pointermove",A),d(document,"pointerup",I),d(window,"resize",L)}}}}},t={},function a(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}(265);var e,t}));

class FacetFiltersForm extends HTMLElement {
  constructor() {
    super();
    this.onActiveFilterClick = this.onActiveFilterClick.bind(this);
    this.debouncedOnSubmit = debounce((event) => {
      this.onSubmitHandler(event);
    }, 500);

    const facetForm = this.querySelector('form');
    facetForm.addEventListener('input', this.debouncedOnSubmit.bind(this));

  }

  static setListeners() {
    const onHistoryChange = (event) => {
      const searchParams = event.state ? event.state.searchParams : FacetFiltersForm.searchParamsInitial;
      if (searchParams === FacetFiltersForm.searchParamsPrev) return;
      FacetFiltersForm.renderPage(searchParams, null, false);
    }
    window.addEventListener('popstate', onHistoryChange);
  }

  static toggleActiveFacets(disable = true) {
    document.querySelectorAll('.js-facet-remove').forEach((element) => {
      element.classList.toggle('disabled', disable);
    });
  }

  static renderPage(searchParams, event, updateURLHash = true) {
    FacetFiltersForm.searchParamsPrev = searchParams;
    const sections = FacetFiltersForm.getSections();
    document.getElementById('main-collection-product-grid').classList.add('loading');
    sections.forEach((section) => {
      const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
      const filterDataUrl = element => element.url === url;
      FacetFiltersForm.filterData.some(filterDataUrl) ?
        FacetFiltersForm.renderSectionFromCache(filterDataUrl, event) :
        FacetFiltersForm.renderSectionFromFetch(url, event);
    });
    if (updateURLHash) FacetFiltersForm.updateURLHash(searchParams);
  }

  static renderSectionFromFetch(url, event) {
    fetch(url)
      .then(response => response.text())
      .then((responseText) => {
        const html = responseText;
        FacetFiltersForm.filterData = [...FacetFiltersForm.filterData, { html, url }];
        FacetFiltersForm.renderFilters(html, event);
        FacetFiltersForm.renderProductGrid(html);
        FacetFiltersForm.renderProductCount(html);
      });
  }

  static renderSectionFromCache(filterDataUrl, event) {
    const html = FacetFiltersForm.filterData.find(filterDataUrl).html;
    FacetFiltersForm.renderFilters(html, event);
    FacetFiltersForm.renderProductGrid(html);
    FacetFiltersForm.renderProductCount(html);
  }

  static renderProductGrid(html) {
    const innerHTML = new DOMParser()
      .parseFromString(html, 'text/html')
      .getElementById('CollectionProductGrid').innerHTML;
    document.getElementById('CollectionProductGrid').innerHTML = innerHTML;
    document.getElementById('CollectionProductGrid').querySelectorAll('template').forEach(elm=>{
      elm.closest('form')?.append(elm.content.cloneNode(true));
    })
  }

  static renderProductCount(html) {
    const countEl = new DOMParser().parseFromString(html, 'text/html').getElementById('CollectionProductCount');
    if ( countEl ) {
      document.querySelectorAll('#CollectionProductCount').forEach(elm=>{
        elm.innerHTML = countEl.innerHTML;
      });
    }
  }

  static renderFilters(html, event) {
    const parsedHTML = new DOMParser().parseFromString(html, 'text/html');


    
    const facetDetailsElements = parsedHTML.querySelectorAll('#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter');
      
    const matchesIndex = (element) => {
      const jsFilter = event ? event.target.closest('.js-filter') : undefined;
      return jsFilter ? ( element.dataset.index === jsFilter.dataset.index && ! element.hasAttribute('data-and-operator') ) : false;
    };
    const facetsToRender = Array.from(facetDetailsElements).filter((element) => !matchesIndex(element));
    const countsToRender = Array.from(facetDetailsElements).find(matchesIndex);

    facetsToRender.forEach((element) => {
      document.querySelector(`.js-filter[data-index="${element.dataset.index}"]`).innerHTML = element.innerHTML;
    });

    FacetFiltersForm.renderActiveFacets(parsedHTML);

    if (countsToRender) FacetFiltersForm.renderCounts(countsToRender, event.target.closest('.js-filter'));
  }

  static renderActiveFacets(html) {
    const activeFacetElementSelectors = ['.active-facets-mobile', '.active-facets-desktop'];
    activeFacetElementSelectors.forEach((selector) => {
      const activeFacetsElement = html.querySelector(selector);
      if (!activeFacetsElement) return;
      if ( document.querySelector(selector) ) {
        document.querySelector(selector).innerHTML = activeFacetsElement.innerHTML;
      }
    })

    FacetFiltersForm.toggleActiveFacets(false);
  }

  static renderCounts(source, target) {
    const countElementSelectors = ['.facets__selected'];
    countElementSelectors.forEach((selector) => {
      const targetElement = target.querySelector(selector);
      const sourceElement = source.querySelector(selector);
      if (sourceElement && targetElement) {
        target.querySelector(selector).outerHTML = source.querySelector(selector).outerHTML;
      }
    });
  }


  static updateURLHash(searchParams) {
    history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
  }

  static getSections() {
    return [
      {
        id: 'main-collection-product-grid',
        section: document.getElementById('main-collection-product-grid').dataset.id,
      }
    ]
  }
  
  createSearchParams(form) {
    const formData = new FormData(form);
    return new URLSearchParams(formData).toString();
  }

  onSubmitForm(searchParams, event) {
    FacetFiltersForm.renderPage(searchParams, event);
  }


  createSearchParams(form) {
    const formData = new FormData(form);
    return new URLSearchParams(formData).toString();
  }

  onSubmitForm(searchParams, event) {
    FacetFiltersForm.renderPage(searchParams, event);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const sortFilterForms = document.querySelectorAll('facet-filters-form form');
    const forms = [];
    const isMobile = event.target.closest('form').id === 'FacetFiltersFormMobile';

    sortFilterForms.forEach((form) => {
      if (!isMobile) {
        if (form.id === 'FacetSortForm' || form.id === 'FacetFiltersForm' || form.id === 'FacetSortDrawerForm') {
          const noJsElements = document.querySelectorAll('.no-js-list');
          noJsElements.forEach((el) => el.remove());
          forms.push(this.createSearchParams(form));
        }
      } else if (form.id === 'FacetFiltersFormMobile') {
        forms.push(this.createSearchParams(form));
      }
    });
    this.onSubmitForm(forms.join('&'), event);
  }

  onActiveFilterClick(event) {
    event.preventDefault();
    FacetFiltersForm.toggleActiveFacets();
    const url = event.currentTarget.href.indexOf('?') == -1 ? '' : event.currentTarget.href.slice(event.currentTarget.href.indexOf('?') + 1);
    FacetFiltersForm.renderPage(url);
  }

}

FacetFiltersForm.filterData = [];
FacetFiltersForm.searchParamsInitial = window.location.search.slice(1);
FacetFiltersForm.searchParamsPrev = window.location.search.slice(1);
customElements.define('facet-filters-form', FacetFiltersForm);
FacetFiltersForm.setListeners();

class FacetRemove extends HTMLElement {
  constructor() {
    super();
    const facetLink = this.querySelector('a');
    facetLink.setAttribute('role', 'button');
    facetLink.addEventListener('click', this.closeFilter.bind(this));
    facetLink.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.code.toUpperCase() === 'SPACE') this.closeFilter(event);
    });
  }
  closeFilter(event) {
    event.preventDefault();
    const form = this.closest('facet-filters-form') || document.querySelector('facet-filters-form');
    form.onActiveFilterClick(event);
  }
}

customElements.define('facet-remove', FacetRemove);

class PriceRange extends HTMLElement {

  constructor() {
    super();
    this.querySelectorAll('input')
      .forEach(element => {
        element.addEventListener('change', this.onRangeChange.bind(this));
        element.addEventListener('input', this.maxCheck.bind(this));
      });

    this.setMinAndMaxValues();
    
    //const usesComma = Boolean(this.getAttribute('data-uses-comma'));
    const inputMin = this.querySelector('input[name="filter.v.price.gte"]');
    const inputMax = this.querySelector('input[name="filter.v.price.lte"]');
    let inputTimer = null;

    if ( this.parentElement.querySelector('[data-js-price-range-slider]') ) {
      setTimeout(()=>{
        const rangeSliderElm = this.parentElement.querySelector('[data-js-price-range-slider]');
        rangeSlider(rangeSliderElm, {
          min: Number(inputMin.getAttribute('min')),
          max: Number(inputMax.getAttribute('max')),
          value: [inputMin.value || Number(inputMin.getAttribute('placeholder')), inputMax.value || Number(inputMax.getAttribute('placeholder'))],
          onInput: values => {
            inputMin.value = `${values[0]}`;
            inputMax.value = `${values[1]}`;
            clearTimeout(inputTimer);
            inputTimer = setTimeout(()=>{
              document.querySelector(`facet-filters-form[data-location="${rangeSliderElm.id.includes('desktop') ? 'desktop' : 'mobile'}"]`).onSubmitHandler({
                target: inputMin,
                preventDefault: ()=>{return;}
              });
              document.querySelector(`facet-filters-form[data-location="${rangeSliderElm.id.includes('desktop') ? 'desktop' : 'mobile'}"]`).onSubmitHandler({
                target: inputMax,
                preventDefault: ()=>{return;}
              });
              this.onRangeChange({
                currentTarget: inputMin
              });
              this.onRangeChange({
                currentTarget: inputMax
              });
            }, 500);
          }
        }); 
      }, 500);
    }

  }

  onRangeChange(event) {
    this.adjustToValidValues(event.currentTarget);
    this.setMinAndMaxValues();
  }

  setMinAndMaxValues() {
    const inputs = this.querySelectorAll('input');
    const minInput = inputs[0];
    const maxInput = inputs[1];
    if (maxInput.value) minInput.setAttribute('max', maxInput.value);
    if (minInput.value) maxInput.setAttribute('min', minInput.value);
    if (minInput.value === '') maxInput.setAttribute('min', 0);
    if (maxInput.value === '') minInput.setAttribute('max', maxInput.getAttribute('max'));
  }

  adjustToValidValues(input) {
    const value = Number(input.value);
    const min = Number(input.getAttribute('min'));
    const max = Number(input.getAttribute('max'));

    if (value < min) input.value = min;
    if (value > max) input.value = max;
  }

  maxCheck(object) {
    let max = parseInt(object.target.max);
    let value = parseInt(object.target.value);

    if (value > max) {
      object.target.value = max
    }
  } 
}

customElements.define('price-range', PriceRange);