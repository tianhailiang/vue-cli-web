<template>
  <div id="app">
   
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,figure,figcaption{margin:0;padding:0;}
h1,h2,h3,h4,h5,h6{ font-weight: normal;}
li { list-style: none; }
img { border: none; }
input,
select,
textarea { outline: none; border: none; background: none; border-radius: 0;
  -webkit-border-radius: 0;
  -webkit-appearance: none;
  background-image: -webkit-linear-gradient(transparent, transparent);
  background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
  background-image: -moz-linear-gradient(transparent, transparent);
  background-image: linear-gradient(transparent, transparent);
  font-family:"Helvetica", "Arial";
}
textarea { resize: none; }
html { -webkit-text-size-adjust:none;overflow-x:hidden;}
article， aside， details， figcaption， figure， footer， header， hgroup， menu， nav， section { display: block; }
img { display: block; max-width: 100%; height:auto; width: auto\9; /* ie8 */ }
.video embed， .video object， .video iframe { width: 100%; height: auto; }
a { border:0; text-decoration: none; outline: none;}
a,button,input{-webkit-tap-highlight-color:rgba(255,0,0,0);
  border: none;outline: none;

}
em{ font-style: normal;}

i{
  font-style:normal;
  display:inline-block;
}


body{font-family: "Microsoft YaHei","Segoe UI", "Lucida Grande", Helvetica, Arial, FreeSans, Arimo, "Droid Sans",
"wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3",
FontAwesome, sans-serif;color:#030000; overflow-x:hidden;
  font-size: 14px;

}

html, body {
    width: 100%;
    height: 100%;
  overflow-x: scroll;
}


.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}

#app {
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
 
  width:100%;
  height:100%;
}
</style>
