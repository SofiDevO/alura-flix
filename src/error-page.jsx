import gif from "./assets/img/sofidev_laptop.gif"
import { Link} from "react-router-dom";
const ErrorPage= ()=> {
	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<img src={gif} alt="sofi pixel icon" />
			<Link to="/" >Volver</Link>
		</div>
	);
}
export default ErrorPage