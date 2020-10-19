<template>
<div style="background-color: black" class="container align-items-stretch">
  <div class="d-flex bd-highlight align-items-end">
    <div class="p-2 flex-fill bd-highlight">
      <a href="/"><img alt="McGuire Piano" src="/images/header-logo-65H.png"></a>
      <div style="color:white" class="p-1"><i>Piano Sales and Restoration by<BR />Duane McGuire, RPT</i></div>
    </div>

    <div id="not-mobile-topnav" style="color: white" class=" flex-fill bd-highlight">
      <topnav />
    </div>

    <div id="header-piano" class="align-items-end"><img src="/images/header-piano.jpg" height="130px"  ></div>
  </div>
  <topnav id="mobile-topnav" />
</div>
</template>
<style>
#mobile-topnav {
  display: none
}

@media screen and (max-width: 800px) {
  #header-piano {
    display: none;
  }

  #not-mobile-topnav {
    display: none
  }

  #mobile-topnav {
    display: block
  }
}
</style>
