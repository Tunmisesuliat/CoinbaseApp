import React from "react";

function Modal({handleClose, show}){
    const showHideClassName = show ? "modal display-block" :"modal display-none";

    return(
        <div className={showHideClassName} >
            <section className="main-modal">
                <form>

                    <button onClick={handleClose} >close</button>
                </form>
            </section>
        </div>
    );
}
export default Modal;