import logo from '../assets/logo.png';
import classes from './Header.module.css';

export default function Header() {
  // Setting inline styles in JSX is similar to HTML
  // Add attribute "style" with a dynamic object
  // NOTE: dashes are not supported as attribute names. Use camel casing
  // style={ {<object>} }
  // style = {{
  //     color: "red",
  //     textAlign: ...,
  // }}
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
