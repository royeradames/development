export function ContactUsDialog({ modalRef }: { modalRef: any }) {
  return (
    <dialog id="contact-us" className="modal" ref={modalRef}>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h2 className="font-bold text-lg">¿Cómo podemos ayudarte?</h2>
        <p className="py-4 flex gap-6 p-4">
          <div>RoyerAAdames@gmail.com</div>
          <div>(849) 801-9345</div>
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
