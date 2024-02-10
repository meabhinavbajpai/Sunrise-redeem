export function restrictAlpha(event) {
    const regex = /[a-zA-Z]+$/; // Regular expression to allow only alphabets
  
    if (regex.test(event.key)) {
      event.preventDefault(); // Prevent the keypress if it's not an alphabet
    }
  }

  