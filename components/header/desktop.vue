<template>
  <header class="ud-header ud-text-sm header flex-middle" >
    <a
      href="/"
      class="desktop-header-module--flex-middle--k0Teb logo"
      ><img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        alt="Udemy"
        width="91"
        height="34"
        loading="lazy"
    /></a>
    <nav
      class="popper gap-button"
      aria-label="分类"
    >
      <button
        type="button"
        id="u62-popper-trigger--2"
        aria-expanded="false"
        tabindex="0"
        class="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button desktop-header-module--dropdown-button--ipas9"
      >
        <span
          class="ud-text-sm desktop-header-module--dropdown-button-text--Sq73l"
          >分类</span
        >
      </button>
    </nav>
    <div
      locale="zh_CN"
      lang="zh"
      class="ud-search-form-autocomplete search-bar ud-form-group"
    >
      <label class="ud-sr-only ud-form-label ud-heading-sm">搜索任何内容</label>
      <form
        action="/courses/search/"
        class="ud-search-form-autocomplete-input-group ud-search-form-autocomplete-input-group-reversed"
      >
        <input type="hidden" name="src" value="ukw" />
        <input
          type="text"
          name="q"
          placeholder="搜索任何内容"
          autocomplete="off"
          value=""
          class="ud-text-input ud-text-input-small ud-text-sm ud-search-form-autocomplete-input js-header-search-field"
          style="outline: none;"
        />
        <button
          type="submit"
          class="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-disabled ud-btn-icon ud-btn-icon-large"
          tabindex="-1"
        >
          <svg
            aria-label="提交搜索"
            role="img"
            focusable="false"
            class="ud-icon ud-icon-medium ud-icon-color-neutral"
          >
            <use xlink:href="#icon-search"></use>
          </svg>
        </button>
      </form>
    </div>
    <div
      class="popper-module--popper--mM5Ie gap-button desktop-header-module--group-a--N6xgx"
    >
      <a
        data-purpose="try-ufb-dropdown-trigger"
        href="/udemy-business/?locale=zh_CN&amp;mx_pg=httpcachecontextsme-list&amp;path=request-demo-mx%2F&amp;ref=ufb_header"
        target="_blank"
        rel="noopener"
        id="u62-popper-trigger--52"
        aria-describedby="u62-popper-content--53"
        tabindex="0"
        class="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button dropdown-button"
        ><span
          class="ud-text-sm desktop-header-module--dropdown-button-text--Sq73l"
          >Udemy Business</span
        ></a
      >
    </div>
    <div
      class="popper-module--popper--mM5Ie gap-button desktop-header-module--group-b--Zka1Y"
    >
      <a
        href="/teaching/?ref=teach_header"
        data-purpose="instructor-dropdown"
        data-testid="teach-on-udemy-link"
        id="u62-popper-trigger--54"
        aria-describedby="u62-popper-content--55"
        tabindex="0"
        class="ud-btn ud-btn-large ud-btn-ghost ud-heading-md js-header-button dropdown-button"
        ><span
          class="ud-text-sm desktop-header-module--dropdown-button-text--Sq73l"
          >在 Udemy 上授课</span
        ></a
      >
    </div>
    <div class="popper-module--popper--mM5Ie">
      <a
        href="/cart/"
        data-testid="cart-icon"
        id="u62-popper-trigger--56"
        aria-expanded="false"
        tabindex="0"
        class="ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-btn-icon ud-btn-icon-large js-header-button desktop-header-module--dropdown-button--ipas9"
        ><svg
          aria-label="包含 0 项商品的购物车"
          role="img"
          focusable="false"
          class="ud-icon ud-icon-medium ud-icon-color-neutral"
        >
          <use xlink:href="#icon-cart"></use></svg
      ></a>
    </div>
    <div class="gap-auth-button">
      <a
        data-purpose="header-login"
        href="https://www.udemy.com/join/login-popup/?locale=zh_CN&amp;response_type=html&amp;next=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcomplete-python-bootcamp%2F%3FcouponCode%3D24T4MT120424"
        class="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm"
        ><span class="ud-btn-label">请登录</span></a
      >
    </div>
    <div class="gap-auth-button">
      <a
        data-purpose="header-signup"
        href="https://www.udemy.com/join/signup-popup/?locale=zh_CN&amp;response_type=html&amp;next=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcomplete-python-bootcamp%2F%3FcouponCode%3D24T4MT120424"
        class="ud-btn ud-btn-medium ud-btn-primary ud-heading-sm"
        ><span class="ud-btn-label">注册</span></a
      >
    </div>
    <div class="gap-auth-button">
      <button
        type="button"
        class="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm ud-btn-icon ud-btn-icon-medium"
      >
        <svg
          aria-label="选择语言"
          role="img"
          focusable="false"
          class="ud-icon ud-icon-small ud-icon-color-neutral"
        >
          <use xlink:href="#icon-language"></use>
        </svg>
      </button>
    </div>
  </header>
</template>
