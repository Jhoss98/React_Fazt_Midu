import PropTypes from "prop-types";

export function Button({ text }) {
  return <button onClick={
    function (){
        console.log('Hello Wrold')
    }
  }>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
