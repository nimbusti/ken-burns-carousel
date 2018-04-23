/**
 * Specifies the direction of the ken burns effect.
 */

declare global {
  interface EventInit {
    composed: boolean;
  }
}

export const enum Direction {
  Normal = "normal",
  Reverse = "reverse",
  Random = "random"
}

/**
 * All available ken burns CSS animations.
 */
export const animationNames = [
  "ken-burns-bottom-right",
  "ken-burns-top-left",
  "ken-burns-bottom-left",
  "ken-burns-top-right",
  "ken-burns-middle-left",
  "ken-burns-middle-right",
  "ken-burns-top-middle",
  "ken-burns-bottom-middle",
  "ken-burns-center"
];

const enum Attributes {
  AnimationDirection = "animation-direction",
  AnimationNames = "animation-names",
  FadeDuration = "fade-duration",
  Images = "images",
  ImagesFilters = "images-filters",
  SlideDuration = "slide-duration"
}

const template = document.createElement("template") as HTMLTemplateElement;
template.innerHTML = `
<style>

    .filter-1977{-webkit-filter:sepia(.5) hue-rotate(-30deg) saturate(1.4);filter:sepia(.5) hue-rotate(-30deg) saturate(1.4)}.filter-aden{-webkit-filter:sepia(.2) brightness(1.15) saturate(1.4);filter:sepia(.2) brightness(1.15) saturate(1.4)}.filter-aden::before{background:rgba(125,105,24,.1);content:"";mix-blend-mode:multiply}.filter-amaro{-webkit-filter:sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3);filter:sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3)}.filter-amaro::before{background:rgba(125,105,24,.2);content:"";mix-blend-mode:overlay}.filter-ashby{-webkit-filter:sepia(.5) contrast(1.2) saturate(1.8);filter:sepia(.5) contrast(1.2) saturate(1.8)}.filter-ashby::before{background:rgba(125,105,24,.35);content:"";mix-blend-mode:lighten}.filter-brannan{-webkit-filter:sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg);filter:sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg)}.filter-brooklyn{-webkit-filter:sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);filter:sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg)}.filter-brooklyn::before{background:rgba(127,187,227,.2);content:"";mix-blend-mode:overlay}.filter-charmes{-webkit-filter:sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);filter:sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg)}.filter-charmes::before{background:rgba(125,105,24,.25);content:"";mix-blend-mode:darken}.filter-clarendon{-webkit-filter:sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);filter:sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg)}.filter-clarendon::before{background:rgba(127,187,227,.4);content:"";mix-blend-mode:overlay}.filter-crema{-webkit-filter:sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg);filter:sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg)}.filter-crema::before{background:rgba(125,105,24,.2);content:"";mix-blend-mode:multiply}.filter-dogpatch{-webkit-filter:sepia(.35) saturate(1.1) contrast(1.5);filter:sepia(.35) saturate(1.1) contrast(1.5)}.filter-earlybird{-webkit-filter:sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);filter:sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg)}.filter-earlybird::before{background:radial-gradient(circle closest-corner,transparent 0,rgba(125,105,24,.2) 100%);background:-o-radial-gradient(circle closest-corner,transparent 0,rgba(125,105,24,.2) 100%);background:-moz-radial-gradient(circle closest-corner,transparent 0,rgba(125,105,24,.2) 100%);background:-webkit-radial-gradient(circle closest-corner,transparent 0,rgba(125,105,24,.2) 100%);content:"";mix-blend-mode:multiply}.filter-gingham{-webkit-filter:contrast(1.1) brightness(1.1);filter:contrast(1.1) brightness(1.1)}.filter-gingham::before{background:#e6e6e6;content:"";mix-blend-mode:soft-light}.filter-ginza{-webkit-filter:sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg);filter:sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg)}.filter-ginza::before{background:rgba(125,105,24,.15);content:"";mix-blend-mode:darken}.filter-hefe{-webkit-filter:sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg);filter:sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg)}.filter-hefe::before{background:radial-gradient(circle closest-corner,transparent 0,rgba(0,0,0,.25) 100%);background:-o-radial-gradient(circle closest-corner,transparent 0,rgba(0,0,0,.25) 100%);background:-moz-radial-gradient(circle closest-corner,transparent 0,rgba(0,0,0,.25) 100%);background:-webkit-radial-gradient(circle closest-corner,transparent 0,rgba(0,0,0,.25) 100%);content:"";mix-blend-mode:multiply}.filter-helena{-webkit-filter:sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35);filter:sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35)}.filter-helena::before{background:rgba(158,175,30,.25);content:"";mix-blend-mode:overlay}.filter-hudson{-webkit-filter:sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg);filter:sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg)}.filter-hudson::before{background:radial-gradient(circle closest-corner,transparent 25%,rgba(25,62,167,.25) 100%);background:-o-radial-gradient(circle closest-corner,transparent 25%,rgba(25,62,167,.25) 100%);background:-moz-radial-gradient(circle closest-corner,transparent 25%,rgba(25,62,167,.25) 100%);background:-webkit-radial-gradient(circle closest-corner,transparent 25%,rgba(25,62,167,.25) 100%);content:"";mix-blend-mode:multiply}.filter-inkwell{-webkit-filter:brightness(1.25) contrast(.85) grayscale(1);filter:brightness(1.25) contrast(.85) grayscale(1)}.filter-juno{-webkit-filter:sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8);filter:sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8)}.filter-juno::before{background:rgba(127,187,227,.2);content:"";mix-blend-mode:overlay}.filter-kelvin{-webkit-filter:sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);filter:sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg)}.filter-kelvin::before{background:radial-gradient(circle closest-corner,rgba(128,78,15,.25) 0,rgba(128,78,15,.5) 100%);background:-o-radial-gradient(circle closest-corner,rgba(128,78,15,.25) 0,rgba(128,78,15,.5) 100%);background:-moz-radial-gradient(circle closest-corner,rgba(128,78,15,.25) 0,rgba(128,78,15,.5) 100%);background:-webkit-radial-gradient(circle closest-corner,rgba(128,78,15,.25) 0,rgba(128,78,15,.5) 100%);content:"";mix-blend-mode:overlay}.filter-lark{-webkit-filter:sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25);filter:sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25)}.filter-lofi{-webkit-filter:saturate(1.1) contrast(1.5);filter:saturate(1.1) contrast(1.5)}.filter-ludwig{-webkit-filter:sepia(.25) contrast(1.05) brightness(1.05) saturate(2);filter:sepia(.25) contrast(1.05) brightness(1.05) saturate(2)}.filter-ludwig::before{background:rgba(125,105,24,.1);content:"";mix-blend-mode:overlay}.filter-maven{-webkit-filter:sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75);filter:sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75)}.filter-maven::before{background:rgba(158,175,30,.25);content:"";mix-blend-mode:darken}.filter-mayfair{-webkit-filter:contrast(1.1) brightness(1.15) saturate(1.1);filter:contrast(1.1) brightness(1.15) saturate(1.1)}.filter-mayfair::before{background:radial-gradient(circle closest-corner,transparent 0,rgba(175,105,24,.4) 100%);background:-o-radial-gradient(circle closest-corner,transparent 0,rgba(175,105,24,.4) 100%);background:-moz-radial-gradient(circle closest-corner,transparent 0,rgba(175,105,24,.4) 100%);background:-webkit-radial-gradient(circle closest-corner,transparent 0,rgba(175,105,24,.4) 100%);content:"";mix-blend-mode:multiply}.filter-moon{-webkit-filter:brightness(1.4) contrast(.95) saturate(0) sepia(.35);filter:brightness(1.4) contrast(.95) saturate(0) sepia(.35)}.filter-nashville{-webkit-filter:sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);filter:sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg)}.filter-nashville::before{background:radial-gradient(circle closest-corner,rgba(128,78,15,.5) 0,rgba(128,78,15,.65) 100%);background:-o-radial-gradient(circle closest-corner,rgba(128,78,15,.5) 0,rgba(128,78,15,.65) 100%);background:-moz-radial-gradient(circle closest-corner,rgba(128,78,15,.5) 0,rgba(128,78,15,.65) 100%);background:-webkit-radial-gradient(circle closest-corner,rgba(128,78,15,.5) 0,rgba(128,78,15,.65) 100%);content:"";mix-blend-mode:screen}.filter-perpetua{-webkit-filter:contrast(1.1) brightness(1.25) saturate(1.1);filter:contrast(1.1) brightness(1.25) saturate(1.1)}.filter-perpetua::before{background:linear-gradient(to bottom,rgba(0,91,154,.25),rgba(230,193,61,.25));background:-o-linear-gradient(top,rgba(0,91,154,.25),rgba(230,193,61,.25));background:-moz-linear-gradient(top,rgba(0,91,154,.25),rgba(230,193,61,.25));background:-webkit-linear-gradient(top,rgba(0,91,154,.25),rgba(230,193,61,.25));background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,91,154,.25)),to(rgba(230,193,61,.25)));content:"";mix-blend-mode:multiply}.filter-poprocket{-webkit-filter:sepia(.15) brightness(1.2);filter:sepia(.15) brightness(1.2)}.filter-poprocket::before{background:radial-gradient(circle closest-corner,rgba(206,39,70,.75) 40%,#000 80%);background:-o-radial-gradient(circle closest-corner,rgba(206,39,70,.75) 40%,#000 80%);background:-moz-radial-gradient(circle closest-corner,rgba(206,39,70,.75) 40%,#000 80%);background:-webkit-radial-gradient(circle closest-corner,rgba(206,39,70,.75) 40%,#000 80%);content:"";mix-blend-mode:screen}.filter-reyes{-webkit-filter:sepia(.75) contrast(.75) brightness(1.25) saturate(1.4);filter:sepia(.75) contrast(.75) brightness(1.25) saturate(1.4)}.filter-rise{-webkit-filter:sepia(.25) contrast(1.25) brightness(1.2) saturate(.9);filter:sepia(.25) contrast(1.25) brightness(1.2) saturate(.9)}.filter-rise::before{background:radial-gradient(circle closest-corner,transparent 0,rgba(230,193,61,.25) 100%);background:-o-radial-gradient(circle closest-corner,transparent 0,rgba(230,193,61,.25) 100%);background:-moz-radial-gradient(circle closest-corner,transparent 0,rgba(230,193,61,.25) 100%);background:-webkit-radial-gradient(circle closest-corner,transparent 0,rgba(230,193,61,.25) 100%);content:"";mix-blend-mode:lighten}.filter-sierra{-webkit-filter:sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);filter:sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg)}.filter-sierra::before{background:radial-gradient(circle closest-corner,rgba(128,78,15,.5) 0,rgba(0,0,0,.65) 100%);background:-o-radial-gradient(circle closest-corner,rgba(128,78,15,.5) 0,rgba(0,0,0,.65) 100%);background:-moz-radial-gradient(circle closest-corner,rgba(128,78,15,.5) 0,rgba(0,0,0,.65) 100%);background:-webkit-radial-gradient(circle closest-corner,rgba(128,78,15,.5) 0,rgba(0,0,0,.65) 100%);content:"";mix-blend-mode:screen}.filter-skyline{-webkit-filter:sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2);filter:sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2)}.filter-slumber{-webkit-filter:sepia(.35) contrast(1.25) saturate(1.25);filter:sepia(.35) contrast(1.25) saturate(1.25)}.filter-slumber::before{background:rgba(125,105,24,.2);content:"";mix-blend-mode:darken}.filter-stinson{-webkit-filter:sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25);filter:sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25)}.filter-stinson::before{background:rgba(125,105,24,.45);content:"";mix-blend-mode:lighten}.filter-sutro{-webkit-filter:sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg);filter:sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg)}.filter-sutro::before{background:radial-gradient(circle closest-corner,transparent 50%,rgba(0,0,0,.5) 90%);background:-o-radial-gradient(circle closest-corner,transparent 50%,rgba(0,0,0,.5) 90%);background:-moz-radial-gradient(circle closest-corner,transparent 50%,rgba(0,0,0,.5) 90%);background:-webkit-radial-gradient(circle closest-corner,transparent 50%,rgba(0,0,0,.5) 90%);content:"";mix-blend-mode:darken}.filter-toaster{-webkit-filter:sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg);filter:sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg)}.filter-toaster::before{background:radial-gradient(circle,#804e0f,rgba(0,0,0,.25));background:-o-radial-gradient(circle,#804e0f,rgba(0,0,0,.25));background:-moz-radial-gradient(circle,#804e0f,rgba(0,0,0,.25));background:-webkit-radial-gradient(circle,#804e0f,rgba(0,0,0,.25));content:"";mix-blend-mode:screen}.filter-valencia{-webkit-filter:sepia(.25) contrast(1.1) brightness(1.1);filter:sepia(.25) contrast(1.1) brightness(1.1)}.filter-valencia::before{background:rgba(230,193,61,.1);content:"";mix-blend-mode:lighten}.filter-vesper{-webkit-filter:sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3);filter:sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3)}.filter-vesper::before{background:rgba(125,105,24,.25);content:"";mix-blend-mode:overlay}.filter-walden{-webkit-filter:sepia(.35) contrast(.8) brightness(1.25) saturate(1.4);filter:sepia(.35) contrast(.8) brightness(1.25) saturate(1.4)}.filter-walden::before{background:rgba(229,240,128,.5);content:"";mix-blend-mode:darken}.filter-willow{-webkit-filter:brightness(1.2) contrast(.85) saturate(.05) sepia(.2);filter:brightness(1.2) contrast(.85) saturate(.05) sepia(.2)}.filter-xpro-ii{-webkit-filter:sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg);filter:sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg)}.filter-xpro-ii::before{background:radial-gradient(circle closest-corner,rgba(0,91,154,.35) 0,rgba(0,0,0,.65) 100%);background:-o-radial-gradient(circle closest-corner,rgba(0,91,154,.35) 0,rgba(0,0,0,.65) 100%);background:-moz-radial-gradient(circle closest-corner,rgba(0,91,154,.35) 0,rgba(0,0,0,.65) 100%);background:-webkit-radial-gradient(circle closest-corner,rgba(0,91,154,.35) 0,rgba(0,0,0,.65) 100%);content:"";mix-blend-mode:multiply}

    div {
        height: 100%;
        position: relative;
        overflow: hidden;
        width: 100%;
    }

    img {
        height: 100%;
        object-fit: cover;
        position: absolute;
        width: 100%;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes fade {
      0%,100% { opacity: 0 }
      50% { opacity: 1 }
    }

    @keyframes ken-burns-bottom-right {
        to {
            transform: scale3d(1.5, 1.5, 1.5) translate3d(-10%, -7%, 0);
        }
    }
    @keyframes ken-burns-top-right {
        to {
            transform: scale3d(1.5, 1.5, 1.5) translate3d(-10%, 7%, 0);
        }
    }
    @keyframes ken-burns-top-left {
        to {
            transform: scale3d(1.5, 1.5, 1.5) translate3d(10%, 7%, 0);
        }
    }
    @keyframes ken-burns-bottom-left {
        to {
            transform: scale3d(1.5, 1.5, 1.5) translate3d(10%, -7%, 0);
        }
    }
    @keyframes ken-burns-middle-left {
        to {
            transform: scale3d(1.5, 1.5, 1.5) translate3d(10%, 0, 0);
        }
    }
    @keyframes ken-burns-middle-right {
        to {
            transform: scale3d(1.5, 1.5, 1.5) translate3d(-10%, 0, 0);
        }
    }
    @keyframes ken-burns-top-middle {
        to {
            transform: scale3d(1.5, 1.5, 1.5) translate3d(0, 10%, 0);
        }
    }
    @keyframes ken-burns-bottom-middle {
        to {
            transform: scale3d(1.5, 1.5, 1.5) translate3d(0, -10%, 0);
        }
    }
    @keyframes ken-burns-center {
        to {
            transform: scale3d(1.5, 1.5, 1.5);
        }
    }
</style>

<div id="wrapper"></div>
`;

