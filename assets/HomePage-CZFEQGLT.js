import{_ as f,r as l,o,c as s,b as n,a as e,F as p,u as m,w as h,d as b,x as u,v as y,q as v,s as x}from"./index-CncZR5N1.js";const k={data(){return{imageIndex:0,images:[{src:"/img/Mimosa.jpg"},{src:"/img/Latte.jpg"},{src:"/img/Cases.jpg"}],textIndex:0,texts:["Happy Hour","Locally Sourced Products","Fresh Baked"],paragraphIndex:0,paragraphs:["We offer one of the best happy hours in town! Come in everyday from 5:00pm - 9:00pm for half off any of our award winning mimosas and $1 off any other drink","We take pride in our locally sourced ingredients used in all of our products.","Freshly baked goods daily made by our own in house baker."]}},mounted(){setInterval(this.nextImage,4e3),setInterval(this.nextText,4e3),setInterval(this.nextParagraph,4e3)},methods:{nextImage(){this.imageIndex=(this.imageIndex+1)%this.images.length},nextText(){this.textIndex=(this.textIndex+1)%this.texts.length},nextParagraph(){this.paragraphIndex=(this.paragraphIndex+1)%this.paragraphs.length}}},t=r=>(v("data-v-933c3b59"),r=r(),x(),r),w={class:"container-fluid background-image"},I={class:"row slideshowContent"},C={class:"col-12 image-container d-flex justify-content-center"},S=["src"],B={class:"col-md-5 col-10 position-absolute end-0 top-50 translate-middle-y"},W={class:"row text-center text-light p-5 justify-content-around align-items-center"},P={class:"col-md-3 col-10 m-2"},j={class:"card p-4 gc text-light line-top line-bottom","data-aos":"fade-up"},F=t(()=>e("h4",null,"Our Bakery",-1)),L=t(()=>e("p",null,"We bake 'em fresh everyday so you don't have to. C'mon in for a tasty bite!",-1)),N={class:"col-md-3 col-10 m-2"},M={class:"card p-4 gc text-light line-top line-bottom","data-aos":"fade-up"},T=t(()=>e("h4",null,"Merchandise",-1)),z=t(()=>e("p",null,"Looking to take a piece of us home with you? Check out our merch here!",-1)),D={class:"col-md-3 col-10 m-2"},H={class:"card p-4 gc text-light line-top line-bottom","data-aos":"fade-up"},V=t(()=>e("h4",null,"Catering",-1)),q=t(()=>e("p",null,"You need the eats, we got the treats! We cater perfectly for office meetings.",-1)),E=b('<div class="container-fluid" data-v-933c3b59><section class="row bground-img justify-content-around py-5" data-v-933c3b59><div class="col-10 col-md-6 d-flex align-items-center" data-v-933c3b59><p class="fs-5 arima" data-aos="fade-right" data-v-933c3b59><b data-v-933c3b59>Welcome to Goldy&#39;s Corner!</b> Where you&#39;ll find a leisure place to study, hang out with family or friends, have a work meeting, work out of the office or enjoy the downtown scene. We have proudly serve locally owned Dawson Taylor coffee since day one. We provide a variety of homemade treats, drinks, and promote local artists and vendors. Local artwork is always on display. Thanks for stopping by!</p></div><div class="col-10 col-md-3 second-bg text-center" data-v-933c3b59><p class="fw-bold lily" data-aos="fade-down" data-v-933c3b59>Coffee Shop • Café • Bakery</p><p data-aos="zoom-in" class="arima fs-5" data-v-933c3b59> 625 W. Main St., Boise, ID 83702 <br data-v-933c3b59> 208.433.3934 <br data-v-933c3b59> Monday - Friday <i data-v-933c3b59>6:30am - 9:00pm</i> Saturday <i data-v-933c3b59>7:00am - 9:00pm</i> <br data-v-933c3b59> Sunday <i data-v-933c3b59>7:00am - 7:00pm</i> <br data-v-933c3b59> *Free WIFI <br data-v-933c3b59> *Plugins by booths and tables </p></div></section></div>',1);function G(r,O,U,Y,i,$){const g=l("Navbar"),c=l("router-link"),_=l("Bottom");return o(),s(p,null,[n(g),e("div",w,[e("section",I,[e("div",C,[(o(!0),s(p,null,m(i.images,(d,a)=>(o(),s("img",{key:a,src:d.src,style:u({display:i.imageIndex===a?"block":"none"})},null,12,S))),128)),e("div",B,[(o(!0),s(p,null,m(i.paragraphs,(d,a)=>(o(),s("div",{class:"glassCard p-4 text-light","data-aos":"zoom-in",key:a,style:u({display:i.paragraphIndex===a?"block":"none"})},[e("h4",null,y(d),1)],4))),128))])])]),e("section",W,[e("div",P,[e("div",j,[n(c,{to:{name:"Bakery"},class:"btn select-borderless text-uppercase",title:"Bakery Page"},{default:h(()=>[F,L]),_:1})])]),e("div",N,[e("div",M,[n(c,{to:{name:"Shop"},class:"btn select-borderless text-uppercase",title:"Shop Page"},{default:h(()=>[T,z]),_:1})])]),e("div",D,[e("div",H,[n(c,{to:{name:"Contact"},class:"btn select-borderless text-uppercase",title:"Contact Us Page"},{default:h(()=>[V,q]),_:1})])])])]),E,n(_)],64)}const J=f(k,[["render",G],["__scopeId","data-v-933c3b59"]]);export{J as default};
