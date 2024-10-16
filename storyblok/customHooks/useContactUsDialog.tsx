import { useRef } from "react";

export function useContactUsDialog() {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const openContactUsModal = () => {
    const currentModalRef = modalRef.current;
    if (!currentModalRef) {
      return;
    }
    currentModalRef.showModal();
  };
  const ContactUsDialog = () => (
    <dialog id="contact-us" className="modal" ref={modalRef}>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h2 className="font-bold text-lg">¿Cómo podemos ayudarte?</h2>
        <p className="py-4 flex gap-6 p-4">
          <span>RoyerAAdames@gmail.com</span>
          <span>(849) 801-9345</span>
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );

  return {
    openContactUsModal,
    ContactUsDialog,
  };
}
