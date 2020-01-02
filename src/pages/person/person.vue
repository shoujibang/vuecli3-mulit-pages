<template>
  <div id="app" class="person">    
    <!-- <div><router-link :to="{name:'/add'}">去注册</router-link></div>
    <router-link :to="{name:'home',params: { userId: 123 }}">返回首页</router-link> -->
    <div id="canvas-frame" class="container"></div>
    <div class="login-box">
      <h1>登录</h1>
    </div>
      <!-- <router-view/> -->
  </div>
</template>
<script>
import remjs from "util/rem";
// import * as THREE from 'three'
// import Stats from 'three/examples/jsm/libs/stats.module.js';

 var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
			var container, stats;//容器，监视器
			var camera, scene, renderer;//相机，场景，渲染器
			var particles, particle, count = 0;
			var mouseX = 0, mouseY = -438;//设置初始位置
			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
      var temx = 0,tempy=0;

export default {
  data() {
    return {
      
    }
  },
  mounted() {
    
 
    this.$nextTick(() =>{
      document.documentElement.style.overflow = "hidden";
      let navigatorHei = this.$(window).height();
      this.$(".container").css("height",navigatorHei);
      // location.href = location.href;
      this.init()
      this.animate()
      console.log("document.documentElement",document.documentElement)
    })

  },
  methods: {
    init(){
       camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 1000;
				
				console.log(camera.position.x,camera.position.y,camera.position.z)
				scene = new THREE.Scene();
				particles = new Array();
				var PI2 = Math.PI * 2;
				var material = new THREE.SpriteCanvasMaterial( {
					color: 0x097bdb,
					//color:0xffe600,//小点点的颜色
					
					program: function ( context ) {
						context.beginPath();
						context.arc( 0, 0, 0.5, 0, PI2, true );
						context.fill();
					}
				} );
				var i = 0;
				for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
					for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
						particle = particles[ i ++ ] = new THREE.Sprite( material );
						particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
						particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
						scene.add( particle );
					}
				}
				
				var width = document.getElementById('canvas-frame').clientWidth;
                var height = document.getElementById('canvas-frame').clientHeight;
                renderer = new THREE.CanvasRenderer({
                    antialias : true,
                    alpha: true//设置背景透明
                });
                renderer.setSize(width, height);
                document.getElementById('canvas-frame').appendChild(renderer.domElement);
                //renderer.setClearColor(0x13194b);//设置背景色
				//stats = new Stats();
				//document.getElementById('canvas-frame').appendChild( stats.dom );
				document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', this.onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', this.onDocumentTouchMove, false );
				//
				window.addEventListener( 'resize', this.onWindowResize, false );
				
				
				camera.position.x = 133.99999999999972;
				camera.position.y = 437.99999999999943;
				camera.lookAt( scene.position );
				renderer.render( scene, camera );
    },
    onWindowResize(){
       windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
    },
    onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = -438;
    },
    onDocumentTouchStart(event) {
      if ( event.touches.length === 1 ) {
					event.preventDefault();
					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;
				}
    },
    onDocumentTouchMove(event) {
      if ( event.touches.length === 1 ) {
					event.preventDefault();
					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;
				}
    },   
    animate() {
     requestAnimationFrame( this.animate );
     this.render();
     //stats.update();
    },
    render() {
     camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - mouseY - camera.position.y ) * .05;
				//console.log('camera.position.y',camera.position.y)
				camera.lookAt( scene.position );
				var i = 0;
				for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
					for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
						particle = particles[ i++ ];
						particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
							( Math.sin( ( iy + count ) * 0.5 ) * 50 );
						particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 4 +
							( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;
					}
				}
				
				//console.log(camera.position.x,camera.position.y,camera.position.z)
				renderer.render( scene, camera );
				count += 0.1;
    }

  },
}
</script>

<style lang="less">
@import "../../assets/css/reset.less";
  .person{
    .container{
      width: 100%;
      // height: 700px;
      background: url('../../assets/images/bgimg.png') no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
    }
    font-size: 20px;
    // &:extend(.co-flex);
    // position: relative;
    .login-box:extend(.co-dom-center){
      // .co-dom-center2(600px,600px);
      width:600px;
      height:600px;
      background: #fff;
      border-radius: 12px;
      padding: 20px;
    }
  }

</style>
