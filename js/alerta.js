export function alerta(message, type = "success") {
  Toastify({
    text: message,
    duration: 3000,
    destination: "",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === "success" ? "linear-gradient(to right, #00b09b, #96c93d)" : "linear-gradient(to right, #ff5f6d, #ffc371)",
    },
    onClick: function () { } // Callback after click
  }).showToast();
}
