function calc(expr) {
	let expressionToParse = expr.replace(/\s+/g, "").split("");

	function peek() {
		return expressionToParse[0] || "";
	}

	function get() {
		return expressionToParse.shift();
	}

	function number() {
		let res = get();
		while ((peek() >= "0" && peek() <= "9") || peek() == ".") {
			res += get();
		}
		return parseFloat(res);
	}

	function factor() {
		if (peek() >= "0" && peek() <= "9") {
			return number();
		} else if (peek() == "(") {
			get(); // '('
			let res = expression();
			get(); // ')'
			return res;
		} else if (peek() == "-") {
			get();
			return -factor();
		}
		return 0; 
	}

	function term() {
		let res = factor();
		while (peek() == "*" || peek() == "/") {
			if (get() == "*") {
				res *= factor();
			} else {
				res /= factor();
			}
		}
		return res;
	}

	function expression() {
		let res = term();
		while (peek() == "+" || peek() == "-") {
			if (get() == "+") {
				res += term();
			} else {
				res -= term();
			}
		}
		return res;
	}

	return expression();
}