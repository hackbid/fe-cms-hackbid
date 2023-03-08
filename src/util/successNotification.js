import Swal from "sweetalert2";

export const triggerNotification = (title, status) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: status,
    title,
  });
};
