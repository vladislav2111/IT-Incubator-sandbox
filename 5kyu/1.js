function calc(expr) {
	let expression = expr.replace(/\s+/g, "").split("");

	function peek() {
		return expression[0] || "";
	}

	function get() {
		return expression.shift();
	}

	function number() {
		let res = get();
		while ((peek() >= "0" && peek() <= "9") || peek() == ".") {
			res += get();
		}
		return parseFloat(res);
	}

	function fact() {
		if (peek() >= "0" && peek() <= "9") {
			return number();
		} else if (peek() == "(") {
			get(); // '('
			let res = final();
			get(); // ')'
			return res;
		} else if (peek() == "-") {
			get();
			return -fact();
		}
		return 0; 
	}

	function term() {
		let res = fact();
		while (peek() == "*" || peek() == "/") {
			if (get() == "*") {
				res *= fact();
			} else {
				res /= fact();
			}
		}
		return res;
	}

	function final() {
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


}