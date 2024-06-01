import ContentModal from "./ContentModal";
import Content from "./Content";

function Note({blocks, idNote, onDelete, onEdit}) {
  return (  
    <div className="mx-2 mb-3">
      <div className="card">
        <div className="ms-auto z-2">
          <button className="btn btn-sm btn-outline-danger d-flex align-items-center mt-2 me-3">
            <span className="pe-1" onClick={() => onDelete(idNote)}>Borrar</span>
            <i className="bi bi-x-circle"></i>
          </button>
        </div>
        <div className="card-body">
          {blocks.map(block => {
            return (
              <Content block={block} key={block.id} />
            )
          })}
          <a type="button" className="stretched-link" data-bs-toggle="modal" data-bs-target={"#note" + idNote}></a>
        </div>
      </div>
      <ContentModal blocks={blocks} idNote={idNote} onEdit={onEdit} />
    </div>
  );
}

export default Note;