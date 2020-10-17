<template>
<div style="background-color: black" class="container d-md-flex align-items-stretch">
  <div style="color: white" class="p-4 p-md-2 pt-5">
    <h2><a style="color: white;" href="/">McGuire Piano</a></h2>
    Piano Sales and Restoration by <BR />Duane McGuire, RPT
    <div></div>
  </div>
  <div class="topnav p-4 p-md-2 pt-5" id="myTopnav">
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/category/pianos-for-sale">Pianos For Sale</a>
      <a href="/contact">Contact</a>
      <a href="javascript:void(0);" class="icon" onclick="
        javascript:navFunc();
        function navFunc() {
          var x = document.getElementById('myTopnav');
          if (x.className === 'topnav') {
            x.className += ' responsive';
          } else {
            x.className = 'topnav';
          }
      }" >
        <i class="fa fa-bars"></i>
      </a>

    </ul>
  </div>
</div>
</template>
<style>

.topnav a {
  line-height: 1.2;
  font-size: 0.8em;
  padding: 3px;
  text-transform: uppercase;
  color: white;
  border: 1px solid gray;
  display: inline-block;
  margin-right: 5px;
  background-color: #3d3d3d
}

.topnav {
  overflow: hidden;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}


@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }

  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }

  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
