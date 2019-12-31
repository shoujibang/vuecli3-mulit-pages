<template>
  <div id="app" class="person">    
    <!-- <div><router-link :to="{name:'/add'}">去注册</router-link></div>
    <router-link :to="{name:'home',params: { userId: 123 }}">返回首页</router-link> -->
    <div class="container"></div>
    <div class="login-box">
      <h1>登录</h1>
    </div>
      <!-- <router-view/> -->
  </div>
</template>
<script>
import remjs from "util/rem";
import * as THREE from 'three'


let SEPARATION = 100,
  AMOUNTX = 100,
  AMOUNTY = 70;

let container;
let camera, scene, renderer;

let particles,
  particle,
  count = 0;

let mouseX = 85,
  mouseY = -342;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;


export default {
  data() {
    return {
      
    }
  },
  mounted() {
    console.log(THREE)
    this.init()
    this.animate()

  },
  methods: {
    init(){
       container = document.createElement("div");
      document.body.appendChild(container);
      camera = new THREE.PerspectiveCamera(
        120,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      container.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
      camera.position.z = 1000;

      scene =new THREE.Scene();

      particles = new Array();

      var PI2 = Math.PI * 2;
      var material =new THREE.ParticleCanvasMaterial({
        color: 0xe1e1e1,
        program: function(context) {
          context.beginPath();
          context.arc(0, 0, 0.6, 0, PI2, true);
          context.fill();
        }
      });

      var i = 0;

      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new THREE.Particle(material);
          particle.position.x = ix * SEPARATION - AMOUNTX * SEPARATION / 2;
          particle.position.z = iy * SEPARATION - AMOUNTY * SEPARATION / 2;
          scene.add(particle);
        }
      }

      renderer =new THREE.CanvasRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      document.addEventListener("mousemove", this.onDocumentMouseMove, false);
      document.addEventListener("touchstart", this.onDocumentTouchStart, false);
      document.addEventListener("touchmove",this. onDocumentTouchMove, false);

      //

      window.addEventListener("resize", this.onWindowResize, false);
    },
    onWindowResize(){
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    },
    onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    },
    onDocumentTouchStart(event) {
      if (event.touches.length === 1) {
        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    },
    onDocumentTouchMove(event) {
      if (event.touches.length === 1) {
        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    },   
    animate() {
      requestAnimationFrame(this.animate);

      this.render();
    },
    render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      var i = 0;

      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++];
          particle.position.y =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.3) + 1) * 2 +
            (Math.sin((iy + count) * 0.5) + 1) * 2;
        }
      }

      renderer.render(scene, camera);

      count += 0.1;
    }

  },
}
</script>
export default {
  
}
</script>
<style lang="less">
  .person{
    font-size: 20px;
    // &:extend(.co-flex);
    // position: relative;
    .login-box:extend(.co-dom-center){
      // .co-dom-center2(600px,600px);
      width:600px;
      height:600px;
      border: 1px solid red;
    }
  }

</style>
