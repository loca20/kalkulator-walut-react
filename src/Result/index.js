import "./style.css";

const Result = ({ result, amountIn, currencyIn, amountOut, currencyOut }) => (
	<div className={`result${result ? " showResult" : ""}`}>
		<p className="result__converted">{amountIn}&nbsp;{currencyIn} = {amountOut ? amountOut.toFixed(4) : null}&nbsp;{currencyOut}</p>
		<p className="result__info">Przeliczono po kursie z dnia 28.08.2023</p>
	</div>
);

export default Result;