import Content from "./Content";

function ContentModal({blocks, idNote, onEdit}) {
  return (  
    <div className="modal fade modal-xl" id={"note" + idNote} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={"note" + idNote + "Label"} aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-fullscreen-xl-down">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={"note" + idNote + "Label"}>Pop-Up contenido</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {blocks.map(block => {
              return <Content block={block} key={block.id} />
            })}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              <span className="pe-2">Cerrar</span>
              <i className="bi bi-x-circle"></i> 
              {/* Buscar otro icon en Bootstrap, la "X" se buguea */}
            </button>
            <button type="button" className="btn btn-primary" data-bs-target="#editormodal" data-bs-toggle="modal">
              <span className="pe-2" onClick={() => onEdit(idNote)}>Editar</span>
              <i className="bi bi-pencil-square"></i> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentModal;