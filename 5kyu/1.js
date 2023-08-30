function calc(expr) {
	let expressionToParse = expr.replace(/\s+/g, "").split("");

	function peek() {
		return expressionToParse[0] || "";
	}

	function get() {
		return expressionToParse.shift();
	}

	function number() {
		let result = get();
		while ((peek() >= "0" && peek() <= "9") || peek() == ".") {
			result += get();
		}
		return parseFloat(result);
	}

	function factor() {
		if (peek() >= "0" && peek() <= "9") {
			return number();
		} else if (peek() == "(") {
			get(); // '('
			let result = expression();
			get(); // ')'
			return result;
		} else if (peek() == "-") {
			get();
			return -factor();
		}
		return 0; 
	}

	function term() {
		let result = factor();
		while (peek() == "*" || peek() == "/") {
			if (get() == "*") {
				result *= factor();
			} else {
				result /= factor();
			}
		}
		return result;
	}

	function expression() {
		let result = term();
		while (peek() == "+" || peek() == "-") {
			if (get() == "+") {
				result += term();
			} else {
				result -= term();
			}
		}
		return result;
	}

	return expression();
}