if (typeof (window as any).ShadyCSS === "object") {
  (window as any).ShadyCSS.prepareTemplate(template, "ken-burns-carousel");
}

/**
 * `ken-burns-carousel`
 *
 * Displays a set of images in a smoothly-fading ken burns style carousel.
 *
 * @demo ../demo/index.html
 */
export default class KenBurnsCarousel extends HTMLElement {
  static get observedAttributes(): string[] {
    return [
      Attributes.AnimationDirection,
      Attributes.AnimationNames,
      Attributes.FadeDuration,
      Attributes.Images,
      Attributes.SlideDuration,
      Attributes.ImagesFilters
    ];
  }

  /**
   * Specifies the list of ken burns animations to apply to the elements.
   *
   * This allows customizing the built-in animations to your liking by overriding
   * the ones you don't like with custom CSS animations.
   *
   * This can also be set via setting the `animation-names`-attribute to a space-
   * separated list of CSS animation names.
   *
   * @type String[]
   */
  animationNames: string[] = animationNames;

  /**
   * The direction to play the animations in.
   *
   * Defaults to Direction.Random, meaning that with each image the associated ken
   * burns animation is either played forwards or backwards adding additional visual
   * diversity.
   *
   * This can also be set via the `animation-direction`-attribute.
   *
   * @type Direction
   */
  animationDirection: Direction = Direction.Random;

