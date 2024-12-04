<template>
  <header class="ud-header with-shadow mobile-header">
    <div class="row w-full">
      <button
        type="button"
        class="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large ud-mobile-header-btn"
      >
        <svg
          aria-label="打开侧面导航栏"
          role="img"
          focusable="false"
          class="ud-icon ud-icon-medium ud-icon-color-neutral"
        >
          <use xlink:href="#icon-menu"></use>
        </svg>
      </button>
      <div class="button-spacer"></div>
      <div class="row middle">
        <a href="/">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy"
            width="75"
            height="28"
            loading="lazy"
            style="vertical-align: middle"
          />
        </a>
      </div>
      <button
        type="button"
        class="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large ud-mobile-header-btn"
      >
        <svg
          aria-label="打开搜索"
          role="img"
          focusable="false"
          id="mobile-header-open-search-icon"
          class="ud-icon ud-icon-medium ud-icon-color-neutral"
        >
          <use xlink:href="#icon-search"></use>
        </svg>
      </button>
      <a
        href="/cart/"
        class="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large ud-mobile-header-btn"
      >
        <svg
          aria-label="前往购物车"
          role="img"
          focusable="false"
          class="ud-icon ud-icon-medium ud-icon-color-neutral"
        >
          <use xlink:href="#icon-cart"></use>
        </svg>
      </a>
    </div>
  </header>
</template>
