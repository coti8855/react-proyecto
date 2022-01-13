

function NavBar(){
	return <nav style={{backgroundColor:`white`, color:`white`, height: 55}}>
	<h1 style={{color:`black`}}>TravelGO</h1>
	<div style={{backgroundColor:`black`, color:`white`, height: 55}}>
	<ul style={{listStyleType:`none`, display: `flex`, justifyContent: `center`, }}>
	<li style={{padding: 25}}><a href="#" style={{textDecoration:`none`, color:`white`}}>Inicio</a></li>
	<li style={{padding: 25}}><a href="#" style={{textDecoration:`none`, color:`white`}}>Contacto</a></li>
	<li style={{padding: 25}}><a href="#" style={{textDecoration:`none`, color:`white`}}>Opciones</a></li>
	<li style={{padding: 25}}><a href="#" style={{textDecoration:`none`, color:`white`}}>Mas</a></li>
	</ul>
	</div>
	</nav>

	;

}

export default NavBar;