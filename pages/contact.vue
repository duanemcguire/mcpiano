<template>
<div>
  <div class="container d-md-flex align-items-stretch">
    <div class="p-4 p-md-2 pt-5">
      <article>
        <h1>Contact</h1>
        <div>
          <p><strong>Duane McGuire, RPT<br>McGuire Piano<br>1077 N 1285 W<br>Clinton, UT 84015<br></strong></p>
          <H4>Repair, Rebuilding, Restoration:</h4>
          <b>Duane McGuire, RPT</b>
          <contact-info />
          <hr>
          <h4>Routine Tuning in Davis and Weber Counties: </h4>
          <ul>
            <li>Tiffany Bailey 385-519-5957 <a target="_blank" href="http://www.baileypiano.com/">www.baileypiano.com</a></li>
            <li>Jerry Benson 801-872-3546 <a target="_blank" href="http://www.bensonpiano.com/">www.bensonpiano.com</a></li>
          </ul>
        </div>
      </article>
    </div>
    <sidebar />
  </div>
</div>
</template>
<script>
export default {
  head() {
    return {
       title: 'McGuire Piano Contact Information',
       meta: [
         // hid is used as unique identifier. Do not use `vmid` for it as it will not work
         {
           hid: 'contact-page',
           name: 'description',
           content: 'Contact information for McGuire Piano and Duane McGuire'
         }
       ]
     }
   }
}
</script>
