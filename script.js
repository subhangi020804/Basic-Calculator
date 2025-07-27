document.addEventListener("DOMContentLoaded", function () {
    const expressionDisplay = document.getElementById("expression");
    const resultDisplay = document.getElementById("result");
    const buttons = document.querySelectorAll(".btn");
    const themeToggle = document.getElementById("themeToggle");
  
    let expression = "";
    let result = "";
  
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const value = btn.getAttribute("data-value");
  
        if (value === "C") {
          expression = "";
          result = "";
        } else if (value === "=") {
          try {
            const evalExp = expression
              .replace(/÷/g, '/')
              .replace(/×/g, '*')
              .replace(/−/g, '-');
  
            result = eval(evalExp);
          } catch {
            result = "Error";
          }
        } else if (value === "+/-") {
          if (expression) {
            try {
              let evalExp = eval(expression.replace(/÷/g, '/').replace(/×/g, '*'));
              expression = String(-evalExp);
            } catch {
              result = "Error";
            }
          }
        } else {
          expression += value;
        }
  
        expressionDisplay.textContent = expression || "0";
        resultDisplay.textContent = result || "0";
      });
    });
  
    // Theme toggle
    themeToggle.addEventListener("change",function () {
        document.body.classList.toggle("dark-mode", this.checked);
      });
    });
    
  