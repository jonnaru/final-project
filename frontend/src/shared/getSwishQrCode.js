export const getSwishQrCode = (setQrCode, qRCodeData) => {
  const SWISH_URL =
    "https://cors.bridged.cc/https://mpc.getswish.net/qrg-swish/api/v1/prefilled";

  var myHeaders = new Headers();
  myHeaders.append("Origin", "bridged.xyz");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    format: "png",
    size: 400,
    message: { value: qRCodeData.message, editable: false },
    amount: { value: qRCodeData.amount, editable: false },
    payee: { value: "0707396730", editable: false },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(SWISH_URL, requestOptions)
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
      var img = URL.createObjectURL(blob);
      setQrCode(img);
    });
};
