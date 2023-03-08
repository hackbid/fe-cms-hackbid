import Swal from "sweetalert2";

const confirmationNotification = async (title, text) => {
  return Swal.fire({
    title,
    showCancelButton: true,
    confirmButtonText: text,
    showLoaderOnConfirm: true,
    denyButtonText: `Yes, I'm sure`,
  });
};

export default confirmationNotification;