  private _fadeDuration: number = 2500;
  private _imgList: string[] = [];
  private _filterList: string[] = [];
  private _slideDuration: number = 20000;
  private _timeout: number = 0;
  private _wrapper: Element;
  private _zCounter: number = 0;

  /**
   * The duration of the crossfading animation in millseconds.
   *
   * Must be smaller than the slide duration. Defaults to 2500ms.
   * This can also be set via the `fade-duration`-attribute.
   *
   * @type number
   */
  get fadeDuration() {
    return this._fadeDuration;
  }

  set fadeDuration(val: number) {
    /*    if (val > this.slideDuration) {
      throw new RangeError("Fade duration must be smaller than slide duration");
    }*/

    this._fadeDuration = val;
  }

  /**
   * The list of URLs to the images to display.
   *
   * You can either set this property directly, or set the `images`-attribute
   * to a space-separated list of URLs.
   *
   * The element will dirty-check this property to avoid switching to the next image
   * even if the images set were the same. If you forcefully want to rerender, ensure
   * you pass a different array because the dirty-check will check for identity.
   *
   * @type string[]
   */
  get images(): string[] {
    return this._imgList;
  }

  set images(images: string[]) {
    if (arraysEqual(this._imgList, images)) {
      return;
    }

    this._imgList = images;
    if (images.length > 0) {
      this.animateImage(images);
    } else {
      this.stop();
    }
  }

