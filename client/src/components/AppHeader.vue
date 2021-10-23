<template>
<header>
	<nav>
		<div class="logo">
			<span id="blue">Mile</span>Stone
		</div>
		<div class="menu">
            <ul>
			<li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/servies">Servies</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/contact">contact</router-link></li>
            </ul>
		</div>
	</nav>
</header>
</template>

<style lang="scss">
  *{padding: 0; margin:0; box-sizing: border-box; font-family: sans-serif;}
header{
	width: 100%;
	height: 100vh;
	background: black;
	clip-path: polygon(0% 0%,100% 0%, 100% 100%,80% 80%,0% 100%);
}
nav{
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	color: white;
}
.logo{
	font-size: 50px;
	font-weight: bold;
	letter-spacing: 5px;
}
#blue{
	color:#74b9ff;
}

.menu a{
	text-decoration: none;
	color: white;;
	font-size: 20px;
	font-weight: bold;
	padding: 10px;
	margin: 10px;
}


.menu a:first-child{
	border-bottom: 2px solid #74b9ff;
}



ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
    }
    
</style>