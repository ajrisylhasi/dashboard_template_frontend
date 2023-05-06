import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const useCheckScreen = ({ comparedWidth }) => {
	const [width, setWidth] = useState(window.innerWidth);
	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
				window.removeEventListener('resize', handleWindowSizeChange);
		}
	}, []);

	return (width <= comparedWidth);
}

useCheckScreen.propTypes = {
	comparedWidth: PropTypes.number
}

export default useCheckScreen;