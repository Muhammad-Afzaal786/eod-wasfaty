import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
// const context = useContext(IntlContext);
export const handleConfirmCancel = (
  action,
  deleteField,
  locale,
  context,
  { showMsgArabic },
  name
) => {
  return MySwal.fire({
    title: context.locale === "en" ? "Are you sure?" : "هل انت متأكد؟",
    text:
      context.locale === "en"
        ? `You want to delete ${name ? name : "this"}!`
        : `تريد حذف التذكرة`,
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: context.locale === "en" ? `Cancel` : `إلغاء`,

    confirmButtonText: context.locale === "en" ? `Yes!` : `نعم!`,
    customClass: {
      confirmButton: "btn btn-primary",
      cancelButton: "btn btn-danger ms-1",
    },
    buttonsStyling: false,
  }).then(function (result) {
    if (result.value) {
      MySwal.fire({
        icon: "success",
        title: context.locale === "en" ? "Deleted!" : "تم الحذف",
        text: "",
        customClass: {
          confirmButton: "btn btn-primary ",
        },
      });
      deleteField();
    } else if (result.dismiss === MySwal.DismissReason.cancel) {
      MySwal.fire({
        title: context.locale === "en" ? "Cancelled" : "إلغاء",
        icon: "error",
        customClass: {
          confirmButton: "btn btn-primary",
        },
      });
    }
  });
};