  get filters(): string[] {
    return this._filterList;
  }

  set filters(filters: string[]) {
    if (arraysEqual(this._filterList, filters)) {
      return;
    }
    this._filterList = filters;
  }

  /**
   * The duration of the sliding (or ken burns) animation in millseconds.
   *
   * Must be greater than or equal to the fade duration. Defaults to 20s.
   * This can also be set via the `slide-duration`-attribute.
   *
   * @type number
   */
  get slideDuration() {
    return this._slideDuration;
  }

  set slideDuration(val: number) {
    /*    if (val < this.fadeDuration) {
      throw new RangeError("Slide duration must be greater than fade duration");
    }*/

    this._slideDuration = val;
  }

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));

    this._wrapper = this.shadowRoot!.getElementById("wrapper")!;
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    switch (name) {
      case Attributes.AnimationDirection:
        this.animationDirection = newVal as Direction;
        break;
      case Attributes.AnimationNames:
        this.animationNames = newVal
          ? newVal.split(" ").filter(name => name)
          : animationNames;
        break;
      case Attributes.FadeDuration:
        this.fadeDuration = Number(newVal);
        break;
      case Attributes.ImagesFilters:
        this.filters = newVal ? newVal.split(" ").filter(url => url) : [];
        break;
      case Attributes.Images:
        this.images = newVal ? newVal.split(" ").filter(url => url) : [];
        break;
      case Attributes.SlideDuration:
        this.slideDuration = Number(newVal);
        break;
    }
  }

  connectedCallback() {
    if (typeof (window as any).ShadyCSS === "object") {
      (window as any).ShadyCSS.styleElement(this);
    }
  }

  private animateImage(images: string[]) {
    const insert = (index: number, el: HTMLImageElement) => {
      if (this.slideDuration > this.fadeDuration && this.images.length > 1) {
        const random = Math.random();
        const animationIndex = Math.floor(random * this.animationNames.length);
        const direction =
          this.animationDirection === Direction.Random
            ? random > 0.5 ? "normal" : "reverse"
            : this.animationDirection;
        el.style.animationName = `${
          this.animationNames[animationIndex]
        }, fade-in`;
        el.style.animationDuration = `${this.slideDuration}ms, ${
          this.fadeDuration
        }ms`;
        el.style.animationDirection = `${direction}, normal`;
        el.style.animationTimingFunction = "linear, ease";
        el.style.zIndex = String(this._zCounter++);
        el.className = this.filters[index];
        this._wrapper.appendChild(el);
        const nextIndex = (index + 1) % images.length;
        const next = document.createElement("img") as HTMLImageElement;
        next.className = this.filters[nextIndex];

        setTimeout(() => el.remove(), this.slideDuration);

        // Preload next image and place it in browser cache

        next.src = images[nextIndex];

        this._timeout = setTimeout(() => {
          insert(nextIndex, next);
        }, this.slideDuration - this.fadeDuration);
      } else if (
        this.slideDuration < this.fadeDuration &&
        this.images.length > 1
      ) {
        el.style.animationName = "fade";
        el.style.animationDuration = `${this.fadeDuration}ms`;
        el.style.animationDirection = "normal";
        el.style.animationTimingFunction = "ease";
        el.style.zIndex = String(this._zCounter++);
        el.className = this.filters[index];
        this._wrapper.appendChild(el);
        const nextIndex = (index + 1) % images.length;
        const next = document.createElement("img") as HTMLImageElement;
        next.className = this.filters[nextIndex];

        setTimeout(() => el.remove(), this.fadeDuration);

        // Preload next image and place it in browser cache

        next.src = images[nextIndex];

        this._timeout = setTimeout(() => {
          insert(nextIndex, next);
        }, this.fadeDuration - this.slideDuration);
      } else if (this.images.length === 1) {
        console.log("JUST SHOW...");
        el.style.zIndex = String(this._zCounter);
        el.className = this.filters[index];
        this._wrapper.appendChild(el);
      }
    };
    const img = document.createElement("img") as HTMLImageElement;
    img.src = images[0];
    img.onload = () => {
      /*
             * Prevent race condition leading to wrong list being displayed.
             *
             * The problem arose when you were switching out the image list before
             * this callback had fired. The callback of a later list could have fired
             * faster than the one of earlier lists, which lead to the later slideshow
             * (the right one) being cancelled when the previous one became available.
             *
             * We now check whether we're still displaying the list we started
             * with and only then proceed with actually stopping the old slideshow
             * and displaying it.
             */
      this.dispatchEvent(
        new Event("on-load", { bubbles: true, composed: true })
      );

      if (!arraysEqual(this._imgList, images)) {
        return;
      }

      this.stop();
      insert(0, img);
    };
  }

  private stop() {
    clearTimeout(this._timeout);
    this._timeout = 0;
  }
}

function arraysEqual<T>(arr1: T[] | null, arr2: T[] | null) {
  // tslint:disable-next-line:triple-equals
  if (arr1 === arr2 || (!arr1 && !arr2)) {
    // undefined == null here
    return true;
  }
  if (!arr1 || !arr2 || arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
